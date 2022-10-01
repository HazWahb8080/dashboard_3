import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../../utils/db";

function NavBar() {
  return (
    <div className="col-span-2 border-r border-gray-400 items-center justify-start flex flex-col min-h-screen w-full  ">
      <span className=" flex lg:items-start lg:justify-start items-center justify-center space-x-2 w-full lg:w-2/3 py-4">
        <BoltIcon className=" h-8 w-8 cursor-pointer lg:cursor-default " />
        <h1 className="font-bold text-2xl hidden lg:flex">PSONO</h1>
      </span>
      {/* navigation links */}
      <nav className="items-center justify-center flex flex-col w-full mt-6">
        <div className="w-2/3 items-start justify-start flex flex-col space-y-4 ">
          {navLinks.map((link) => (
            <NavItem data={link} key={link.id} />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

function NavItem({ data }) {
  return (
    <Link to={`${data.title}`} className="w-full">
      <span title={data.title} className="nav__item group">
        <div className=" text-black group-hover:text-gray-100 smooth">
          {data.icon}
        </div>
        <h2 className="hidden lg:flex">{data.title}</h2>
      </span>
    </Link>
  );
}
