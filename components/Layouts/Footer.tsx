import React from "react";
import Image from "next/image";
import { imgLogos } from "../../public/images/images";

export default function Footer() {
    return (
        <div className="flex justify-between items-center px-6 h-20">
            <aside className="flex items-center">
                <Image src={imgLogos.logo2} />
                <h1 className=" text-20px l:text-16px ml-2 tracking-tight text-themeRed">
                    BOROUGHCREST
                </h1>
            </aside>
            <p className=" font-poppins-l text-16px l:text-12px tracking-tight">
                Copyright © 2022 Boroughcrest. All rights reserved
            </p>
        </div>
    );
}
