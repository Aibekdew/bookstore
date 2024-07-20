import { useContext } from "react"
import { BookShopContext } from "../../context"

function BasketCard({el}) {
    const {basket, setBasket} = useContext(BookShopContext)
    const plusBasket = (data) =>{
        let changeBasket = basket.map((el)=> 
         el.id === data.id ?{...el,quantity : el.quantity + 1}: el)
    setBasket(changeBasket)
    }
    const minusBasket = (data) =>{
      let changeBask = basket.map((el)=>
          el.id === data.id ?{...el,quantity: el.quantity > 1 ? el.quantity - 1 : 1}: el)
      setBasket(changeBask)
}
    return (
        <div className='flex gap-[30px] w-[700px] h-[400px] border-2 border-black p-[30px]'>
           <img src={el.url} alt="" /> 
           <div className="">
            <h1 className='text-[35px] font-bold'>{el.name} </h1>
            <h1 className='text-[25px] '>{el.category}</h1>
            <h1 className='text-[25px] font-bold'>{el.price} сом</h1>
            <div className="flex items-center gap-4 text-[20px] border-2 border-blue-900 w-[94px] h-[28px] mt-[30px]">
                <button onClick={() => minusBasket(el)} className='flex bg-blue-900 w-[25px] text-white text-[30px] h-[25px] items-center justify-center'>-</button>
                <h1>{el.quantity}</h1>
                <button onClick={() => plusBasket(el)} className='flex bg-blue-900 w-[25px] text-white text-[20px] h-[25px] items-center justify-center'>+</button>
                
            </div>
           </div>
        </div>
    )
}

export default BasketCard
