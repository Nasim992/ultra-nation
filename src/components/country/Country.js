import React from 'react';
import './Country.css'; 
const Country = (props) => {
    console.log(props);
    const {name,flag,nativeName,population,region,timezones} = props.countries;

    const AddCountryHandler  = props.AddCountryHandler;

    return (
        <div className="main-class">
            <div className="flag">
                <img src={flag}/>
     
            </div>
            <div className="description">
                <h1>Name : {name}</h1>
                <h3>Native Name: {nativeName}</h3>
                <h4>Population :{population} </h4>
                <h5>Region : {region}</h5>
                <h6>Time Zone :{timezones}</h6>
                <button onClick={()=>AddCountryHandler(props.countries)}>Add Country</button>

            </div>
        </div>
    );
};

export default Country;