import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { Colors, FormModal, ProductList } from "./data/data"
import Buttons from "./components/UI/Buttons"
import Inputs from "./components/UI/Inputs"
import { IProduct } from "./Interfaces/interface"
import { productValidation } from "./Validation"
import ErrorsMsg from "./components/ErrorsMsg"
import CircleColor from "./components/UI/CircleColor"
import uuid from "react-uuid"
import SelectMenu from "./components/UI/SelectMenu"


function App() {

  const defaultProductObject = {
    title:"",
    description:"",
    price:"",
    image:"",
    color:[],
    
  };
  // *** State ** //
  const [isOpen, setIsOpen] = useState(false)
  const[product,setProduct] = useState<IProduct>(defaultProductObject);
  const[errors,setErrors] = useState(
    { title:"",
    description:"",
    price:"",
    image:""})
    // console.log(errors);
    const [tempColor,setTempColor] = useState<string[]>([]);
    const [productNew,setProductNew] = useState<IProduct[]>(ProductList);

// ------- Handler -------- //
  function open() {
    setIsOpen(true)
  }
  
  function close() {
    setIsOpen(false)
  }

/**
 * Handles changes to input fields and updates the product state.
 * @param {ChangeEvent<HTMLInputElement>} e - The change event from an input field.
 */

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
const {name,value} = e.target;
setProduct({...product,[name]:value})

// عايز لما نكتب داخل حقل ادخال معين رسالة الخطأتظهر او تختفي حسب شروط معينه
setErrors({...errors,[name]:''})
  }

// const onCancel = () =>{
//   // setIsOpen(false);
//   // console.log("cancel!");
//   close()

  
// } 

function submitHandler(e: FormEvent<HTMLFormElement>): void {
 e.preventDefault();
//  console.log(product);
 setProduct(defaultProductObject);
 const errors = productValidation({
   title: product.title,
   image: product.image,
   price: product.price,
   description: product.description
 });
//  console.log(errors);
// ** Check if any property has a values of "" && Checks if all property have a values of ""
const hasErrors = Object.values(errors.errors).some(val => val === '')&& Object.values(errors.errors).every(val=>val==='');

if (!hasErrors) {
  setErrors(errors.errors);
  return ;
}
setProductNew((prev) => [...prev, { ...product, color: tempColor,id:uuid() }]);
setProduct(defaultProductObject);
setTempColor([]);
close();
console.log("Product data sent to our server successfully!");

}
  // ------- Render -------- //
const renderedProducts  = productNew.map(product =>  <ProductCard key={product.id} product={product}/> )
// const renderedProducts  = ProductList.map(product =>  <ProductCard key={product.id} product={product}/> )

const renderformInputs = FormModal.map(input=>
  <div className="flex flex-col " key={input.id}>
    <label htmlFor={input.id} className="mb-2 text-sm font-medium text-indigo-700">{input.label}</label>
   <Inputs id={input.id} name={input.name} type={input.type} value={product[input.name]?? ''} onChange={onChangeHandler}/>
   <ErrorsMsg msg={errors[input.name]}/>
  </div>
)

const renderProductColors = Colors.map(color=><CircleColor color={color} key={color} onClick={()=>{
  if(tempColor.includes(color)){
    setTempColor(prev=>prev.filter(itemColor=> itemColor !== color));
    return
  }
  setTempColor((prev)=>[...prev,color])
}}/>);


  return (
           <div>
            <div className="flex justify-around items-center p-4 m-4">
              <h1 className="text-2xl text-teal-700 font-bold uppercase ">new Product</h1>
              <Buttons className="bg-indigo-950" width={"w-fit"} onClick={open}>Add Product</Buttons>
            </div>
          
            <Modal isOpen={isOpen} title="New Product" close={close}>
              <form className="space-y-3" key={product.id} onSubmit={submitHandler}>
              {renderformInputs}
              <SelectMenu/>
              <div className="flex space-x-2 flex-wrap">
                {tempColor.map((color)=> <span key={color}  className="rounded-lg cursor-pointer p-1 mb-2 text-sm text-white" style={{background:`${color}`}} onClick={()=>{
                  if(tempColor.includes(color)){
                    setTempColor(prev=>prev.filter(itemColor=> itemColor !== color));}}}>{color}</span>)}
              </div>
              <div className="flex space-x-2 flex-wrap">
                {renderProductColors}
              </div>
              <div className="flex space-x-3">
              <Buttons className="bg-indigo-600 hover:bg-indigo-400" width="w-full" >Submit</Buttons>
              <Buttons className="bg-gray-300 hover:bg-gray-500" width="w-full" onClick={()=>close()}>Cancel</Buttons>
              </div>
              </form>
            </Modal>
            
        <div className="grid sm:grid-cols-2 md:grid-cols-4  ">
        {renderedProducts}
        </div>
           </div>





  )
}

export default App


