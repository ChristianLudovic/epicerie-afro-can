import AccordionCard from "./basics/AccordionCard";

export default function FAQs(){
    return(
        <div className="max-w-[1298px] w-full mx-auto flex items-start justify-between mt-[120px]">
            <div className="max-w-[448px] w-full">
                <div className="space-y-[20px]">
                    <h2 className="text-[42px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">Questions fréquemment posées</h2>
                    <p className="text-[14px] leading-[150%]">Tout ce que vous devez savoir sur le produit et le magasin.  Vous ne trouvez pas la réponse que vous cherchez ? Envoyez-nous un message dans la section « Contactez-nous ».</p>
                </div>
            </div>
            <div className="max-w-[768px] w-full space-y-4">
                <AccordionCard question="Quelle est la différence entre le concombre Hollandais et le concombre Anglais ?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
                <AccordionCard question="Quelle est la différence entre le concombre Hollandais et le concombre Anglais ?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
                <AccordionCard question="Quelle est la différence entre le concombre Hollandais et le concombre Anglais ?" answer="Le concombre Hollandais est un concombre français, le concombre Anglais est un concombre allemand. Le concombre est un plat de cuisine allemande, qui est souvent servi avec de la viande, des légumes et des légumes."/>
            </div>
        </div>
    )
}