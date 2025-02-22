import Link from "next/link"
import { Facebook, Twitter, Instagram , Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import "@/components/All CSS/footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* About yatraNepal */}
                    <div className="footer-section">
                        <h2>About yatraNepal</h2>
                        <ul>
                            <li>
                                <Link href="#">About Us</Link>
                            </li>
                            <li>
                                <Link href="#">Press</Link>
                            </li>
                            <li>
                                <Link href="#">Resources and Policies</Link>
                            </li>
                            <li>
                                <Link href="#">Careers</Link>
                            </li>
                            <li>
                                <Link href="#">Investor Relations</Link>
                            </li>
                            <li>
                                <Link href="#">Trust & Safety</Link>
                            </li>
                            <li>
                                <Link href="#">Contact us</Link>
                            </li>
                            <li>
                                <Link href="#">Accessibility Statement</Link>
                            </li>
                            <li>
                                <Link href="#">Bug Bounty Program</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div className="footer-section">
                        <h2>Explore</h2>
                        <ul>
                            <li>
                                <Link href="#">Write a review</Link>
                            </li>
                            <li>
                                <Link href="#">Add a Place</Link>
                            </li>
                            <li>
                                <Link href="#">Join</Link>
                            </li>
                            <li>
                                <Link href="#">Travelers' Choice</Link>
                            </li>
                            <li>
                                <Link href="#">Help Center</Link>
                            </li>
                            <li>
                                <Link href="#">Travel Stories</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Do Business With Us */}
                    <div className="footer-section">
                        <h2>Do Business With Us</h2>
                        <ul>
                            <li>
                                <Link href="#">Owners</Link>
                            </li>
                            <li>
                                <Link href="#">Business Advantage</Link>
                            </li>
                            <li>
                                <Link href="#">Sponsored Placements</Link>
                            </li>
                            <li>
                                <Link href="#">Advertise with Us</Link>
                            </li>
                            <li>
                                <Link href="#">Become an Affiliate</Link>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h2>Get The App</h2>
                            <ul>
                                <li>
                                    <Link href="#">iPhone App</Link>
                                </li>
                                <li>
                                    <Link href="#">Android App</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tripadvisor Sites */}
                    <div className="footer-section">
                        <h2>Tripadvisor Sites</h2>
                        <ul>
                            <li>
                                Book the best restaurants with <Link href="#restaurants">yatraNepal</Link>
                            </li>
                            <li>
                                Book tours and attraction tickets on <Link href="#tours">Viator</Link>
                            </li>
                            <li>
                                Read cruise reviews on <Link href="#cruises">Cruise Critic</Link>
                            </li>
                            <li>
                                Get airline seating charts on <Link href="#seating">Seat Guru</Link>
                            </li>
                            <li>
                                Search for holiday rentals on <Link href="#rentals">Holiday Lettings</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="footer-logo-section">
                            {/* Replace the remote image with a simple div for logo */}
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <img src="/logo.png" alt="yatraNepal Logo" className="w-6 h-6" />
                            </div>
                            <span className="footer-copyright">© 2024 yatraNepal LLC All rights reserved.</span>
                        </div>

                        <div className="footer-links">
                            <Link href="#">Terms of Use</Link>
                            <Link href="#">Privacy and Cookies Statement</Link>
                            <Link href="#">Cookie consent</Link>
                            <Link href="#">Site Map</Link>
                            <Link href="#">How the site works</Link>
                            <Link href="#">Contact us</Link>
                        </div>

                        <div className="footer-buttons">
                            <button className="footer-button">NPR</button>
                            <button className="footer-button">English</button>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="footer-social">
                        <Link href="https://www.facebook.com/NeymardaSilvaSantosJr.Nishant" target="_blank">
                            <Facebook />
                        </Link>
                        <Link href="https://x.com/im_nishantt18" target="_blank">
                            <Twitter />
                        </Link>
                        <Link href="https://www.instagram.com/ni_sh_ant_u/" target="_blank">
                            <Instagram />
                        </Link>
                        <Link href="https://github.com/ImNishant18" target="_blank">
                            <Github />
                        </Link>
                    </div>

                    <p className="footer-disclaimer">
                        This is the version of our website addressed to speakers of English in the United States. If you are a
                        resident of another country or region, please select the appropriate version of Tripadvisor for your country
                        or region in the drop-down menu.
                        <button>more</button>
                    </p>
                </div>
            </div>
        </footer>
    )
}
