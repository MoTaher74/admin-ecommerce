import { TProductName } from "../Types/type";

export interface IProduct {
    
    id?:number|string|undefined;
    title:string;
    image:string;
    price: string;
    description:string;
    color:string[];
    category:{
        name:string;
        imageUrl:string;
    };

}

export interface IFormInput {
    id:string;
    name:TProductName;
    label:string;
    type:string
}

export interface ICategory{
    id:string,
    name:string,
    imageUrl:string
}