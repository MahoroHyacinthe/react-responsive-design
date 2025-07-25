import React from "react";
import IconsComp from "./IconsComp";
const Footercomp =()=>{


    return(
        <>
        <div className=" h-78 pt-5 flex justify-between ml-30 mr-30 mt-40 mb-1 border-t-2 border-t-emerald-700 border-b-2 border-b-emerald-700 pb-40">
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
            <div className="grid gap-4 font-medium">
                <h1>Quick Links</h1>
                <a href="">Home</a>
                <a href="">Space</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className="grid gap-5">
                <h1 className="">Contact info</h1>
                <div><strong>Location:</strong>Kigali,Rwanda</div>
                <div><strong>Email:</strong>businesscafe@info.com</div>
                <div><strong>Phone:</strong>078378717</div>
                <div><a href=""></a>View Location on googleMap</div>
            </div>
        </div>
        
        </>
    )
}

export default Footercomp