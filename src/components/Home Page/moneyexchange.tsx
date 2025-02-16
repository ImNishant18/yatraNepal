"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef } from "react"
import "@/components/All CSS/money-exchange.css"
export default function MoneyExchange() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const locations = [
        {
            title: "Rome Exchange Center",
            image: "/images/1.png",
            location: "Via del Corso 123, Rome",
        },
        {
            title: "Mexico City Exchange",
            image: "/images/2.png",
            location: "Av. Reforma 456, Mexico City",
        },
        {
            title: "Barcelona Exchange",
            image: "/images/3.png",
            location: "Las Ramblas 789, Barcelona",
        },
        {
            title: "Paris Exchange",
            image: "/images/4.png",
            location: "Champs-Élysées 101, Paris",
        },
        {
            title: "London Exchange",
            image: "/images/5.png",
            location: "Oxford Street 202, London",
        },
        {
            title: "Tokyo Exchange",
            image: "/images/6.png",
            location: "Shibuya 303, Tokyo",
        },
        {
            title: "New York Exchange",
            image: "/images/7.png",
            location: "Wall Street 404, New York",
        },
        {
            title: "Dubai Exchange",
            image: "/images/8.png",
            location: "Dubai Mall 505, Dubai",
        },
        {
            title: "Singapore Exchange",
            image: "/images/9.png",
            location: "Orchard Road 606, Singapore",
        },
        {
            title: "Sydney Exchange",
            image: "/images/10.png",
            location: "George Street 707, Sydney",
        },
    ]
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Find Currency Exchange Locations</h1>
                <p className="text-xl text-muted-foreground">Discover trusted exchange offices worldwide</p>
            </div>

            <div className="relative">
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 pb-6 scroll-smooth hide-scrollbar">
                    {locations.map((item, index) => (
                        <Card
                            key={index}
                            className="money-exchange-card"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <CardContent className="money-exchange-card-content">
                                <div className="money-exchange-image-wrapper">
                                    <img src={item.image || "/placeholder.svg"} alt={item.title} className="money-exchange-image" />
                                    {hoveredIndex === index && (
                                        <div className="money-exchange-overlay">
                                            <h3 className="money-exchange-card-title">{item.title}</h3>
                                            <p className="money-exchange-card-location">{item.location}</p>
                                            <Button className="money-exchange-card-button">Check Now</Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <button
                    className="money-exchange-scroll-button money-exchange-scroll-left"
                    onClick={() => scroll("left")}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="money-exchange-chevron" />
                </button>
                <button
                    className="money-exchange-scroll-button money-exchange-scroll-right"
                    onClick={() => scroll("right")}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="money-exchange-chevron" />
                </button>
            </div>
        </div>
    )
}