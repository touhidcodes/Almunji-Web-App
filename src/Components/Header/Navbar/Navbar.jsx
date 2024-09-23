import React from "react";
import { Link } from "react-router-dom";
import DrawerNav from "../../Drawer/DrawerNav";
import "../../../index.css";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link className="no-underline text-lg mx-0  mr-3" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="no-underline text-lg mx-0  mr-3" to={"/library"}>
          Library
        </Link>
      </li>
      <li>
        <Link className="no-underline text-lg mx-0  mr-3" to={"/dictionary"}>
          Dictionary
        </Link>
      </li>
      <li>
        <details>
          <summary className="no-underline text-lg mx-0  mr-3">
            Category
          </summary>
          <ul className="bg-[#fffaed] rounded-t-none p-2 text-[#0b8371]">
            <li>
              <Link>Dowa</Link>
            </li>
            <li>
              <Link>Dowa</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar navdesign text-[#0b8371] roboto-font">
      <div className="flex">
        <DrawerNav></DrawerNav>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Almunji</a>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
