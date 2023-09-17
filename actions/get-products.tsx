import { Product } from "@/public/types";
import queryString from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string; 
    colourId?: string;
    sizeId?: string; 
    isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> =>{

    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            colourId: query.colourId,
            sizeId: query.colourId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })
    const res = await fetch(url); 

    return res.json();
};

export default getProducts