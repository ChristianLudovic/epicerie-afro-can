"use client"
import { useEffect, useState } from "react";
import CategoryBadge from "./basics/CategoryBadge";
import ProductCard from "./basics/ProductCard";
import { useRouter } from "next/navigation";

type Product = {
    id: string;
    productName: string;
    productDescription: string;
    productImagePath: string;
    avaibility: string;
    category: string;
};

type CategoryCount = {
    [key: string]: number;
};

export default function ProductOverview() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categoryCount, setCategoryCount] = useState<CategoryCount>({});

    const route = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
                
                // Calculer le nombre de produits par catégorie
                const counts = data.reduce((acc: CategoryCount, product: Product) => {
                    acc[product.category] = (acc[product.category] || 0) + 1;
                    return acc;
                }, {});
                setCategoryCount(counts);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const handleCategoryClick = (category: string) => {
        if (selectedCategory === category) {
            // Si on clique sur la catégorie déjà sélectionnée, on réinitialise
            setSelectedCategory(null);
            setFilteredProducts(products);
        } else {
            // Sinon, on filtre les produits par la nouvelle catégorie
            setSelectedCategory(category);
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    const goToAllProductPage = () => {
        route.push("/all-products");
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <section className="px-4">
            <div className="max-w-[1298px] w-full mx-auto mt-[100px] space-y-[52px]">
                <div className="space-y-7">
                    <h2 className="max-w-[600px] text-[38px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">
                        Des produits et des aliments de qualité
                    </h2>
                    <div className="flex items-center space-x-4">
                        <CategoryBadge 
                            tagName="🥗 Legumes" 
                            categoryQuantity={categoryCount['legumes'] || 0}
                            isSelected={selectedCategory === 'legumes'}
                            onClick={() => handleCategoryClick('legumes')}
                        />
                        <CategoryBadge 
                            tagName="🍎 Fruits" 
                            categoryQuantity={categoryCount['fruits'] || 0}
                            isSelected={selectedCategory === 'fruits'}
                            onClick={() => handleCategoryClick('fruits')}
                        />
                        <CategoryBadge 
                            tagName="🍖 Viandes" 
                            categoryQuantity={categoryCount['viandes'] || 0}
                            isSelected={selectedCategory === 'viandes'}
                            onClick={() => handleCategoryClick('viandes')}
                        />
                    </div>
                </div>
                <div className="space-y-[50px]">
                    <div className="grid grid-cols-4 gap-x-[39.33px] gap-y-[39.33px]">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                productName={product.productName}
                                productDescription={product.productDescription}
                                productImagePath={product.productImagePath}
                                avaibility={product.avaibility}
                            />
                        ))}
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button 
                            className="bg-[#FF2727] px-6 py-3 rounded-full w-max text-white text-[14px] hover:bg-[#e62323] transition-colors"
                            onClick={goToAllProductPage}
                        >
                            Voir tous les aliments
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}