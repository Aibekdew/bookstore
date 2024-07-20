import React, { useContext, useState } from 'react'
import { BookShopContext } from '../../context'
import BasketCard from '../BasketCard'
import { BsTelegram } from "react-icons/bs";
import axios from 'axios';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import empty from "../../assets/img/empty-cart.png"
import { IoCloseCircleOutline } from "react-icons/io5";
import loading from "../../assets/img/Spinner@1x-1.0s-200px-200px.svg"
import CountUp from 'react-countup';

function Basket() {
    const [card, setCard] = useState(false)
    const [loader, setLoader] = useState(false)
    const [userName, setUserName] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [userPhone, setUserPhone] = useState("+996")
    const {basket, setBasket, history, setHistory} = useContext(BookShopContext)
    const totalPrice = basket.reduce((acc, el) => {
        return acc + +el.price * el.quantity
    }, 0)

    const removeAll= () => {
        localStorage.removeItem("basket")
        setBasket([])
    }

    const errorMessage = () => 
        toast.error('Запольните пустые строки!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });

const formSubmit = () => {
    const my_id = `-1002011900859`
    const token = `7111330161:AAF7wwqD8TQ3YUSk8Z7q17u8q5d7ekbl8PA`
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`

    if(userName.trim() === "" || userAddress.trim() === "" || userPhone.trim() === ""){
errorMessage()
setCard(false)
    }else{
        let newOrder = {
            chat_id: my_id,
            parse_model: "html",
            text: `order:
            name: ${userName},
            address: ${userAddress},
            phone: ${userPhone}
            `
       }
       axios.post(url_api, newOrder)
       setUserName("")
       setUserAddress("")
       setUserPhone("+996")
       setCard(true)
    }
    const num = new Date()
    let newDate = {
        id: 1,
        name: `${userName}`,
        address: `${userAddress}`,
        hours: num.getHours(),
         time: num.getMinutes(),
         seconds: num.getSeconds(),
         day: num.getDate(),
         mounth: num.getMonth() + 1 ,
         year: num.getFullYear()
    }
localStorage.setItem("history", JSON.stringify([...history, newDate]))
setHistory([...history, newDate])
console.log(history, "his");
  
}

    return (
        <div className='mt-[30px]'>
           <div className="container">
    {
        basket.length ?    <div className="flex justify-between items-start">
        <div className="w-[57%]">
            <div className="flex flex-col overflow-scroll h-[430px] mt-[30px] gap-[30px]">
             {
                 basket.map((el) => <BasketCard el={el}/>)
             }
             
            </div>
           <div className="flex justify-between items-center mt-[50px]">
           <h1 className='text-[40px] text-blue-900 font-bold '>Total price:<CountUp
  start={0}
  end={totalPrice}
  duration={2.75}
  separator=" "
  suffix='сом'
>
</CountUp> </h1>
     
           <button onClick={() => removeAll()} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2">Remove All</button>
           </div>
          </div>
     <div className="w-[40%] mt-[20px] flex items-start  justify-center flex-col gap-6">
         <h1 className='text-[30px] text-blue-900 font-bold '>Оформление заказа:</h1>
         <div class="relative z-0 w-full mb-5 group">
       <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text"  id="floating_email" class="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer" placeholder=" " required />
       <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
   </div>  <div class="relative z-0 w-full mb-5 group">
       <input onChange={(e) => setUserAddress(e.target.value)} value={userAddress} type="text"  id="floating_email" class="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer" placeholder=" " required />
       <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Address</label>
   </div>  <div class="relative z-0 w-full mb-5 group">
       <input onChange={(e) => setUserPhone(e.target.value)} value={userPhone} type="text"  id="floating_email" class="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer" placeholder=" "  maxLength={13} />
       <label for="floating_email" class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Phone</label>
   </div>
   <h1 className='text-[20px] flex items-center gap-1'><i>Ваш заказ будет отправлен в телеграмм...</i><BsTelegram />
 </h1>
   <button onClick={() => {
setCard(true)
 
   }  } className='text-[25px] px-[50px] py-[5px] mx-auto bg-transparent border-2 border-blue-900 rounded-[10px] text-blue-900'>Оформить</button>
   <ToastContainer /> 
     </div> 
        </div> : <img src={empty} alt="img" className='w-full h-[60vh] object-contain'/>
    }
        </div>

<div style={{
    display: card ? "block" : "none"
}} className='w-[700px] absolute top-[280px] left-[350px] h-[400px] rounded-[30px] border-2 border-green-700 bg-white '>
    <a onClick={() => setCard(false)} className='absolute top-3 left-[650px] cursor-pointer text-[35px]'><IoCloseCircleOutline />
</a>

  {loader ? <img src={loading} alt="img" className='ml-[250px] mt-[100px]'/> : <div className="">
   <h1 className='text-[30px] font-bold] text-center mt-[100px]'>Проверьте данные:</h1>
    <h1 className='text-black font-bold text-[20px] mt-[30px] mb-[30px] text-center'>{userName}, {userAddress}, {userPhone}</h1>
    <button onClick={() => {
        formSubmit()
        setLoader(true)
        setTimeout(() => {
setLoader(false)
setCard(false)
        },2000)
    }} className='px-[30px] py-[10px] text-[20px] rounded-[10px] ml-[260px] border-none bg-black text-white'>Подтвердить</button>
   </div>}
  
</div>

        </div>
    )
}

export default Basket
