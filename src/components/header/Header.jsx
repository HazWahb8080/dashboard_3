import React from "react";
import { useLocation } from "react-router-dom";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { avatar } from "../../utils/db";

function Header() {
  const location = useLocation();
  let pageTitle =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname.replace("/", "");
  return (
    <header className="header">
      <h1 className="text-xl font-medium">{pageTitle}</h1>
      {/* search + Icons */}
      <div className="items-end justify-end flex w-full">
        {/* search */}
        <span className="lg:flex space-x-4 items-center  justify-end w-full hidden">
          <MagnifyingGlassIcon className="nav__icon" />
          <input type="text" placeholder="Search" className="header__input" />
        </span>
        {/* profile */}
        <div className="flex items-center justify-end space-x-4 xl:w-2/3 w-full">
          {/* notification icon */}
          <span className="rounded-full bg-gray-200 p-2">
            <BellIcon className="nav__icon " />
          </span>
          {/* profile pic + name */}
          <span className="overflow-hidden flex space-x-2">
            <img
              src={avatar}
              alt="profile pic"
              className="rounded-full object-center object-cover xl:h-12 xl:w-12 h-10 w-10"
            />
            <span className="hidden xl:flex xl:flex-col self-center">
              <h2 className="text-sm font-bold"> Smith Dhin </h2>
              <p className="text-sm text-gray-600"> Product Manager</p>
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
