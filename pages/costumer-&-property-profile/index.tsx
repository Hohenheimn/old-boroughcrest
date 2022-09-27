import { useEffect } from "react";
import { useRouter } from "next/router";

export default function index() {
    const router = useRouter();
    useEffect(() => {
        router.push("/costumer-&-property-profile/add & modify customer");
    });
    return <div></div>;
}
