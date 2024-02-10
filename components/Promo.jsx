import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import IconOne from "./SVG/IconOne";
import IconTwo from "./SVG/IconTwo";
import { FaArrowRightLong } from 'react-icons/fa6';

const Promo = ({setActiveComponent}) => {
  return (
    <section className="relative overflow-hidden pt-[72px] bg-default-950/40 backdrop-blur-3xl">

      <div className="absolute h-14 w-14 bg-primary/10 top-2/3 start-80 -z-1 rounded-full animate-ping">
      </div>

      <div className="px-6 pt-20 overflow-hidden">
        <div className="relative">
          <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-default-300/70 
            [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]
            sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
            <IconOne />
            <IconTwo />
          </div>
        </div>
      </div>

      <div className="container">

        <div className="py-14 text-center relative">
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <h2 className="md:text-6xl/tight text-5xl text-default-100 font-semibold mb-6">
                Sorry, you currently have no Poools data
              </h2>
              <p className="text-base text-default-200 font-medium px-5">
                Don´t worry! Just go and add a new pool to check its liquidity.
              </p>

              <div className="flex justify-center">
                <button
                  className="h-16 flex gap-4 items-center mx-4 my-8 p-6 rounded-2xl border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500"
                  onClick={() => setActiveComponent("Liquidity")}
                >
                  Get Pool Liquidity
                  <FaArrowRightLong />
                </button>
                <button
                  className="h-16 flex gap-4 items-center mx-4 my-8 p-6 rounded-2xl border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500"
                  onClick={() => setActiveComponent("Liquidity")}
                >
                  Liquidity
                  <FaArrowRightLong />
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>

    </section >
  );
};

export default Promo;