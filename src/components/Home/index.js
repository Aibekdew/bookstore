import React from 'react'
import slider from "../../assets/img/image 112.png";
import Product from '../Product';
import Category from '../Category';

function Home() {
    return (
 <>
        <div style={{
          background: `url("${slider}") no-repeat center/cover`,
            minHeight: "60vh"
        }}>
            <div className="container">
            </div>
        </div>
        <Category/>
        <Product/>
 </>
    )
}

export default Home;
