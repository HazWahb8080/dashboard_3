import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { analyticsBlocks, invoicesSection } from "../../utils/db";
import PageContent from "../PageContent";
import ChartX from "./Chart";
import RightPart from "./RightPart";

function Dash() {
  return (
    <PageContent>
      {/* large grid between the right and left sections */}
      <div className="grid grid-cols-6 place-items-start w-full lg:px-12 px-4 gap-x-4">
        {/* the analyitcs left part */}
        <div className="lg:col-span-4 col-span-6 w-full items-center justify-center flex flex-col">
          <div className=" grid lg:grid-cols-3 grid-cols-1 w-full place-items-center gap-4">
            {analyticsBlocks.map((block) => (
              <BlockItem block={block} key={block.id} />
            ))}
          </div>
          {/* chart section */}
          <div className=" rounded-xl bg-[#FAFAFA] py-4 px-4 items-center justify-center flex w-full h-[300px]">
            <ChartX/>
          </div>
          {/* Invoices section */}
          <div className=" w-full py-4 col-span-2 flex justify-center items-center flex-col">
            <div className="flex justify-between items-center w-full mb-2">
              <h1 className="text-2xl font-medium w-full"> New Invoice </h1>
              {/* icons */}
              <span className="w-full items-center justify-end flex space-x-4">
                <span className="icon__wrapper">
                  <MagnifyingGlassIcon className="nav__icon" />
                </span>
                <span className="icon__wrapper">
                  <Bars3Icon className="nav__icon" />
                </span>
              </span>
            </div>
            <div className="w-full grid lg:grid-cols-4 grid-cols-2 place-items-start py-6 h-full overflow-y-scroll scrollbar-hide">
              {invoicesSection.map((invoice) => (
                <div
                  key={invoice.id}
                  className="w-full items-start justify-start flex flex-col"
                >
                  <h1 className="lg:border-b border-gray-300 w-full text-gray-600 mb-4">
                    {invoice.title}
                  </h1>
                  {invoice.items.map((item) => (
                    <h2
                      className="w-full my-2 py-2 border-b border-gray-200"
                      key={item}
                    >
                      {item}
                    </h2>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right prt */}
        <RightPart />
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
      <div className="w-full items-start justify-start flex  flex-col">
        <div className="w-[100%] py-[2px] bg-gray-300 rounded-xl" />
        <div
          className={`${percent} bg-green-500 py-[2px] rounded-xl -mt-1  `}
        />
        <h2 className="text-xl lg:text-3xl font-bold mt-4">${value}</h2>
      </div>
    </div>
  );
}
