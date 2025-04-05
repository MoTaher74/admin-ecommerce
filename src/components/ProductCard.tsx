import { IProduct } from "../Interfaces/interface";
import Images from "./Images";
import Buttons from "./UI/Buttons";
import CircleColor from "./UI/CircleColor";
import { textSlice , titleSlicer } from "./Utliz/Function";

interface IProps{
product:IProduct;

}

const ProductCard =({product}:IProps)=>{
    const {id,title,image,price,description,color,category}=product;
return (
<>
<div className="border-2 border-slate-950 rounded-lg p-4 m-4 flex flex-col space-y-2">
   
    <Images imgURL={image} imgAlt={`${category}-${id}`}  imgClassName="rounded-lg"/>
    <h4> {titleSlicer(title)}</h4>
    <p>{textSlice(description)}</p>
    <div className="flex space-x-2">
        <CircleColor  style={{ background: `${color}` }} color={""}/>
        <CircleColor  style={{ background: `${color}` }} color={""}/>
        <CircleColor  style={{ background: `${color}` }} color={""}/>
        
    </div>
    <div className="flex justify-between items-center">
        <span>Price : ${price} </span>
        <Images imgURL={image} imgAlt={`${category}-${id}`} imgClassName="w-6 h-6 rounded-full cursor-pointer object-center"/>
    </div>
    <div className="flex justify-between items-center space-x-2">
        <Buttons className="bg-indigo-600 hover:bg-indigo-400" width="w-full" >Edit</Buttons>
        <Buttons className="bg-red-600 hover:bg-red-400" width="w-full" >Delete</Buttons>
        
    </div>
</div>
</>
)
}

export default ProductCard ;