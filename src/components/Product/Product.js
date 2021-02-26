import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { img, name, seller, price, stock } = props.productName;
    return (

        <div className="product">
            <div className="div">
                <img src={img}></img>
            </div>
            <div className="div">
                <h4 className="Name">{name}</h4>
                <br />
                <p><small>by : &nbsp;{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button
                    onClick={() => props.handleAddCart(props.productName)} className="Button" > <FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
            </div>

        </div >
    );
};

export default Product;