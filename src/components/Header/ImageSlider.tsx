"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import './ImageSlider.css';

const images = [
    '/images/1basantapur-durbar-square.jpg',
    '/images/2taragaon.jpg',
    '/images/3Simba Falls.jpg',
    '/images/4budanilkantha-2.jpg',
    '/images/5Kaleshower.jpg',
    '/images/6boudhanath.jpg',
    // '/images/7pashupatinath-2.jpg',
    // '/images/8Blindhare-tharan.jpg',
    // '/images/9bhaktapur.jpg',
    // '/images/10Lataramgesho.jpg',
    // '/images/11Krishna Mandi.jpg',
    // '/images/12gaddi-baithak.jpg',
    // '/images/13soyambu.jpg',
    // '/images/14godawari.jpg',
    // '/images/15Pashupatinath.jpg',
    // '/images/16Kathmandu-Durbar-Square.jpg',
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="slider-image"
            />
        </div>
    );
};

export default ImageSlider;