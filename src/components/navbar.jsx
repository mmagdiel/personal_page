import React, { useState } from "react";
import $cn from "classnames";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import logo from "../images/logo.svg";
/*
import { useMenu } from "../services/useMenu";
import Languages from "./icons/languages";
const menu = useMenu("en");
console.log(menu);
*/
export default () => {
  const [menuClose, setMenuClose] = useState(true);
  const menu = []; //[{ id: "hama", url: "/acerca", label: "Acerca" }];
  return (
    <Headroom>
      <nav className="flex items-center justify-between flex-wrap bg-navbar px-12 py-2">
        <Link to="/" className="flex items-center flex-shrink-0 mr-6">
          <img src={logo} width="42" alt="logo" />
        </Link>
        <div className="block md:hidden lg:hidden">
          <button
            onClick={() => setMenuClose(!menuClose)}
            className="flex items-center px-3 py-2 border bg-gray-100 border-gray-100 text-black border-orange-400 hover:text-white hover:bg-orange-400 hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={$cn(
            "w-full block flex-grow ml-4 md:flex md:items-center md:w-auto lg:flex lg:items-center lg:w-auto",
            { hidden: menuClose },
            { "mb-5": !menuClose }
          )}
        >
          <div className="text-sm md:flex-grow lg:flex-grow"></div>
          <div className="bg-orange-100 text-sm mr-6 font-thin">
            {menu.map(item => (
              <Link
                key={item.id}
                to={item.url}
                state={{ name: true }}
                activeClassName="text-white bg-orange-400"
                className="block mt-4 py-2 px-3 tracking-wide font-bold text-green-900 md:inline-block md:mt-0 lg:inline-block lg:mt-0 hover:text-white hover:bg-orange-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* */}
        </div>
      </nav>
    </Headroom>
  );
};
/**
 * 
<Languages
  className="lang"
  size={48}
  url="/"
  hover="#F6AD55"
  fill="#fff"
/>
*/
