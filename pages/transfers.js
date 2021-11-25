import Head from "next/head";
import Image from "next/image";
import { Icon, InlineIcon } from "@iconify/react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

/**
 * @param {{ items: [{ id: Number, sku: String, name: String, quantity: Number, orderId: String }] }}
 */
export default function Transfers({ items: defItems }) {
    const [items, setItems] = useState([...defItems]);

    const handleRemoveItem = (id) => {
        const item = items.find((item) => item.id === id);
        --item.quantity;
        setItems([...items]);
    };

    const handleAddItem = (id) => {
        const item = items.find((item) => item.id === id);
        ++item.quantity;
        setItems([...items]);
    };

    return (
        <>
            <Nav />
            <div className="overflow-x-auto justify-center flex">
                <table className="table w-1/2 table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Sku</th>
                            <th>Quantity</th>
                            <th>Order Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="hover">
                                <th>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.sku}</td>
                                <td>{item.quantity}</td>
                                <td>{item.orderId}</td>
                                <td>
                                    <button
                                        className="button"
                                        onClick={() => handleAddItem(item.id)}
                                    >
                                        <Icon
                                            icon="ion:add-circle-outline"
                                            width="32"
                                        />
                                    </button>
                                    <button
                                        className="button"
                                        onClick={() =>
                                            handleRemoveItem(item.id)
                                        }
                                    >
                                        <Icon
                                            icon="ion:remove-circle-outline"
                                            width="32"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            items: [
                {
                    id: 1,
                    sku: "311125",
                    name: "Kaffir-lily",
                    quantity: 12,
                    orderId: "844772",
                },
                {
                    id: 2,
                    sku: "304805",
                    name: "Wheelscale Saltbush",
                    quantity: 52,
                    orderId: "140368",
                },
                {
                    id: 3,
                    sku: "975581",
                    name: "Cleistocactus",
                    quantity: 38,
                    orderId: "890240",
                },
                {
                    id: 4,
                    sku: "988964",
                    name: "Neyraudia",
                    quantity: 64,
                    orderId: "422630",
                },
                {
                    id: 5,
                    sku: "442657",
                    name: "Salac Palm",
                    quantity: 11,
                    orderId: "961152",
                },
                {
                    id: 6,
                    sku: "776871",
                    name: "Oahu Lovegrass",
                    quantity: 85,
                    orderId: "675705",
                },
                {
                    id: 7,
                    sku: "182399",
                    name: "Stansell's Fleabane",
                    quantity: 63,
                    orderId: "953654",
                },
                {
                    id: 8,
                    sku: "864955",
                    name: "Protoparmelia Lichen",
                    quantity: 77,
                    orderId: "450916",
                },
                {
                    id: 9,
                    sku: "148501",
                    name: "Polyblastia Lichen",
                    quantity: 97,
                    orderId: "276008",
                },
                {
                    id: 10,
                    sku: "910278",
                    name: "Arizona Blackfoot",
                    quantity: 67,
                    orderId: "600446",
                },
            ],
        },
    };
}
