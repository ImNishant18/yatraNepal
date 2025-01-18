"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import './header.css'; 
const Header = () => {
    const [language, setLanguage] = useState("EN");
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    // Create refs for dropdown buttons and submenus with type assertion for ref
    const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const dropdownButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    const handleLanguageToggle = () => {
        setLanguage((prevLanguage) => (prevLanguage === "EN" ? "NP" : "EN"));
    };

    const toggleSubmenu = (section: string) => {
        setActiveSubmenu((prev) => (prev === section ? null : section)); // Toggle active submenu
    };

    // Close submenu if the click is outside the submenu or its toggle button
    const handleClickOutside = (event: MouseEvent) => {
        let isClickInsideSubmenu = false;

        // Check if the click is inside any of the submenu containers or buttons
        Object.values(submenuRefs.current).forEach((submenuRef) => {
            if (submenuRef && submenuRef.contains(event.target as Node)) {
                isClickInsideSubmenu = true;
            }
        });

        Object.values(dropdownButtonRefs.current).forEach((buttonRef) => {
            if (buttonRef && buttonRef.contains(event.target as Node)) {
                isClickInsideSubmenu = true;
            }
        });

        // Close all submenus if the click is outside
        if (!isClickInsideSubmenu) {
            setActiveSubmenu(null);
        }
    };

    // Add event listener on mount and clean up on unmount
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header className="header-container">
            <div className="header-primary">
                {/* Logo Section */}
                <a href="/" className="header-logo" aria-label="Go to homepage">
                    <Image
                        src="/logo.png"
                        alt="YatraNepal Logo"
                        width={40}
                        height={40}
                        className="logo-image"
                    />
                    <span className="logo-text">YatraNepal</span>
                </a>

                {/* Navigation Links */}
                <nav className="header-navigation" aria-label="Main Navigation">
                    <div className="dropdown-container">
                        <button
                            ref={(el) => (dropdownButtonRefs.current["discover"] = el!)} // Reference to the button
                            className="header-link"
                            onClick={() => toggleSubmenu("discover")}
                            aria-label="Discover options"
                        >
                            Discover
                        </button>
                        {activeSubmenu === "discover" && (
                            <div
                                ref={(el) => (submenuRefs.current["discover"] = el!)} // Reference to the submenu
                                className="submenu"
                            >
                                <a href="/travellers-choice" className="submenu-link">
                                    Travellers' Choice
                                </a>
                                <a href="/travel-stories" className="submenu-link">
                                    Travel Stories
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="dropdown-container">
                        <button
                            ref={(el) => (dropdownButtonRefs.current["trips"] = el!)}
                            className="header-link"
                            onClick={() => toggleSubmenu("trips")}
                            aria-label="Trips options"
                        >
                            Trips
                        </button>
                        {activeSubmenu === "trips" && (
                            <div
                                ref={(el) => (submenuRefs.current["trips"] = el!)}
                                className="submenu"
                            >
                                <a href="/my-trips" className="submenu-link">
                                    View my trips
                                </a>
                                <a href="/start-trip" className="submenu-link">
                                    Start a new trip
                                </a>
                                <a href="/create-trip-ai" className="submenu-link">
                                    Create trip with AI
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="dropdown-container">
                        <button
                            ref={(el) => (dropdownButtonRefs.current["review"] = el!)}
                            className="header-link"
                            onClick={() => toggleSubmenu("review")}
                            aria-label="Review options"
                        >
                            Review
                        </button>
                        {activeSubmenu === "review" && (
                            <div
                                ref={(el) => (submenuRefs.current["review"] = el!)}
                                className="submenu"
                            >
                                <a href="/write-review" className="submenu-link">
                                    Write a review
                                </a>
                                <a href="/post-photos" className="submenu-link">
                                    Post photos
                                </a>
                                <a href="/add-place" className="submenu-link">
                                    Add a place
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="dropdown-container">
                        <button
                            ref={(el) => (dropdownButtonRefs.current["more"] = el!)}
                            className="header-link"
                            onClick={() => toggleSubmenu("more")}
                            aria-label="More options"
                        >
                            More
                        </button>
                        {activeSubmenu === "more" && (
                            <div
                                ref={(el) => (submenuRefs.current["more"] = el!)}
                                className="submenu"
                            >
                                <a href="/cruises" className="submenu-link">
                                    Cruises
                                </a>
                                <a href="/car-hire" className="submenu-link">
                                    Car Hire
                                </a>
                                <a href="/forums" className="submenu-link">
                                    Forums
                                </a>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Dropdown and Sign-in Section */}
                <div className="header-dropdown">
                    <button
                        className="dropdown-button button-standard"
                        onClick={handleLanguageToggle}
                        aria-label="Toggle language"
                    >
                        <Globe className="icon-globe" />
                        {language === "EN" ? "| NPR" : "| NPR"}
                    </button>
                    <button
                        className="sign-in-button button-standard"
                        aria-label="Sign in"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
