import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white bg-opacity-30 rounded-lg px-8 py-6 drop-shadow-sm">
        {/* image container --------------------------- */}
        <div className="flex flex-col md:grid grid-cols-2 gap-8">
          {/* left ----------------------- */}
          <div className="">
            <p className="text-2xl font-semibold text-white mb-2">Input</p>
            <img
              className="rounded-md border"
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
            />
          </div>
          {/* right -------------------------- */}
          <div className="flex flex-col ">
            <p className="text-2xl font-semibold text-white mb-2">Output</p>
            <div className="rounded-md border border-gray-300 h-full relative overflow-hidden bg-layer">
              <img
                className="rbg-white/50"
                src={resultImage ? resultImage : ""}
                alt=""
              />
              {/* loader -------- */}
              {!resultImage && image && (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                  <div className="border-4 border-sky-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* buttons -------------------------- */}
        {resultImage && (
          <div className="flex justify-center sm:justify-center items-center gap-7 mt-16">
            <button className="px-8 w-[280px] py-2.5 text-xl text-center border rounded-md hover:scale-105 transition-all text-white bg-gradient-to-br from-green-600 to-green-800 border-white">
              Select another image
            </button>
            <a
              className="px-8 w-[280px] py-2.5 text-xl text-center border rounded-md hover:scale-105 transition-all bg-gradient-to-br from-blue-900 to bg-teal-400 text-white"
              href={resultImage}
              download
            >
              Save image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
