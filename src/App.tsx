import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/UI/Modal"
import { FormModal, ProductList } from "./data/data"
import Buttons from "./components/UI/Buttons"
import Inputs from "./components/UI/Inputs"


function App() {
  // *** State ** //
  const [isOpen, setIsOpen] = useState(false)
// ------- Handler -------- //
  function open() {
    setIsOpen(true)
  }
  
  function close() {
    setIsOpen(false)
  }
  // ------- Render -------- //
const renderedProducts  = ProductList.map(product =>  <ProductCard key={product.id} product={product}/> )

const renderformInputs = FormModal.map(input=>
  <div className="flex flex-col ">
    <label htmlFor={input.id} className="mb-2 text-sm font-medium text-indigo-700">{input.label}</label>
   <Inputs id={input.id} name={input.name} type={input.type}/>
  </div>
)

  return (
           <div>
            <div className="flex justify-around items-center p-4 m-4">
              <h1 className="text-2xl text-teal-700 font-bold uppercase ">new Product</h1>
              <Buttons className="bg-indigo-950" width={"w-fit"} onClick={open}>Add Product</Buttons>
            </div>
          
            <Modal isOpen={isOpen} title="New Product" close={close}>
              <form className="space-y-3">
              {renderformInputs}
              <div className="flex space-x-3">
              <Buttons className="bg-indigo-600 hover:bg-indigo-400" width="w-full" >Submit</Buttons>
              <Buttons className="bg-gray-300 hover:bg-gray-500" width="w-full" onClick={close}>Cancel</Buttons>
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
