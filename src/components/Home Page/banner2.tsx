"use client";

import Image from "next/image"
import Link from "next/link"
import "@/components/All CSS/banner2.css"

export default function Banner2() {
    return (
        <div className="banner banner-2">
            <div className="banner-content">
                <div className="image-wrapper">
                    <Image src="/images/2.png" alt="Group of people hiking" className="image" fill />
                </div>
                <div className="text-content">
                    <h2 className="title">Keep on planning</h2>
                    <p className="description">What to do, where to eat & more trip inspo.</p>
                </div>
            </div>
            <Link href="#" className="button">
                <div className="button-text">See more</div>
            </Link>
        </div>
    )
}