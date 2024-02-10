import React, { useState, useEffect } from "react";
import { ethers, Contract } from "ethers";
import UniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json"
import toast from "react-hot-toast";
import { FACTORY_ABI, FACTORY_ADDRESS } from "./constants";
import { parseErrorMsg, shortAddress } from "../utils/shortaddress";

export const CONTEXT = React.createContext();

export const CONTEXT_PROVIDER = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const notifyError = (msg) => toast.error(msg, { duration: 3000 });
    const notifySucess = (msg) => toast.success(msg, { duration: 3000 });

    const GET_POOL_ADDRESS = async (liquidity, selectedNetwork) => { //hook
        try {
            setIsLoading(true)
            const provider = new ethers.providers.JsonRpcBatchProvider(
                selectedNetwork.rpcUrl //?? "https://rpc.ankr.com/polygon" 
            )
            const factoryContract = new ethers.Contract(
                FACTORY_ADDRESS,
                FACTORY_ABI,
                provider
            );

            const poolAddress = await factoryContract.functions.getPool(
                liquidity.Token_A,
                liquidity.Token_B,
                Number(liquidity.Fee)
            );//poner mejor que token a y b name

            const transaction = {
                Token_A: liquidity.Token_A,
                Token_B: liquidity.Token_B,
                Fee: liquidity.Fee,
                network: selectedNetwork.name,
                poolAddress: poolAddress
            }

            // console.log("res", poolAddress, transaction)

            let poolArray = []
            const poolLists = localStorage.getItem("poolHistory"); //name
            if(poolLists){
                poolArray = JSON.parse(localStorage.getItem("poolHistory"));
                poolArray.push(transaction)
                localStorage.setItem("poolHistory", JSON.stringify(poolArray)); 
            } else {
                poolArray.push(transaction)
                localStorage.setItem("poolHistory", JSON.stringify(poolArray)); 
            }

            notifySucess("Successfully Completed!") //agregar tx completed

            setIsLoading(false)
            return poolAddress
        } catch (err) {
            setIsLoading(false)
            console.log(err)
            notifyError(parseErrorMsg(err)) // notifyError("Error en fetch POOL")
        }
    }
    const getPoolData = async (poolContract, selectedNetwork, poolAddress) => {
        const [liquidity, Fee, token0, token1] = await Promise.all([
            poolContract.liquidity(),
            poolContract.Fee(),
            poolContract.token0(),
            poolContract.token1(),
        ])
        return {
            liquidity: liquidity.toString(),
            Fee,
            token0,
            token1,
            network: selectedNetwork.name,
            poolAddress: poolAddress
        }
    }
    const GET_POOL_DETAILS = async (poolAddress, selectedNetwork) => {
        try {
            setIsLoading(true)
            const PROVIDER = new ethers.providers.JsonRpcBatchProvider(
                selectedNetwork.rpcUrl
            );
            const poolContract = new Contract(poolAddress, UniswapV3Pool.abi, PROVIDER)

            const poolData = await getPoolData(poolContract, selectedNetwork, poolAddress)

        let liquidityArray = []
        const poolLists = localStorage.getItem("liquidityHistory"); //name
        if (poolLists) {
            liquidityArray = JSON.parse(poolLists); //ACA EL CJABON LO LLAMA DE NUEVO AL STORAGE
            liquidityArray.push(transaction)
            localStorage.setItem("poolHistory", JSON.stringify(liquidityArray));
        } else {
            liquidityArray.push(transaction)
            localStorage.setItem("liquidityHistory", JSON.stringify(liquidityArray));
        }

        notifySuccess("Tx Completed")
        setIsLoading(false)
        return poolData
    }catch (err) {
        setIsLoading(false)
        notifyError(parseErrorMsg(err))

    }
}

useEffect(() => {
    /*const runPool = async () => {
        await GET_POOL_ADDRESS()
    }
    runPool()*/
}, [])

return (
    <CONTEXT.Provider value={{ isLoading, GET_POOL_ADDRESS, GET_POOL_DETAILS }}>
        {children}
    </CONTEXT.Provider>
)
} 
