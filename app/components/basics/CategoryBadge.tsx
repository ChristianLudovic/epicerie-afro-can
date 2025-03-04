interface CategoryBadgeProps {
    tagName: string;
    categoryQuantity: number;
    isSelected?: boolean;
    onClick?: () => void;
}

export default function CategoryBadge({
    tagName,
    categoryQuantity,
    isSelected = false,
    onClick,
    ...props
}: CategoryBadgeProps) {
    return (
        <button
            className={`py-[10px] px-[14px] rounded-full space-x-[10px] 
                ${isSelected 
                    ? 'bg-[#04C464] text-white' 
                    : 'bg-[#E7FCF1] text-[#04C464]'
                } 
                text-[15px] font-medium transition-colors hover:opacity-90 md:text-[13px] flex items-center`}
            onClick={onClick}
            {...props}
        >
            <span className="w-max">{tagName}</span>
            <span>({categoryQuantity})</span>
        </button>
    );
}