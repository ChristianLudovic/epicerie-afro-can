"use client";
import { useScrollContext } from "../contexts/scrollContext";
import AccordionCard from "./basics/AccordionCard";

export default function FAQs(){

    const { faqRef } = useScrollContext();

    return(
        <section ref={faqRef} className="px-4">
            <div  className="max-w-[1298px] w-full mx-auto flex items-start justify-between mt-[90px] pt-[30px]">
                <div className="max-w-[448px] w-full">
                    <div className="space-y-[20px]">
                        <h2 className="text-[42px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">Questions fréquemment posées</h2>
                        <p className="text-[14px] leading-[150%]">Tout ce que vous devez savoir sur le produit et le magasin.  Vous ne trouvez pas la réponse que vous cherchez ? Envoyez-nous un message dans la section « Contactez-nous ».</p>
                    </div>
                </div>
                <div className="max-w-[768px] w-full space-y-4">
                    <AccordionCard question="Les produits sont-ils frais?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
                    <AccordionCard question="Quelles sont les heures d’ouverture et de fermeture du magasin?" answer="Le magasin est ouvert tous les jours de la semaine entre 8h-20h et le dimanche entre 8h-18h"/>
                    <AccordionCard question="Le magasin est situé où?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
                    <AccordionCard question="Vos produits sont-ils des produits locaux ou importés?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
                    <AccordionCard question="Faites vous des livraisons?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
                </div>
            </div>
        </section>
    )
}