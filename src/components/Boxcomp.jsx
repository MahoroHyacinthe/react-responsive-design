import React from "react";
const Boxcomp = ({image,title,description,moredetails})=>{

    return (
          <div className=" text-center grid gap-2 border-gray-400 border-1 rounded-b-sm">
                <div>
                    <img className=" h-75 w-full" src={image} alt="Img" />
                </div>
                <div>
                    <h2 className=" text-2xl text-emerald-800 font-bold pt-1 pb-1.5">
                        {title}
                    </h2>
                    <article>
                        {description} 
                    </article>
                    <h2 className=" font-bold pt-1 pb-5">{moredetails}</h2>
                </div>
          </div>
        
    )
}

export default Boxcomp