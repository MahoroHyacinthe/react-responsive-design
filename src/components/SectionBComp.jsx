import React from "react"
import Box2comp from "./Box2comp"
import Mission from "./MIssion"
const SectionBComp = ()=>{
    return(
        <>
            <section className="h-auto bg-gray-50  px-8 " >
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
                    <div>
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
                <div className="sm:grid sm:h-auto lg:flex md:flex lg:pl-2 lg:pr-10 lg:pl-10 ">
                    <div className="grid p-3 md:p-3 gap-7 h-56 md:grid lg:grid">
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
                        <img className=" p-4 sm:h-cover sm:w-cover sm:0  mt-100 md:mt-0 md:p-3 md:h-160 lg:h-160 lg:w-full" src="/section3.JPG" alt="" />
                      <div className="grid p-3 gap-7 md:grid lg:p-3 lg:gap-7 lg:grid ">
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