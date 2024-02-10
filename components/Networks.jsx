import React from "react";

const Networks = ({ setActiveComponent, activeNetwork, setActiveNetwork }) => {


  const networks = [{
    name: "Ethereum",
    rpcUrl: "https://rpc.ankr.com/eth",
    logo: "assets/images/ethereum.png"
  }, {
    name: "Polygon Mumbai",
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
    logo: "assets/images/polygon.png"
  }, {
    name: "Polygon",
    rpcUrl: "https://rpc.ankr.com/polygon",
    logo: "assets/images/polygon.png"
  }, {
    name: "Goerli",
    rpcUrl: "https://eth-goerli.g.alchemy.com/v2/demo",
    logo: "assets/images/ethereum.png"
  }, {
    name: "Sepolia",
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
    logo: "assets/images/ethereum.png"
  }]

  const selectNetwork = (network) => {
    setActiveNetwork(network.name)
    localStorage.setItem("activeNetwork", JSON.stringify(network))
  }

  return (
    <section id="generator" className="py-14 ">
      <div className="container z-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-20">
          {networks?.map(n => (
            <div key={n.rpcUrl} onClick={() => selectNetwork(n)}>
              <div className={`group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40
                ${activeNetwork == n.name ? "bg-primary/40" : ""}`}
              >
                <article className="h-14 w-14 flex items-center justify-center rounded-lg bg-primary text-primary group-hover:bg-white/20 group-hover:text-white bg-primary">
                  <img src={n.logo} className="h-10" alt="" />
                </article>
                <h3 className="text-xl font-medium text-default-200 mt-8">{n.name}</h3>
                  <p className="text-base font-normal text-default-300 mt-4">By utilizing the selected network you ´ll be able to find details for getting its address and liquidity</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Networks;
