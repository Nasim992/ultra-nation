import React, { useEffect } from 'react';

import './App.css';
import { useState } from 'react';
import Country from './components/country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [country,setCountry] = useState([]);

  const [cart,setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(data=>setCountry(data))
    .catch(error=>console.log(error))
  },[])

  const AddCountryHandler = (country)=> {

    const newCart = [...cart,country];

    setCart(newCart);

}

  return (
    <div className="App">
      <h1>Total Country: {country.length}</h1>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart= {cart}></Cart>
      <ul>
        {
          country.map(cntry=> <Country countries = {cntry} key = {cntry.alpha3Code} AddCountryHandler={AddCountryHandler}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
