import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ticket-list";
import {songs} from "@/constants";
import '../../styles/twclass.css'

export default function TicketAlbums() {
    return (
        <div >
            <p
                style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                className="ticketAlbumsTitle">Popular
                Album</p>
            <p
                style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                className="ticketAlbumsArtistName">(Artist:
                Marshmello)</p>
            <div className="ticketAlbumsScreenContainer">

                <div
                    className="albumsContainer"
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >

                    <div
                        className="ticketAlbumsGridContainer pattern1">
                        <div className="albumCard">
                            <CardContainer className="h-[60vh] w-full rounded-xl p-5">
                                <CardBody className="h-[60vh] w-full rounded-xl p-5">
                                    <CardItem translateZ="100" className=" w-full rounded-xl p-5">
                            <Image
                                src="/images/ticketAlbumBanner1.webp"
                                alt="Product screenshot"
                                className="albumImage"
                                width={1920}
                                height={1080}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))"}}
                            />
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </div>
                        <div className="lg:pr-8 lg:pt-4">

                            <div className="ticketAlbumsSongList"
                                 style={{maxHeight: '25rem'}}>
                                <dl className="ticketAlbumsSongWrapper">
                                    {songs.map((songs) => (
                                        <div key={songs.name} className="relative pl-9 ">
                                            <dt className="inline ">

                                                <div
                                                    className="ticketAlbumsSongName">
                                                    {songs.name}
                                                    <div
                                                        className="flex items-center space-x-10 ">
                                                        <div
                                                            className="ticketAlbumsSongIcon">
                                                            {songs.icon1}
                                                        </div>
                                                        <div
                                                            className="ticketAlbumsSongDuration">
                                                            {songs.duration}
                                                        </div>
                                                        <div
                                                            className="ticketAlbumsIconHoverEffect">
                                                            {songs.icon2}
                                                        </div>
                                                    </div>

                                                </div>


                                            </dt>
                                            {' '}

                                            <hr className="w-full border-t border-red-400 "/>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}
