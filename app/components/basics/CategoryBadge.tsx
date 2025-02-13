interface CategoryBadgeProps {
    tagName : string,
    categoryQuantity: number,
}

export default function CategoryBadge({tagName, categoryQuantity, ...props} : CategoryBadgeProps){
    return(
        <button className='py-[10px] px-[14px] rounded-full space-x-[10px] bg-[#E7FCF1] text-[#04C464] text-[15px] font-medium' {...props}>
            <span>{tagName}</span>
            <span>({categoryQuantity})</span>
        </button>
    )
}