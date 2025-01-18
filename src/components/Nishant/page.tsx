"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./style.css";

interface NavItem {
    label: string;
    link: string;
}

const SecondaryNav = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { label: "Search All", link: "/" },
        { label: "Hotels", link: "/hotels" },
        { label: "Things to Do", link: "/things-to-do" },
        { label: "Restaurants", link: "/restaurants" },
        { label: "Flights", link: "/flights" },
        { label: "Holiday Rentals", link: "/holiday-rentals" },
    ];

    const headings: string[] = [
        "Where to?",
        "Stay somewhere great",
        "Do something fun",
        "Find places to eat",
        "Find the best flight",
        "Explore places to rent",
    ];

    const placeholders: string[] = [
        "Places to go, things to do, hotels...",
        "Hotel name and destination",
        "Attraction, activity or destination",
        "Restaurants or destination",
        "Find the best flight",
        "Destination",
    ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            const index = navItems.findIndex((item) => item.link === pathname);
            setActiveIndex(index !== -1 ? index : 0);
        }
    }, [pathname]);

    return (
        <div className="container">
            <h1 className="title">{headings[activeIndex]}</h1>

            <div className="nav-container">
                {navItems.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <button
                            className={`nav-item ${
                                activeIndex === index ? "active" : ""
                            }`}
                        >
                            {item.label}
                        </button>
                    </Link>
                ))}
            </div>

            <div className="search-container">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder={placeholders[activeIndex]}
                        className="search-input"
                    />
                    <button className="search-button">Search</button>
                </div>
            </div>
        </div>
    );
};

export default SecondaryNav;
