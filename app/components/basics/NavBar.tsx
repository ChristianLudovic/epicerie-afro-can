import { useScrollContext } from "@/app/contexts/scrollContext";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const refs = useScrollContext();

    const scrollToSection = (refKey: keyof typeof refs) => {
        refs[refKey]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Numéro de téléphone au format international (sans espaces ni caractères spéciaux)
    const whatsappNumber = "+14385457862";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="px-4">
            <div className="flex items-center justify-between max-w-[1298px] w-full mx-auto pt-[30px]">
                <div>
                    <Image src="/logo00.png" alt="logo EpicerieAfroCan" width={65} height={52.21} />
                </div>
                <div className="flex items-center space-x-8 ">
                    <div className="space-x-6 text-[14px] max-sm:hidden">
                        <Link href="/">Accueil</Link>
                        <Link href="/all-products">Tous les produits</Link>
                        <button onClick={() => scrollToSection('faqRef')}>FAQs</button>
                        <button onClick={() => scrollToSection('contactUsRef')}>Contactez-nous</button>
                    </div>
                    <Link
                        href={whatsappUrl}
                        target="_blank" // Ouvre le lien dans un nouvel onglet
                        rel="noopener noreferrer" // Bonne pratique pour les liens externes
                        className="flex items-center justify-center  py-[8px] px-3 bg-[#FEECEB] rounded-full block"
                    >
                        <div className="px-[12px] py-2 bg-[#FF2727] rounded-full text-white text-[11px] font-medium flex items-center space-x-2">
                            <div className="flex items-center justify-center">
                                <svg className="social-icons" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20L1.40583 14.8642C0.538332 13.3608 0.0824998 11.6567 0.0833332 9.90917C0.0858331 4.44583 4.53166 0 9.99414 0C12.645 0.000833333 15.1333 1.03333 17.005 2.90667C18.8758 4.78 19.9058 7.27 19.905 9.91833C19.9025 15.3825 15.4566 19.8283 9.99414 19.8283C8.33581 19.8275 6.70165 19.4117 5.25415 18.6217L0 20ZM5.49749 16.8275C6.89415 17.6567 8.22748 18.1533 9.99081 18.1542C14.5308 18.1542 18.2291 14.4592 18.2316 9.91667C18.2333 5.365 14.5525 1.675 9.99748 1.67333C5.45415 1.67333 1.75833 5.36833 1.75666 9.91C1.75583 11.7642 2.29916 13.1525 3.21166 14.605L2.37916 17.645L5.49749 16.8275ZM14.9866 12.2742C14.925 12.1708 14.76 12.1092 14.5116 11.985C14.2641 11.8608 13.0466 11.2617 12.8191 11.1792C12.5925 11.0967 12.4275 11.055 12.2616 11.3033C12.0966 11.5508 11.6216 12.1092 11.4775 12.2742C11.3333 12.4392 11.1883 12.46 10.9408 12.3358C10.6933 12.2117 9.89498 11.9508 8.94915 11.1067C8.21331 10.45 7.71582 9.63917 7.57165 9.39083C7.42748 9.14333 7.55665 9.00917 7.67998 8.88583C7.79165 8.775 7.92748 8.59667 8.05165 8.45167C8.17748 8.30833 8.21831 8.205 8.30165 8.03917C8.38415 7.87417 8.34331 7.72917 8.28082 7.605C8.21832 7.48167 7.72332 6.2625 7.51748 5.76667C7.31582 5.28417 7.11165 5.34917 6.95998 5.34167L6.48499 5.33333C6.31999 5.33333 6.05165 5.395 5.82499 5.64333C5.59832 5.89167 4.95832 6.49 4.95832 7.70917C4.95832 8.92833 5.84582 10.1058 5.96915 10.2708C6.09332 10.4358 7.71498 12.9375 10.1991 14.01C10.79 14.265 11.2516 14.4175 11.6108 14.5317C12.2041 14.72 12.7441 14.6933 13.1708 14.63C13.6466 14.5592 14.6358 14.0308 14.8425 13.4525C15.0491 12.8733 15.0491 12.3775 14.9866 12.2742Z" fill="white" />
                                </svg>
                            </div>
                            <span className="max-sm:hidden">+1 (438) 545-7862</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}