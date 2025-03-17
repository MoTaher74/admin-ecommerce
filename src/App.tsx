import ProductCard from "./components/ProductCard"
import { ProductList } from "./data/ProductList"


function App() {

const renderedProducts  = ProductList.map(product =>  <ProductCard key={product.id} product={product}/> )

  return (
    <>
  <div className="grid sm:grid-cols-2 md:grid-cols-4  ">
  {renderedProducts}
  </div>
 
    </>
  )
}

export default App
