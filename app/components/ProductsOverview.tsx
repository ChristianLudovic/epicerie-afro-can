import CategoryBadge from "./basics/CategoryBadge";
import ProductCard from "./basics/ProductCard";

export default function ProductOverview(){
    return(
        <div className="max-w-[1298px] w-full mx-auto mt-[60px] space-y-[52px]">
            <div className="space-y-7">
                <h2 className="text-[38px] font-bold text-[#3D4C5E] leading-[110%] tracking-[-3%]">Des produits et des aliments de qualité</h2>
                <div className="flex items-center space-x-4">
                    <CategoryBadge tagName="Aliments" categoryQuantity={100} />
                    <CategoryBadge tagName="Produits" categoryQuantity={100} />
                </div>
            </div>
            <div className="space-y-[50px]">
                <div className="grid grid-cols-4 gap-x-[39.33px] gap-y-[39.33px]">
                    <ProductCard 
                        productName="Concombre Hollandais" 
                        productDescription="Crevettes, citron, fromage italien, courgettes, ail, citron vert."
                        productImagePath="/concombre.svg"
                    />
                    <ProductCard 
                        productName="Concombre Hollandais" 
                        productDescription="Crevettes, citron, fromage italien, courgettes, ail, citron vert."
                        productImagePath="../../public/products/concombre.svg"
                    />
                    <ProductCard 
                        productName="Concombre Hollandais" 
                        productDescription="Crevettes, citron, fromage italien, courgettes, ail, citron vert."
                        productImagePath="../../public/products/concombre.svg"
                    />
                    <ProductCard 
                        productName="Concombre Hollandais" 
                        productDescription="Crevettes, citron, fromage italien, courgettes, ail, citron vert."
                        productImagePath="../../public/products/concombre.svg"
                    />
                    <ProductCard 
                        productName="Concombre Hollandais" 
                        productDescription="Crevettes, citron, fromage italien, courgettes, ail, citron vert."
                        productImagePath="../../public/products/concombre.svg"
                    />
                </div>
                <div className="w-full flex items-center justify-center ">
                    <button className="bg-[#FF2727] px-6 py-3 rounded-full w-max text-white text-[14px]">Voir tous les aliments</button>
                </div>
            </div>
        </div>
    )
}