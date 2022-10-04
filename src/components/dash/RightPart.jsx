import React from "react";
import { ActivityItems } from "../../utils/db";

function RightPart() {
  return (
    <div className="w-full items-center justify-start lg:flex lg:flex-col space-y-4 h-full col-span-2 bg-[#FAFAFA] hidden rounded-xl px-6 ">
      {/* image */}
      <div className="py-12"></div>
      {/* ACTIVITY */}
      <div className="w-full items-start justify-start flex flex-col px-4">
        <h1 className="w-full text-2xl font-medium ">Recent Activity</h1>
        <div className="w-full py-6 items-start justify-start flex flex-col space-y-12 h-[600px] overflow-y-scroll scrollbar-hide">
          {ActivityItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center space-x-2 w-full"
            >
              <img src={item.image} alt={item.name} className="img" />
              {/* text with the invoice text */}
              <span className="w-full items-start justify-between flex">
                {/* text only */}
                <span className="items-start justify-start w-full flex flex-col">
                  <h1 className="text-xl font-medium">{item.name}</h1>
                  <h2 className="text-sm text-gray-400">{item.time}</h2>
                </span>
                {/* invoice text */}
                <h3 className="w-full self-center text-right font-medium">
                  {item.invoice}
                </h3>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPart;
