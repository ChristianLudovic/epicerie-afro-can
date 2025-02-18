export interface Product {
    id: string;
    productName: string;
    productDescription: string;
    productImagePath: string;
    avaibility: 'En stock' | 'Stock épuisé';
    category: string;
    price?: number;
    createdAt?: Date;
}

export type NewProduct = Omit<Product, 'id'>;