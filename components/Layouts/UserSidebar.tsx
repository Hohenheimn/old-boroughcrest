import React from "react";

export default function UserSidebar() {
    return (
        <div className=" w-56 bg-themeRed flex flex-col items-center py-4">
            <h1 className=" text-white text-24px">USER</h1>
            <aside className=" w-full p-2 hover:bg-red2 text-gray-400 uppercase text-16px text-center cursor-pointer">
                Tab 1
            </aside>
            <aside className=" w-full p-2 hover:bg-red2 text-gray-400 uppercase text-16px text-center cursor-pointer">
                Tab 2
            </aside>
            <aside className=" w-full p-2 hover:bg-red2 text-gray-400 uppercase text-16px text-center cursor-pointer">
                Tab 3
            </aside>
            <aside className=" w-full p-2 hover:bg-red2 text-gray-400 uppercase text-16px text-center cursor-pointer">
                Tab 4
            </aside>
            <aside className=" w-full p-2 hover:bg-red2 text-gray-400 uppercase text-16px text-center cursor-pointer">
                Tab 5
            </aside>
            <aside className=" w-full p-2 hover:bg-red2 text-gray-400 uppercase text-16px text-center cursor-pointer">
                Tab 6
            </aside>
        </div>
    );
}
