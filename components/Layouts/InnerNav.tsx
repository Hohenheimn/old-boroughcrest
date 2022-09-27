import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

type ListType = {
    link: string;
    title: string;
    category?: any;
};
type pageType = {
    page: string;
};

function InnerNav({ page }: pageType) {
    const router = useRouter();

    return (
        <div>
            <nav className=" px-10 py-6 l:px-6 l:py-3 text-20px border-t border-gray-100">
                <h1 className=" text-20px l:text-16px font-poppins-b capitalize">
                    {router.query.category}
                </h1>
            </nav>
            <ul className=" px-10 py-5 l:px-2 l:py-3 flex items-center bg-themeRed text-center text-gray-400">
                {page === "CPP" && (
                    <>
                        <List
                            link="/costumer-&-property-profile/add & modify customer"
                            title="add & modify customer"
                        />
                        <List
                            link="/costumer-&-property-profile/add & modify property"
                            title="add & modify property"
                        />
                    </>
                )}
                {page === "CRP" && (
                    <>
                        <List
                            link="/client-request-processing/admin review"
                            title="admin review"
                        />
                        <List
                            link="/client-request-processing/manage approval"
                            title="manage approval"
                        />
                    </>
                )}
            </ul>
        </div>
    );
}
export default InnerNav;

const List = ({ link, title }: ListType) => {
    const router = useRouter();
    return (
        <li className="text-center mr-5 l:mr-1">
            <Link href={link}>
                <a
                    className={` flex flex-col items-center w-32 ${
                        title == router.query.category
                            ? "text-white font-poppins-b"
                            : ""
                    }`}
                >
                    <CgProfile />
                    <p
                        className={`mt-1 text-12px capitalize ${
                            title == router.query.category
                                ? "text-white font-poppins-b"
                                : ""
                        }`}
                    >
                        {title}
                    </p>
                </a>
            </Link>
        </li>
    );
};
