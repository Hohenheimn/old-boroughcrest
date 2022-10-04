import Image from "next/image";
import Head from "next/head";
import { imgIcons, imgBackgrounds, imgLogos } from "../public/images/images";
import { useContext, useState } from "react";
import { GlobalContext } from "../components/Global";
import { useRouter } from "next/router";
import api from "../util/api";
import { setCookie } from "cookies-next";

const Home = () => {
    const router = useRouter();
    const [isUsername, setUsername] = useState<string>();
    const [isPassword, setPassword] = useState<string>();

    const validateLogin = async (e: any) => {
        e.preventDefault();
        console.log(isUsername);
        console.log(isPassword);
        try {
            // send (post) checking here if the user and pass is existing in API
            const response = await api.post("/auth/login", {
                email: isUsername,
                password: isPassword,
            });
            // CREATING A TOKEN if response is true
            const { token } = await response.data;
            if (token) {
                setCookie("user", token);
                router.push("/dashboard");
            } else {
                router.push("/");
            }
        } catch (error) {
            alert("invalid user and pass");
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
                    <form onSubmit={validateLogin} className="w-full">
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            className=" w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className=" w-full py-2 px-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            type="submit"
                            value="submit"
                            className=" py-2 px-3 bg-themeRed rounded-lg font-poppins-b text-white cursor-pointer"
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
