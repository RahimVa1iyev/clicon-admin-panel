export interface Brands {
    id:string;
    name : string;
    categories: {id:string , name:string}[];
    products: string[]
}

export interface BrandPost {
    name : string,
    categoryIds : string[]
}

export interface Category {
    _id: string;
    name: string;
    __v: number;
    products: string[]; // Ürünlerin _id'lerinin listesi olarak varsayıldı. Dizinin elemanları string olmalıdır, çünkü ürünlerin _id'leri string olarak görünüyor.
    image: string;
}

export interface Option {
    label: string;
    value: string;
}