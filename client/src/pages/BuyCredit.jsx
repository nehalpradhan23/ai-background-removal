import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="text-white min-h-[80vh] text-center pt-14 mb-10">
      <button className="bg-gradient-to-br from-green-500 to bg-green-900 px-10 py-2 rounded-md mb-6">
        Our Plans
      </button>
      <h1 className="text-4xl font-bold underline mb-10">Choose a plan</h1>
      {/* cards -------------------------- */}
      <div className="flex flex-wrap justify-center gap-10 text-left ">
        {plans.map((item, index) => (
          <div
            className="bg-white/30 rounded-md py-12 px-8 hover:shadow-[0px_0px_30px_0px_#3182ce,0px_0px_30px_0px_#22543d] transition-all"
            key={index}
          >
            <img width={40} src={assets.credit_icon} alt="" />

            <p className="mt-3 font-semibold text-xl">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/
              {item.credits} credits
            </p>
            <button className="w-full py-2 hover:scale-105 mt-4 bg-gradient-to-br from-blue-700 to-slate-950 rounded-md min-w-52">
              Select plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
