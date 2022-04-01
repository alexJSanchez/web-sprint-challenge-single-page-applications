import React, { useState } from "react";

const Form = (props) => {
    
    
    return(
        <form id="pizza-form">
            <label>Name
                <input
                    id="name-input"
                    type="text"
                    name="name"
                    minLength="2"
                />
            </label>
            <label> Select Size
            <select name="pizza-size" id="size-dropdown">
                    <option value='slice'>slice</option>
                    <option value='Halfpie'>Halfpie</option>
                    <option value='Wholepie'>Wholepie</option>
            </select>
            </label>
            <label>
                <ul>Topping
                    <li>Extra Cheese<input name="extra-cheese" type='checkbox'></input></li>
                    <li>Peperoni<input name="peperoni" type='checkbox'></input></li>
                    <li>Sausage<input name="sausage" type='checkbox'></input></li>
                    <li>anchovies<input name="anchovies" type='checkbox'></input></li>
                </ul>
            </label>
            <label>Special Instructions
                <input type='text' id="special-text" name="special-instruction"></input>
            </label>
            <input id='order-button' type="submit"/>
        </form>
    )
}

export default Form