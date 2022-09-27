import React, { useRef, useEffect } from "react";

type id = {
    id: number;
    setApprove: Function;
};

export default function ({ id, setApprove }: id) {
    const modal = useRef<any>();

    useEffect(() => {
        const clickOutSide = (e: any) => {
            if (!modal.current.contains(e.target)) {
                setApprove(null);
            }
        };
        document.addEventListener("mousedown", clickOutSide);
        return () => {
            document.removeEventListener("mousedown", clickOutSide);
        };
    }, []);

    return (
        <div className=" fixed w-full h-full flex justify-center items-center z-10 top-0 left-0 bg-transparentGray">
            <ul
                ref={modal}
                className=" flex flex-wrap bg-white w-11/12 max-w-580px rounded-lg overflow-hidden"
            >
                <li className=" p-10">
                    <h1 className=" text-center text-24px">
                        Are you sure you want to Submit this Client Request ?
                    </h1>
                </li>
                <li className="flex w-full">
                    <button className="w-2/4 py-5 bg-themeRed font-poppins-b text-white text-20px">
                        YES
                    </button>
                    <button className="w-2/4 duration-75 ease-linear py-5 font-poppins-b hover:bg-themeRed hover:text-white text-black text-20px">
                        NO
                    </button>
                </li>
            </ul>
        </div>
    );
}
