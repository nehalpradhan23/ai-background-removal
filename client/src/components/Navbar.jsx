import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to={"/"}>
        {/* <div className="bg-green-600 px-4 py-2 rounded-md"> */}
        {/* <span className="text-3xl md:text-5xl  font-extrabold text-black"> */}
        <span className="text-3xl md:text-5xl  font-extrabold bg-gradient-to-r from-blue-700 to-green-500 text-transparent bg-clip-text">
          BG remover
        </span>
        {/* </div> */}
      </Link>
      <button className="flex transition-all bg-blue-700 hover:shadow-xl hover:bg-blue-800 text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 rounded-md">
        Get started
        <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
