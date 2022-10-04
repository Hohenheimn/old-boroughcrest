import api from "../../util/api";
import { getCookie } from "cookies-next";
import { useQuery } from "react-query";

export const FetchUser = () => {
    const fetcher = () => {
        return api
            .get("api/action-taken", {
                headers: {
                    Authorization: "Bearer " + getCookie("user"),
                },
            })
            .then((res) => res.data);
    };
    return useQuery(["action-taken"], fetcher);
};
