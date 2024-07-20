import React, { useContext, useEffect } from 'react'
import { BookShopContext } from '../../context'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard';

function Search() {
    const {input} = useParams()
    console.log(input, "bar");
    const {productAll,setSearch,search} = useContext(BookShopContext)
  const getSearch = () => {
    const filterSearch = productAll.filter((item) => item.name == input)
    setSearch(filterSearch)
    localStorage.setItem("search", JSON.stringify(filterSearch))
  }
  useEffect(() => {
getSearch()
  }, [productAll])
   
        return (
        <div>
            <div className="container">
                <div className="flex gap-[130px] flex-wrap">
                {
                    search.map((el, idx) => <ProductCard el={el} key={idx}/>)
                }
            </div>
            </div>
        </div>
    )
}

export default Search
