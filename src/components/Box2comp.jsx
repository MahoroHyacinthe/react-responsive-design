import React from "react";
const Box2comp =({icon,name,details})=>{
    return (
        <>
            <div className="grid bg-emerald-200 text-center gap-1 pt-7 md:h-50 md:w-64">
                <div className=" flex place-content-center ">
                   <img className=" rounded-full size-16 " src={icon} alt="img"/>
                </div>
                <div>
                    <h1 className="font-bold">{name}</h1>
                </div>
                <article className="m-0 mb-4">
                    <p>
                        {details}
                    </p>
                </article>
            </div>        
        </>
    )
}
export default Box2comp