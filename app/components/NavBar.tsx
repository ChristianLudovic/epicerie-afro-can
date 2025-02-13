import Link from "next/link";

export default function NavBar(){
    return(
        <div className="flex items-center justify-between max-w-[1298px] w-full mx-auto">
            <div>
                Logo
            </div>
            <div className="flex items-center space-x-8">
                <div className="space-x-6">
                    <Link href="/">Accueil</Link>
                    <Link href="/">Tous les produits</Link>
                    <Link href="/">FAQs</Link>
                    <Link href="/">Contactez-nous</Link>
                </div>
                <button className="flex items-center justify-center py-[14px] px-3 bg-[#FEECEB]"><span className="px-[9px] py-1 bg-[#F54238]">+237 657125478</span></button>
            </div>
        </div>
    )
}