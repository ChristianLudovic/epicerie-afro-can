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
                        <p className="text-[16px] leading-[150%]">Tout ce que vous devez savoir sur le produit et le magasin.  Vous ne trouvez pas la réponse que vous cherchez ? Envoyez-nous un message dans la section « Contactez-nous ».</p>
                    </div>
                </div>
                <div className="max-w-[768px] w-full space-y-4">
                    <AccordionCard question="Quelles sont les heures d’ouverture et de fermeture du magasin?" answer="Le magasin est accessible chaque jour de la semaine de 8h à 18h, et le week-end entre 9h à 17h."/>
                    <AccordionCard question="D'où proviennent vos produits ?" answer="Nos produits proviennent principalement d'Amérique, d'Afrique, d'Haïti, et d'autres régions du monde, afin de vous offrir une diversité de choix et de saveurs authentiques."/>
                    <AccordionCard question="Offrez-vous un service de livraison ?" answer="Le service de livraison sera implémenté sous peu."/>
                </div>
            </div>
        </section>
    )
}