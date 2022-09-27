import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import type { propertyData, propertyDataList } from "../ExportTypes";

export default function ListProperty({ CustomerID }: any) {
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

    const FilteredProperty = data?.data[1].items.filter(
        (item: { idNumber: any }) => {
            return item.idNumber === CustomerID;
        }
    );

    return (
        <div className=" pt-5 bg-white">
            <table className=" w-full">
                <thead>
                    <tr className="border-b border-themeRed">
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            UNIT CODE
                        </th>
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            OWNER
                        </th>
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            FLOOR
                        </th>
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            AREA
                        </th>
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            CLASS
                        </th>
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            TYPE
                        </th>
                        <th className="text-start p-2 text-12px text-themeRed font-poppins-b">
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {FilteredProperty.map(
                        (item: propertyData, index: number) => (
                            <List key={index} propertyData={item} />
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

const List = ({ propertyData }: propertyDataList) => {
    return (
        <tr className=" border-b border-gray-300">
            <td className="text-14px p-2 py-3">{propertyData.idNumber}</td>
            <td className="text-14px p-2 py-3">{propertyData.unitCode}</td>
            <td className="text-14px p-2 py-3">{propertyData.floor}</td>
            <td className="text-14px p-2 py-3">{propertyData.area}</td>
            <td className="text-14px p-2 py-3">{propertyData.class}</td>
            <td className="text-14px p-2 py-3">{propertyData.type}</td>
            <td className="py-3">
                <select className="text-14px py-1 px-2 border border-gray-300 rounded-md outline-none cursor-pointer">
                    <option>active</option>
                </select>
            </td>
        </tr>
    );
};
