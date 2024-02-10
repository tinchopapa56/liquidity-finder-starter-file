import React, { useState, useEffect } from "react";
import { GoCopy } from "react-icons/go"

import { shortAddress } from "../utils/shortaddress";
import { Promo } from "../components/index"

const PoolHistory = ({ setActiveComponent }) => {
  const [poolDetails, setPoolDetails] = useState([])

  useEffect(() => {
    const pools = JSON.parse(localStorage.getItem("poolHistory"))
    setPoolDetails(pools?.reverse())
  }, [])

  return (
    <section id="price" className="pt-32">
      <div className="container">
        {poolDetails 
          ? <PoolDetails shortAddress={shortAddress} poolDetails={poolDetails}/>
          : <Promo setActiveComponent={setActiveComponent} />
        }
      </div>
    </section>
  )
};

export default PoolHistory;

const PoolDetails = ({shortAddress, poolDetails}) => (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
    {poolDetails?.map((pool, i) => (
        <div className="bg-slate-950/40 rounded-xl hover:-translate-y-2 transition-all duration-500" key={i}>
          <div className="border border-white/10 rounded-xl">
            
            <a className="flex items-center justify-center border border-white/10 text-white py-2 mt-6 rounded-lg hover:bg-primary-hover transition-all duration-300 cursor-pointer">
              {pool.network}
            </a>

            <hr className="my-5 border-dashed border-white/10" />
            <ul className="mt-3 text-sm text-default-700" role="list">
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