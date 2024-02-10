import React from "react";
import { CgAdidas } from "react-icons/cg";

const Action = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="p-6 rounded-xl bg-default-950/40">

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex-shrink">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(img => (
                  <img
                    src={`assets/images/avatars/img-${img}.png`}
                    alt="Image des"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                  />
                ))}
                <button className="h-10 w-10 font-medium text-primary rounded-full bg-white">
                  80+
                </button>
              </div>
            </div>
          </div>

          <div className="flex-grow py-6">
            <h3 className="text-lg font-medium text-default-200">
              Join our web 3.0 experts community
            </h3>
            <p className="w-3/4 text-base font-medium text-default-300 mt-5">
              Web 3.0 represents the next phase of the internet, marked by decentralization and enhanced user
              control. At the heart of this evolution are smart contracts built with Solidity, a programming
              language designed for creating decentralized applications (DApps) on blockchain platforms like
              Ethereum.
            </p>
          </div>

          <div className="flex-shrink">
            <a href="" target="_blank" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
              Join <CgAdidas />
            </a>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Action;
