import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


function UiComponent({title, img}) {
const nav = useNavigate()
    return (
        <div className='w-[315px] h-[232px] bg-red-400 rounded-[20px] relative'
        style={{
            background:`linear-gradient(rgba(1, 0, 73, 0.5), rgba(1, 0, 73, 0.5)), url("${img}") no-repeat center/cover`,
            minHeight: "15vh"
        }}>
            <div className=" flex absolute bottom-[20px] left-[25px] gap-[15px] cursor-pointer">
                <h1 onClick={() => nav(`/categoryProduct/${title}`)} className='text-white font-bold text-[30px]'>{title}</h1>
                <a className="text-white font-bold text-[30px] mt-[10px]"> <GoArrowRight />
</a>
            </div>
        </div>
    )
}

export default UiComponent
