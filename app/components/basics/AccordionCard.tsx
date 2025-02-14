interface AccordionCardProps {
    question : string,
    answer : string,
}

export default function AccordionCard({question, answer} : AccordionCardProps){
     return(
        <div className="space-y-[7px] p-8 bg-[#E7F9F4] rounded-[16px]">
            <div className="flex items-center justify-between">
                <h3 className="text-[16px] leading-[110%] font-semibold">{question}</h3>
                <div>
                    <svg className="plus-circle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <p className="text-[14px] leading-[150%]">{answer}</p>
        </div>
     )
}