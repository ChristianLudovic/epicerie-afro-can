export default function AvailabilityBadge({availability} : {availability : string}){
    return(
        <div className={`w-max text-[13px] max-sm:text-[11px] ${availability === 'En stock' ? 'bg-[#E7FCF1] text-[#048F84]' : 'bg-[#FFE5DE] text-[#FF4F21]'} leading-[155%] p-1 rounded-[4px]`}>{availability}</div>
    )
}