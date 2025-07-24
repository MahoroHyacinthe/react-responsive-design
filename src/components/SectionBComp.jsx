import React from "react"
import Box2comp from "./Box2comp"
const SectionBComp = ()=>{
    return(
        <>
            <section className="h-screen bg-gray-50  px-8 " >
                <div className="grid sm:gap-4 md:flex md:justify-between lg:flex lg:justify-evenly md:h-40">
                    <div className=" pb-8 border-b-2 border-b-emerald-600 md:border-b-0 md:border-r-2
                     md:border-b-emerald-600 lg:border-r-2 lg:pr-20">
                        <h1>about Us</h1> 
                        <article className="font-bold">
                            <p></p>We offer creative working
                            environments that suit your
                            business
                        </article>        
                    </div>
                    <div className="" >
                        <article>
                            We offer creative working
                            environments that suit your
                            business
                        </article>        
                        <h1> More About Us</h1> 
                    </div>
                </div>
                <div className="text-center">
                    <h1>Your Benefits</h1>
                    <p className="text-4xl font-bold">Why Choose Us</p>
                    <article>
                        Unleash your productivity with our premium workspace solutions. Elevate
                        your work game and join the winning team today.

                    </article>        
                </div>
                <div className=" md:flex md:px-16">
                    <div className="grid p-3 gap-7 h-56 ">
                        <Box2comp 
                        icon = "/capture.JPG"
                        name = "Creative spaces"
                        details= " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris "
                        
                        />
                        <Box2comp 
                        icon = "/capture.JPG"
                        name = "High Speed Wifi"
                        details= " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris "
                        
                        />
                        <Box2comp 
                        icon = "/capture.JPG"
                        name = "Parking Area"
                        details= " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris "
                        
                        />
                    </div>
                    <div className=" ">
                        <img className=" w-full p-4 md:hidden lg:block lg:h-160 " src="/section3.JPG" alt="" />
                    </div>
                      <div className="grid p-3 gap-7">
                        <Box2comp 
                        icon = "/capture.JPG"
                        name = "Creative spaces"
                        details= " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris "
                        
                        />
                        <Box2comp 
                        icon = "/capture.JPG"
                        name = "High Speed Wifi"
                        details= " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris "
                        
                        />
                        <Box2comp 
                        icon = "/capture.JPG"
                        name = "Parking Area"
                        details= " Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris "
                        
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default SectionBComp