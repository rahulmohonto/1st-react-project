import React from 'react';

const Cart = (props) => {
    const cart = props.cartPass;

    console.log(cart);
    // const totalPrice = cart.reduce((total, Prod) => total + Prod.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shipping = 0.00;
    if (totalPrice > 35) {
        shipping = 0
    }
    else if (totalPrice > 15) {
        shipping = 4.99
    }
    else if (totalPrice > 0) {
        shipping = 12.99
    }
    const tax = totalPrice / 10;
    return (
        <div>
            <h5>Order Summary : &nbsp;</h5>
            <p>Items Ordered :&nbsp; {cart.length}</p>
            <p>Product Price :&nbsp; {totalPrice}</p>
            <p><small>Shipping Cost :&nbsp;{shipping}</small></p>
            <p><small>Tax + Vat :&nbsp;{tax}</small></p>
            <p>Total Price :&nbsp;{totalPrice + shipping + tax}</p>
        </div>
    );
};

export default Cart;