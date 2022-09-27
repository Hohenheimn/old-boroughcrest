import React, { useState } from "react";
import Image from "next/image";
import { imgOthers } from "../../public/images/images";
import CustomerInfor from "../CPP/CustomerInfo";
import ListProperty from "../CPP/ListProperty";
import axios from "axios";
import { useQuery } from "react-query";

type View = {
    id: string[] | string | undefined;
};

export default function View({ id }: View) {
    const [isCusInfo, setCusInfo] = useState(true);
    const [isListProp, setListProp] = useState(false);

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

    return (
        <div className="flex flex-wrap">
            <aside className=" w-2/6 p-3 bg-red5 flex flex-col items-center justify-center min-h-80vh">
                <div className=" w-20 h-20 rounded-full border-4 border-themeRed relative">
                    <Image src={imgOthers.sampleProfile} layout="fill" />
                </div>
                <h1 className=" text-themeRed my-2 font-poppins-b">Active</h1>
                <p className=" text-16px">
                    {CustomerData.name.first} {CustomerData.name.last}
                </p>
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
            <aside className=" w-4/6 pt-3">
                <ul className=" flex items-end">
                    <li
                        className={` ${
                            isCusInfo
                                ? "px-6 py-3 bg-themeRed"
                                : "px-4 py-2 bg-lightGray"
                        }  text-12px text-white cursor-pointer`}
                        onClick={() => {
                            setCusInfo(true);
                            setListProp(false);
                        }}
                    >
                        Customer Information
                    </li>
                    <li
                        className={` ${
                            isListProp
                                ? "px-6 py-3 bg-themeRed"
                                : "px-4 py-2 bg-lightGray"
                        }  text-12px text-white cursor-pointer`}
                        onClick={() => {
                            setCusInfo(false);
                            setListProp(true);
                        }}
                    >
                        List of Property
                    </li>
                </ul>
                {isCusInfo && <CustomerInfor CustomerData={CustomerData} />}
                {isListProp && <ListProperty CustomerID={id} />}
            </aside>
        </div>
    );
}
