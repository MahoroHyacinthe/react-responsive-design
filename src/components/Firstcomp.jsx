import react from 'react';
const Firstcomp = ()=>{
      return(
        <header className=' opacity-90'>
            <h1 className=' text-black text-xl sm:text-2xl  mt-2.5 md:text-3xl md:mt-3 font-bold'>business cafe</h1>
            <nav className='flex gap-3 mt-4 mb-4 md:mt-5  md:gap-9 lg:gap-12'>
                <a href="home">Home</a>
                <a href="home">Space</a>
                <a href="home">About</a>
                <a href="home">Contact</a>
            </nav>
        </header>
    )  
      
}

export default Firstcomp;
