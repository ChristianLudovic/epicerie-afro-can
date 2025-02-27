"use client"
import { useEffect, useState } from "react";
import CategoryBadge from "./basics/CategoryBadge";
import ProductCard from "./basics/ProductCard";
import { usePathname, useRouter } from "next/navigation";

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

export default function ProductOverview({ searchTerm }: { searchTerm: string }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categoryCount, setCategoryCount] = useState<CategoryCount>({});

    const route = useRouter();
    const pathname = usePathname();
    const isAllProductsPage = pathname === '/all-products';
    const isHomePage = pathname === '/';

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                
                // Apply initial filtering based on the page
                const initialFiltered = isHomePage ? data.slice(0, 30) : data;
                setFilteredProducts(initialFiltered);
                
                // Calculate category counts
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
    }, [isHomePage]);

    const handleCategoryClick = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            const resetProducts = isHomePage ? products.slice(0, 30) : products;
            setFilteredProducts(resetProducts);
        } else {
            setSelectedCategory(category);
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(isHomePage ? filtered.slice(0, 30) : filtered);
        }
    };

    useEffect(() => {
        let filtered = products;
    
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.productName.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
        }
    
        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }
    
        // Apply the 30 product limit on homepage after all other filters
        if (isHomePage) {
            filtered = filtered.slice(0, 32);
        }
    
        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategory, products, isHomePage]);
    
    const handleAllProductsClick = () => {
        setSelectedCategory(null);
        const resetProducts = isHomePage ? products.slice(0, 30) : products;
        setFilteredProducts(resetProducts);
    };

    const goToAllProductPage = () => {
        route.push("/all-products");
    };

    const goToProductPage = (slug: string) => {
        route.push(`/product/${slug}`);
    };

    if (loading) {
        return (
            <div className="px-4">
                <div className="max-w-[1298px] w-full mx-auto mt-[100px] space-y-[52px]">Chargement...</div>
            </div>
        );
    }

    return (
        <section className="px-4">
            <div className="max-w-[1298px] w-full mx-auto mt-[100px] space-y-[52px]">
                <div className={`${isHomePage ? 'space-y-7' : "" }`}>
                    {isHomePage && (
                        <h2 className="max-w-[600px] text-[38px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">
                            Des produits et des aliments de qualité
                        </h2>
                    )}
                    <div className="flex items-center flex-wrap gap-4">
                        {isAllProductsPage && (
                            <CategoryBadge 
                                tagName="🛒 Tous les produits" 
                                categoryQuantity={products.length}
                                isSelected={selectedCategory === null}
                                onClick={handleAllProductsClick}
                            />
                        )}
                        <CategoryBadge 
                            tagName="🥒 Legumes" 
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
                        <CategoryBadge 
                            tagName="🐟 Poissons" 
                            categoryQuantity={categoryCount['poissons'] || 0}
                            isSelected={selectedCategory === 'poissons'}
                            onClick={() => handleCategoryClick('poissons')}
                        />
                        <CategoryBadge 
                            tagName="🎉 Special" 
                            categoryQuantity={categoryCount['special'] || 0}
                            isSelected={selectedCategory === 'special'}
                            onClick={() => handleCategoryClick('special')}
                        />
                        <CategoryBadge 
                            tagName="🥐 Pain économique et pâtisserie" 
                            categoryQuantity={categoryCount['pain-economique-patisserie'] || 0}
                            isSelected={selectedCategory === 'pain-economique-patisserie'}
                            onClick={() => handleCategoryClick('pain-economique-patisserie')}
                        />
                        <CategoryBadge 
                            tagName="🫕 Epicerie sec" 
                            categoryQuantity={categoryCount['epicerie sec'] || 0}
                            isSelected={selectedCategory === 'epicerie sec'}
                            onClick={() => handleCategoryClick('epicerie sec')}
                        />
                        <CategoryBadge 
                            tagName="🫕 Epicerie frais" 
                            categoryQuantity={categoryCount['epicerie frais'] || 0}
                            isSelected={selectedCategory === 'epicerie frais'}
                            onClick={() => handleCategoryClick('epicerie frais')}
                        />
                        <CategoryBadge 
                            tagName="🫕 Divers" 
                            categoryQuantity={categoryCount['divers'] || 0}
                            isSelected={selectedCategory === 'divers'}
                            onClick={() => handleCategoryClick('divers')}
                        />
                    </div>
                </div>
                <div className="space-y-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[39.33px] gap-y-[39.33px]">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    productName={product.productName}
                                    productDescription={product.productDescription}
                                    productImagePath={product.productImagePath}
                                    avaibility={product.avaibility}
                                    onClick={() => goToProductPage(product.id)}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500">Aucun produit trouvé pour cette catégorie</p>
                            </div>
                        )}
                    </div>
                    {isHomePage && (
                        <div className="w-full flex items-center justify-center">
                            <button 
                                className="bg-[#FF2727] px-6 py-3 rounded-full w-max text-white text-[14px] hover:bg-[#e62323] transition-colors"
                                onClick={goToAllProductPage}
                            >
                                Voir tous les aliments
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}