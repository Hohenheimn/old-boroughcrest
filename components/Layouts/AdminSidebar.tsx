import React from "react";
import { imgIcons } from "../../public/images/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type List = {
    label: string;
    link: string;
    img: StaticImageData;
    linkFolder: string;
};

export default function Sidebar() {
    const router = useRouter();
    const array = router.pathname.split("/")[1];
    return (
        <div className="w-48 l:w-32 h-auto bg-themeRed text-white">
            <ul className="list-none">
                <li className="pt-7 pb-2 text-center mb-4">
                    <h1>Admin</h1>
                </li>
                <List
                    label="Dashboard"
                    linkFolder="dashboard"
                    link="/dashboard"
                    img={imgIcons.window}
                />
                <List
                    label="Costumer & Property Profile"
                    linkFolder="costumer-&-property-profile"
                    link="/costumer-&-property-profile/add & modify customer"
                    img={imgIcons.profile}
                />
                <List
                    label="Client Request Processing"
                    linkFolder="client-request-processing"
                    link="/client-request-processing/admin review"
                    img={imgIcons.arrDown}
                />
                <List
                    label="Tower"
                    linkFolder="tower"
                    link="/tower"
                    img={imgIcons.building}
                />
            </ul>
        </div>
    );
}

const List = ({ label, link, img, linkFolder }: List) => {
    const router = useRouter();

    return (
        <li
            className={`text-center ${
                router.pathname.split("/")[1] === linkFolder ? "bg-red3" : ""
            }`}
        >
            <Link href={link}>
                <a className="py-5 px-3 block mb-4 l:py-2">
                    <Image src={img} width={20} height={20} />
                    <h5 className=" text-12px">{label}</h5>
                </a>
            </Link>
        </li>
    );
};
