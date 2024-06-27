
import Image from "next/image";
import { Link } from 'react-scroll';
import {ticketFeatures, textBlocks} from "@/constants";
import '../../styles/twclass.css'
import {motion} from "framer-motion";

export default function Herotickets() {
    return (
        <div className="heroTicketsContainer">

            <div className="heroTicketsBox" >

                <div className="gridContainer">
                    <div className="textContainer">
                        <div className="textWrapper">
                            <div>
                                {textBlocks.map((block, index) => (
                                    <p key={index} className={block.className}>
                                        {block.text}
                                    </p>
                                ))}
                            </div>

                            <dl className="featureWrapper ">

                                {ticketFeatures.map((ticketFeatures) => (
                                    <div key={ticketFeatures.name} className="ticketFeaturesContainer">

                                        <ticketFeatures.icon className="ticketFeaturesIcon" aria-hidden="true"/>
                                        <Link to={ticketFeatures.link} smooth={true} duration={500}>
                                            <div
                                                style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}
                                                className="ticketFeaturesLink text-prime hover:text-[#8BC34A] ">
                                                {ticketFeatures.name}
                                            </div>

                                        </Link>

                                        {' '}
                                        <dd className="block text-second ">{ticketFeatures.description}</dd>
                                    </div>
                                ))}
                            </dl>


                        </div>

                    </div>
                    <motion.div
                        whileTap={{
                            scale: 0.8,
                            rotate: -30,
                            borderRadius: "100%",
                        }}
                        className="heroTicketImageContainer overflow-hidden">
                        <Image
                            priority={true}
                            src="/images/heroTicketBanner.png"
                            alt="hero tickets image"
                            className="w-full object-center xl:h-[80vh] 2xl:h-full transition-all ease-in-out overflow-hidden heroTicketImage"
                            width={1920}
                            height={1080}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))"}}
                        />
                    </motion.div>

                </div>
            </div>

        </div>
    )
}
