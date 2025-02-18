"use client"
import { useEffect, useState } from "react";
import CategoryBadge from "@/app/components/basics/CategoryBadge";
import ProductCard from "@/app/components/basics/ProductCard";        

type Product = {
    id: string;
    productName: string;
    productDescription: string;
    productImagePath: string;
    avaibility: string;
};

export default function Products(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="max-w-[1298px] w-full mx-auto mt-[100px] space-y-[52px]">
            <div className="flex items-center space-x-4">
                <CategoryBadge tagName="🥗 Legumes" categoryQuantity={100} />
                <CategoryBadge tagName="Produits" categoryQuantity={100} />
            </div>
            <div className="space-y-[50px]">
                <div className="grid grid-cols-4 gap-x-[39.33px] gap-y-[39.33px]">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            productName={product.productName}
                            productDescription={product.productDescription}
                            productImagePath={product.productImagePath}
                            avaibility={product.avaibility}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}