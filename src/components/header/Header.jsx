import React from "react";
import { useLocation } from "react-router-dom";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  const location = useLocation();
  let pageTitle = location.pathname === "/" ? "Dashboard" : location.pathname;
  return (
    <header className="header">
      <h1 className="text-xl font-medium">{pageTitle}</h1>
      {/* search + Icons */}
      <div className="items-end justify-end flex w-full">
        {/* search */}
        <span className="flex space-x-4 items-center  justify-end w-full">
          <MagnifyingGlassIcon className="nav__icon" />
          <input type="text" placeholder="Search" className="header__input" />
        </span>
        {/* profile */}
        <span className="flex items-center justify-end space-x-4 w-full">
          <BellIcon className="nav__icon rounded-xl bg-gray-100" />
        </span>
      </div>
    </header>
  );
}

export default Header;
