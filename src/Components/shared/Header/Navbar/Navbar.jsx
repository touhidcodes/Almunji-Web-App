import DrawerNav from "../../../Cushrefm/Drawer/DrawerNav";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link className="no-underline text-lg mx-0  mr-3" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="no-underline text-lg mx-0  mr-3" href="/library">
          Library
        </Link>
      </li>
      <li>
        <Link className="no-underline text-lg mx-0  mr-3" href="/dictionary">
          Dictionary
        </Link>
      </li>
      <li>
        <details>
          <summary className="no-underline text-lg mx-0  mr-3">
            Category
          </summary>
          <ul className="bg-base-100 rounded-t-none p-2 text-black">
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
    <div className="navbar shadow-sm shadow-gray-400 bg-white">
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
