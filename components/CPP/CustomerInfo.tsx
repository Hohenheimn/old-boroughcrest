import React from "react";
import type { customer } from "../ExportTypes";

type CustomerInfo = {
    CustomerData: customer;
};

export default function CustomerInfo({ CustomerData }: CustomerInfo) {
    return (
        <ul className=" bg-white p-10 ">
            <li className=" flex flex-wrap pb-6 mb-6 border-b-2 border-gray-300">
                <aside className=" w-33% pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        ID NO.
                    </h1>
                    <p className=" text-16px">{CustomerData.idNumber}</p>
                </aside>
                <aside className=" w-33% pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        CLASS
                    </h1>
                    <p className=" text-16px">{CustomerData.class}</p>
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
                    <p className=" text-16px">{CustomerData.coOwner.last}</p>
                </aside>
                <aside className=" w-33% pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        FIRST NAME
                    </h1>
                    <p className=" text-16px">{CustomerData.coOwner.first}</p>
                </aside>
                <aside className=" w-33% pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        MIDDLE NAME
                    </h1>
                    <p className=" text-16px">{CustomerData.coOwner.middle}</p>
                </aside>
            </li>
            <li className=" flex flex-wrap mb-6 ">
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        COMPANY NAME
                    </h1>
                    <p className=" text-16px">{CustomerData.companyName}</p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        CONTACT PERSON
                    </h1>
                    <p className=" text-16px">{CustomerData.contactName}</p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        CITIZENSHIP
                    </h1>
                    <p className=" text-16px">{CustomerData.citizenship}</p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        TIN NUMBER
                    </h1>
                    <p className=" text-16px">{CustomerData.tinNo}</p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        REGISTERED ADDRESS
                    </h1>
                    <p className=" text-16px">
                        {CustomerData.registeredAddress}
                    </p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        MAILING ADDRESS
                    </h1>
                    <p className=" text-16px">{CustomerData.mailingAddress}</p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        CONTACT NUMBER
                    </h1>
                    <p className=" text-16px">{CustomerData.contactNumber}</p>
                </aside>
                <aside className=" w-33% mb-4 pr-1">
                    <h1 className=" text-themeRed text-20px font-poppins-b">
                        EMAIL ADDRESS
                    </h1>
                    <p className=" text-16px">{CustomerData.email}</p>
                </aside>
            </li>

            <li className="w-full mt-10 flex justify-end">
                <button className="hover:bg-red1 duration-75 text-16px bg-themeRed text-white font-poppins-m px-6 py-2 mb-4 rounded-md">
                    SEND PORTAL
                </button>
            </li>
        </ul>
    );
}
