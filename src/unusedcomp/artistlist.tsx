"use client";
import React from "react";
import Link from 'next/link';
import { ArtistListUi } from "@/components/ui/artist-list";
import {artistDataold } from "@/constants";
import {ArtistCard} from "@/unusedcomp/artistcard";
import '../../styles/twclass.css'

function getRandomColor() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}


export default function ArtistList() {

    return (
        <div className="artistListContainer" id="artistList">
                <h1 className="artistListTitle">Artist List</h1>
                <div className="artistCardContainer" style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}>
                    {artistDataold.map((card, index) => (
                        <Link key={index} href="/pages/ticketlists" legacyBehavior>
                            <div className="artistCard">
                                <ArtistCard title={card.title} icon={card.icon} image={card.image}>
                                    <ArtistListUi
                                        animationSpeed={3}
                                        containerClassName="bg-transparent"
                                        colors={[
                                            getRandomColor(),
                                            getRandomColor(),
                                        ]}
                                        dotSize={2}
                                    />
                                </ArtistCard>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    );
}



