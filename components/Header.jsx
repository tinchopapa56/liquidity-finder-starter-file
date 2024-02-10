import React from "react";
import { CgMenuRight, CgAbstract } from "react-icons/cg";

const Header = ({ setActiveComponent, activeNetwork }) => {


  const navMenu = [
    "Home", "Liquidity", "PoolHistory", "LiquidityHistory", "Networks"
  ]

  return (
    <header id="navbar-sticky" className="navbar">
      <div className="container">
        <nav className="">
          {/* LOGO */}
          <a className="logo" href="/">
            <img src="assets/images/logo.png" alt="webAI" className="h-10" />
          </a>
          {/* MOBILE BTN */}
          <div className="lg:hidden flex items-center ms-auto px-2.5">
            <button
              className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white bg-default"
              type="button"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <CgMenuRight />
            </button>
          </div>
          {/* MOBILE NAV */}
          <div id="mobileMenu" className="hs-collapse-transition duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0">
            <ul id="navbar-navlist" className="navbar-nav">
              {navMenu.map((item, i) => (
                <li
                  key={i}
                  onClick={() => setActiveComponent(item)}
                  className="nav-item"
                >
                  <a className="nav-link">{item}</a>
                </li>
              ))}
            </ul>

            <div className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3">
                <CgAbstract />
                {activeNetwork || "Select a Network"}
              </a>
            </div>
            {/* Mobile desktop */}

            <div className="hidden lg:flex items-center ml-16">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3">
                <CgAbstract />
                {activeNetwork || "Select a Network"}
              </a>
            </div>

          </div>
        </nav>
      </div>
    </header>
  )
};

export default Header;
