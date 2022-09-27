import { imgIcons } from "../../public/images/images";
import Link from "next/link";
import Image from "next/image";

export default function Table() {
    return (
        <table className="w-full bg-white">
            <thead className=" border-b border-themeRed">
                <tr>
                    <th className=" text-12px text-themeRed px-2 py-3 text-start">
                        CODE
                    </th>
                    <th className=" text-12px text-themeRed px-2 py-3 text-start">
                        NAME
                    </th>
                    <th className=" text-12px text-themeRed px-2 py-3 text-start">
                        DESCRIPTION
                    </th>
                    <th className=" text-12px text-themeRed px-2 py-3 text-center">
                        ACTION
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200">
                    <td className=" text-12px text-black p-5 text-start w-3/12 ">
                        98798
                    </td>
                    <td className=" text-12px text-black p-5  text-start  w-3/12">
                        Lorem, ipsum.
                    </td>
                    <td className=" text-12px text-black p-5  text-start  w-4/12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor optio ex placeat amet odio aliquam nisi soluta ad
                        hic molestiae obcaecati quae ullam, debitis consequuntur
                        veritatis at explicabo! Eveniet, blanditiis. Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Illo
                        assumenda quas tempora libero commodi eius?
                    </td>
                    <td className=" text-12px text-black p-5 text-center  w-2/12">
                        <Link href="tower?tower=1">
                            <a className="mr-4">
                                <Image
                                    src={imgIcons.eye}
                                    alt=""
                                    width={15}
                                    height={10}
                                />
                            </a>
                        </Link>
                        <Link href="/tower?update_tower=1">
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
            </tbody>
        </table>
    );
}
