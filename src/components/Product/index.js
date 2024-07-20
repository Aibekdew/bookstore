import { useContext } from "react"
import { BookShopContext } from "../../context"
import ProductCard from "../ProductCard";

function Product() {
  
    const sortProduct = (e) => {
        let pr = e.target.value
        const sortPr = productAll.slice().sort((a,b) => {
    if(pr === "expensive") {
        return b.price - a.price
    }else if(pr === "cheap") {
        return a.price - b.price
    }
        })
        setProductAll(sortPr)
    }
const {productAll, setProductAll} = useContext(BookShopContext)
    return (
        <div>
           <div className="container">
            <div className="flex justify-between items-center">
                <h1 className="text-[40px] mt-[40px] text-blue-900 font-bold">Возможно, Вам понравится</h1>
                <select
                onChange={sortProduct}
                className='bg-gray-50 border w-[20%] mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value="expensive">Expensive</option>
                    <option value="cheap">Cheap</option>
                </select>
            </div>
            <div className="flex gap-[130px] flex-wrap mb-6">
 {
    productAll.map((el) =>  <ProductCard el={el}/>)
 }
            </div>
            </div> 
        </div>
    )
}

export default Product
