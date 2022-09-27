import { useEffect } from "react";
import { useRouter } from "next/router";

export default function index() {
    const router = useRouter();
    useEffect(() => {
        router.push("/client-request-processing/admin-review");
    });
    return <div></div>;
}
