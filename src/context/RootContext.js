import React, { useState, useEffect } from 'react'
import { BookShopContext } from '.'

function RootContext({children}) {
    const [modal, setModal] = useState(false)
    const [productAll, setProductAll] = useState([])
    const [basket, setBasket] = useState([])
    const [categ, setCateg] = useState([])
    const [admin, setAdmin] = useState(false)
    const [details, setDetails] = useState({})
    const [cart, setCart] = useState(false)
    const [search, setSearch] = useState([])
    const [history, setHistory] = useState([])
    function getProduct() {
        let res = JSON.parse(localStorage.getItem("products")) || []
        let admin = JSON.parse(localStorage.getItem("admin"))
        let bas = JSON.parse(localStorage.getItem("basket")) || []
        let details = JSON.parse(localStorage.getItem("details")) || {}
        let product = JSON.parse(localStorage.getItem("category")) || []
        let sear = JSON.parse(localStorage.getItem("search")) || []
        let his = JSON.parse(localStorage.getItem("history")) || []
        setSearch(sear)
        setProductAll(res)
        setAdmin(admin)
        setDetails(details)
        setCateg(product)
        setBasket(bas)
        setHistory(his)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <BookShopContext.Provider value={{
modal,
setModal,
admin,
setAdmin,
details,
categ,
history,
setHistory,
cart,
search,
setSearch,
setCart,
setCateg,
setDetails,
basket,
setBasket,
productAll,
setProductAll,
        }}>
            {children}
        </BookShopContext.Provider>
    )
}

export default RootContext