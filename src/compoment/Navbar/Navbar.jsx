import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "./ZED LOGO-FI.png";
import { useEffect, useState } from "react";
import { getStoreAddToCard, getStoreWishList } from "../../utility/addToDB";

const Navbar = () => {
  const [cardCount, setCardCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const addStoreCount = getStoreAddToCard();
    setCardCount(addStoreCount.length);
  }, []);

  useEffect(() => {
    const addStoreWishCount = getStoreWishList();
    setWishCount(addStoreWishCount);
  }, []);

  //   navbar count
  useEffect(() => {
  const updateCounts = () => {
    const addStoreCount = getStoreAddToCard();
    setCardCount(addStoreCount.length);

    const addStoreWishCount = getStoreWishList();
    setWishCount(addStoreWishCount.length); 
  };

  updateCounts();

  window.addEventListener("storageUpdate", updateCounts);

  return () => {
    window.removeEventListener("storageUpdate", updateCounts);
  };
}, []);

  const navbar = (
    <>
      <li className=" font-medium">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className=" font-medium">
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li className=" font-medium">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navbar}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-32 h-16 rounded-b-lg" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>
      <div className="navbar-end gap-x-4">
        <div className="flex">
          <Link to={"/dashboard"}>
            <button className="btn btn-circle text-xl hover:bg-[#9538E2] hover:text-white ">
              <MdOutlineShoppingCart />
            </button>
          </Link>
          <span className="-mt-1 font-semibold ">{cardCount}</span>
        </div>

        <div className="flex ">
          <Link to={"/dashboard"}>
            <button className="btn btn-circle  hover:bg-[#9538E2] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </Link>
          <span className="-mt-1 font-semibold">{wishCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
