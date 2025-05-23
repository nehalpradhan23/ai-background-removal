import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { backendUrl, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        const token = await getToken();

        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit added");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  // ======================================
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
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full py-2 hover:scale-105 mt-4 bg-gradient-to-br from-blue-700 to-slate-950 rounded-md min-w-52"
            >
              Select plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
