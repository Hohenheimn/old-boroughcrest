import React, { useState } from "react";
import Image from "next/image";
import { imgOthers, imgLogos } from "../../public/images/images";
import { ImSearch } from "react-icons/im";
import { MdOutlineNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { getCookie, deleteCookie } from "cookies-next";
import api from "../../util/api";
import { useRouter } from "next/router";

export default function Header() {
    const [isProfileMenuToggle, setProfileMenuToggle] = useState(false);
    const router = useRouter();
    return (
        <nav className="flex justify-between items-center h-20 px-10 l:px-4">
            <aside className="flex items-center">
                <Image src={imgLogos.logo2} />
                <h1 className="font-poppins-m text-20px text-red1 ml-2 ">
                    DEUS
                </h1>
            </aside>
            <ul className=" flex items-center">
                <li className="mr-5">
                    <div className="flex shadow-md h-10 px-5 items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none text-16px w-96 l:w-64 font-poppins-r"
                        />
                        <ImSearch className=" text-gray-300" />
                    </div>
                </li>
                <li className="mr-5 shadow-md h-10 w-10 flex justify-center items-center">
                    <MdOutlineNotifications className="text-24px text-red1 font-bold cursor-pointer" />
                </li>
                <li
                    className="flex items-center cursor-pointer relative"
                    onClick={() => setProfileMenuToggle(!isProfileMenuToggle)}
                >
                    <div className="flex items-center">
                        <Image src={imgOthers.sampleProfile} />
                    </div>
                    {isProfileMenuToggle && (
                        <ul className=" absolute top-full right-0 bg-themeRed text-white py-3 w-56">
                            <li className="px-6 py-2 w-full hover:bg-red1">
                                <Link href="/profile">
                                    <a>View Profile</a>
                                </Link>
                            </li>
                            <li className="px-6 py-2 w-full hover:bg-red1"></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}
