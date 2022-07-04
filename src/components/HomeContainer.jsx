import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <div>
          <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
            The Fastest Delivery in
            <span className="text-orange-600 text-[3rem]"> Your City</span>
          </p>
          <p className="text-base text-textColor text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg mt-3  hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
          >
            Order Now
          </button>
        </div>
      </div>
      <div className="p-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="w-full h-full top-0 left-0 absolute flex items-center justify-center px-32 py-4 ">
          <div className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
            <img src={I1} className="w-40 -mt-20" alt="I1" />
            <p className="text-lg font-semibold text-textColor mt-2">
              Icecream
            </p>
            <p className="text-sm text-lightTextGray font-semibold my-3">
              Chocolate & Vanilla
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>5.25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
