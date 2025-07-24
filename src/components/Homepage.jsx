import React from "react"
const Homepage = () =>{ 
   return (
    <section className=" cursor-pointer bg-[url('/Todayy.jpg')] bg-cover min-h-screen grid place-content-center text-amber-100" >
       <div className=" p-8 text-center  ">
            <h6 className=" text-2xl font-medium  ">
                The Best Workspace in Kigali
            </h6>
            <div className=" text-4xl font-bold md:text-6xl lg:text-7xl  " >
                <span className=" text-emerald-300 font-extrabold">Professional</span><span>,creative,</span>
            </div> 
            <div className=" text-5xl grid font-bold  md:text-6xl" >
                <span class>Flexible,Scalable</span><span className=" text-5xl text-emerald-400">Workspace</span>
            </div> 
            <p className=" font-medium px-2 ">
                Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office
                spaces. Elevate your business with flexible solutions tailored to your needs. Find your perfect
                office today!
            </p>
            <button className=" bg-emerald-600 mt-8"> EXPLORE</button>
        </div> 
    </section>
   )
}  


export default Homepage