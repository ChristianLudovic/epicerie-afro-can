import Image from "next/image"
import image0001 from "@/public/0001.svg"
import image0002 from "@/public/0002.svg"
import image0003 from "@/public/0003.svg"


export default function Header(){
    return(
        <section className="px-4">
            <div className="max-w-[1298px] w-full mx-auto flex items-start justify-between mt-[28px]">
                <div className="max-w-[555px] w-full flex flex-col md:h-[542px] justify-between">
                    <div className="space-y-[41px]">
                        <h1 className="text-[52px] font-bold leading-[110%] tracking-[-3%] text-[#3D4C5E]">Bienvenu à l&apos;<span className="text-[#0CE377]">épicerie</span> <span className="text-[#FF2727]">Afro-Can</span>, votre marché de proximité pour vous servir</h1>
                        <p className="text-[14px] leading-[150%] max-w-[340px]">Nous avons tout ce dont vous avez besoin pour faire des repas délicieux et de qualités à des prix imbattables</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-[6px] ">
                            <div className="flex items-center space-x-1">
                                <svg className ="vuesax-bulk-location" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M20.62 8.66094C19.57 4.04094 15.54 1.96094 12 1.96094C12 1.96094 12 1.96094 11.99 1.96094C8.46 1.96094 4.42 4.03094 3.37 8.65094C2.2 13.8109 5.36 18.1809 8.22 20.9309C9.28 21.9509 10.64 22.4609 12 22.4609C13.36 22.4609 14.72 21.9509 15.77 20.9309C18.63 18.1809 21.79 13.8209 20.62 8.66094Z" fill="#3D4C5E" />
                                    <path d="M12 13.6709C13.7397 13.6709 15.15 12.2606 15.15 10.5209C15.15 8.78121 13.7397 7.37091 12 7.37091C10.2603 7.37091 8.85 8.78121 8.85 10.5209C8.85 12.2606 10.2603 13.6709 12 13.6709Z" fill="#3D4C5E" />
                                </svg>
                                <span className="leading-[130%] text-[14px] text-[#3D4C5E]">Adresse</span>
                            </div>
                            <p className="leading-[130%] text-[14px] text-[#3D4C5E]">Montreal - Saint Lauren</p>
                        </div>
                        <div className="w-[0.7px] bg-[#C4C2C2] h-[30px]"></div>
                        <div className="space-y-[6px] ">
                            <div className="flex items-center space-x-1">
                                <svg className ="vuesax-bulk-location" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M20.62 8.66094C19.57 4.04094 15.54 1.96094 12 1.96094C12 1.96094 12 1.96094 11.99 1.96094C8.46 1.96094 4.42 4.03094 3.37 8.65094C2.2 13.8109 5.36 18.1809 8.22 20.9309C9.28 21.9509 10.64 22.4609 12 22.4609C13.36 22.4609 14.72 21.9509 15.77 20.9309C18.63 18.1809 21.79 13.8209 20.62 8.66094Z" fill="#3D4C5E" />
                                    <path d="M12 13.6709C13.7397 13.6709 15.15 12.2606 15.15 10.5209C15.15 8.78121 13.7397 7.37091 12 7.37091C10.2603 7.37091 8.85 8.78121 8.85 10.5209C8.85 12.2606 10.2603 13.6709 12 13.6709Z" fill="#3D4C5E" />
                                </svg>
                                <span className="leading-[130%] text-[14px] text-[#3D4C5E]">Contact</span>
                            </div>
                            <p className="leading-[130%] text-[14px] text-[#3D4C5E]">+237 123 456 789 - +237 123 456 789</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[670px] w-full grid grid-cols-3 gap-4">
                    <Image src={image0001} alt="" className="col-span-3 max-w-[670px] w-full h-[310px] rounded-[32px] object-cover" />
                    <Image src={image0002} alt="" className="col-span-2 max-w-[670px] w-full h-[216px] rounded-[32px] object-cover" />
                    <Image src={image0003} alt="" className="col-span-1 max-w-[670px] w-full h-[216px] rounded-[32px] object-cover" />
                </div>
            </div>
        </section>
        
    )
}