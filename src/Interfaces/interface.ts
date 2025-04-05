export interface IProduct {
    
    id?:number|string|undefined;
    title:string;
    image:string;
    price: string;
    description:string;
    color:string[];
    category?:string;

}

export interface IFormInput {
    id:string;
    name:"title" | "description" | "image" | "price";
    label:string;
    type:string
}