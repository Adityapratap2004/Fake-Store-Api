'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
const page = () => {

    const { id } = useParams();
    const [product, setProductDetails] = useState(null);
   

    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(prev => prev + 1);
    }
    const descreaseCount = () => {
        setCount(prev => prev - 1);
    }

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (response.status === 200) {
                    const data = await response.json();
                    setProductDetails(data);
                }
                else {
                    throw Error("Not able to fetch the product details");
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchProductDetails();


    }, [])

    if (product === null) {
        return (
            <div className='w-[100vw] h-[100vh] flex items-center justify-center' >
                <div className='w-10 h-10  rounded-full animate-spin border-2  border-black border-t-transparent' />
            </div>
        )
    }

    return (
        <div className='h-[100vh] flex items-center  w-full px-2 md:px-5 '>
            <div className='flex flex-col md:flex-row items-center w-full h-full py-4 md:py-12 md:gap-8 '>
                <div className='bg-[#cbbfb2] w-full md:w-[47%] h-[70%] flex items-center justify-center p-7 overflow-hidden cursor-pointer rounded-lg '>
                    <Image src={product?.image} alt="product image" width={300} height={300} className=' mix-blend-multiply transition-transform duration-700 hover:scale-110' />
                </div>
                <div className='px-5 md:w-[50%] '>
                    <h1 className='my-2 md:my-0 text-2xl md:text-4xl font-semibold'>
                        {product?.title}
                        <CiHeart className=' inline-block pl-4 text-[50px] cursor-pointer  hover:text-red-500  ' />
                    </h1>
                    <div className='flex' >
                        <div className='flex gap-1 items-center pr-2 border-r-2'>
                            {product?.rating?.rate &&
                                ([...Array(Math.floor(product?.rating?.rate))].map((_, index) => (
                                    <MdOutlineStarPurple500 key={index} />
                                )))

                            }
                            {
                                product?.rating?.count
                            }
                        </div>
                        <div className=' underline pl-2 cursor-pointer'>
                            View All Reviews
                        </div>
                    </div>
                    <div className='text-3xl font-semibold my-2'>
                        $ {product?.price}
                    </div>
                    <div className='my-4'>
                        <h3>
                            QTY
                        </h3>
                        <div className='flex gap-6 my-2'>
                            <div className='flex text-lg  ' >
                                <span className='w-10   border h-10 flex items-center justify-center bg-gray-100 cursor-pointer' onClick={descreaseCount}>-</span>
                                <span className='w-14  border-t border-b text-center h-10 flex items-center justify-center' >{count}</span>
                                <span className='w-10 border text-center h-10 flex items-center justify-center bg-gray-100 cursor-pointer' onClick={increaseCount}>+</span>
                            </div>

                            <button className='bg-[rgba(47,54,25,255)] h-[10] text-white px-4 text-lg'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div>
                        {
                            product?.description
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
