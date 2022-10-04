import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";
import { GlobalProvider } from "../components/Global";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import "nprogress/nprogress.css";
type ExtendAppProps = AppProps & {
    Component: any;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: ExtendAppProps) {
    // login page, remove layouts
    const router = useRouter();
    NProgress.configure({ showSpinner: false });
    //routes page loader indicators
    useEffect(() => {
        router.events.on("routeChangeStart", () => NProgress.start());
        router.events.on("routeChangeComplete", () => NProgress.done());
        return () => {
            router.events.on("routeChangeStart", () => NProgress.start());
            router.events.on("routeChangeComplete", () => NProgress.done());
        };
    }, [router]);

    if (Component.getLayout) {
        return Component.getLayout(
            <>
                <QueryClientProvider client={queryClient}>
                    <GlobalProvider>
                        <Component {...pageProps} />
                    </GlobalProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </>
        );
    }
    // Main Layout
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </GlobalProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
