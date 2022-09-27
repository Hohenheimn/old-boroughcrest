import Image from "next/image";
import Head from "next/head";
import { imgIcons, imgBackgrounds, imgLogos } from "../public/images/images";
import { useContext, useState } from "react";
import { GlobalContext } from "../components/Global";
import { useRouter } from "next/router";

const Home = () => {
    const { setWhosLogin, whosLogin } = useContext(GlobalContext);
    const router = useRouter();
    const [isUsername, setUsername] = useState<string>();
    const [isPassword, setPassword] = useState<string>();

    const validateLogin = () => {
        if (isUsername === "user" && isPassword === "user") {
            setWhosLogin("user");
            router.push("/dashboard");
        } else if (isUsername === "admin" && isPassword === "admin") {
            setWhosLogin("admin");
            router.push("/dashboard");
        } else {
            alert("Invalid Login");
        }
    };

    return (
        <>
            <Head>
                <title>Boroughcrest - Login</title>
            </Head>
            <div className="relative flex justify-center items-center h-screen isolate">
                <aside className="w-full h-full absolute">
                    <Image
                        src={imgBackgrounds.login}
                        placeholder="blur"
                        layout="fill"
                        className="object-cover"
                    />
                    <Image
                        src={imgBackgrounds.loginBlend}
                        layout="fill"
                        className="absolute"
                    />
                </aside>

                <div className="p-10 py-20 s:p-5 s:py-16 z-10 bg-white rounded-lg flex justify-center items-center flex-col w-11/12 max-w-580px">
                    <Image src={imgLogos.logo1} width={79} height={97} />
                    <p className=" text-20px font-poppins-r mb-1 mt-2 text-red1">
                        Boroughcrest
                    </p>
                    <h3 className="text-24px font-bold text-red1 font-nm-b">
                        Welcome!
                    </h3>
                    <p className="text-gray1 text-12px mb-8 font-nm-r tracking-wide">
                        sign in to your account here
                    </p>
                    <form className="w-full">
                        <div className="w-full flex justify-center items-center border border-gray p-2 pl-4 mb-5 rounded-md">
                            <Image
                                src={imgIcons.loginProfile}
                                alt="profile"
                                height={20}
                                width={16}
                            />
                            <input
                                type="text"
                                className="p-2 w-full ml-4 text-16px outline-none"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center border border-gray p-2 pl-4 rounded-md mb-14">
                            <Image
                                src={imgIcons.lock}
                                alt="profile"
                                height={20}
                                width={18}
                            />
                            <input
                                type="password"
                                className="p-2 w-full ml-4 text-16px outline-none"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            type="button"
                            value="Sign In"
                            className=" duration-75 tra cursor-pointer w-full flex justify-center items-center bg-red1 text-white p-2 pl-4 rounded-md"
                            onClick={validateLogin}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;

Home.getLayout = function getLayout(page: any) {
    return <>{page}</>;
};
