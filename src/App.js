
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import Product from './components/Product';
import Basket from './components/Basket';
import ProductDetails from './Pages/ProductDetails';
import CategoryProduct from './components/CategoryProduct';
import Search from './components/Search';
import History from './components/History';


function App() {
  return (
    <div className="">
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/createProduct' element={<CreateProduct/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/productDetails/:elId' element={<ProductDetails/>}/>
  <Route path='/basket' element={<Basket/>}/>
  <Route path='/categoryProduct/:title' element={<CategoryProduct/>}/>
  <Route path='/search/:input' element={<Search/>}/>
  <Route path='/history' element={<History/>}/>
</Routes>
    </div>
  );
}

export default App;
