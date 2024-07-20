import React, { useContext, useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BookShopContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
    const [typeInput, setTypeInput] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const nav = useNavigate()
    const { setModal, setAdmin} = useContext(BookShopContext)

    const messageError = () => {
        toast.error('Ваш пароль неверный!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
    }
    const navCreate = () => {
       if(inputValue === "12345"){
        nav("/createProduct")
        setModal(false)
        setAdmin(false)
        localStorage.setItem("admin", JSON.stringify(false))
       }else{
messageError()
       }
    }
    return (
        <div className='w-[700px] rounded-[10px] absolute top-[200px] left-[320px] h-[350px] bg-white flex items-center justify-center flex-col gap-[30px]'>
<div className="relative">
<input type= {typeInput ? "text" : "password"}
onChange={(e) => setInputValue(e.target.value)}
placeholder='Password..' className='text-blue-900 placeholder-blue-900 bg-transparent text-[30px] py-[7px] px-[40px] outline-none border-2 border-blue-900'/>
<a onClick={() => setTypeInput(!typeInput)} className='absolute top-[17px] cursor-pointer right-[20px] text-[30px] text-blue-900' >{typeInput ? <BsEyeSlashFill /> : <IoEyeSharp />}
</a>
</div>
            <button onClick={() =>navCreate()} className='text-[24px] bg-blue-900 text-white py-[5px] px-[50px] rounded-[10px]'>SIGN IN</button>
            <a onClick={() => setModal(false)} className='absolute top-[10px] right-[10px]  text-blue-900 text-[40px] cursor-pointer'> <IoMdCloseCircleOutline /></a>
            <ToastContainer />

        </div>
    )
}

export default SignIn
