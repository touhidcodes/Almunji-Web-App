import React from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaReadme } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
const DrawerNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navlinkDrawer = (
    <div className="p-5">
      <li>
        <Link className="flex items-center no-underline text-2xl" to={"/"}>
          <IoHome></IoHome> <span className="mx-4">Home</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center no-underline text-2xl mt-4"
          to={"/library"}
        >
          <FaReadme></FaReadme> <span className="mx-4">Library</span>
        </Link>
      </li>
      <li>
        <Link
          className="flex items-center no-underline text-2xl mt-4"
          to={"/dictionary"}
        >
          <FaBook></FaBook> <span className="mx-4">Dictionary</span>
        </Link>
      </li>
      <li>
        <details>
          <summary className="flex items-center no-underline text-2xl mt-4">
            <TbCategory></TbCategory> <span className="mx-4">Category</span>
          </summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li>
              <Link>Dowa</Link>
            </li>
            <li>
              <Link>Dowa</Link>
            </li>
          </ul>
        </details>
      </li>
    </div>
  );
  return (
    <>
      <button className=" px-2 lg:hidden text-lg" onClick={toggleDrawer}>
        <TiThMenuOutline />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div>
          <ul>{navlinkDrawer}</ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
