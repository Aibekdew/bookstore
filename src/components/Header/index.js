import React, { useContext, useState } from 'react'
import logo from "../../assets/img/BOOKShop.png"
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import SignIn from '../SignIn';
import { BookShopContext } from '../../context';
import { GoStopwatch } from "react-icons/go";


function Header() {
    const {modal, history, setModal, admin, cart, setAdmin, basket} = useContext(BookShopContext)
    const [input, setInput] = useState("")
const nav = useNavigate()

    const inputProduct = (e) => {
      if(e.key === "Enter"){
        nav(`/search/${e.target.value}`)
      }
    }
    return (
        <div className='bg-[#0a1869] py-[30px] sticky top-0 z-[99]'>
            <div className="container">
                <div className="flex items-center justify-between">
                  <Link to={"/"} onClick={() => {
                    setAdmin(true)
                    localStorage.setItem("admin", JSON.stringify(true))
                  }}>
                  <img src={logo} alt="img" /></Link>
                    <div className="flex items-center gap-[50px]">
                      <div className="relative">
                      <input
                      onClick={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => inputProduct(e)}
                      type="text" placeholder='Search here ' className=' bg-white text-black text-2xl outline-none py-[5px] px-[30px] rounded-[10px] border-none'/>
                      <a className='absolute text-grey-400 text-[30px] top-[5px] right-[6px]'><IoSearch /></a>
                      </div>
                    <div style={{
                        transition: "1s",
                        transform: cart ? "translateY(-15px)" : "translateY(0px)"
                    }} className="">
                    <Link to={`./basket`} 
                    style={{
                        transition: "1s",
                        color: cart ? "red" : "white"
                    }}
                    className="flex items-center justify-center flex-col p-[20px] duration-[0.5s] cursor-pointer  hover:bg-[#ffffff46] rounded-[10px]">
                      <a className=' text-[30px]'><FaShoppingCart /> </a>
                      <h1 className='text-white text-xl'>Корзина</h1>
                     {basket.length ? <h2 className=' absolute w-[25px] h-[25px] text-white bg-red-600 text-center rounded-[50%] ml-[60px] mt-[-60px]'>{basket.length}</h2> : null}
                      </Link>
                    </div>
                    <div 
                    onClick={() => nav(`/history`)}
    className="flex items-center justify-center flex-col p-[20px] cursor-pointer hover:bg-[#ffffff46] rounded-[10px]">
   <a className='text-white text-[30px]'><GoStopwatch /></a>
   <h1 className='text-white text-xl'>Истрия</h1>
   </div>
   <h1>{history.length}</h1>
{
    admin ? <div 
    onClick={() => setModal(!modal)} 
    className="flex items-center justify-center flex-col p-[20px] cursor-pointer hover:bg-[#ffffff46] rounded-[10px]">
   <a className='text-white text-[30px]'><FaRegCircleUser /></a>
   <h1 className='text-white text-xl'>Админ</h1>
   </div> : null
}

                    </div>
                </div>
                {
                    modal ? <>
                    <div className="bg" onClick={() => setModal(false)}></div>
                    <SignIn />
                    </> : null
                }
            </div>
        </div>
    )
}

export default Header
