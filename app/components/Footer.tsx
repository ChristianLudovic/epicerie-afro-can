import Image from "next/image";
import Link from "next/link";
import { useScrollContext } from "../contexts/scrollContext";

export default function Footer(){

    const refs = useScrollContext();
    
    const scrollToSection = (refKey: keyof typeof refs) => {
        refs[refKey]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const redirectToMail = () => {
        window.location.href = "mailto:epicerieAfrocan@gmail.com";
    }

    const redirectToWhatsapp = () =>  {
        window.location.href = "https://wa.me/+14385457862"
    }

    return(
        <div className="mt-[100px] pt-[50px] bg-[#3d4c5e] text-white px-4">
            <div className="max-w-[1298px] w-full mx-auto space-y-[15px] ">
                <div className="pb-[80px] border-b border-b-solid border-b-[#98A2B3] flex sm:items-start sm:justify-between max-sm:flex-col max-sm:space-y-[40px]">
                    <div className="space-y-[38px]">
                        <div>
                            <Image src="/logo00.png" alt="logo EpicerieAfroCan" width={80} height={52.21} />
                        </div>
                        <p className="max-w-[260px] text-[14px]">Acheter beaucoup aux prix imbattables.</p>
                    </div>
                    <div className="flex sm:space-x-[50px] max-sm:flex-col space-y-[45px]">
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
                            <button onClick={redirectToMail} className="block text-[14px] underline">epicerieafrocan@gmail.com</button>
                            <Link href="/" className="block text-[14px]">(438) 545-7862 - (438) 527-6872</Link>
                            <div className="space-x-5 flex items-center">
                                <button >
                                    <svg className="social-icons" width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_170)">
                                        <path d="M14 0C6.26808 0 0 6.26808 0 14C0 20.5654 4.52032 26.0747 10.6182 27.5878V18.2784H7.73136V14H10.6182V12.1565C10.6182 7.39144 12.7747 5.1828 17.453 5.1828C18.34 5.1828 19.8705 5.35696 20.4966 5.53056V9.40856C20.1662 9.37384 19.5922 9.35648 18.8793 9.35648C16.5838 9.35648 15.6968 10.2262 15.6968 12.4869V14H20.2698L19.4841 18.2784H15.6968V27.8975C22.629 27.0603 28.0006 21.1579 28.0006 14C28 6.26808 21.7319 0 14 0Z" fill="white" />
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_0_170">
                                        <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button >
                                    <svg className="social-icons" width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_169)">
                                        <path d="M14 2.52109C17.7406 2.52109 18.1836 2.5375 19.6547 2.60312C21.0219 2.66328 21.7602 2.89297 22.2523 3.08438C22.9031 3.33594 23.3734 3.64219 23.8602 4.12891C24.3523 4.62109 24.6531 5.08594 24.9047 5.73672C25.0961 6.22891 25.3258 6.97266 25.3859 8.33437C25.4516 9.81094 25.468 10.2539 25.468 13.9891C25.468 17.7297 25.4516 18.1727 25.3859 19.6438C25.3258 21.0109 25.0961 21.7492 24.9047 22.2414C24.6531 22.8922 24.3469 23.3625 23.8602 23.8492C23.368 24.3414 22.9031 24.6422 22.2523 24.8938C21.7602 25.0852 21.0164 25.3148 19.6547 25.375C18.1781 25.4406 17.7352 25.457 14 25.457C10.2594 25.457 9.81641 25.4406 8.34531 25.375C6.97813 25.3148 6.23984 25.0852 5.74766 24.8938C5.09688 24.6422 4.62656 24.3359 4.13984 23.8492C3.64766 23.357 3.34687 22.8922 3.09531 22.2414C2.90391 21.7492 2.67422 21.0055 2.61406 19.6438C2.54844 18.1672 2.53203 17.7242 2.53203 13.9891C2.53203 10.2484 2.54844 9.80547 2.61406 8.33437C2.67422 6.96719 2.90391 6.22891 3.09531 5.73672C3.34687 5.08594 3.65312 4.61562 4.13984 4.12891C4.63203 3.63672 5.09688 3.33594 5.74766 3.08438C6.23984 2.89297 6.98359 2.66328 8.34531 2.60312C9.81641 2.5375 10.2594 2.52109 14 2.52109ZM14 0C10.1992 0 9.72344 0.0164062 8.23047 0.0820312C6.74297 0.147656 5.72031 0.388281 4.83438 0.732812C3.91016 1.09375 3.12813 1.56953 2.35156 2.35156C1.56953 3.12812 1.09375 3.91016 0.732812 4.82891C0.388281 5.72031 0.147656 6.7375 0.0820313 8.225C0.0164063 9.72344 0 10.1992 0 14C0 17.8008 0.0164063 18.2766 0.0820313 19.7695C0.147656 21.257 0.388281 22.2797 0.732812 23.1656C1.09375 24.0898 1.56953 24.8719 2.35156 25.6484C3.12813 26.425 3.91016 26.9062 4.82891 27.2617C5.72031 27.6062 6.7375 27.8469 8.225 27.9125C9.71797 27.9781 10.1937 27.9945 13.9945 27.9945C17.7953 27.9945 18.2711 27.9781 19.7641 27.9125C21.2516 27.8469 22.2742 27.6062 23.1602 27.2617C24.0789 26.9062 24.8609 26.425 25.6375 25.6484C26.4141 24.8719 26.8953 24.0898 27.2508 23.1711C27.5953 22.2797 27.8359 21.2625 27.9016 19.775C27.9672 18.282 27.9836 17.8063 27.9836 14.0055C27.9836 10.2047 27.9672 9.72891 27.9016 8.23594C27.8359 6.74844 27.5953 5.72578 27.2508 4.83984C26.9062 3.91016 26.4305 3.12812 25.6484 2.35156C24.8719 1.575 24.0898 1.09375 23.1711 0.738281C22.2797 0.39375 21.2625 0.153125 19.775 0.0875C18.2766 0.0164063 17.8008 0 14 0Z" fill="white" />
                                        <path d="M14 6.80859C10.0297 6.80859 6.80859 10.0297 6.80859 14C6.80859 17.9703 10.0297 21.1914 14 21.1914C17.9703 21.1914 21.1914 17.9703 21.1914 14C21.1914 10.0297 17.9703 6.80859 14 6.80859ZM14 18.6648C11.4242 18.6648 9.33516 16.5758 9.33516 14C9.33516 11.4242 11.4242 9.33516 14 9.33516C16.5758 9.33516 18.6648 11.4242 18.6648 14C18.6648 16.5758 16.5758 18.6648 14 18.6648Z" fill="white" />
                                        <path d="M23.1547 6.52417C23.1547 7.45386 22.4 8.20308 21.4758 8.20308C20.5461 8.20308 19.7969 7.44839 19.7969 6.52417C19.7969 5.59448 20.5516 4.84526 21.4758 4.84526C22.4 4.84526 23.1547 5.59995 23.1547 6.52417Z" fill="white" />
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_0_169">
                                        <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button >
                                    <svg className="social-icons" width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.7211 8.40005C27.7211 8.40005 27.4477 6.46958 26.6055 5.62193C25.5391 4.5063 24.3469 4.50083 23.8 4.43521C19.8844 4.15083 14.0055 4.15083 14.0055 4.15083H13.9945C13.9945 4.15083 8.11562 4.15083 4.2 4.43521C3.65313 4.50083 2.46094 4.5063 1.39453 5.62193C0.552344 6.46958 0.284375 8.40005 0.284375 8.40005C0.284375 8.40005 0 10.6696 0 12.9336V15.0555C0 17.3196 0.278906 19.5891 0.278906 19.5891C0.278906 19.5891 0.552344 21.5196 1.38906 22.3672C2.45547 23.4829 3.85547 23.4446 4.47891 23.5649C6.72109 23.7782 14 23.8438 14 23.8438C14 23.8438 19.8844 23.8329 23.8 23.554C24.3469 23.4883 25.5391 23.4829 26.6055 22.3672C27.4477 21.5196 27.7211 19.5891 27.7211 19.5891C27.7211 19.5891 28 17.3251 28 15.0555V12.9336C28 10.6696 27.7211 8.40005 27.7211 8.40005ZM11.107 17.6313V9.76177L18.6703 13.7102L11.107 17.6313Z" fill="white" />
                                    </svg>
                                </button>
                                <button >
                                    <svg className="social-icons" width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9179 0H15.1991V19.0724C15.1991 21.3449 13.3842 23.2116 11.1256 23.2116C8.86706 23.2116 7.05214 21.3449 7.05214 19.0724C7.05214 16.8406 8.82673 15.0145 11.0047 14.9333V10.1449C6.20517 10.2261 2.33333 14.1623 2.33333 19.0724C2.33333 24.0232 6.28583 28 11.166 28C16.0461 28 19.9986 23.9826 19.9986 19.0724V9.29273C21.7732 10.5913 23.9511 11.3623 26.25 11.4029V6.61449C22.7008 6.49276 19.9179 3.57101 19.9179 0Z" fill="white" />
                                    </svg>
                                </button>
                                <button onClick={redirectToWhatsapp}>
                                    <svg className="social-icons" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 20L1.40583 14.8642C0.538332 13.3608 0.0824998 11.6567 0.0833332 9.90917C0.0858331 4.44583 4.53166 0 9.99414 0C12.645 0.000833333 15.1333 1.03333 17.005 2.90667C18.8758 4.78 19.9058 7.27 19.905 9.91833C19.9025 15.3825 15.4566 19.8283 9.99414 19.8283C8.33581 19.8275 6.70165 19.4117 5.25415 18.6217L0 20ZM5.49749 16.8275C6.89415 17.6567 8.22748 18.1533 9.99081 18.1542C14.5308 18.1542 18.2291 14.4592 18.2316 9.91667C18.2333 5.365 14.5525 1.675 9.99748 1.67333C5.45415 1.67333 1.75833 5.36833 1.75666 9.91C1.75583 11.7642 2.29916 13.1525 3.21166 14.605L2.37916 17.645L5.49749 16.8275ZM14.9866 12.2742C14.925 12.1708 14.76 12.1092 14.5116 11.985C14.2641 11.8608 13.0466 11.2617 12.8191 11.1792C12.5925 11.0967 12.4275 11.055 12.2616 11.3033C12.0966 11.5508 11.6216 12.1092 11.4775 12.2742C11.3333 12.4392 11.1883 12.46 10.9408 12.3358C10.6933 12.2117 9.89498 11.9508 8.94915 11.1067C8.21331 10.45 7.71582 9.63917 7.57165 9.39083C7.42748 9.14333 7.55665 9.00917 7.67998 8.88583C7.79165 8.775 7.92748 8.59667 8.05165 8.45167C8.17748 8.30833 8.21831 8.205 8.30165 8.03917C8.38415 7.87417 8.34331 7.72917 8.28082 7.605C8.21832 7.48167 7.72332 6.2625 7.51748 5.76667C7.31582 5.28417 7.11165 5.34917 6.95998 5.34167L6.48499 5.33333C6.31999 5.33333 6.05165 5.395 5.82499 5.64333C5.59832 5.89167 4.95832 6.49 4.95832 7.70917C4.95832 8.92833 5.84582 10.1058 5.96915 10.2708C6.09332 10.4358 7.71498 12.9375 10.1991 14.01C10.79 14.265 11.2516 14.4175 11.6108 14.5317C12.2041 14.72 12.7441 14.6933 13.1708 14.63C13.6466 14.5592 14.6358 14.0308 14.8425 13.4525C15.0491 12.8733 15.0491 12.3775 14.9866 12.2742Z" fill="white" />
                                    </svg>
                                </button>
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