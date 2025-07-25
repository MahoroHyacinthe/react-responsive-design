import React from "react";
import Adresses from "./Adresses";
import Inputs from "./Inputs";
const Lastpage=()=>{

    return(
    <section className=" grid lg:flex h-auto justify-around  pt-15 ">
        <div className=" size-01">
            <div className="grid gap-2 text-3xl" >
                <h1>contact us</h1>
                <p className=" text-4xl font-bold">Say Hello</p>
            </div>
            <div className="grid gap-10 mt-15 mb-15">
                <Adresses 
                    image ="/location.JPG"
                    title = "Address"
                    description ="Location KG 9 Ave, Kigali"
                />
                <Adresses 
                    image ="/location.JPG"
                    title = "Email"
                    description ="bigman@sdff.com"
                />
                <Adresses 
                    image ="/location.JPG"
                    title = "Phone"
                    description ="=250 6896 4366"
                />
            </div>
            </div>
            <div>
                <div className="grid gap-2 text-3xl" >
                <h1>Have a Question ?</h1>
                <p className=" text-4xl font-bold">Send a Message</p>
                <div className=" grid gap-10 pt-5">
                    <Inputs 
                    type ="name"
                    placeholder="name"
                    />
                    <Inputs 
                    type ="name"
                    placeholder="Email"
                    />
                    <Inputs 
                    type ="name"
                    placeholder="Subject"
                    />
                     <input className=" border-2 border-emerald-600 rounded p-2 pb-20" type="text" placeholder="Message" />
                     <button className="  flex items-start mr-60 ">Send Message</button>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Lastpage