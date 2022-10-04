import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { BarChartData } from "./ChartData";
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

export default function ChartCircle() {
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
            <Pie data={isData} />
        </div>
    );
}
