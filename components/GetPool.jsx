import React from "react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const GetPool = ({ GET_POOL_ADDRESS }) => {
  const [selectedNetwork, setSelectedNetwork] = useState({})
  const [poolAddress, setPoolAddress] = useState([])
  const [liquidity, setLiquidity] = useState({
    Token_A: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    Token_B: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    Fee: "3000",
  })

  const handleFormFieldChange = (field, val) => {
    setLiquidity((prev) => {
      return { ...prev, [field]: val };
    });
  }


  const CALL_POOL_ADDRESS = async () => {
    console.log("viendo", liquidity)
    const { Token_A, Token_B, Fee } = liquidity
    const { rpcUrl } = selectedNetwork;

    if (!Token_A || !Token_B || !Fee || !rpcUrl) {
      return notifyErr("Provide all the details (2 tokens + fee + networkurl)")
    }

    const poolAddress = await GET_POOL_ADDRESS(liquidity, selectedNetwork)
    setPoolAddress(poolAddress)

  }

  const notifyErr = (msg) => toast.error(msg, { duration: 4000 })

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"))
    setSelectedNetwork(network)
  }, [])

  return (
    <section className="flex items-center py-6 px-0 lg:p-10 w-full lg:h-screen">
      <div className="container">
        <div className="backdrop-blur-2xl bg-default-950/40 rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="relative rounded-xl overflow-hidden h-full w-full">
              <img
                src="assets/images/ai/auth-img.jpg"
                alt=""
                className="w-full h-full transform -scale-x-100"
              />
              <div className="absolute inset-0 bg-default-950/40">
                <div className="flex items-end justify-start h-full">
                  <h5 className="m-4 text-base font-medium text-white ">The best way <br /> to find any network liquidity pool address</h5>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col h-full p-10 lg:ps-0">
              <div className="pb6 my-auto">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  Check Liquidity Pool Address
                </h4>
                <p className="text-default-300 mb-8 max-w-sm">
                  Enter Details of the 2 tokens and pool fee
                </p>

                <div className="text-start">
                  <InputField text="Token_A" onChange={handleFormFieldChange} />
                  <InputField text="Token_B" onChange={handleFormFieldChange} />
                  <InputField text="Fee" onChange={handleFormFieldChange} />
                </div>

                <div className="mb-6 text-center">
                  <button onClick={() => CALL_POOL_ADDRESS()} className="bg-purple-500 w-full inline-flex items-center justify-center px-6 py-6 backdrop-blur-2xl bg-primary-600/90 text-white rounded-lg transition-all duration-500 group hover:bg-purple-700 mt-5">
                    Get Pool Address
                  </button>
                </div>

                {poolAddress && (
                  <>
                    {poolAddress?.map((pool, i) => (
                      <div className="mb-4">
                        <input
                          key={i+2}
                          type="text"
                          onClick={(e) => navigator.clipboard.writeText(pool)}
                          value={`${i+1}: ${pool}`}
                          className="block text-base/normal font-semibold text-default-200 mb-2"
                        />
                      </div>
                    ))}

                  </>
                )}

              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

  )
};

export default GetPool;

const InputField = ({ text, onChange }) => (
  <div className="mb-4">
    <label className="block text-base/normal font-semibold text-default-200 mb-2">
      {text}
    </label>
    <input
      type="text"
      placeholder={`Enter your ${text}`}
      onChange={(e) => onChange( text , e.target.value)}
      className="block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white focus:border-white focus:ring-transparent"
    />
  </div>
)