import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Inputs =({...rest}:IProps)=>{
return (
    <>
<input className="border-2 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500
foucus:ring-1 focus:ring-indigo-500 focus:outline-none px-3 py-3 text-sm" {...rest}/>
    </>

)
}

export default Inputs ;