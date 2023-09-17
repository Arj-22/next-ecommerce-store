export interface Billboard {
    id: string; 
    label: string; 
    imageUrl: string; 
}

export interface Category {
    id: string;
    name: string; 
    billboard: Billboard; 
}

export interface Product{ 
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size; 
    colour: Colour;
    images: Image[]; 
}

export interface Image{
    id: string; 
    name: string;
    url: string;
    value: string; 
}

export interface Size{
    id: string; 
    name: string;
    value: string; 
}

export interface Colour{
    id: string; 
    name: string;
    value: string; 
}