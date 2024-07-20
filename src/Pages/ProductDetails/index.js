import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BookShopContext } from '../../context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductDetails() {
    const [text, setText] = useState(false)
    const {elId} = useParams()
    const {productAll, basket, setBasket, setCart } = useContext(BookShopContext)
    const findProduct = productAll.find((el) => el.id == elId)
    const errorMessage = () => 
        toast.error('Такой продукт существует!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
const addToBasket = (data) => {
 const findBasket = basket.some((item) => item.id === findProduct.id)
    if(findBasket){
        errorMessage()
    }else{
        localStorage.setItem("basket", JSON.stringify([...basket, data]))
        setBasket([...basket, data])
        setCart(true)
setTimeout(() => {
setCart(false)
},400)
    }
}
    useEffect(() => {
window.scroll(0, 0)
    }, [])
    return (
        <div>
            <div className="container">
           <div className="flex gap-[80px] mt-[60px]">
           <img className='w-[300px] h-[400px] border-2 border-black rounded-[10px] ' src={findProduct.url} alt="img" />
       
           <div className="">
            <h1 className='text-[40px] font-bold'>{findProduct.name}/<span className='text-[30px]'>{findProduct.category}</span></h1>
           <h1 onMouseOver={() => setText(true)}
           onMouseOut={() => setText(false)}
           className='text-[24px] my-[30px]'
           >{" "} <i>"{findProduct.description.slice(0, 50)}"</i></h1>
            <div className="flex items-center gap-[450px] ">
            <h2 className='text-[40px] font-bold text-black'>{findProduct.price} сом</h2>
            <button onClick={() => addToBasket(findProduct)} className='py-[12px] px-[40px]  text-[30px] rounded-[10px] border-2 border-black bg-white text-black'>Купить сейчас</button>
           </div>
           <div style={{
            transition: "1s",
            transform: text ? "translateY(-100px)" : "translateY(0px)",
            opacity: text ? "1" : "0"
           }} className='w-[700px] bg-slate-400 p-[30px] rounded-[30px]'> <h1 className='text-[20px] my-[30px]'>{" "} <i>"{findProduct.description}"</i></h1></div>
           </div>
           
            </div>   
            <ToastContainer />
             </div>
        </div>
    )
}

export default ProductDetails
