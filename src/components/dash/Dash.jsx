import React from "react";
import { analyticsBlocks } from "../../utils/db";
import PageContent from "../PageContent";

function Dash() {
  return (
    <PageContent>
      {/* large grid between the right and left sections */}
      <div className="grid grid-cols-5 place-items-start w-full lg:px-12 px-4">
        {/* the analyitcs left part */}
        <div className="lg:col-span-3 col-span-5 w-full items-center justify-center flex flex-col">
          <div className=" grid lg:grid-cols-3 grid-cols-1 w-full place-items-center gap-4">
            {analyticsBlocks.map((block) => (
              <BlockItem block={block} key={block.id} />
            ))}
          </div>
          {/* chart */}
          <div className=" rounded-xl bg-[#FAFAFA] py-4 px-4 items-center justify-center flex w-full h-[300px]"></div>
        </div>
        {/* invoices */}
        <div className=" hidden w-full border border-red-500 py-4 lg:col-span-2 lg:flex"></div>
      </div>
    </PageContent>
  );
}

export default Dash;

function BlockItem({ block }) {
  const { title, percent, value } = block;
  return (
    <div className="w-full bg-[#FAFAFA] rounded-xl py-6 px-6 mb-4">
      <h1 className="my-2 text-md text-gray-700 mb-4">{title}</h1>
      <div className="w-full items-start justify-start flex flex-col">
        <div className="w-[100%] py-[2px] bg-gray-300 rounded-xl" />
        <div
          className={`${percent} bg-green-500 py-[2px] rounded-xl -mt-1  `}
        />
        <h2 className="text-xl lg:text-3xl font-bold mt-4">${value}</h2>
      </div>
    </div>
  );
}
