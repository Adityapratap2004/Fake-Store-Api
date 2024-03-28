'use client'
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";


const ProductList = () => {
    const [products, setProducts] = useState(null);
   


    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (response.status === 200) {
                    const data = await response.json();
                    setProducts(data);
                }
                else {
                    throw Error("There was some error while fetching data")
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();

    }, [])

    if (products===null) {
        return 
        (<div >
          <div className='w-5 h-5  rounded-full animate-spin border-2  border-black border-t-transparent' /> 
        </div>)
      
    }

    return (
        <div className='max-w-[1024px]  w-full mx-auto px-6 py-12'>
            <div className='w-full'>
                <h1 className=' text-[30px] md:text-[50px] font-semibold '>Products We Offer</h1>
                <p className='text-lg leading-5 '>Explore an extensive range of products, both digital and physical, available at the fake store.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 gap-y-5 py-6 w-full '>

                    {products.map((product) => {
                        return <ProductCard key={product.id} title={product.title} id={product.id} img={product.image} price={product.price} rating={product.rating} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default ProductList
