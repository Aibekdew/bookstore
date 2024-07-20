import React, { useEffect } from 'react'
import { useContext } from 'react'
import { BookShopContext } from '../../context'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard'


function CategoryProduct() {
    const {title} = useParams()
    console.log(title, "bar");
    const {productAll, setCateg, categ} = useContext(BookShopContext)

     const filterProduct = productAll.filter((item) => item.category == title )
localStorage.setItem("category", JSON.stringify(filterProduct))
console.log(filterProduct);
 useEffect(() => {
setCateg(filterProduct)
 }, [productAll])

    return (
        <div className='container'>
            <div className="flex gap-[130px] flex-wrap">
   {
categ.map((el) => <ProductCard el={el}/>)
   }
        </div>
        </div>
    )
}

export default CategoryProduct
