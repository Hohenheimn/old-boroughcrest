import React, { useState } from "react";
import InnerNav from "../../components/Layouts/InnerNav";
import CRPTable from "../../components/CRP/CRPTable";
import ViewModal from "../../components/CRP/ViewModal";
import { useRouter } from "next/router";
import Approve from "../../components/CRP/Approve";
import Disapproved from "../../components/CRP/Disapproved";

export default function Tab() {
    const router = useRouter();
    const [isApprove, setApprove] = useState<null | number>(null);
    const [isDisapprove, setDisapprove] = useState<null | number>(null);
    return (
        <div>
            <InnerNav page="CRP" />
            <CRPTable setApprove={setApprove} setDisapprove={setDisapprove} />
            {router.query.view_review !== undefined && (
                <ViewModal id={router.query.view_review} />
            )}
            {isApprove !== null && (
                <Approve id={isApprove} setApprove={setApprove} />
            )}
            {isDisapprove !== null && (
                <Disapproved id={isDisapprove} setDisapprove={setDisapprove} />
            )}
        </div>
    );
}
