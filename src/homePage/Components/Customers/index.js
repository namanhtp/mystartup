import React from 'react';
import "./main.css";
import FormBox from './Component/FormBox/FormBox.js'
function Customers() {


    return (
        <div className="customers" >   
            <div className="customers__container">
                <h3 className="customers__heading">Customers Worldwide</h3>
                <p  className="customers__title">START YOUR FREE TRIAL TODAY</p>
                <FormBox/>
            </div>
        </div>
    )
};

export default Customers;