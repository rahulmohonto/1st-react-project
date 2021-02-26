import React from 'react';
import fakeData from './../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from './../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    const handleAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(productelement => <Product
                        handleAddCart={handleAddCart} productName={productelement}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cartPass={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;