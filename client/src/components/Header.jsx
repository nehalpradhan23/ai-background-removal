import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-md:flex-col-reverse gap-y-12 px-4 mt-10 lg:px-44 sm:mt-28 ">
      {/* left -------- */}
      <div className="">
        <div className="bg-gradient-to-br from-green-600 to-sky-600 px-6 py-9 rounded-2xl shadow-[10px_10px_35px_2px_#4fd1c5,-10px_-9px_35px_2px_#6b46c1]">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
            Remove <span>backgrounds</span>
            <br /> from images
          </h1>
        </div>
        {/* upload button ---------------------------- */}
        <div className=" mt-20 flex">
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-md cursor-pointer bg-sky-700 m-auto hover:scale-105 transition-all shadow-[0px_0px_2px_1px_#4fd1c5] hover:shadow-[0px_10px_25px_2px_#0f766e]"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white font-bold">Upload your image</p>
          </label>
        </div>
      </div>
      {/* right --------- */}
      <div className="xl:w-[750px] xl:h-[500px] flex items-center">
        <img className="w-full" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
