import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { imgIcons } from "../../public/images/images";
import Image from "next/image";
import Link from "next/link";
import { adminReview, adminReviewList } from "../ExportTypes";
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

type CRPTable = {
    setApprove: Function;
    setDisapprove: Function;
};

export default function CRPTable({ setApprove, setDisapprove }: CRPTable) {
    const router = useRouter();

    const { isLoading, data, isError } = useQuery("CRPTable", () => {
        return axios.get("http://localhost:3000/api/client-request-processing");
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
            <table className="w-full bg-white">
                <thead className=" border-b border-themeRed">
                    {router.query.category === "admin review" && (
                        <tr>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                CLIENT
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                PROPERTY
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                TOWER
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                TYPE
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                REQUEST TIME
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                DATA & TIME
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                ACTION
                            </th>
                        </tr>
                    )}
                    {router.query.category === "manage approval" && (
                        <tr>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                CLIENT
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                PROPERTY
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                TOWER
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                TYPE
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                REQUEST TIME
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                DATA & TIME
                            </th>
                            <th className=" text-12px text-themeRed p-3 text-start">
                                ACTION
                            </th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {/* List table for Admin Review */}
                    {router.query.category === "admin review" &&
                        (result[0] ? (
                            result[0].items.map(
                                (item: adminReview, index: number) => (
                                    <AdminReview
                                        detail={item}
                                        setApprove={setApprove}
                                        setDisapprove={setDisapprove}
                                        key={index}
                                    />
                                )
                            )
                        ) : (
                            <tr></tr>
                        ))}
                    {/* list table for Manage Approval */}
                    {router.query.category === "manage approval" &&
                        (result[0] ? (
                            result[0].items.map(
                                (item: adminReview, index: number) => (
                                    <ManageApproval
                                        key={index}
                                        detail={item}
                                        setApprove={setApprove}
                                        setDisapprove={setDisapprove}
                                    />
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

const AdminReview = ({
    detail,
    setApprove,
    setDisapprove,
}: adminReviewList) => {
    return (
        <>
            <tr className="border-b border-gray-200">
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.client}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.property}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.tower}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.type}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.requestTime}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.dateTime}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    <Link
                        href={`/client-request-processing/admin review?view_review=${detail.id}`}
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
                    <button
                        className=" text-themeRed mr-4 font-poppins-b cursor-pointer"
                        onClick={() => setApprove(detail.id)}
                    >
                        <BsCheckLg />
                    </button>
                    <button
                        className=" text-themeRed font-poppins-b cursor-pointer"
                        onClick={() => setDisapprove(detail.id)}
                    >
                        <AiFillDelete />
                    </button>
                </td>
            </tr>
        </>
    );
};

const ManageApproval = ({ detail }: adminReviewList) => {
    return (
        <>
            <tr className="border-b border-gray-200">
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.client}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.property}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.tower}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.type}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.requestTime}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    {detail.dateTime}
                </td>
                <td className=" text-12px text-black p-3 py-2 text-start">
                    <Link
                        href={`/costumer-&-property-profile/add & modify customer?view_customer=${detail.id}`}
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
                        href={`/costumer-&-property-profile/add & modify customer?update_customer=${detail.id}`}
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
function setApprove(id: number): void {
    throw new Error("Function not implemented.");
}
