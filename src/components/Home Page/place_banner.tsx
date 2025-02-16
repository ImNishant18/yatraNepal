"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "@/components/All CSS/place_banner.module.css"

const destinations = [
    {
        id: 1,
        name: "Yellowstone National Park, WY",
        image: "/images/1.png",
    },
    {
        id: 2,
        name: "Punta Cana, Dominican Republic",
        image: "/images/2.png",
    },
    {
        id: 3,
        name: "Orlando, FL",
        image: "/images/3.png",
    },
    {
        id: 4,
        name: "Sedona, AZ",
        image: "/images/4.png",
    },
    {
        id: 5,
        name: "Cancun, Mexico",
        image: "/images/5.png",
    },
    {
        id: 6,
        name: "New York City, NY",
        image: "/images/6.png",
    },
    {
        id: 7,
        name: "Las Vegas, NV",
        image: "/images/7.png",
    },
    {
        id: 8,
        name: "Yosemite National Park, CA",
        image: "/images/8.png",
    },
]
export default function PlaceBanner() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cards = container.children
            if (cards[index]) {
                container.scrollTo({
                    left:
                        cards[index].getBoundingClientRect().left + container.scrollLeft - container.getBoundingClientRect().left,
                    behavior: "smooth",
                })
            }
            setCurrentIndex(index)
        }
    }

    const handleNext = () => {
        const newIndex = Math.min(currentIndex + 1, destinations.length - 4)
        scrollToIndex(newIndex)
    }

    const handlePrev = () => {
        const newIndex = Math.max(currentIndex - 1, 0)
        scrollToIndex(newIndex)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Top destinations for your next vacation</h1>

            <div className={styles.carouselContainer}>
                <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <ChevronLeft className={styles.navIcon} />
                </button>
                <div className={styles.carousel} ref={scrollContainerRef}>
                    {destinations.map((destination) => (
                        <div key={destination.id} className={styles.card}>
                            <Image
                                src={destination.image || "/placeholder.svg"}
                                alt={destination.name}
                                width={400}
                                height={300}
                                className={styles.image}
                            />
                            <div className={styles.cardOverlay}>
                                <div className={styles.contentWrapper}>
                                    <h2 className={styles.cardTitle}>{destination.name}</h2>
                                    <button className={styles.exploreButton}>
                                        Explore Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={handleNext}
                    disabled={currentIndex >= destinations.length - 4}
                >
                    <ChevronRight className={styles.navIcon} />
                </button>
            </div>
        </div>
    )
}