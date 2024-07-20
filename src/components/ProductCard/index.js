import React, { useContext } from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { BookShopContext } from '../../context';
import { useNavigate } from 'react-router-dom';

function ProductCard({el}) {
  const nav = useNavigate()
const {basket, setBasket, setDetails, productAll, setProductAll, setCart } = useContext(BookShopContext)
const basketProduct = (data) => {
  setBasket([...basket, data])
localStorage.setItem("basket", JSON.stringify([...basket, data]))
setCart(true)
setTimeout(() => {
setCart(false)
},400)
}

const goToDetails = (data) => {
  localStorage.setItem("details", JSON.stringify(data))
  setDetails(data)
  nav(`/productDetails/${data.id}`)
}

const deleteProduct = (data) => {
 const filterProduct = productAll.filter((item) => item.id !== data.id)
 if(filterProduct) {
  localStorage.setItem("products", JSON.stringify(filterProduct))
  setProductAll(filterProduct)
 }
}

const someBasket = basket.some((item) => item.id === el.id)
    return (
        <div className="w-[340px] h-[520px] border-black border-2 mt-[30px] ">
        
        <img onClick={() => goToDetails(el)} className="w-[340px] h-[400px] " src={el.url} alt="img" />
     
        
       <div className=" p-[10px] rounded-[10px] h-[96px]">
       <div className="flex items-center justify-between">
         <h2 className="text-[30px] font-bold text-black">{el.price} сом</h2>
         <a style={{
                color: someBasket ? "green" : "blue"
            }} onClick={() => someBasket ? nav(`/basket`) : basketProduct(el)} className="text-[25px] cursor-pointer">{someBasket ? <BsFillCartCheckFill /> : <FaCartArrowDown />

          }
            </a>
         
         </div>
         <h1 className="text-black text-[20px] top-[10px]">{el.name}/{el.category}</h1>
         <a onClick={() => deleteProduct(el)} className='text-[23px] cursor-pointer text-red-600 absolute ml-[293px]'><RiDeleteBin5Fill />
</a>
       </div>
        </div>
    )
}

export default ProductCard
