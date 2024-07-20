import React from 'react'
import UiComponent from './UiComponent'
import category1 from "../../assets/img/category1.png"
import category2 from "../../assets/img/carigory2.png"
import category3 from "../../assets/img/catigori3.png"
import category4 from "../../assets/img/catigoru4.png"

function Category() {
    return (
        <div className='mt-[30px]'>
            <div className="container">
                <h1 className=' text-[40px] text-blue-900 font-bold'>Категории</h1>
                <div className="flex mt-[20px] items-center gap-[40px]">
                    <UiComponent title={"Детектив"} img={category1} />
                    <UiComponent title={"Фантастика"} img={category2} />
                    <UiComponent title={"Приключения"} img={category3} />
                    <UiComponent title={"Научная"} img={category4} />
                </div>
            </div>
        </div>
    )
}

export default Category
