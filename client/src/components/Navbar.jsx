import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);
  // ==================================================
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
      {/* if signed in---------------------------------------- */}
      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-md bg-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-all"
          >
            <img className="w-5" src={assets.credit_icon} alt="" />
            <p className="text-white font-medium">Credits : {credit}</p>
          </button>
          <p className="text-white max-sm:hidden">{user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        // {/* sign in button ======================= */}
        <button
          onClick={() => openSignIn({})}
          className="flex transition-all bg-blue-700 hover:shadow-xl hover:bg-blue-800 text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 rounded-md"
        >
          Get started
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
