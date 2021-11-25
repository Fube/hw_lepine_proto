import Link from "next/link";
import Nav from "../components/Nav";

/**
 * @param {{ transfers: [{ id: Number, date: String }] }}
 */
export default function Transfers({ transfers }) {
    return (
        <>
            <Nav />
            <h1 className="text-3xl text-center my-6">Upcoming Transfers</h1>
            <div className="overflow-x-auto justify-center flex">
                <table className="table w-1/2 table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transfers.map(({ id, date }) => (
                            <Link key={id} href={`/transfers/${id}`} passHref>
                                <tr className="hover">
                                    <td>{id}</td>
                                    <td>{date}</td>
                                </tr>
                            </Link>
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
            transfers: [
                {
                    id: 1,
                    date: "03/08/2021",
                },
                {
                    id: 2,
                    date: "11/13/2021",
                },
                {
                    id: 3,
                    date: "11/24/2021",
                },
                {
                    id: 4,
                    date: "01/11/2021",
                },
                {
                    id: 5,
                    date: "10/24/2021",
                },
                {
                    id: 6,
                    date: "08/01/2021",
                },
                {
                    id: 7,
                    date: "06/03/2021",
                },
                {
                    id: 8,
                    date: "06/08/2021",
                },
            ],
        },
    };
}
