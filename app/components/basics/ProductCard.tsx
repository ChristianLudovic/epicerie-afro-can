import Image from "next/image";
import AvailabilityBadge from "./AvailabilityBadge";

interface ProductCardProps {
    productName: string;
    productDescription: string;
    productImagePath: string;
    avaibility: string;
    onClick?: () => void;
}

export default function ProductCard({
    productName,
    productDescription,
    productImagePath,
    avaibility,
    onClick
}: ProductCardProps) {
    return (
        <div 
            className="border-[0.55px] border-solid border-[#EBEBEB] rounded-[16px] max-w-[295px] w-full space-y-2 p-[10px] max-sm:p-[6px] max-sm:rounded-[6px] cursor-pointer"
            onClick={onClick}
        >
            <Image
                className="rounded-[18px] max max-w-[273px] w-full h-[261px] max-sm:h-[180px] object-cover max-sm:rounded-[10px]"
                src={productImagePath} 
                alt={productName} 
                width={273} 
                height={261}  
            />
            <div className="space-y-[10px]">
                <div className="space-y-2">
                    <h3 className="text-[16px] leading-[110%] font-semibold">{productName}</h3>
                    <p className="text-[14px] max-sm:text-[12px] leading-[130%] line-clamp-2 overflow-hidden">{productDescription}</p>
                </div>
                <AvailabilityBadge availability={avaibility} />
            </div>
        </div>
    );
}