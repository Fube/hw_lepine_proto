import { useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

/**
 * @param {{ items: [{ id: Number, sku: String, name: String, quantity: Number, orderId: String }] }}
 */
export default function Transfer({ items: defItems }) {
    const { date } = useRouter();
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
