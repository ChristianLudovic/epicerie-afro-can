import Image from "next/image";
import Link from "next/link";
import { useScrollContext } from "../contexts/scrollContext";

export default function Footer(){

    const refs = useScrollContext();
    
    const scrollToSection = (refKey: keyof typeof refs) => {
        refs[refKey]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="mt-[100px] pt-[50px] bg-[#3d4c5e] text-white">
            <div className="max-w-[1298px] w-full mx-auto space-y-[15px] ">
                <div className="pb-[80px] border-b border-b-solid border-b-[#98A2B3] flex items-start justify-between">
                    <div className="space-y-[38px]">
                        <div>
                            <Image src="/logo00.png" alt="logo EpicerieAfroCan" width={80} height={52.21} />
                        </div>
                        <p className="max-w-[260px] text-[14px]">Acheter beaucoup aux prix imbattables.</p>
                    </div>
                    <div className="flex space-x-[50px]">
                        <div className="space-y-[35px]">
                            <h3 className="font-semibold">Liens rapides</h3>
                            <Link href="/" className="block text-[14px]">Accueil</Link>
                            <Link href="/all-products" className="block text-[14px]">Tous les produits</Link>
                            <button onClick={() => scrollToSection('faqRef')} className="block text-[14px]">FAQs</button>
                        </div>
                        <div className="space-y-[35px]">
                            <h3 className="font-semibold">Support</h3>
                            <button onClick={() => scrollToSection('contactUsRef')} className="block text-[14px]">Contactez-nous</button>
                        </div>
                        <div className="space-y-[35px]">
                            <h3 className="font-semibold">Medias sociaux</h3>
                            <Link href="/" className="block text-[14px]">EpicerieAfroccan@gmai.com</Link>
                            <Link href="/" className="block text-[14px]">+61 7 7010 6803</Link>
                            <div className="space-x-3">
                                <span>wha</span>
                                <span>fb</span>
                                <span>tw</span>
                                <span>yt</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-[30px]">
                    <p className="text-[14px]">© 2025 EpicerieAfroCan, We love our customers!</p>
                </div>
            </div>
        </div>
    )
}