import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";

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
                        <h4 className=" text-themeRed text-12px">UNIT CODE</h4>
                        <p className="text-12px">{PropertyData.unitCode}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">PROJECT</h4>
                        <p className="text-12px">{PropertyData.project}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">ADDRESS</h4>
                        <p className="text-12px">{PropertyData.address}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">DEVELOPER</h4>
                        <p className="text-12px">{PropertyData.developer}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">TOWER</h4>
                        <p className="text-12px">{PropertyData.tower}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">FLOOR</h4>
                        <p className="text-12px">{PropertyData.floor}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">UNIT</h4>
                        <p className="text-12px">{PropertyData.address}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">AREA</h4>
                        <p className="text-14px">{PropertyData.area}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">CLASS</h4>
                        <p className="text-12px">{PropertyData.class}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">TYPE</h4>
                        <p className="text-12px">{PropertyData.type}</p>
                    </li>
                </ul>
                <ul className="flex flex-wrap border-b-2 border-gray-300 pt-5">
                    <h4 className=" text-16px text-themeRed mb-2 w-full">
                        STATUS (MM/DD/YYYY)
                    </h4>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">ACCEPTANCE</h4>
                        <p className="text-12px">{PropertyData.acceptance}</p>
                    </li>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">TURN OVER</h4>
                        <p className="text-12px">{PropertyData.turnover}</p>
                    </li>
                </ul>
                <ul className="flex flex-wrap border-b-2 border-gray-300 pt-5">
                    <h4 className=" text-16px text-themeRed mb-2 w-full">
                        BILLIN (MM/DD/YYYY)
                    </h4>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">CUT-OFF</h4>
                        <p className="text-12px">{PropertyData.cutOff}</p>
                    </li>
                    <li className=" w-2/4 mb-5">
                        <h4 className=" text-themeRed text-12px">DUE DATE</h4>
                        <p className="text-12px">{PropertyData.dueDate}</p>
                    </li>
                </ul>
                <ul className="flex flex-wrap pt-5">
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">CREATED AT</h4>
                        <p className="text-12px">{PropertyData.createdAt}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">UPDATED AT</h4>
                        <p className="text-12px">{PropertyData.updatedAt}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">CREATED BY</h4>
                        <p className="text-12px">{PropertyData.createdBy}</p>
                    </li>
                    <li className=" w-1/4 mb-5">
                        <h4 className=" text-themeRed text-12px">UPDATED AT</h4>
                        <p className="text-12px">{PropertyData.updatedAt}</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}
