export interface IProduct {
    id?:number|string|undefined;
    title:string;
    image:string;
    price:number;
    description:string;
    color?:string;
    category?:string
}