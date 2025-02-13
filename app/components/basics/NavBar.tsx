import Link from "next/link";

export default function NavBar(){
    return(
        <div className="flex items-center justify-between max-w-[1298px] w-full mx-auto pt-[30px]">
            <div>
                Logo
            </div>
            <div className="flex items-center space-x-8">
                <div className="space-x-6 text-[14px]">
                    <Link href="/">Accueil</Link>
                    <Link href="/">Tous les produits</Link>
                    <Link href="/">FAQs</Link>
                    <Link href="/">Contactez-nous</Link>
                </div>
                <button className="flex items-center justify-center py-[14px] px-3 bg-[#FEECEB] rounded-full"><span className="px-[9px] py-1 bg-[#FF2727] rounded-full text-white text-[11px] font-medium">+237 657125478</span></button>
            </div>
        </div>
    )
}