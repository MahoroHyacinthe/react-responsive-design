import Boxcomp from "./Boxcomp"
const SectionComp = () =>{
    return (
<>
        <section className=" bg-neutral-50 pt-10">
            <div className=" grid place-content-center">
                <h2 className="text-3xl font-bold text-center px-3 md:text-4xl">We Offer creative working</h2>
                <h2 className="text-3xl font-bold text-center">Environments</h2>
                <h3 className="text-center">Find your perfect workspace. Choose from versatile options</h3>
                <h3 className="pl-30">tailored to your needs.</h3>
            </div>
            <div className="px-8 py-10 grid gap-6 text-center md:flex ">
                <Boxcomp
                image="/office.jpg"
                title="Renting Offices"
                description="
                            Lorem ipsum dolor sit amet consectetur
                            adipiscing elit mollis mauris"
                moredetails="Learn More"
                />
                <Boxcomp
                image="/office.jpg"
                title="Coffee Shop"
                description="
                            Lorem ipsum dolor sit amet consectetur
                            adipiscing elit mollis mauris"
                moredetails="Learn More"
                />
                <Boxcomp
                image="/office.jpg"
                title="Private event Space"
                description="
                            Lorem ipsum dolor sit amet consectetur
                            adipiscing elit mollis mauris"
                moredetails="Learn More"
                />
            </div>
        </section>
</>
    )
}

export default SectionComp