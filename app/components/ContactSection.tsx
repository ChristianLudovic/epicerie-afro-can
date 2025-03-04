"use client"
import { useScrollContext } from "../contexts/scrollContext";
import ContactForm from "./basics/ContactForm";

export default function ContactSection(){

    const { contactUsRef } = useScrollContext();
    return(
        <section ref={contactUsRef} className="px-4">
            <div  className="max-w-[1298px] w-full mx-auto xl:flex xl:items-start xl:justify-between mt-[100px] max-sm:mt-[40px] pt-[30px] max-xl:space-y-[30px]">
                <div className="xl:max-w-[448px] w-full space-y-[40px]">
                    <div className="space-y-[20px]">
                        <h2 className="text-[42px] max-sm:text-[28px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">Contactez-nous</h2>
                        <p className="text-[16px] leading-[150%]">Pour nous aider a ameliorer la qualite de nos service et toujours etre a la hauteur de vos attentes laissez nous un message ici</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="aspect-video max-w-[766px] w-full rounded-[32px] overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5496934344797!2d-73.4604878885097!3d45.519142770954154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90494d085c33f%3A0x1ebb94bfafef8fb3!2s2948%20Ch.%20de%20Chambly%2C%20Longueuil%2C%20QC%20J4L%201N2%2C%20Canada!5e0!3m2!1sfr!2str!4v1740235461567!5m2!1sfr!2str" 
                        className="w-full h-full border-0"
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    />
                    </div>
            </div>
        </section>
    )
}