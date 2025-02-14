"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import "@/components/All CSS/hotel_banner.css"

const hotels = [
    {
        id: 1,
        name: "Hotel 1",
        location: "Location 1",
        price: 4500,
        image: "/images/1.png",
    },
    {
        id: 2,
        name: "Hotel 2",
        location: "Location 2",
        price: 5500,
        image: "/images/2.png",
    },
    {
        id: 3,
        name: "Hotel 3",
        location: "Location 3",
        price: 3500,
        image: "/images/3.png",
    },
    {
        id: 4,
        name: "Hotel 4",
        location: "Location 4",
        price: 4000,
        image: "/images/4.png",
    },
    {
        id: 5,
        name: "Hotel 5",
        location: "Location 5",
        price: 3000,
        image: "/images/5.png",
    },
    {
        id: 6,
        name: "Hotel 6",
        location: "Location 6",
        price: 3600,
        image: "/images/6.png",
    },
    {
        id: 7,
        name: "Hotel 7",
        location: "Location 7",
        price: 4500,
        image: "/images/7.png",
    },
    {
        id: 8,
        name: "Hotel 8",
        location: "Location 8",
        price: 4750,
        image: "/images/8.png",
    },
    {
        id: 9,
        name: "Hotel 9",
        location: "Location 9",
        price: 6520,
        image: "/images/9.png",
    },
    {
        id: 10,
        name: "Hotel 10",
        location: "Location 10",
        price: 9050,
        image: "/images/10.png",
    },
    {
        id: 11,
        name: "Hotel 11",
        location: "Location 11",
        price: 6080,
        image: "/images/11.png",
    },
    {
        id: 12,
        name: "Hotel 12",
        location: "Location 12",
        price: 9000,
        image: "/images/12.png",
    },
]

export default function HotelsInformation() {
    return (
        <div className="container">
            <div className="header">
                <h1>Enjoy a Luxury Stay with us.</h1>
                <p>Book this exclusive collection of luxury hotels and enjoy a luxurious stay.</p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="carousel"
            >
                <CarouselContent className="carousel-content">
                    {hotels.map((hotel) => (
                        <CarouselItem key={hotel.id} className="carousel-item">
                            <div className="hotel-card">
                                <div className="image-container">
                                    <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="hotel-image" />
                                    <div className="overlay">
                                        <h3 className="hotel-name">{hotel.name}</h3>
                                        <p className="hotel-location">{hotel.location}</p>
                                        <p className="hotel-price">Price: Rs.{hotel.price} per night</p>
                                        <button className="book-button">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="carousel-prev" />
                <CarouselNext className="carousel-next" />
            </Carousel>
        </div>
    )
}
