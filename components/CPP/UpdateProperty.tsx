import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "axios";

type ViewProperty = {
    id: string[] | string | undefined;
};

export default function ViewProperty({ id }: ViewProperty) {
    const router = useRouter();
    const modalRef = useRef<any>();

    useEffect(() => {
        const OutsideClikc = (event: any) => {
            if (!modalRef.current.contains(event.target)) {
                router.push(
                    "/costumer-&-property-profile/add & modify property"
                );
            }
        };
        document.addEventListener("mousedown", OutsideClikc);

        return () => {
            document.removeEventListener("mousedown", OutsideClikc);
        };
    }, []);

    const { isLoading, data, isError } = useQuery("ViewProperty", () => {
        return axios.get("http://localhost:3000/api/add-modify-customer");
    });

    if (isLoading) {
        return (
            <div className=" w-full h-full flex justify-center items-center">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (isError) {
        return (
            <div className=" w-full h-full flex justify-center items-center">
                <h2>Error Can't find a data...</h2>
            </div>
        );
    }

    const Filtereddata = data?.data[1].items.filter(
        (item: { unitCode: string | string[] | undefined }) => {
            return item.unitCode === id;
        }
    );

    const PropertyData = Filtereddata[0];

    return (
        <div className=" fixed w-screen h-screen top-0 left-0 z-10 bg-transparentGray flex justify-center items-center">
            <section
                ref={modalRef}
                className=" p-7 bg-white w-11/12 max-w-580px rounded-lg"
            >
                <ul className="flex flex-wrap border-b-2 border-gray-300">
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">ID</h4>
                        <input
                            type="text"
                            value={`${PropertyData.idNumber}`}
                            className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg"
                        />
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">UNIT CODE</h4>
                        <input
                            type="text"
                            value={`${PropertyData.unitCode}`}
                            className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg"
                        />
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">PROJECT</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.project}</option>
                        </select>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">ADDRESS</h4>
                        <input
                            type="text"
                            value={`${PropertyData.address}`}
                            className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg"
                        />
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">DEVELOPER</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.developer}</option>
                        </select>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">TOWER</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">Banyan Tree</option>
                        </select>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">FLOOR</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.floor}</option>
                        </select>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">AREA</h4>
                        <input
                            type="text"
                            value={`${PropertyData.area}`}
                            className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg"
                        />
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">CLASS</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.class}</option>
                        </select>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">TYPE</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.type}</option>
                        </select>
                    </li>
                </ul>
                <ul className="flex flex-wrap border-b-2 border-gray-300 pt-5">
                    <h4 className=" text-16px text-themeRed mb-2 w-full">
                        STATUS (MM/DD/YYYY)
                    </h4>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">ACCEPTANCE</h4>
                        <input
                            type="text"
                            value={`${PropertyData.acceptance}`}
                            className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg"
                        />
                    </li>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">TURN OVER</h4>
                        <input
                            value={`${PropertyData.turnover}`}
                            className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg"
                        />
                    </li>
                </ul>
                <ul className="flex flex-wrap pt-5">
                    <h4 className=" text-16px text-themeRed mb-2 w-full">
                        BILLIN (MM/DD/YYYY)
                    </h4>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">CUT-OFF</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.cutOff}</option>
                        </select>
                    </li>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">DUE DATE</h4>
                        <select className="px-2 py-1 text-12px outline-none border border-gray-300 w-10/12 rounded-lg">
                            <option value="">{PropertyData.dueDate}</option>
                        </select>
                    </li>

                    <li className="w-full mt-10 flex justify-end items-center">
                        <Link href="/costumer-&-property-profile/add & modify property">
                            <a className=" px-4 py-1 text-12px font-poppins-b text-themeRed">
                                Cancel
                            </a>
                        </Link>
                        <button className="hover:bg-red1 duration-75 text-12px bg-themeRed text-white font-poppins-m px-6 py-2 rounded-md">
                            SAVE
                        </button>
                    </li>
                </ul>
            </section>
        </div>
    );
}
