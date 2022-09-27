import React from "react";
import Image from "next/image";
import { imgOthers } from "../../public/images/images";
import Link from "next/link";

export default function AddCustomer() {
    return (
        <form className=" p-10">
            <h1 className=" text-16px text-themeRed mb-2">PRIMARY OWNER</h1>
            <ul className="flex mb-2">
                <li className=" w-2/6 flex p-2 justify-center items-center">
                    <aside className="h-20 w-20 rounded-full bg-gray relative">
                        <div className=" w-full h-full overflow-hidden rounded-full">
                            <img src="" className="h-full w-full" alt="" />
                        </div>
                        <label
                            htmlFor="profile"
                            className="w-5 h-5 rounded-full cursor-pointer hover:bg-red1 bg-themeRed absolute bottom-3 -right-0"
                        ></label>
                    </aside>
                    <input type="file" id="profile" className="hidden" />
                </li>
                <li className=" w-2/6 flex p-2 justify-center items-center">
                    <Image src={imgOthers.idSample1} alt="" />
                    <input type="file" id="validID" className="hidden" />
                    <label
                        htmlFor="validID"
                        className=" text-16px text-themeRed ml-2 font-poppins-b"
                    >
                        UPLOAD VALID ID
                    </label>
                </li>
                <li className=" w-2/6 flex p-2 justify-center items-center">
                    <label
                        htmlFor="signature"
                        className=" text-16px text-themeRed font-poppins-b"
                    >
                        UPLOAD SIGNATURE
                    </label>
                    <input type="file" id="signature" className="hidden" />
                </li>
            </ul>
            <ul className="flex flex-wrap border-b-2 border-gray-300 pb-3">
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">LAST NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center  mb-2">
                    <h3 className="mb-1 text-themeRed">FIRST NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">MIDDLE NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">ID NO.</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center  mb-2">
                    <h3 className="mb-1 text-themeRed">CLASS</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
            </ul>
            <ul className="flex flex-wrap border-b-2 border-gray-300 py-5">
                <h3 className=" w-full text-themeRed text-20px mb-1">
                    SPOUSE / CO-WORKER
                </h3>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">LAST NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center  mb-2">
                    <h3 className="mb-1 text-themeRed">FIRST NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">MIDDLE NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
            </ul>
            <ul className="flex flex-wrap pt-5">
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">COMPANY NAME</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center  mb-2">
                    <h3 className="mb-1 text-themeRed">CONTACT PERSON</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">CITIZENSHIP</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">TIN</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center  mb-2">
                    <h3 className="mb-1 text-themeRed">REGISTERED ADDRESS</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">MAILING ADDRESS</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">CONTACT NO.</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center  mb-2">
                    <h3 className="mb-1 text-themeRed">EMAIL</h3>
                    <input
                        type="text"
                        className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none"
                    />
                </li>
                <li className=" w-2/6 p-2 justify-center items-center mb-2">
                    <h3 className="mb-1 text-themeRed">STATUS</h3>
                    <select className=" w-full border border-gray-300 rounded-lg inline p-1 px-2 outline-none">
                        <option value=""></option>
                    </select>
                </li>
                <li className="w-full mt-10 flex justify-end items-center">
                    <Link href="/costumer-&-property-profile/add & modify customer">
                        <a className=" px-4 py-1 text-12px font-poppins-b text-themeRed">
                            Cancel
                        </a>
                    </Link>
                    <button className="hover:bg-red1 duration-75 text-12px bg-themeRed text-white font-poppins-m px-6 py-2 rounded-md">
                        SAVE
                    </button>
                </li>
            </ul>
        </form>
    );
}
