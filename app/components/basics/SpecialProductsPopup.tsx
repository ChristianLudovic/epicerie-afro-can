// components/SpecialProductsPopup.jsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SpecialProductsPopup() {

  const route = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<{ id: string, productName: string, productDescription: string, productImagePath: string, price: string }[]>([]);

  useEffect(() => {
    const checkSpecialProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Filtrer les produits de la catégorie "special"
        const specialProducts = data.filter((product: { category: string }) => product.category === 'special');
        
        if (specialProducts.length > 0) {
          setProducts(specialProducts);
          setIsOpen(true);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des produits spéciaux:", error);
      }
    };
    
    checkSpecialProducts();
  }, []);

  const goToSpecialProductPage = (slug: string) => {
    route.push(`/product/${slug}`);
};

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-11/12 max-h-[80vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800">En special ce jour</h2>
        
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.id} className="flex border border-gray-200 rounded-lg p-3 cursor-pointer" onClick={() => goToSpecialProductPage(product.id)}>
              <div className="w-20 h-20 relative flex-shrink-0 mr-4">
                <Image
                  src={product.productImagePath}
                  alt={product.productName}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{product.productName}</h3>
                <p className="text-red-600 font-bold">Offre speciale</p>
                <p className="text-[14px] leading-[130%] text-gray-500 mt-1 line-clamp-2 overflow-hidden">{product.productDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}