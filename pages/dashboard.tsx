import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../components/Global";
import ChartBar from "../components/Dashboard/ChartBar";
import ChartCurve from "../components/Dashboard/ChartCurve";
import ChartCircle from "../components/Dashboard/ChartCircle";
import { FetchUser } from "../components/CustomHook/useFetchData";

export default function dashboard() {
    const { isLoading, data, isError } = FetchUser();
    console.log(data);
    return (
        <div className=" p-10">
            <h1 className=" text-24px">Monthly Costumer</h1>
            <ul className=" w-full flex justify-between mb-7">
                <li className=" w-32% h-full">
                    <ChartBar />
                </li>
                <li className=" w-66% h-full rounded-lg bg-red5 p-5">
                    <ChartCurve />
                </li>
            </ul>
            <ul className=" w-full flex justify-between h-52 mb-7">
                <li className=" w-32% h-full bg-red4 rounded-lg p-2 flex flex-col items-center justify-center">
                    <h3 className=" mb-2 text-20px">All Customer</h3>
                    <h1 className="mb-2 font-poppins-b text-40px">1020</h1>
                    <button className=" py-2 px-5 text-12px text-white bg-themeRed rounded-md">
                        VIEW ALL
                    </button>
                </li>
                <li className=" w-32% h-full bg-themeRed rounded-lg p-2 flex flex-col items-center justify-center">
                    <h3 className=" mb-2 text-white text-20px">
                        Active Customer
                    </h3>
                    <h1 className="mb-2 text-white font-poppins-b text-40px">
                        1000
                    </h1>
                    <button className=" py-2 px-5 text-12px bg-white text-themeRed rounded-md">
                        VIEW ALL
                    </button>
                </li>
                <li className=" w-32% h-full bg-themeRed rounded-lg p-2 flex flex-col items-center justify-center">
                    <h3 className=" mb-2 text-white text-20px">
                        Active Request
                    </h3>
                    <h1 className="mb-2 text-white font-poppins-b text-40px">
                        50
                    </h1>
                    <button className=" py-2 px-5 text-12px bg-white text-themeRed rounded-md">
                        VIEW ALL
                    </button>
                </li>
            </ul>
            <ul className=" w-full flex justify-between mb-7">
                <li className=" w-48% h-full bg-#dfc3ca rounded-lg relative p-5 pb-16">
                    <h2 className=" text-themeRed mb-5 font-poppins-b">
                        New Portal ID Request
                    </h2>
                    <h2 className="text-black mb-5 font-poppins-b">
                        You have 5 New Portal Request
                    </h2>
                    <button className=" py-2 px-5 text-12px bg-themeRed text-white rounded-md absolute right-5 bottom-5">
                        VIEW ALL
                    </button>
                </li>
                <li className=" w-48% h-full rounded-lg shadow-lg p-5">
                    <ChartCircle />
                </li>
            </ul>
        </div>
    );
}
