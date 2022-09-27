import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { imgIcons } from "../public/images/images";
import Image from "next/image";
import Link from "next/link";
import {
    customer,
    listCustomer,
    property,
    listproperty,
} from "../components/ExportTypes";

export default function CPPTable() {
    const router = useRouter();

    const { isLoading, data, isError } = useQuery("CPPtable", () => {
        return axios.get("http://localhost:3000/api/add-modify-customer");
    });

    if (isLoading) {
        return (
            <div className=" h-full w-full flex justify-center items-center">
                <h2>Loading...</h2>
            </div>
        );
    }
    if (isError) {
        return (
            <div className=" h-full w-full flex justify-center items-center">
                <h2>Error Can't find the data...</h2>
            </div>
        );
    }

    const result = data?.data.filter(
        (item: { table: string | string[] | undefined }) =>
            item.table === router.query.category
    );

    return (
        <div className=" p-7">
            <div className=" w-full flex justify-end mb-5">
                {router.query.category === "add & modify customer" && (
                    <Link href="/costumer-&-property-profile/add & modify customer?add_customer">
                        <a className=" line w-8 h-8 flex justify-center items-center font-poppins-m hover:bg-red1 duration-75 cursor-pointer text-24px bg-themeRed rounded-full text-white">
                            +
                        </a>
                    </Link>
                )}
                {router.query.category === "add & modify property" && (
                    <Link href="/costumer-&-property-profile/add & modify property?add_property">
                        <a className=" line w-8 h-8 flex justify-center items-center font-poppins-m hover:bg-red1 duration-75 cursor-pointer text-24px bg-themeRed rounded-full text-white">
                            +
                        </a>
                    </Link>
                )}
                <Link href="#">
                    <a className="ml-4 px-5 py-1  flex justify-center items-center font-poppins-l hover:bg-red1 duration-75 cursor-pointer text-12px bg-themeRed rounded-lg text-white">
                        Import
                    </a>
                </Link>
                {router.query.category === "add & modify customer" && (
                    <Link href="#">
                        <a className="ml-4 px-5 py-1  flex justify-center items-center font-poppins-l hover:bg-red1 duration-75 cursor-pointer text-12px bg-themeRed rounded-lg text-white">
                            Export
                        </a>
                    </Link>
                )}
            </div>
            <table className="w-full bg-white">
                <thead className=" border-b border-themeRed">
                    {router.query.category === "add & modify customer" && (
                        <tr>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                NAME
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                CO-OWNER
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                COMPANY
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                CONTACT PERSON
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                CONTACT NUMBER
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                EMAIL
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                ACTION
                            </th>
                        </tr>
                    )}
                    {router.query.category === "add & modify property" && (
                        <tr>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                UNIT CODE
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                OWNER
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                FLOOR
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                AREA
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                CLASS
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                TYPE
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                ACTION
                            </th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {/* List table for Customer */}
                    {router.query.category === "add & modify customer" &&
                        (result[0] ? (
                            result[0].items.map(
                                (item: customer, index: number) => (
                                    <ListCustomer detail={item} key={index} />
                                )
                            )
                        ) : (
                            <tr></tr>
                        ))}
                    {/* list table for Property */}
                    {router.query.category === "add & modify property" &&
                        (result[0] ? (
                            result[0].items.map(
                                (item: property, index: number) => (
                                    <ListProperty key={index} detail={item} />
                                )
                            )
                        ) : (
                            <tr></tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

const ListCustomer = ({ detail }: listCustomer) => {
    return (
        <>
            <tr className="border-b border-gray-200">
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.name.first}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.coOwner.first}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.companyName}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.contactName}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.contactNumber}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.email}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    <Link
                        href={`/costumer-&-property-profile/add & modify customer?view_customer=${detail.idNumber}`}
                    >
                        <a className="mr-4">
                            <Image
                                src={imgIcons.eye}
                                alt=""
                                width={15}
                                height={10}
                            />
                        </a>
                    </Link>
                    <Link
                        href={`/costumer-&-property-profile/add & modify customer?update_customer=${detail.idNumber}`}
                    >
                        <a>
                            <Image
                                src={imgIcons.action}
                                alt=""
                                width={15}
                                height={10}
                            />
                        </a>
                    </Link>
                </td>
            </tr>
        </>
    );
};

const ListProperty = ({ detail }: listproperty) => {
    return (
        <>
            <tr className="border-b border-gray-200">
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.unitCode}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.owner}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.floor}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.area}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.class}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.type}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    <Link
                        href={`/costumer-&-property-profile/add & modify property?view_property=${detail.unitCode}`}
                    >
                        <a className="mr-4">
                            <Image
                                src={imgIcons.eye}
                                alt=""
                                width={15}
                                height={10}
                            />
                        </a>
                    </Link>
                    <Link
                        href={`/costumer-&-property-profile/add & modify property?update_property=${detail.unitCode}`}
                    >
                        <a>
                            <Image
                                src={imgIcons.action}
                                alt=""
                                width={15}
                                height={10}
                            />
                        </a>
                    </Link>
                </td>
            </tr>
        </>
    );
};
