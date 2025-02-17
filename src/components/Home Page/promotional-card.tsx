import Image from "next/image"
import Link from "next/link"
import "@/components/All CSS/promotional-card.css"
export default function PromotionalCard() {
    return (
        <div className="container">
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
                    <div className="button-text">
                    See the list
                    </div>
                </Link>
            </div>

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
                    <div className="button-text">
                        See more
                    </div>
                </Link>
            </div>
        </div>
    )
}

