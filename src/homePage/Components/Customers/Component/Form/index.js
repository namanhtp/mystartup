import React from 'react';
import "./main.css";
function Form() {


    return (
        <div class="form-group">
            <input id="email" name="email" type="text" placeholder="First Name" class="form-control"></input>
            <span class="form-message"></span>
        </div>
    )
};

export default Form;