import React from "react";
import { ActivityItems } from "../../utils/db";

function RightPart() {
  return (
    <div className="w-full items-center justify-start lg:flex lg:flex-col space-y-4 h-full col-span-2 bg-[#FAFAFA] hidden rounded-xl px-6 pt-6 ">
      {/* image */}
      <div className="py-12 bg-[#286965] items-start justify-start flex flex-col w-full rounded-xl px-12">
        <p className="text-white text-lg py-2">
          <b className="text-2xl">$ 30.50</b> / Month
        </p>
        <p className="text-white text-xs font-medium">
          $ 20.99 billed Annually
        </p>
        <button className="btn my-4"> Apply Now </button>
      </div>
      {/* ACTIVITY */}
      <div className="w-full items-start justify-start flex flex-col px-4">
        <h1 className="w-full text-2xl font-medium ">Recent Activity</h1>
        <div className="w-full py-6 items-start justify-start flex flex-col space-y-8 h-[500px] overflow-y-scroll scrollbar-hide">
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
