import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import IconOne from "./SVG/IconOne";
import IconTwo from "./SVG/IconTwo";
import { FaArrowRightLong } from 'react-icons/fa';

const Home = ({ setActiveComponent, GET_POOL_DETAILS }) => {
  const [selectedNetwork, setSelectedNetwork] = useState({})
  const [poolAddress, setPoolAddress] = useState("")
  const [poolDetails, setPoolDetails] = useState("")

  const notifyErr = (msg) => toast.error(msg, { duration: 4000 })

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"))
    setSelectedNetwork(network)
  }, [])

  const CALL_POOL_DETAIL = async (inputAddress) => {
    const { rpcUrl } = selectedNetwork;

    const zeroAddress = "0x"

    if (!inputAddress || !rpcUrl || inputAddress == zeroAddress) {
      return notifyErr("Provide Data Or Invalid Address");
    }

    const poolDetails = await GET_POOL_DETAILS(inputAddress, selectedNetwork)
    setPoolDetails(poolDetails)
  }

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

      {/* HOME */}
      <div className="container">
        <div className="py-14 text-center relative">
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <h2 className="md:text-6xl/tight text-5xl text-default-100 font-semibold mb-6">
                Make work, Uniswap pool & liquiduty finder
              </h2>
              <p className="text-base text-default-200 font-medium px-5">
                In the realm of decentralized finance (DeFi), liquidity stands as the lifeblood of
                efficient and thriving markets. Picture a transparent liquidity pool where digital assets
                are seamlessly exchanged, and transactions are openly displayed on the blockchain.
              </p>

              <div className="w-full flex items-center mt-7 relative">
                <input
                  type="text"
                  className="w-full p-4 border border-primary focus:outline-none focus:ring-0 text-sm text-white bg-transparent placeholder:text-white rounded-md"
                  placeholder="Enter pool address"
                  autoComplete="off"
                  onChange={(e) => setPoolAddress(e.target.value)}
                />

                <button className="mr-4 absolute right-0 py-2 px-6 border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500"
                  onClick={() => CALL_POOL_DETAIL(poolAddress)}
                >
                  Submit
                </button>
              </div>

              <div>
                <button className="mx-4 my-8 py-2 px-6 rounded-2xl border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500"
                  onClick={() => CALL_POOL_DETAIL(poolAddress)}
                >
                  {poolAddress ? "Check liquidity" : "Get Pool Liquidity"}
                </button>
                <button className="mx-4 my-8 py-2 px-6 rounded-2xl border-0 text-white font-semibold text-sm rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-hover hover:text-white transition-all duration-500"
                  onClick={() => CALL_POOL_DETAIL(poolAddress)}
                >
                  onClick={() => setActiveComponent("Liquidity")}
                </button>
              </div>

              <p className="text-sm font-medium text-default-400 mt-5">
                Get all details about pools and liquidity
              </p>

            </div>
          </div>
        </div>

      </div>

    </section >
  )
}

export default Home;
