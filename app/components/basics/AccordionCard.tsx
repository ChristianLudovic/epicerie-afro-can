"use client";
import { useState } from "react";

interface AccordionCardProps {
    question: string;
    answer: string;
}

export default function AccordionCard({ question, answer }: AccordionCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`transition-colors duration-300 rounded-[16px] px-8 py-8 max-sm:px-5 max-sm:py-5 ${isOpen ? 'bg-[#E7F9F4]' : 'bg-transparent'}`}>
            <div className="flex items-start justify-between cursor-pointer" onClick={toggleAccordion}>
                <h3 className="text-[18px] leading-[150%] font-semibold">{question}</h3>
                {isOpen ? (
                    <div>
                        <svg 
                            className="transition-transform duration-300" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                                stroke="#98A2B3" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                            />
                        </svg>
                    </div>
                    
                ) : (
                    <div>
                        <svg 
                            className="transition-transform duration-300" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                                stroke="#98A2B3" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                            />
                        </svg>
                    </div>
                )}
            </div>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-[7px]' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="text-[16px] leading-[150%]">{answer}</div>
            </div>
        </div>
    );
}