import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.5;
    }
    else if (total > 0){
        shipping = 12.0;
    }

    const tax = (total / 10).toFixed(2);
    const allTotal = (total + shipping + Number(tax)).toFixed(2);

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h2>Order summery</h2>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + Vat: {tax}</p>
            <p>total price: {allTotal}</p>
        </div>
    );
};

export default Cart;