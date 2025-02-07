"use client";

import { Search } from "lucide-react";
import {
    Home,
    Building2,
    Palmtree,
    UtensilsCrossed,
    Plane,
    HomeIcon as House,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./style.css";

export function SecondaryNav() {
    return (
        <nav className="secondary-nav">
            <div className="secondary-nav-container">
                <h2 className="secondary-nav-title">Where to?</h2>

                <div className="secondary-nav-buttons">
                    <Button variant="ghost" className="secondary-nav-button group">
                        <Home className="secondary-nav-icon" />
                        <span className="secondary-nav-label group-hover:underline group-data-[state=open]:underline">
                            Search All
                        </span>
                    </Button>
                    <Button variant="ghost" className="secondary-nav-button group">
                        <Building2 className="secondary-nav-icon" />
                        <span className="secondary-nav-label group-hover:underline group-data-[state=open]:underline">
                            Hotels
                        </span>
                    </Button>
                    <Button variant="ghost" className="secondary-nav-button group">
                        <Palmtree className="secondary-nav-icon" />
                        <span className="secondary-nav-label group-hover:underline group-data-[state=open]:underline">
                            Things to Do
                        </span>
                    </Button>
                    <Button variant="ghost" className="secondary-nav-button group">
                        <UtensilsCrossed className="secondary-nav-icon" />
                        <span className="secondary-nav-label group-hover:underline group-data-[state=open]:underline">
                            Restaurants
                        </span>
                    </Button>
                    <Button variant="ghost" className="secondary-nav-button group">
                        <Plane className="secondary-nav-icon" />
                        <span className="secondary-nav-label group-hover:underline group-data-[state=open]:underline">
                            Flights
                        </span>
                    </Button>
                    <Button variant="ghost" className="secondary-nav-button group">
                        <House className="secondary-nav-icon" />
                        <span className="secondary-nav-label group-hover:underline group-data-[state=open]:underline">
                            Vacation Rentals
                        </span>
                    </Button>
                </div>

                <div className="secondary-nav-search">
                    <Search className="secondary-nav-search-icon" />
                    <Input
                        type="text"
                        placeholder="Places to go, things to do, hotels..."
                        className="secondary-nav-search-input"
                    />
                    <Button className="secondary-nav-search-button">Search</Button>
                </div>
            </div>
        </nav>
    );
}
export default SecondaryNav;
