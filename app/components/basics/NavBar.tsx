import { useScrollContext } from "@/app/contexts/scrollContext";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const refs = useScrollContext();

    const scrollToSection = (refKey: keyof typeof refs) => {
        refs[refKey]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Numéro de téléphone au format international (sans espaces ni caractères spéciaux)
    const whatsappNumber = "+237651827194";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="px-4">
            <div className="flex items-center justify-between max-w-[1298px] w-full mx-auto pt-[30px]">
                <div>
                    <Image src="/logo00.png" alt="logo EpicerieAfroCan" width={65} height={52.21} />
                </div>
                <div className="flex items-center space-x-8">
                    <div className="space-x-6 text-[14px]">
                        <Link href="/">Accueil</Link>
                        <Link href="/all-products">Tous les produits</Link>
                        <button onClick={() => scrollToSection('faqRef')}>FAQs</button>
                        <button onClick={() => scrollToSection('contactUsRef')}>Contactez-nous</button>
                    </div>
                    <Link
                        href={whatsappUrl}
                        target="_blank" // Ouvre le lien dans un nouvel onglet
                        rel="noopener noreferrer" // Bonne pratique pour les liens externes
                        className="flex items-center justify-center py-[14px] px-3 bg-[#FEECEB] rounded-full block"
                    >
                        <span className="px-[9px] py-1 bg-[#FF2727] rounded-full text-white text-[11px] font-medium">
                            +237 651827194
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}