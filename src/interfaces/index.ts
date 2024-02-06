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
    products: string[];
    brands:string[]
    image: string;
    features : Feature[]
}

export interface Option {
    label: string;
    value: string;
}

export interface Feature{
    name: string;
    option: string[];
    _id: string;
  }
export interface Product {
    name: string;
    categoryId: {
      _id: string;
      name: string;
    };
    brandId: {
      _id: string;
      name: string;
    };
    features: {name:string , option:string}[] | undefined;
    colors: string[];
    description: string;
    costPrice: number;
    salePrice: number;
    discountPercent: number;
    images: string[];
    bestDiscountPercent: number;
    sellerCount: number;
    viewCount: number;
    stockStatus: boolean;
    isHot: boolean;
    isFeature: boolean;
  }