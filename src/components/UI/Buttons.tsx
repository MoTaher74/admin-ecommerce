import { ReactNode } from "react";

interface IProps{
className:string;
width:"w-full" | "w-fit";
children:ReactNode;

}

const Buttons =({className,width="w-full",children,...rest}:IProps)=>{
return <button className={`${className} ${width} ${rest} duration-300 p-2 rounded-lg text-white`}>{children}</button>

}

export default Buttons ;