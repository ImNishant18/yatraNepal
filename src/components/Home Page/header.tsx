"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
    Search,
    Home,
    Bed,
    Ticket,
    Utensils,
    Plane,
    HomeIcon as House,
    Globe,
    Calendar,
    User,
    ChevronLeft,
    ChevronRight,
    Plus,
    Minus,
} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import "@/components/All CSS/header.css"
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
    const [activeSection, setActiveSection] = useState<string>("search")
    const [selectedDates, setSelectedDates] = useState({ start: "Mar 10", end: "Mar 17" })
    const [currentMonth, setCurrentMonth] = useState(2)
    const [travelers, setTravelers] = useState({
        adults: 1,
        seniors: 0,
        children: 0,
        infants: 0,
    })

    const dropdownButtonRefs = useRef<{
        [key: string]: HTMLButtonElement | null
    }>({})
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const generateCalendarDays = (year: number, month: number) => {
        const days = []
        const daysInMonth = getDaysInMonth(year, month)
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i)
        }
        return days
    }

    const updateTravelerCount = (type: keyof typeof travelers, increment: boolean) => {
        setTravelers((prev) => ({
            ...prev,
            [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
        }))
    }

    const getTotalTravelers = () => {
        const total = Object.values(travelers).reduce((sum, count) => sum + count, 0)
        return `${total} Traveler${total !== 1 ? "s" : ""}`
    }

    const toggleSubmenu = (menu: string) => {
        setActiveSubmenu(activeSubmenu === menu ? null : menu)
    }

    const sectionHeadings: { [key: string]: string } = {
        search: "Where to?",
        hotels: "Stay somewhere great",
        things: "Do something fun",
        restaurants: "Find places to eat",
        flights: "Find the best flight",
        rentals: "Explore places to rent",
    }

    const searchPlaceholders: { [key: string]: string } = {
        search: "Places to go, things to do, hotels...",
        hotels: "Hotel name or destination",
        things: "Attraction, activity or destination",
        restaurants: "Restaurant or destination",
        rentals: "Destination",
        flights: "Origin",
    }

    return (
        <header className="header-container">
            {!isScrolled ? (
                <div className="header-main">
                    <div className="header-border">
                        <div className="header-wrapper">
                            <Link href="/" className="header-logo">
                                <Image src="/logo.png" alt="Logo" width={188} height={42} className="header-logo-image" />
                                <span className="header-logo-text">YatraNepal</span>
                            </Link>

                            <nav className="header-nav">
                                {["discover", "trips", "review", "more"].map((menu) => (
                                    <div key={menu} className="header-nav-item">
                                        <button
                                            ref={(el) => (dropdownButtonRefs.current[menu] = el)}
                                            className="header-nav-button"
                                            onClick={() => toggleSubmenu(menu)}
                                        >
                                            {menu.charAt(0).toUpperCase() + menu.slice(1)}
                                        </button>
                                        {activeSubmenu === menu && (
                                            <div ref={(el) => (submenuRefs.current[menu] = el)} className="header-dropdown">
                                                {menu === "discover" && (
                                                    <>
                                                        <Link href="/travelers-choice" className="header-dropdown-link">
                                                            Travelers' Choice
                                                        </Link>
                                                        <Link href="/travel-stories" className="header-dropdown-link">
                                                            Travel Stories
                                                        </Link>
                                                    </>
                                                )}
                                                {menu === "trips" && (
                                                    <>
                                                        <Link href="/my-trips" className="header-dropdown-link">
                                                            View my trips
                                                        </Link>
                                                        <Link href="/start-trip" className="header-dropdown-link">
                                                            Start a new trip
                                                        </Link>
                                                        <Link href="/create-trip" className="header-dropdown-link">
                                                            Create trip with AI
                                                        </Link>
                                                    </>
                                                )}
                                                {menu === "review" && (
                                                    <>
                                                        <Link href="/write-a-review" className="header-dropdown-link">
                                                            Write a review
                                                        </Link>
                                                        <Link href="/post-photo" className="header-dropdown-link">
                                                            Post photos
                                                        </Link>
                                                        <Link href="/add-place" className="header-dropdown-link">
                                                            Add a place
                                                        </Link>
                                                    </>
                                                )}
                                                {menu === "more" && (
                                                    <>
                                                        <Link href="/cruises" className="header-dropdown-link">
                                                            Cruises
                                                        </Link>
                                                        <Link href="/rental-cars" className="header-dropdown-link">
                                                            Rental Cars
                                                        </Link>
                                                        <Link href="/forums" className="header-dropdown-link">
                                                            Forums
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="header-actions">
                                <button className="header-currency">
                                    <Globe className="header-currency-icon" />
                                    <span>┃</span>
                                    <span>NPR</span>
                                </button>
                                <button className="header-sign-in">Sign in</button>
                            </div>
                        </div>
                    </div>

                    <div className="header-search-section">
                        <h1 className="header-search-title">{sectionHeadings[activeSection]}</h1>

                        <nav className="header-search-nav">
                            <button className="header-search-nav-item" onClick={() => setActiveSection("search")}>
                                <Home className="header-search-icon" />
                                Search All
                            </button>
                            <button className="header-search-nav-item" onClick={() => setActiveSection("hotels")}>
                                <Bed className="header-search-icon" />
                                Hotels
                            </button>
                            <button className="header-search-nav-item" onClick={() => setActiveSection("things")}>
                                <Ticket className="header-search-icon" />
                                Things to Do
                            </button>
                            <button className="header-search-nav-item" onClick={() => setActiveSection("restaurants")}>
                                <Utensils className="header-search-icon" />
                                Restaurants
                            </button>
                            <button className="header-search-nav-item" onClick={() => setActiveSection("flights")}>
                                <Plane className="header-search-icon" />
                                Flights
                            </button>
                            <button className="header-search-nav-item" onClick={() => setActiveSection("rentals")}>
                                <House className="header-search-icon" />
                                Vacation Rentals
                            </button>
                        </nav>

                        <div className="header-search-bar">
                            {activeSection === "flights" ? (
                                <div className="header-flight-search">
                                    <div className="header-flight-input">
                                        <Plane className="header-flight-icon" />
                                        <input type="text" placeholder="Origin" className="header-flight-field" />
                                    </div>

                                    <div className="header-flight-input">
                                        <Plane className="header-flight-icon" style={{ transform: "rotate(90deg)" }} />
                                        <input type="text" placeholder="Destination" className="header-flight-field" />
                                    </div>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className="header-flight-input">
                                                <Calendar className="header-flight-icon" />
                                                <button className="header-flight-field header-date-button">
                                                    {selectedDates.start} → {selectedDates.end}
                                                </button>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="header-calendar-popover">
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-semibold text-center">
                                                    Departing {selectedDates.start} — Returning {selectedDates.end}
                                                </h3>
                                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-4">
                                                            <button onClick={() => setCurrentMonth((prev) => Math.max(0, prev - 1))}>
                                                                <ChevronLeft className="w-5 h-5" />
                                                            </button>
                                                            <h4 className="text-lg font-medium">{months[currentMonth]} 2025</h4>
                                                            <div className="w-5" />
                                                        </div>
                                                        <div className="grid grid-cols-7 gap-2">
                                                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                                                <div key={day} className="text-center text-sm font-medium">
                                                                    {day}
                                                                </div>
                                                            ))}
                                                            {generateCalendarDays(2025, currentMonth).map((day) => (
                                                                <button
                                                                    key={day}
                                                                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
                                                                    ${day === 10 || day === 17 ? "bg-black text-white" : "hover:bg-gray-100"}
                                                                    ${day >= 10 && day <= 17 ? "bg-gray-100" : ""}`}
                                                                >
                                                                    {day}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div className="w-5" />
                                                            <h4 className="text-lg font-medium">{months[currentMonth + 1]} 2025</h4>
                                                            <button onClick={() => setCurrentMonth((prev) => Math.min(11, prev + 1))}>
                                                                <ChevronRight className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                        <div className="grid grid-cols-7 gap-2">
                                                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                                                <div key={day} className="text-center text-sm font-medium">
                                                                    {day}
                                                                </div>
                                                            ))}
                                                            {generateCalendarDays(2025, currentMonth + 1).map((day) => (
                                                                <button
                                                                    key={day}
                                                                    className="h-8 w-8 rounded-full flex items-center justify-center text-sm hover:bg-gray-100"
                                                                >
                                                                    {day}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <button className="bg-black text-white px-6 py-2 rounded-full">Apply</button>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className="header-flight-input">
                                                <User className="header-flight-icon" />
                                                <button className="header-flight-field header-travelers-button">{getTotalTravelers()}</button>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="header-travelers-popover">
                                            <div className="space-y-4">
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="font-semibold">Adults</div>
                                                            <div className="text-sm text-gray-500">Age 18-64</div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                onClick={() => updateTravelerCount("adults", false)}
                                                                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-4 text-center">{travelers.adults}</span>
                                                            <button
                                                                onClick={() => updateTravelerCount("adults", true)}
                                                                className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="font-semibold">Seniors</div>
                                                            <div className="text-sm text-gray-500">Age 65+</div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                onClick={() => updateTravelerCount("seniors", false)}
                                                                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-4 text-center">{travelers.seniors}</span>
                                                            <button
                                                                onClick={() => updateTravelerCount("seniors", true)}
                                                                className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="font-semibold">Children</div>
                                                            <div className="text-sm text-gray-500">Age 3-17</div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                onClick={() => updateTravelerCount("children", false)}
                                                                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-4 text-center">{travelers.children}</span>
                                                            <button
                                                                onClick={() => updateTravelerCount("children", true)}
                                                                className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="font-semibold">Infants in seat</div>
                                                            <div className="text-sm text-gray-500">Age 0-2</div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                onClick={() => updateTravelerCount("infants", false)}
                                                                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-4 text-center">{travelers.infants}</span>
                                                            <button
                                                                onClick={() => updateTravelerCount("infants", true)}
                                                                className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-sm text-gray-500">
                                                    Policies and pricing for traveling with infants may vary, so please check with the ticketing
                                                    provider before booking.
                                                </div>

                                                <div className="flex justify-end">
                                                    <button className="bg-black text-white px-6 py-2 rounded-full">Apply</button>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>

                                    <button className="header-search-button">Search</button>
                                </div>
                            ) : (
                                <div className="header-search-input-wrapper">
                                    <Search className="header-search-icon" />
                                    <input type="text" placeholder={searchPlaceholders[activeSection]} className="header-search-input" />
                                    <button className="header-search-button">Search</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="header-scrolled">
                    <div className="header-wrapper">
                        <div className="header-logo-section">
                            <Link href="/" className="header-logo">
                                <Image src="/logo.png" alt="YatraNepal" width={188} height={42} className="header-logo-image" />
                                <span className="header-logo-text">YatraNepal</span>
                            </Link>
                            <div className="header-search-input-wrapper">
                                <Search className="header-search-icon" />
                                <input type="text" placeholder="Search" className="header-search-input" />
                            </div>
                        </div>

                        <nav className="header-scrolled-nav">
                            <Link href="/discover" className="header-scrolled-link">
                                Discover
                            </Link>
                            <Link href="/trips" className="header-scrolled-link">
                                Trips
                            </Link>
                            <Link href="/review" className="header-scrolled-link">
                                Review
                            </Link>
                            <Link href="/about-us" className="header-scrolled-link">
                                About us
                            </Link>
                        </nav>

                        <div className="header-actions">
                            <button className="header-currency">
                                <Globe className="header-currency-icon" />
                                <span>┃</span>
                                <span>NPR</span>
                            </button>
                            <button className="header-sign-in">Sign in</button>
                        </div>
                    </div>

                    <nav className="header-secondary-nav">
                        <Link href="/hotels" className="header-secondary-link">
                            Hotels
                        </Link>
                        <Link href="/things-to-do" className="header-secondary-link">
                            Things to Do
                        </Link>
                        <Link href="/restaurants" className="header-secondary-link">
                            Restaurants
                        </Link>
                        <Link href="/flights" className="header-secondary-link">
                            Flights
                        </Link>
                        <Link href="/vacation-rentals" className="header-secondary-link">
                            Vacation Rentals
                        </Link>
                        <Link href="/cruises" className="header-secondary-link">
                            Cruises
                        </Link>
                        <Link href="/rental-cars" className="header-secondary-link">
                            Rental Cars
                        </Link>
                        <Link href="/forums" className="header-secondary-link">
                            Forums
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

