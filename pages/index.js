import React, { useContext, useState, useEffect } from 'react'

import { Header, Home, Action, GetPool, Networks, LiqudityHistory, PoolHistory, Promo, Loader, IconOne, IconTwo } from "../components/index"
import { CONTEXT } from '../context'

const index = () => {
  const { isLoading, GET_POOL_ADDRESS, GET_POOL_DETAILS } = useContext(CONTEXT)
  const [activeNetwork, setActiveNetwork] = useState()
  const [activeComponent, setActiveComponent] = useState("Home")

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"))
    setActiveNetwork(network?.name)
  }, [activeNetwork])

  // console.log("selected COMPO: ", activeComponent)

  return (
    <div className="bg-slate-900">
      <Header
        setActiveComponent={setActiveComponent}
        activeNetwork={activeNetwork}
      />

      {activeComponent == "Home" &&
        <Home
          setActiveComponent={setActiveComponent}
          GET_POOL_DETAILS={GET_POOL_DETAILS}
        />
      }
      {activeComponent === "Liquidity" &&
        <GetPool setActiveComponent={setActiveComponent}
          GET_POOL_ADDRESS={GET_POOL_ADDRESS}
        />
      }

      {activeComponent === "LiquidityHistory" &&
        <LiqudityHistory setActiveComponent={setActiveComponent} />
      }

      {activeComponent === "PoolHistory" &&
        <PoolHistory setActiveComponent={setActiveComponent} />
      }

      {activeComponent === "Networks" &&
        <Networks
          setActiveComponent={setActiveComponent}
          activeNetwork={activeNetwork}
          setActiveNetwork={setActiveNetwork}
        />
      }

      <Action />

      {isLoading &&
        <div className='new_loader'>
          <Loader />
        </div>
      }
    </div>
  )
}

export default index
