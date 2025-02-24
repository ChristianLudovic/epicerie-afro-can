"use client";
import AvailabilityBadge from "@/app/components/basics/AvailabilityBadge";
import NavBar from "@/app/components/basics/NavBar";
import Footer from "@/app/components/Footer";
import { ScrollContext } from "@/app/contexts/scrollContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Product {
    id: number;
    productName: string;
    productDescription: string;
    productImagePath: string;
    avaibility: string;
}

export default function ProductPage() {
    const { id } = useParams(); // Récupère l'id de l'URL
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error("Produit non trouvé");

                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error("Erreur lors de la récupération du produit:", err);
                setError("Erreur lors de la récupération du produit");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const faqRef = useRef<HTMLElement>(null);
    const contactUsRef = useRef<HTMLElement>(null);

    if (loading) return <p className="text-center text-gray-500">Chargement...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <ScrollContext.Provider value={{ faqRef, contactUsRef }}>
            <NavBar />
            <div className="px-4 space-y-9">
                <div className="max-w-[1297px] mx-auto w-full mt-6">
                    <button 
                        className="flex items-center space-x-[14px] text-[14px]"
                        onClick={() => history.back()}
                    >
                        <svg className="li-arrow-right" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 12.5523 19.5523 13 19 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11L19 11C19.5523 11 20 11.4477 20 12Z" fill="#253D4E" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071Z" fill="#253D4E" />
                        </svg>
                        <span>Retour à la page précédente</span>
                    </button>
                </div>
                <div className="max-w-[1297px] mx-auto w-full mb-[100px] flex items-start justify-between">
                    <Image 
                        src={product?.productImagePath || "/default-image.jpg"} 
                        alt={product?.productName || "Produit"}
                        className="rounded-[18px] max-w-[611px] w-full h-[557px] object-cover"
                        width={611} 
                        height={557} 
                    />
                    <div className="max-w-[619px] w-full">
                        <h1 className="mb-[21px] text-[38px] leading-[110%] font-bold text-[#3D4C5E]">
                            {product?.productName}
                        </h1>
                        <AvailabilityBadge availability={product?.avaibility || "Stock epuise"} />
                        <div className="mt-[30px] space-y-3">
                            <h3 className="text-[18px] leading-[110%] font-semibold">Description</h3>
                            <p className="text-[16px] leading-[150%]">
                                {product?.productDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </ScrollContext.Provider>
    );
}
