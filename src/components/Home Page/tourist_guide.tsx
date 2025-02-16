"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/components/All CSS/tourist_guide.css";


export default function TouristGuideCard() {
    return (
        <div className="tourist-guide-container">
            <div className="tourist-guide-card">
                <div className="tourist-guide-content">
                    <div className="tourist-guide-image-container">
                        <Image
                            src="/images/tourist-guider.png"
                            alt="Description of the image"
                            fill
                            className="tourist-guide-image"
                            priority
                        />
                    </div>
                    <div className="tourist-guide-info">
                        <div className="tourist-guide-text">
                            <div className="tourist-guide-tag-container">
                                <span className="tourist-guide-tag">
                                    Tourist Guide
                                </span>
                            </div>
                            <h1 className="tourist-guide-title">
                                Hire Your Tourist Guide Here
                            </h1>
                            <p className="tourist-guide-description">
                                Embark on an unforgettable journey through the heart of our city with our expert-guided tour.
                                Whether you're a history enthusiast, art lover, or culinary explorer, our tour offers something special for everyone....
                            </p>
                        </div>
                        <div className="tourist-guide-button-container">
                            <Link href="/tourist-guide" className="tourist-guide-button">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}