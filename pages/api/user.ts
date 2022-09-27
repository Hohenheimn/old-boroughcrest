// it should not be a react component
//  only return a json or data

import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    res.json([
        {
            id: 1,
            name: {
                last: "Tiu",
                first: "Jomari",
                Mid: "Gacusan",
                MidInitial: "G",
            },
            type: "admin",
            address: "GMA Cavite",
            gender: "Male",
            contact: 09515532773,
            email: "jomtiu16@gmail.com",
        },
        {
            id: 2,
            name: {
                last: "Desoasido",
                first: "Jessica",
                Mid: "Elano",
                MidInitial: "E",
            },
            type: "user",
            address: "Binan Laguna",
            gender: "Female",
            contact: 09515532773,
            email: "jessicadesoasido@gmail.com",
        },
    ]);
}
