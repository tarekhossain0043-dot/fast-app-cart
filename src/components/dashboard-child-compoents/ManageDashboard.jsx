import React from "react";
import { dashFrames } from "../../assets/assets";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ManageDashboard() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4.25">
      {dashFrames.map((frame, index) => (
        <div
          key={index}
          className="flex items-center shadow-md justify-center gap-10 bg-white rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-amber-200"
        >
          <div>
            <h4 className="text-[16px] leading-7 text-[131523] font-bold">
              {frame.number ? frame.title : frame.number}
            </h4>
            <div className="text-[10px] font-normal leading-5 text-[#5A607F] capitalize">
              {frame.span}
            </div>
            <p className="text-[10px] leading-5 text-[#06A561]">
              {frame.number}
            </p>
            <div className="text-[10px] leading-5 text-[#06A561] flex items-center gap-2">
              {frame.number2}
            </div>
          </div>
          <img src={frame.icon2} alt="" />
        </div>
      ))}
    </div>
  );
}
