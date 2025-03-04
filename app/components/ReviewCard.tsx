export default function ReviewCard({ message, name} : { name: string, message: string}) {
    return (
        <div className="space-y-[8px] pb-[20px] border-b-[1px] border-solid border-[#DADADA] w-full">
            <h3 className="text-[18px] font-semibold leading-[120%] tracking-[-1%]">{name}</h3>
            <p className="text-[14px] leading-[150%]">{message}</p>
        </div>
    );
}