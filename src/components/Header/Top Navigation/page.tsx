"use client"

import Link from "next/link"
import { Globe} from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import "./style.css"

export default function Header() {
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
    const dropdownButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    const toggleSubmenu = (menu: string) => {
        setActiveSubmenu(activeSubmenu === menu ? null : menu)
    }

    return (
        <nav className="fixed-nav flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
            {/* Left section with logo */}
            <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
                    <Image
                        src="/logo.png"
                        alt="YatraNepal Logo"
                        width={40}
                        height={40}
                        className="logo-image"
                    />
                    <span className="text-xl font-bold">YatraNepal</span>
                </Link>
            </div>

            {/* Center section with navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {["discover", "trips", "review", "more"].map((menu) => (
                    <div key={menu} className="relative">
                        <button
                            ref={(el) => (dropdownButtonRefs.current[menu] = el!)}
                            className="text-gray-600 hover:text-gray-900 text-lg font-medium px-2"
                            onClick={() => toggleSubmenu(menu)}
                            aria-label={`${menu.charAt(0).toUpperCase() + menu.slice(1)} options`}
                        >
                            {menu.charAt(0).toUpperCase() + menu.slice(1)}
                        </button>
                        {activeSubmenu === menu && (
                            <div
                                ref={(el) => (submenuRefs.current[menu] = el!)}
                                className="absolute left-0 mt-3 w-56 rounded-xl shadow-xl bg-white border z-50 p-4 text-black"
                                style={{
                                    boxShadow: "0 8px 20px rgba(80, 68, 68, 0.85)",
                                    borderRadius: "12px",
                                }}
                            >
                                <div className="relative before:absolute before:-top-2 before:left-5 before:border-8 before:border-transparent before:border-b-white"></div>
                                {menu === "discover" && (
                                    <>
                                        <Link
                                            href="/travelers-choice"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Travelers' Choice
                                        </Link>
                                        <Link
                                            href="/travel-stories"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Travel Stories
                                        </Link>
                                    </>
                                )}
                                {menu === "trips" && (
                                    <>
                                        <Link
                                            href="/trips/view"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            View my trips
                                        </Link>
                                        <Link
                                            href="/trips/new"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Start a new trip
                                        </Link>
                                        <Link
                                            href="/trips/ai"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Create trip with AI
                                        </Link>
                                    </>
                                )}
                                {menu === "review" && (
                                    <>
                                        <Link
                                            href="/review/write"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Write a review
                                        </Link>
                                        <Link
                                            href="/review/photos"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Post photos
                                        </Link>
                                        <Link
                                            href="/review/add-place"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Add a place
                                        </Link>
                                    </>
                                )}
                                {menu === "more" && (
                                    <>
                                        <Link
                                            href="/cruises"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Cruises
                                        </Link>
                                        <Link
                                            href="/rental-cars"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Rental Cars
                                        </Link>
                                        <Link
                                            href="/forums"
                                            className="block px-4 py-2 text-lg font-medium hover:bg-gray-100"
                                        >
                                            Forums
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right section with language and sign in */}
            <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                    <Globe className="w-5 h-5" />
                    <span>┃</span>
                    <span>NPR</span>
                </button>
                <button className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-gray-500 flex items-center space-x-2">
                    <span>Sign in</span>
                </button>
            </div>
        </nav>
    )
}

