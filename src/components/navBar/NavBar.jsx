import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLongRightIcon,
  ArrowRightOnRectangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { navLinks } from "../../utils/db";
import { useSelector, useDispatch } from "react-redux";
import { activeNav } from "../../silces/ActiveNavBarSlice";

function NavBar() {
  return (
    <div className="col-span-2 border-r border-gray-400 items-center justify-start flex flex-col min-h-screen h-full w-full  ">
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
      <div className="items-start justify-start flex flex-col lg:py-4 lg:space-y-6 w-full lg:px-12 mt-20">
        <span className="hidden items-center justify-center lg:flex flex-col bg-[#FAFAFA] rounded-xl py-12 px-4 w-full group cursor-pointer">
          <h1 className="w-full font-medium"> Upgrade </h1>
          <h1 className="flex w-full font-medium ">
            your plan
            <ArrowLongRightIcon className="nav__icon mx-2 group-hover:translate-x-4 smooth" />
          </h1>
        </span>
        <span
          title="logout"
          className="items-center justify-center flex w-full cursor-pointer lg:space-x-4 lg:px-4 "
        >
          <ArrowRightOnRectangleIcon className="nav__icon" />
          <h1 className="w-full font-medium hidden lg:inline-flex">
            Log Out
          </h1>
        </span>
      </div>
    </div>
  );
}

export default NavBar;

function NavItem({ data }) {
  const navLink = useSelector((state) => state.activeNavLink.value);
  const dispatch = useDispatch();
  // whenever we are on the default page dashboard tab only can be active
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(activeNav("Dashboard"));
    }
  });
  return (
    <Link
      to={data.title === "Dashboard" ? "/" : `/${data.title}`}
      className="w-full"
      onClick={() => dispatch(activeNav(data.title))}
    >
      <span
        title={data.title}
        className={`nav__item group ${
          navLink === data.title && "bg-black text-gray-100"
        } `}
      >
        <div
          className={`smooth ${
            navLink === data.title
              ? "text-gray-100"
              : "text-black group-hover:text-gray-100"
          } `}
        >
          {data.icon}
        </div>
        <h2 className="hidden lg:flex">{data.title}</h2>
      </span>
    </Link>
  );
}
