import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

type id = {
    id: string[] | string;
};

export default function ({ id }: id) {
    const modal = useRef<any>();
    const router = useRouter();

    useEffect(() => {
        const clickOutSide = (e: any) => {
            if (!modal.current.contains(e.target)) {
                router.push("/client-request-processing/admin review");
            }
        };
        document.addEventListener("mousedown", clickOutSide);
        return () => {
            document.removeEventListener("mousedown", clickOutSide);
        };
    }, []);

    const { isLoading, data, isError } = useQuery("AdminReview_View", () => {
        return axios.get("http://localhost:3000/api/client-request-processing");
    });

    if (isLoading) {
        return (
            <div className=" fixed w-full h-full flex justify-center items-center z-10 top-0 left-0 bg-transparentGray">
                <ul
                    ref={modal}
                    className=" flex flex-wrap p-10 bg-white w-11/12 max-w-580px"
                >
                    <h2>Loading...</h2>
                </ul>
            </div>
        );
    }
    if (isError) {
        return (
            <div className=" fixed w-full h-full flex justify-center items-center z-10 top-0 left-0 bg-transparentGray">
                <ul
                    ref={modal}
                    className=" flex flex-wrap p-10 bg-white w-11/12 max-w-580px"
                >
                    <h2>Something is wrong...</h2>
                </ul>
            </div>
        );
    }

    const FilteredData = data?.data[0].items.filter(
        (item: string | string[] | any) => {
            return item.id == id;
        }
    );

    const ClientData = FilteredData[0];

    return (
        <div className=" fixed w-full h-full flex justify-center items-center z-10 top-0 left-0 bg-transparentGray">
            <ul
                ref={modal}
                className=" flex flex-wrap p-10 bg-white w-11/12 max-w-580px"
            >
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">CLIENT</h3>
                    <p className=" text-12px">{ClientData.client}</p>
                </li>
                <li className=" w-2/6 mb-10">
                    <h3 className=" text-themeRed text-12px">PROPERTY</h3>
                    <p className=" text-12px">{ClientData.property}</p>
                </li>
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">TOWER</h3>
                    <p className=" text-12px">{ClientData.tower}</p>
                </li>
                <li className=" w-2/6 mb-10">
                    <h3 className=" text-themeRed text-12px">TYPE</h3>
                    <p className=" text-12px">{ClientData.type}</p>
                </li>
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">REQUEST TIME</h3>
                    <p className=" text-12px">{ClientData.requestTime}</p>
                </li>
                <li className=" w-2/6 mb-10">
                    <h3 className=" text-themeRed text-12px">ITEM</h3>
                    <p className=" text-12px">{ClientData.item}</p>
                </li>
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">QUANTITY</h3>
                    <p className=" text-12px">{ClientData.quantity}</p>
                </li>
                <li className=" w-2/6 mb-10">
                    <h3 className=" text-themeRed text-12px">DATE & TIME</h3>
                    <p className=" text-12px">{ClientData.dateTime}</p>
                </li>
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">
                        DELIVERY / PULL OUT
                    </h3>
                    <p className=" text-12px">{ClientData.deliveryPullOut}</p>
                </li>
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">COURIER NAME</h3>
                    <p className=" text-12px">{ClientData.courierName}</p>
                </li>
                <li className=" w-2/6 mb-5">
                    <h3 className=" text-themeRed text-12px">PURPOSES</h3>
                    <p className=" text-12px">{ClientData.purposes}</p>
                </li>
                <li className=" mt-6 flex w-full justify-end items-end">
                    <button className=" w-32 py-1 rounded-md bg-themeRed outline-none text-white text-14px mr-4">
                        SUBMIT
                    </button>
                    <button className=" w-32 py-1 rounded-md border-2 border-themeRed  outline-none text-themeRed text-14px mr-4">
                        DISAPPROVE
                    </button>
                </li>
            </ul>
        </div>
    );
}
