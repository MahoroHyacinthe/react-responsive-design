import React from "react";
const Adresses =({image,title,description})=>{


    return(
        <>
        <div className=" flex ">
            <img src ={image} alt="img"/>
            <div>
                <h1 className=" text-black">{title}</h1>
                <article>
                 {description}   
                </article>
            </div>
        </div>
        </>
    )
}
export default Adresses