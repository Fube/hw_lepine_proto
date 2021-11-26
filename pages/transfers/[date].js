import Transfer from "../../components/Transfer";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";

/**
 * @param {{ items: [{ id: Number, sku: String, name: String, quantity: Number, orderId: String }] }}
 */
export default function SingleTransfer({ items }) {
    const router = useRouter();
    const {
        query: { date },
    } = useRouter();
    const redirectOnClick = () => setTimeout(() => router.push("/"), 450);
    return (
        <>
            <Nav />
            <h1 className="text-4xl text-center my-6">For {date}</h1>
            <Transfer items={items} />
            <div className="flex justify-center mt-6">
                <button
                    onClick={redirectOnClick}
                    className="btn mx-6 btn-success"
                    type="submit"
                >
                    Approve
                </button>
                <button
                    onClick={redirectOnClick}
                    className="btn mx-6 btn-error"
                >
                    Cancel
                </button>
            </div>
        </>
    );
}

export function getServerSideProps(context) {
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
