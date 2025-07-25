import React from "react";
const Inputs = ({type,placeholder}) =>{

    return(
        <>
        <input className=" border-2 border-emerald-600 rounded p-2" type={type} placeholder={placeholder} />
        </>
    )

}

export default Inputs