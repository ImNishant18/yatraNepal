"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    Home,
    Bed,
    Ticket,
    Utensils,
    Plane,
    HomeIcon as House,
    Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const dropdownButtonRefs = useRef<{
        [key: string]: HTMLButtonElement | null;
    }>({});
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSubmenu = (menu: string) => {
        setActiveSubmenu(activeSubmenu === menu ? null : menu);
    };

    return (
        <div className="fixed w-full top-0 left-0 z-50 bg-white">
            {!isScrolled ? (
                <div className="flex flex-col">
                    <div className="border-b">
                        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-[76px]">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={188}
                                    height={42}
                                    className="h-[42px] w-auto"
                                />
                                {!isScrolled && (
                                    <span className="text-xl font-poppins font-bold">
                                        YatraNepal
                                    </span>
                                )}
                            </Link>

                            {isScrolled && (
                                <div className="flex-1 max-w-2xl mx-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 font-poppins text-gray-400 w-5 h-5" />
                                        <Input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full pl-10 pr-4 py-2 rounded-full font-poppins"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="hidden md:flex items-center space-x-8 font-poppins">
                                {["discover", "trips", "review", "more"].map((menu) => (
                                    <div key={menu} className="relative">
                                        <button
                                            ref={(el) => (dropdownButtonRefs.current[menu] = el)}
                                            className="text-gray-600 hover:text-gray-900 text-lg font-medium px-2"
                                            onClick={() => toggleSubmenu(menu)}
                                            aria-haspopup="true"
                                            aria-expanded={activeSubmenu === menu}
                                        >
                                            {menu.charAt(0).toUpperCase() + menu.slice(1)}
                                        </button>
                                        {activeSubmenu === menu && (
                                            <div
                                                ref={(el) => (submenuRefs.current[menu] = el)}
                                                className="absolute left-0 mt-3 w-56 rounded-xl shadow-xl  font-poppins bg-white border z-50 p-4"
                                                style={{
                                                    boxShadow: "0 8px 20px rgba(80, 68, 68, 0.85)",
                                                    borderRadius: "12px",
                                                }}
                                                role="menu"
                                            >
                                                <div className="relative before:absolute before:-top-2 before:left-5 before:border-8 before:border-transparent before:border-b-white font-poppins "></div>
                                                {menu === "discover" && (
                                                    <>
                                                        <Link
                                                            href="/travelers-choice"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Travelers' Choice
                                                        </Link>
                                                        <Link
                                                            href="/travel-stories"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Travel Stories
                                                        </Link>
                                                    </>
                                                )}
                                                {menu === "trips" && (
                                                    <>
                                                        <Link
                                                            href="/my-trips"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            View my trips
                                                        </Link>
                                                        <Link
                                                            href="/start-trip"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Start a new trip
                                                        </Link>
                                                        <Link
                                                            href="/create-trip"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Create trip with AI
                                                        </Link>
                                                    </>
                                                )}
                                                {menu === "review" && (
                                                    <>
                                                        <Link
                                                            href="/write-a-review"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Write a review
                                                        </Link>
                                                        <Link
                                                            href="/post-photo"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Post photos
                                                        </Link>
                                                        <Link
                                                            href="/add-place"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Add a place
                                                        </Link>
                                                    </>
                                                )}
                                                {menu === "more" && (
                                                    <>
                                                        <Link
                                                            href="/cruises"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Cruises
                                                        </Link>
                                                        <Link
                                                            href="/rental-cars"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
                                                        >
                                                            Rental Cars
                                                        </Link>
                                                        <Link
                                                            href="/forums"
                                                            className="block px-4 py-2 text-lg font-poppins font-medium hover:bg-gray-100"
                                                            role="menuitem"
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
                            <div className="flex items-center gap-9">
                                <button className="text-[16px] font-normal  font-poppins flex items-center gap-1">
                                    <a
                                        href="/change-language-and-currency"
                                        className="flex items-center font-poppins space-x-1"
                                    >
                                        <Globe className="w-5 h-5" />
                                        <span>┃</span>
                                        <span>NPR</span>
                                    </a>
                                </button>
                                <Button
                                    variant="default"
                                    className="sign-in-button bg-zinc-900  font-poppins hover:bg-gray-500 text-white rounded-full"
                                >
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Navigation (only when not scrolled) */}
                    {!isScrolled && (
                        <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
                            <h1 className="text-7xl font-bold text-center font-poppins mb-8">
                                Where to?
                            </h1>

                            <nav className="flex flex-wrap justify-center gap-8">
                                <button className="flex flex-col items-center gap-2 min-w-[100px] text-[16px] font-medium hover:underline transition-all">
                                    <Home className="w-6 h-6" />
                                    Search All
                                </button>
                                <Link
                                    href="/hotels"
                                    className="flex flex-col items-center gap-2 min-w-[100px] text-[16px] font-medium hover:underline transition-all"
                                >
                                    <Bed className="w-6 h-6" />
                                    Hotels
                                </Link>
                                <Link
                                    href="/things-to-do"
                                    className="flex flex-col items-center gap-2 min-w-[100px] text-[16px] font-medium hover:underline transition-all"
                                >
                                    <Ticket className="w-6 h-6" />
                                    Things to Do
                                </Link>
                                <Link
                                    href="/restaurants"
                                    className="flex flex-col items-center gap-2 min-w-[100px] text-[16px] font-medium hover:underline transition-all"
                                >
                                    <Utensils className="w-6 h-6" />
                                    Restaurants
                                </Link>
                                <Link
                                    href="/flights"
                                    className="flex flex-col items-center gap-2 min-w-[100px] text-[16px] font-medium hover:underline transition-all"
                                >
                                    <Plane className="w-6 h-6" />
                                    Flights
                                </Link>
                                <Link
                                    href="/vacation-rentals"
                                    className="flex flex-col items-center gap-2 min-w-[100px] text-[16px] font-medium hover:underline transition-all"
                                >
                                    <House className="w-6 h-6" />
                                    Vacation Rentals
                                </Link>
                            </nav>

                            <div className="relative max-w-3xl mx-auto">
                                <div className="flex items-center h-14 w-full rounded-full border bg-background px-4 shadow-sm">
                                    <Search className="w-5 h-5 text-muted-foreground mr-2 flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Places to go, things to do, hotels..."
                                        className="flex-1 bg-transparent outline-none"
                                    />
                                    <Button className="rounded-full bg-emerald-400 hover:bg-emerald-500 text-background ml-2">
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                // Scrolled Header State
                <div className="border-b">
                    <div className="max-w-[1280px] mx-auto px-4">
                        {/* Top Bar */}
                        <div className="flex items-center justify-between h-[76px] font-poppins text-gray-700">
                            <div className="flex items-center gap-8">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 flex-shrink-0"
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="YatraNepal"
                                        width={188}
                                        height={42}
                                        className="h-[42px] w-auto"
                                    />
                                    <p className="text-[19px] font-bold font-poppins">
                                        YatraNepal
                                    </p>
                                </Link>
                                <div className="relative w-full max-w-15">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 font-poppins text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full pl-12 pr-4 py-3 font-poppins rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 text-[16px] font-poppins"
                                    />
                                </div>
                            </div>

                            <nav className="flex items-center gap-8">
                                <Link
                                    href="/discover"
                                    className="text-[18px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                                >
                                    Discover
                                </Link>
                                <Link
                                    href="/trips"
                                    className="text-[18px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                                >
                                    Trips
                                </Link>
                                <Link
                                    href="/review"
                                    className="text-[18px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                                >
                                    Review
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="text-[18px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                                >
                                    About us
                                </Link>
                            </nav>

                            <div className="flex items-center gap-10">
                                <button className="text-[16px] font-normal flex items-center gap-1">
                                    <a
                                        href="/change-language-and-currency"
                                        className="flex items-center space-x-1 font-poppins hover:text-gray-600 transition-all font-poppins"
                                    >
                                        <Globe className="w-5 h-5" />
                                        <span>┃</span>
                                        <span>NPR</span>
                                    </a>
                                </button>
                                <Button
                                    variant="default"
                                    className="sign-in-button bg-zinc-900 hover:bg-gray-500 text-white rounded-full font-poppins"
                                >
                                    Sign in
                                </Button>
                            </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="flex justify-left text-[14px] gap-8 py-4">
                            <Link
                                href="/hotels"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Hotels
                            </Link>
                            <Link
                                href="/things-to-do"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Things to Do
                            </Link>
                            <Link
                                href="/restaurants"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Restaurants
                            </Link>
                            <Link
                                href="/flights"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Flights
                            </Link>
                            <Link
                                href="/vacation-rentals"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Vacation Rentals
                            </Link>
                            <Link
                                href="/cruises"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Cruises
                            </Link>
                            <Link
                                href="/rental-cars"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Rental Cars
                            </Link>
                            <Link
                                href="/forums"
                                className="text-[14px] font-bold font-poppins hover:text-gray-600 hover:underline transition-all"
                            >
                                Forums
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
