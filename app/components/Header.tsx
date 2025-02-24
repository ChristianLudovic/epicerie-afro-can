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
                        <p className="md:text-[16px] leading-[150%] max-w-[340px]">Nous avons tout ce dont vous avez besoin pour faire des repas délicieux et de qualités à des prix imbattables</p>
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
                            <p className="leading-[130%] text-[14px] text-[#3D4C5E]">2948 Ch de Chambly, Longueuil, QC J4L 1N2</p>
                        </div>
                        <div className="w-[0.7px] bg-[#C4C2C2] h-[30px]"></div>
                        <div className="space-y-[6px] ">
                            <div className="flex items-center space-x-1">
                                <svg className="vuesax-bulk-call2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z" fill="#292D32" />
                                    <path d="M21.97 18.33C21.97 18.61 21.92 18.9 21.82 19.18C21.79 19.26 21.76 19.34 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C10.36 19 9.97 18.71 9.6 18.4L12.87 15.13C13.15 15.34 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="#292D32" />
                                </svg>
                                <span className="leading-[130%] text-[14px] text-[#3D4C5E]">Contact</span>
                            </div>
                            <p className="leading-[130%] text-[14px] text-[#3D4C5E]">(438) 545-7862 - (438) 527-6872</p>
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