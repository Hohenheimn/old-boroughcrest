import React from "react";
import AddModify from "../../components/Tower/AddModify";
import Tower from "../../components/Tower/Tower";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    return (
        <div>
            {router.query.tower !== undefined ? <Tower /> : <AddModify />}
        </div>
    );
}
