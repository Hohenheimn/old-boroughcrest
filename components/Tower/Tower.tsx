import React, { useState } from "react";
import Table from "./Table";
import Link from "next/link";

export default function Tower() {
    const [isTab, setTab] = useState(false);

    return (
        <div>
            <header className=" p-5 bg-white shadow-lg mb-10">
                <h1 className=" text-24px">Tower</h1>
            </header>
            <div className=" w-11/12 bg-white m-auto p-5 mb-4">
                <ul className=" flex flex-wrap justify-between">
                    <li className=" text-12px  w-1/12 ">
                        <p className="text-themeRed font-poppins-b mb-2">
                            CODE
                        </p>
                        <p>74897</p>
                    </li>
                    <li className=" text-12px  w-1/12">
                        <p className="text-themeRed  font-poppins-b mb-2">
                            NAME
                        </p>
                        <p>Lorem ipsum</p>
                    </li>
                    <li className=" text-12px  w-3/12">
                        <p className="text-themeRed font-poppins-b mb-2">
                            DESCRIPTION
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit dolorem tempore inventore excepturi,
                            corrupti laborum? Commodi nostrum maiores hic a
                            magni, est ea suscipit necessitatibus. Optio omnis
                            doloribus eos praesentium.
                        </p>
                    </li>
                    <li className=" text-12px  w-1/12">
                        <p className="text-themeRed font-poppins-b mb-2">
                            CREATED AT
                        </p>
                        <p>Lorem ipsum</p>
                    </li>
                    <li className=" text-12px  w-1/12">
                        <p className="text-themeRed font-poppins-b mb-2">
                            UPDATED AT
                        </p>
                        <p>Lorem ipsum</p>
                    </li>
                    <li className=" text-12px  w-1/12">
                        <p className="text-themeRed  font-poppins-b mb-2">
                            CREATED BY
                        </p>
                        <p>Lorem ipsum</p>
                    </li>
                    <li className=" text-12px  w-1/12">
                        <p className="text-themeRed font-poppins-b mb-2">
                            UPDATED BY
                        </p>
                        <p>Lorem ipsum</p>
                    </li>
                </ul>
            </div>
            <div className=" w-11/12 m-auto mb-10">
                <ul className=" flex justify-between">
                    <li className=" flex items-end">
                        <li
                            className={` ${
                                isTab
                                    ? "px-4 py-2 bg-themeRed"
                                    : "px-2 py-1 bg-lightGray"
                            }  text-12px text-white cursor-pointer`}
                            onClick={() => {
                                setTab(true);
                            }}
                        >
                            List of Floor
                        </li>
                        <li
                            className={` ${
                                isTab
                                    ? "px-2 py-1 bg-lightGray"
                                    : "px-4 py-2 bg-themeRed"
                            }  text-12px text-white cursor-pointer`}
                            onClick={() => {
                                setTab(false);
                            }}
                        >
                            List of Property Unit
                        </li>
                    </li>
                    <li className=" flex mb-4">
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
