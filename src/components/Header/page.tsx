"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, Search, Home, Building2, Palmtree, UtensilsCrossed, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "./style.css"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
    const dropdownButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleSubmenu = (menu: string) => {
        setActiveSubmenu(activeSubmenu === menu ? null : menu)
    }

    return (
        <header className="fixed top-0 w-full bg-white z-50">
            {/* Primary Navigation */}
            <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                {/* Left section with logo */}
                <div className="flex items-center space-x-2">
                    <Link href="#" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="logo-image"
                        />
                        {!isScrolled && <span className="text-xl font-bold">YatraNepal</span>}
                    </Link>
                </div>

                {isScrolled && (
                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-full" />
                        </div>
                    </div>
                )}

                <div className="hidden md:flex items-center space-x-8">
                    {["discover", "trips", "review", "more"].map((menu) => (
                        <div key={menu} className="relative">
                            <button
                                ref={(el) => (dropdownButtonRefs.current[menu] = el)}
                                className="text-gray-600 hover:text-gray-900 text-lg font-medium px-2"
                                onClick={() => toggleSubmenu(menu)}
                            >
                                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                            </button>
                            {activeSubmenu === menu && (
                                <div
                                    ref={(el) => (submenuRefs.current[menu] = el)}
                                    className="absolute left-0 mt-3 w-56 rounded-xl shadow-xl bg-white border z-50 p-4"
                                    style={{
                                        boxShadow: "0 8px 20px rgba(80, 68, 68, 0.85)",
                                        borderRadius: "12px",
                                    }}
                                >
                                    <div className="relative before:absolute before:-top-2 before:left-5 before:border-8 before:border-transparent before:border-b-white"></div>
                                    {menu === "discover" && (
                                        <>
                                            <Link href="/travelers-choice" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Travelers' Choice
                                            </Link>
                                            <Link href="/travel-stories" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Travel Stories
                                            </Link>
                                        </>
                                    )}
                                    {menu === "trips" && (
                                        <>
                                            <Link href="/my-trips" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                View my trips
                                            </Link>
                                            <Link href="/start-trip" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Start a new trip
                                            </Link>
                                            <Link href="/create-trip" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Create trip with AI
                                            </Link>
                                        </>
                                    )}
                                    {menu === "review" && (
                                        <>
                                            <Link href="/write-a-review" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Write a review
                                            </Link>
                                            <Link href="/post-photo" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Post photos
                                            </Link>
                                            <Link href="/add-place" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Add a place
                                            </Link>
                                        </>
                                    )}
                                    {menu === "more" && (
                                        <>
                                            <Link href="/cruises" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Cruises
                                            </Link>
                                            <Link href="/rental-cars" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Rental Cars
                                            </Link>
                                            <Link href="/forums" className="block px-4 py-2 text-lg font-medium hover:bg-gray-100">
                                                Forums
                                            </Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-10">
                    <button className="text-[16px] font-normal flex items-center gap-1">
                        <a href="/change-language-and-currency" className="flex items-center space-x-1">
                            <Globe className="w-5 h-5" />
                            <span>┃</span>
                            <span>NPR</span>
                        </a>
                    </button>
                    <Button variant="default" className="sign-in-button bg-zinc-900 hover:bg-gray-500 text-white rounded-full">
                        Sign in
                    </Button>
                </div>

                {/* Secondary Navigation (only when not scrolled) */}
                {!isScrolled && (
                    <div className="secondary-nav bg-white py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-6xl font-bold text-center mb-8">Where to?</h2>

                            <div className="flex justify-center gap-8 mb-8">
                                <Button variant="ghost" className="flex flex-col items-center gap-2">
                                    <Home className="h-6 w-6" />
                                    <span>Search All</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col items-center gap-2">
                                    <Building2 className="h-6 w-6" />
                                    <span>Hotels</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col items-center gap-2">
                                    <Palmtree className="h-6 w-6" />
                                    <span>Things to Do</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col items-center gap-2">
                                    <UtensilsCrossed className="h-6 w-6" />
                                    <span>Restaurants</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col items-center gap-2">
                                    <Plane className="h-6 w-6" />
                                    <span>Flights</span>
                                </Button>
                                <Button variant="ghost" className="flex flex-col items-center gap-2">
                                    <Home className="h-6 w-6" />
                                    <span>Vacation Rentals</span>
                                </Button>
                            </div>

                            <div className="max-w-2xl mx-auto relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    type="text"
                                    placeholder="Places to go, things to do, hotels..."
                                    className="w-full pl-10 pr-24 py-6 rounded-full text-lg"
                                />
                                <Button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#34E0A1] text-black hover:bg-[#2bc88f]"
                                    size="lg"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Category Navigation (only when scrolled) */}
                {isScrolled && (
                    <div className="border-t">
                        <div className="container mx-auto px-4">
                            <nav className="flex gap-6 py-3">
                                <Link href="/hotels" className="text-sm font-medium">
                                    Hotels
                                </Link>
                                <Link href="/things-to-do" className="text-sm font-medium">
                                    Things to Do
                                </Link>
                                <Link href="/restaurants" className="text-sm font-medium">
                                    Restaurants
                                </Link>
                                <Link href="/flights" className="text-sm font-medium">
                                    Flights
                                </Link>
                                <Link href="/vacation-rentals" className="text-sm font-medium">
                                    Vacation Rentals
                                </Link>
                                <Link href="/cruises" className="text-sm font-medium">
                                    Cruises
                                </Link>
                                <Link href="/rental-cars" className="text-sm font-medium">
                                    Rental Cars
                                </Link>
                                <Link href="/forums" className="text-sm font-medium">
                                    Forums
                                </Link>
                            </nav>
                        </div>
                    </div>
                )}
            </header>
    )
}
