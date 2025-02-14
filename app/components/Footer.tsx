import Link from "next/link";

export default function Footer(){
    return(
        <div className="max-w-[1298px] w-full mx-auto space-y-[15px] mt-[100px]">
            <div className="pb-[80px] border-b border-b-solid border-b-[#98A2B3] flex items-start justify-between">
                <div className="space-y-[38px]">
                    <div>
                        Logo
                    </div>
                    <p className="max-w-[260px] text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus.</p>
                </div>
                <div className="flex space-x-[50px]">
                    <div className="space-y-[35px]">
                        <h3 className="font-semibold">Liens rapides</h3>
                        <Link href="/" className="block text-[14px]">Accueil</Link>
                        <Link href="/" className="block text-[14px]">Tous les produits</Link>
                        <Link href="/" className="block text-[14px]">FAQs</Link>
                    </div>
                    <div className="space-y-[35px]">
                        <h3 className="font-semibold">Support</h3>
                        <Link href="/" className="block text-[14px]">Contactez-nous</Link>
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
    )
}