import React from "react";
import IconsComp from "./IconsComp";
const Footercomp =()=>{


    return(
        <>
        <div className=" h-90 grid mt-10 pt-5 ml-6 mr-6 sm:m-20 md:flex  md:justify-between md:ml-20 md:mr-20 sm:mt-20 sm:mb-0  border-t-2 border-t-emerald-700 border-b-2 border-b-emerald-700  md:pb-40">
            <div className="h-60">
                <span className="flex mb-4">
                    <IconsComp roundicon="/logo.JPG"/>
                    <h1 className=" text-2xl mt-2">Business Cafe</h1> 
                </span>
                <article>
                    Discover your ideal workspace with us. Work
                    <br/> smart, not hard in our fully-equipped office
                    <br/>spaces
                </article>
                <div className="flex p-4 gap-2.5">

                    <IconsComp roundicon="/facebook.JPG"/>
                    <IconsComp roundicon="/twitter.JPG"/>
                    <IconsComp roundicon="/instagram.JPG"/>
                    <IconsComp roundicon="/linkedin.JPG"/>

                </div>
            </div>
            <div className="flex sm:w-sm md:grid gap-4 font-medium">
                <h1>Quick Links</h1>
                <a href="">Home</a>
                <a href="">Space</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className=" flex w-sm  sm:w-sx gap-0 md:grid md:gap-5 md:items-center">
                <h1 className="">Contact info</h1>
                <div><strong>Location:</strong>Kigali,Rwanda</div>
                <div><strong>Email:</strong>businesscafe@info.com</div>
                <div>
                <strong>Phone:</strong>078378717</div>
                <div><a href="">View Location on googleMap</a></div>
            </div>
        </div>
        
        </>
    )
}

export default Footercomp