import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ id, img, title, price, rating }) => {


    return (
        <div className="">
            <div className="h-[270px] bg-[#cbbfb2] flex items-center justify-center rounded-xl cursor-pointer overflow-hidden ">
                <Link href={`/productdetails/${id}`}>
                <Image src={img} alt="product img" width={200} height={200} className="h-[200px] object-contain mix-blend-multiply transition-transform duration-700 hover:scale-110" />
                </Link>
            </div>
            <div className="py-2 px-1">
                <Link href={`/productdetails/${id}`}>
                <h2 className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-lg font-medium  " >{title}</h2>
                <div className="flex justify-between">
                    <p>
                        Price: <span className="text-lg">${price}</span>
                    </p>
                    <p>
                        Rating: <span className="text-lg">{rating?.rate}</span>/5
                    </p>
                </div>
                </Link>
                
            </div>

        </div>
    )
}

export default ProductCard
