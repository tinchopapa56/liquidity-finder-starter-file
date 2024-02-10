import React, { useState, useEffect } from "react";
import { GoCopy } from "react-icons/go"

import { shortAddress } from "../utils/shortaddress";
import { Promo } from "../components/index"

const LiquidityHistory = ({ setActiveComponent }) => {
  const [liquidityDetails, setLiquidityDetails] = useState([])

  useEffect(() => {
    const liquidity = JSON.parse(localStorage.getItem("liquidityHistory"))
    setLiquidityDetails(liquidity)
  }, [])

  return (
    <section id="price" className="pt-32">
      <div className="container">
        {liquidityDetails 
          ? <LiquidityDetails shortAddress={shortAddress} liquidityDetails={liquidityDetails}/>
          : <Promo setActiveComponent={setActiveComponent} />
        }
      </div>
    </section>
  )
};

export default LiquidityHistory;

const LiquidityDetails = ({shortAddress, liquidityDetails}) => (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
    {liquidityDetails?.map((pool, i) => (
        <div className="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500" key={i}>
          <div className="border border-white/10 rounded-xl">
            
            <a className="flex items-center justify-center border border-white/10 text-white py-2 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300 cursor-pointer">
              {pool.network}
            </a>

            <hr className="my-5 border-dashed border-white/10" />
            <ul className="mt-3 text-sm text-default-700" role="list">
            <TransactionItem
                element={pool.liquidity}
                name={"Liquidity"}
                shortenedAddress={pool.liquidity}
              />
              <TransactionItem
                element={pool.Token_A}
                name={"Token A"}
                shortenedAddress={shortAddress(pool.Token_A)}
              />
              <TransactionItem
                element={pool.Token_B}
                name={"Token B"}

                shortenedAddress={shortAddress(pool.Token_B)}
              />
              <TransactionItem
                element={pool.Fee}
                name={"Token Fee"}
                shortenedAddress={pool.Fee}
              />
              <TransactionItem
                element={pool.network}
                name={"Network"}
                shortenedAddress={pool.network}
              />
              <TransactionItem
                element={pool.poolAddress}
                name={"Pool Address"}
                shortenedAddress={shortAddress(pool.poolAddress)}
              />
            </ul>

          </div>
        </div>
    ))}
  </div>
)
const TransactionItem = ({ name, element, shortenedAddress }) => (
  <li className="flex items-center gap-2 py-2">
    <i
      onClick={() => navigator.clipboard.writeText(element)}
      className="inline-block w-18 text-primary"
    >
      <GoCopy />
    </i>
    <span className="text-default-50">
      {name}: {shortenedAddress}
    </span>
  </li>
)