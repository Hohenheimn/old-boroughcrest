import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type AddModal = {
    id?: string[] | string;
};

export default function AddModal({ id }: AddModal) {
    const modal = useRef<any>();
    const router = useRouter();
    useEffect(() => {
        const clickOutSide = (e: any) => {
            if (!modal.current.contains(e.target)) {
                router.push("/tower");
            }
        };
        document.addEventListener("mousedown", clickOutSide);
        return () => {
            document.removeEventListener("mousedown", clickOutSide);
        };
    }, []);

    return (
        <div className=" bg-transparentGray fixed left-0 top-0 w-full h-full z-10 flex justify-center items-center">
            <form
                ref={modal}
                className=" w-11/12 bg-white rounded-lg p-10 max-w-580px"
            >
                <h3 className=" text-16px text-red1  mb-5">EDIT TOWER</h3>
                <ul className="flex flex-wrap justify-between">
                    <li className=" w-2/5">
                        <h5 className=" text-red1 text-12px">CODE</h5>
                        <input
                            type="text"
                            className=" text-12px border border-gray-300 rounded-md outline-none p-1"
                        />
                    </li>
                    <li className=" w-2/5">
                        <h5 className=" text-red1 text-12px">NAME</h5>
                        <input
                            type="text"
                            className=" text-12px border border-gray-300 rounded-md outline-none p-1"
                        />
                    </li>
                    <li className=" w-full mt-5 mb-5">
                        <h5 className=" text-red1 text-12px">DESCRIPTION</h5>
                        <textarea
                            name=""
                            id=""
                            className=" w-full text-12px border border-gray-300 rounded-md outline-none p-2"
                        ></textarea>
                    </li>
                    <li className="flex justify-end w-full">
                        <Link href="/tower">
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
        </div>
    );
}
