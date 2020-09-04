import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,Country)=>sum+Country.population,0);
    return (
        <div>
            <h2>Total Population : {totalPopulation}</h2>
        </div>
    );
};

export default Cart;