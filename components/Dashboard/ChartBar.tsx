import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "./ChartData";
import {
    Chart as ChartJS,
    BarElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    BarElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

export default function ChartBar() {
    const [isData, setdata] = useState<any>({
        labels: BarChartData.map((data) => data.month),
        datasets: [
            {
                label: "Number of User",
                data: BarChartData.map((data) => data.userGain),
                backgroundColor: ["#912028", "#ffebf0", "#dfc3ca"],
            },
        ],
    });
    return (
        <div className=" w-full h-full">
            <Bar data={isData} />
        </div>
    );
}
