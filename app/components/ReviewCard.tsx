export default function ReviewCard({ message, name, date } : { name: string, message: string, date?: string }) {
    return (
        <div className="space-y-[14px] pb-[30px] border-b-[1px] border-solid border-[#DADADA] w-full">
            <h3 className="text-[18px] font-semibold leading-[120%] tracking-[-1%]">{name}</h3>
            <p className="text-[14px] leading-[150%]">{message}</p>
        </div>
    );
}