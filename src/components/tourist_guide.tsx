"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function TouristGuideCard() {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="bg-[#F8F3FA] rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Image Container */}
                    <div className="w-full md:w-72 h-48 md:h-auto relative flex-shrink-0 p-4">
                        <Image
                            src="/images/tourist-guider.png"
                            alt="Description of the image"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <div className="flex flex-col md:flex-row gap-4 h-full">
                            <div className="flex-1 space-y-3">
                                <div className="inline-block">
                                    <span className="bg-[#E8E8E8] text-sm px-3 py-1 rounded-full">
                                        Tourist Guide
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    Hire Your Tourist Guide Here
                                </h1>
                                <p className="text-gray-700">
                                    Embark on an unforgettable journey through the heart of our city with our expert-guided tour.
                                    Whether you're a history enthusiast, art lover, or culinary explorer, our tour offers something special for everyone....
                                </p>
                            </div>
                            <div className="flex md:items-center flex-shrink-0">
                                <Button asChild variant="outline" className="rounded-full px-6 border-2 border-[#88E788] text-[#000] hover:bg-[#88E788] hover:text-white">
                                    <Link href="/tourist-guide">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}