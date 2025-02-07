"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.png",
]

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(nextImage, 3000)
        return () => clearInterval(interval)
    }, [nextImage])

    return (
        <div className="relative w-full max-w-[1100px] mx-auto">
            <div className="relative w-full h-[550px]">
                <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`Image ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 1100px) 100vw, 1100px"
                    priority
                    className="object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/70 hover:bg-white/90 transition-colors"
                    onClick={prevImage}
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/70 hover:bg-white/90 transition-colors"
                    onClick={nextImage}
                    aria-label="Next image"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
export default ImageSlider;