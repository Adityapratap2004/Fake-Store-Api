'use client'
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {


    const handleClick = () => {
        console.log("Scrole")
        // Scroll the page down by 100vh
        window.scrollTo({
            top: window.innerHeight,// Scroll down by 100vh
            behavior: 'smooth', // Optional: smooth scrolling effect
        });
    }


    return (
        <div className='  bg-black flex flex-col  text-white items-center h-[100vh] justify-center '>
            <h1 className=' uppercase text-[60px] md:text-[90px] lg:text-[120px] font-black text-center leading-tight'>
                welcome <br /> to {` `}
                <span className=' bg-gradient-to-r from-[#FFFF00] to-[#00FFA7] bg-clip-text text-transparent'>Fake Store</span>
            </h1>
            <p className='w-full  max-w-3xl text-center text-sm md:text-base  lg:text-lg my-4'>
                This is the implementation of a fake store API designed to display a list of products and allow users to sort products by title and price, as well as view product details.
            </p>
            <div className='bg-white text-black flex items-center gap-6 py-3 px-5 rounded-full my-8 cursor-pointer' onClick={()=>{handleClick()}}>
                <span className='text-lg font-bold'>See Products</span>
                <span className='bg-black p-2 py-2.5 rounded-full animate-bounce'>
                   
                    <FaArrowDown className=" text-white " />

                </span>
            </div>
        </div>
    )
}

export default Hero
