"use client"
import { useScrollContext } from "../contexts/scrollContext";
import ContactForm from "./basics/ContactForm";

export default function ContactSection(){

    const { contactUsRef } = useScrollContext();
    return(
        <section ref={contactUsRef} className="px-4">
            <div  className="max-w-[1298px] w-full mx-auto flex items-start justify-between mt-[100px] pt-[30px]">
                <div className="max-w-[448px] w-full space-y-[40px]">
                    <div className="space-y-[20px]">
                        <h2 className="text-[42px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">Contactez-nous</h2>
                        <p className="text-[14px] leading-[150%]">Pour nous aider a ameliorer la qualite de nos service et toujours etre a la hauteur de vos attentes laissez nous un message ici</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="aspect-video max-w-[766px] w-full rounded-[32px] overflow-hidden">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.6254830307083!2d-73.74894182368165!3d45.56674657107404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc92326f6be3b69%3A0xe925445f0bc542ee!2sCentre%20Laval!5e0!3m2!1sfr!2sca!4v1707944995150!5m2!1sfr!2sca"
                    className="w-full h-full border-0"
                    allowFullScreen = {true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}