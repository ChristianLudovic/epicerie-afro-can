"use client";
import { useRef, useState } from "react";
import NavBar from "../components/basics/NavBar";
import { ScrollContext } from "../contexts/scrollContext";
import SearchBar from "./components/SearchBar";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import ProductOverview from "../components/ProductsOverview";

export default function AllProducts() {
    const faqRef = useRef<HTMLElement>(null);
    const contactUsRef = useRef<HTMLElement>(null);
    const router = useRouter();

    // État pour gérer le terme de recherche
    const [searchTerm, setSearchTerm] = useState("");

    const handleBackToHomePage = () => {
        router.push("/");
    };

    // Fonction pour mettre à jour le terme de recherche
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <ScrollContext.Provider value={{ faqRef, contactUsRef }}>
            <NavBar />
            <div className="px-4">
            <div className="max-w-[1297px] mx-auto w-full mt-6 mb-9">
                <button
                    className="flex items-center space-x-[14px] text-[14px]"
                    onClick={handleBackToHomePage}
                >
                    <svg className="li-arrow-right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 12.5523 19.5523 13 19 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11L19 11C19.5523 11 20 11.4477 20 12Z" fill="#253D4E" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071Z" fill="#253D4E" />
                    </svg>
                    <span>Retour à l&apos;accueil</span>
                </button>
            </div>
            <div
                className="max-w-[1297px] mx-auto w-full h-[520px] max-sm:h-[300px] px-4 pb-[60px] flex items-end rounded-[24px]"
                style={{
                    backgroundImage: `url(/0001.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Passer la fonction handleSearch et searchTerm à la SearchBar */}
                <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
            </div>
            </div>
            
            {/* Passer searchTerm au ProductOverview pour filtrer les produits */}
            <ProductOverview searchTerm={searchTerm} />
            <Footer />
        </ScrollContext.Provider>
    );
}