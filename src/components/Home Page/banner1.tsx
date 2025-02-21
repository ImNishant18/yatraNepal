import Image from "next/image"
import Link from "next/link"
import "@/components/All CSS/banner1.css"

export default function Banner1() {
    return (
        <div className="banner banner-1">
            <div className="banner-content">
                <div className="image-wrapper">
                    <Image src="/images/1.png" alt="Luxury beachfront hotel room" className="image" fill />
                </div>
                <div className="text-content">
                    <div className="label">Traveler's Choice</div>
                    <h2 className="title">Travelers' Choice Best of the Best Hotels</h2>
                    <p className="description">Our top 1%, powered by real reviews.</p>
                </div>
            </div>
            <Link href="#" className="button">
                <div className="button-text">See the list</div>
            </Link>
        </div>
    )
}