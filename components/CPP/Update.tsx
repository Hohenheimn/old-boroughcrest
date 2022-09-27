import React, { useState } from "react";
import Image from "next/image";
import { imgOthers } from "../../public/images/images";
import axios from "axios";
import { useQuery } from "react-query";

type View = {
    id: string[] | string | undefined;
};

export default function View({ id }: View) {
    // fetching data
    const { isLoading, data, isError } = useQuery("ViewCustomer", () => {
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

    const FilteredData = data?.data[0].items.filter(
        (item: { idNumber: number | string[] | undefined }) => {
            return item.idNumber === id;
        }
    );
    const CustomerData = FilteredData[0];

    const [isData, setData] = useState({
        idNo: CustomerData.idNumber,
        name: {
            last: CustomerData.name.last,
            first: CustomerData.name.first,
            middle: CustomerData.name.middle,
        },
        class: CustomerData.class,
        coOwner: {
            last: CustomerData.coOwner.last,
            first: CustomerData.coOwner.first,
            middle: CustomerData.coOwner.middle,
        },
        companyName: CustomerData.companyName,
        contactPerson: CustomerData.contactName,
        citizenship: CustomerData.citizenship,
        tinNumber: CustomerData.tinNo,
        registeredAddress: CustomerData.registeredAddress,
        mailingAddress: CustomerData.mailingAddress,
        contactNumber: CustomerData.contactNumber,
        email: CustomerData.email,
    });

    return (
        <div className="flex flex-wrap">
            <aside className=" w-2/6 p-3 bg-red5 flex flex-col items-center justify-center min-h-80vh">
                <div className=" w-20 h-20 rounded-full border-4 border-themeRed relative">
                    <Image src={imgOthers.sampleProfile} layout="fill" />
                </div>
                <h1 className=" text-themeRed my-2 font-poppins-b">Active</h1>
                <input
                    type="text"
                    className=" text-14px p-2 text-center bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                    value={`${isData.name.first} ${CustomerData.name.last}`}
                />
                <p className=" text-themeRed text-16px">PRIMARY NAME</p>
                <div className=" my-5">
                    <Image
                        src={imgOthers.idSample1}
                        placeholder="blur"
                        width={250}
                        height={150}
                    />
                </div>
                <h4 className="text-12px mt-10">SIGNATURE HERE</h4>
            </aside>
            <form className=" w-4/6 pt-3 bg-white">
                <ul className=" bg-white p-10 ">
                    <li className=" flex flex-wrap pb-6 mb-6 border-b-2 border-gray-300">
                        <aside className=" w-33% pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                ID NO.
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.idNo}
                            />
                        </aside>
                        <aside className=" w-33% pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                CLASS
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.class}
                            />
                        </aside>
                    </li>
                    <li className=" flex flex-wrap pb-6 mb-6 border-b-2 border-gray-300">
                        <h1 className=" w-full text-24px mb-6 text-themeRed font-poppins-b">
                            SPOUSE / CO-OWNER
                        </h1>
                        <aside className=" w-33% pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                LAST NAME
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.name.last}
                            />
                        </aside>
                        <aside className=" w-33% pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                FIRST NAME
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.name.first}
                            />
                        </aside>
                        <aside className=" w-33% pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                MIDDLE NAME
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.name.middle}
                            />
                        </aside>
                    </li>
                    <li className=" flex flex-wrap mb-6 ">
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                COMPANY NAME
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.companyName}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                CONTACT PERSON
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.contactPerson}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                CITIZENSHIP
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.citizenship}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                TIN NUMBER
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.tinNumber}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                REGISTERED ADDRESS
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.registeredAddress}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                MAILING ADDRESS
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.mailingAddress}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                CONTACT NUMBER
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.contactNumber}
                            />
                        </aside>
                        <aside className=" w-33% mb-4 pr-1">
                            <h1 className=" text-themeRed text-20px font-poppins-b">
                                EMAIL ADDRESS
                            </h1>
                            <input
                                type="text"
                                className=" text-14px p-2 text-start bg-transparent rounded-lg border border-gray-300 my-2 outline-none"
                                value={isData.email}
                            />
                        </aside>
                    </li>

                    <li className="w-full mt-10 flex justify-end items-center">
                        <button className=" px-6 py-2 text-16px">Cancel</button>
                        <button className="hover:bg-red1 duration-75 text-16px bg-themeRed text-white font-poppins-m px-6 py-2 rounded-md">
                            SEND PORTAL
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
