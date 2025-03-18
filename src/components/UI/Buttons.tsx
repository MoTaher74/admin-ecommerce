import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
className:string;
width:"w-full" | "w-fit";
children:ReactNode;

}

const Buttons =({className,width="w-full",children,...rest}:IProps)=>{
return <button className={`${className} ${width}  duration-300 p-2 rounded-lg text-white`} {...rest}>{children}</button>

}

export default Buttons ;