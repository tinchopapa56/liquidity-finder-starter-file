export const shortAddress= (address) => {
    
    if(Array.isArray(address)){
        return `${address[0]?.slice(0,12)}...${address[0].length-7}`
    }

   return  `${address?.slice(0,12)}...${address.length-7}`
}

export const parseErrorMsg = (e) => {
    const json = JSON.parse(JSON.stringify(e))
    return json?.reason || json?.error?.message;
}