
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ticket-list";
import {purchasedTickets} from "@/constants";
import '../../styles/twclass.css';
export default function Inventory() {
    return (
        <div className="h-screen">
            <div >
                <p className="inventoryContainer">Purchased Tickets</p>

            </div>
            <div className="inventoryBox">

            <div
                    className="inventoryContent"
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >
                    <div className="gridContainerInventory">
                        {purchasedTickets.map((purchasedTickets, index) => (
                            <div key={index} className="ticketItem">
                                <div>
                                    <CardContainer>
                                        <CardBody>
                                            <CardItem translateZ="100">
                                                <Image
                                                    src={purchasedTickets.image}
                                                    alt="Product screenshot"
                                                    priority={true}
                                                    className="ticketImageInventory"
                                                    width={1920}
                                                    height={1080}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))"}}
                                                />
                                            </CardItem>
                                        </CardBody>
                                    </CardContainer>
                                </div>
                                <div className="infoContainer">
                                    <p className="infoItem">Purchase date: {purchasedTickets.inventory.purchaseDate}</p>
                                    <p className="infoItem">Price: {purchasedTickets.inventory.price}</p>
                                    <p className="infoItem">Category: {purchasedTickets.inventory.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
