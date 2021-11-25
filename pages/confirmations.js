import Nav from "../components/Nav";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRouter } from "next/router";

/**
 *
 * @param {{
 *      items: [{ id: Number, sku: String, name: String, quantity: Number, orderId: String }],
 *      order: { id: Number, orderId: String, issuer: { id:Number, name: String } }
 * }}
 */
export default function Confirmations({ items: defItems, order: { orderId } }) {
    const router = useRouter();
    const [items, setItems] = useState([...defItems]);
    const redirectOnClick = () => setTimeout(() => router.push("/"), 450);
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
            <h1 className="text-2xl text-center my-6">Order ID: {orderId}</h1>
            <div className="overflow-x-auto justify-center flex">
                <div className="w-1/2">
                    <table className="table table-zebra w-full">
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
                                            onClick={() =>
                                                handleAddItem(item.id)
                                            }
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

                    <div className="flex justify-around mt-6">
                        <button
                            onClick={redirectOnClick}
                            className="btn btn-success"
                            type="submit"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={redirectOnClick}
                            className="btn btn-error"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            order: {
                id: 1,
                issuer: {
                    id: 1,
                    name: "John Doe",
                },
                orderId: "12345",
            },
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
            ],
        },
    };
}
