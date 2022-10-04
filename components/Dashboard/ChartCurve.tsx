import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { BarChartData } from "./ChartData";
import {
    Chart as ChartJS,
    LineElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
);

export default function ChartCurve() {
    const [isData, setdata] = useState<any>({
        labels: BarChartData.map((data) => data.month),
        datasets: [
            {
                label: "Number of User",
                data: BarChartData.map((data) => data.userGain),
                borderColor: "#912028",
            },
        ],
    });
    return (
        <div className=" w-full h-full">
            <Line data={isData} />
        </div>
    );
}
