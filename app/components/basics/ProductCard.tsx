import Image from "next/image";
import AvailabilityBadge from "./AvailabilityBadge";

interface ProductCardProps {
    productName : string,
    productDescription : string,
    productImagePath : string,
}

export default function ProductCard({productName, productDescription, productImagePath} : ProductCardProps){
    return(
        <div className="border-[0.55px] border-solid border-[#EBEBEB] rounded-[16px] max-w-[295px] w-full space-y-2 p-[10px]">
            <Image
                className="rounded-[18px]"
                src={productImagePath} 
                alt={productName} 
                width={273} 
                height={261}  
            />
            <div className="space-y-[10px]">
                <div className="space-y-2">
                    <h3 className="text-[16px] leading-[110%] font-semibold">{productName}</h3>
                    <p className="text-[14px] leading-[130%]">{productDescription}</p>
                </div>
                <AvailabilityBadge />
            </div>
        </div>
    )
}