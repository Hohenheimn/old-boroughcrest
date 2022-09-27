import Header from "./AdminHeader";
import Sidebar from "./AdminSidebar";
import Footer from "./Footer";
import { GlobalContext } from "../Global";
import { useContext } from "react";
import { useRouter } from "next/router";
import UserSidebar from "./UserSidebar";
import Head from "next/head";

type AdminLayout = {
    children: React.ReactNode;
};

export default function Layout({ children }: AdminLayout) {
    const { whosLogin } = useContext(GlobalContext);

    const router = useRouter();
    const urlArray = router.pathname.split("/");

    return (
        <>
            <Head>
                <title>Boroughcrest</title>
            </Head>
            {/* THIS LAYOUT WILL SHOW IF ADMIN IS LOGIN */}
            {whosLogin === "admin" ? (
                <div className="max-w-1440px m-auto">
                    <Header />
                    <section
                        className={`flex border ${
                            urlArray[1] === "dashboard"
                                ? "min-h-dashboardContainer"
                                : "min-h-mainContainer"
                        }`}
                    >
                        <Sidebar />
                        <main className="flex-1 bg-mainContent">
                            {children}
                        </main>
                    </section>
                    {urlArray[1] === "dashboard" ? "" : <Footer />}
                </div>
            ) : (
                // THIS LAYOUT WILL ONLY SHOW IF THE USER IN LOGIN
                <div className="max-w-1440px m-auto">
                    <Header />
                    <section
                        className={`flex border ${
                            urlArray[1] === "dashboard"
                                ? "min-h-dashboardContainer"
                                : "min-h-mainContainer"
                        }`}
                    >
                        <UserSidebar />
                        <main className="flex-1 bg-mainContent">
                            {children}
                        </main>
                    </section>
                    {urlArray[1] === "dashboard" ? "" : <Footer />}
                </div>
            )}
        </>
    );
}
