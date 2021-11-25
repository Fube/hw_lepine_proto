import Link from "next/link";

export default function Nav() {
    return (
        <>
            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
                <div className="flex-none px-2 mx-2">
                    <span className="text-lg font-bold">
                        <Link href="/">Lepine</Link>
                    </span>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="items-stretch hidden lg:flex">
                        <Link href="/transfers">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Transfers
                            </a>
                        </Link>
                        <Link href="/requests">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Requests
                            </a>
                        </Link>
                        <Link href="/inventory">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Inventory
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
