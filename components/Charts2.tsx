"use client";
import React from "react";

type DotChartProps = {
  data: number[]; // array of daily revenue numbers
};

export default function DotChart({ data }: DotChartProps) {
  const maxValue = Math.max(...data);
  const maxDots = 12; // number of vertical dots (roughly matches screenshot)

  return (
    <div className="relative bg-white rounded-xl p-6">
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[300, 200, 100, 0].map((v) => (
          <div key={v} className="flex items-center gap-2">
            <span className="text-xs text-gray-400 w-10">${v}</span>
            <div className="flex-1 border-t border-gray-200/50" />
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative flex gap-4 mt-4">
        {data.map((value, idx) => {
          const dotCount = Math.round((value / maxValue) * maxDots);

          return (
            <div key={idx} className="flex flex-col-reverse items-center gap-1">
              
               {/* Date labels: Mar 1, Mar 5, ... */}
            <div>
                {idx % 4 === 0 && (
                <span className="text-xs text-gray-400 mt-2">
                  Mar {idx + 1}
                </span>
              )}
               </div>
              

              <div className="flex flex-col-reverse gap-1">
                {Array.from({ length: dotCount }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-teal-200"
                  />
                ))}
              </div>
           
            </div>
          );
        })}
      </div>
    </div>
  );
}
