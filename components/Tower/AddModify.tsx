import { useRouter } from "next/router";
import Link from "next/link";
import Table from "./Table";
import AddModal from "./AddModal";

export default function Tower() {
    const router = useRouter();
    return (
        <div>
            {router.query.add_tower !== undefined && <AddModal />}
            {router.query.update_tower !== undefined && (
                <AddModal id={router.query.update_tower} />
            )}
            <header className=" p-5 bg-white shadow-lg">
                <h1 className=" text-24px">Add & Modify Tower</h1>
            </header>
            <div className=" p-9">
                <ul className=" flex justify-between items-center mb-5">
                    <li>
                        <select
                            name=""
                            id=""
                            className=" p-1 text-14px rounded-md border border-themeRed font-poppins-b text-red1 outline-none"
                        >
                            <option value="">Property Name</option>
                        </select>
                    </li>
                    <li className=" flex">
                        <Link href="/tower?add_tower">
                            <a className=" line w-8 h-8 flex justify-center items-center font-poppins-m hover:bg-red1 duration-75 cursor-pointer text-24px bg-themeRed rounded-full text-white">
                                +
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="ml-4 px-5 py-1  flex justify-center items-center font-poppins-l hover:bg-red1 duration-75 cursor-pointer text-12px bg-themeRed rounded-lg text-white">
                                Import
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="ml-4 px-5 py-1  flex justify-center items-center font-poppins-l hover:bg-red1 duration-75 cursor-pointer text-12px bg-themeRed rounded-lg text-white">
                                Export
                            </a>
                        </Link>
                    </li>
                </ul>
                <Table />
            </div>
        </div>
    );
}
