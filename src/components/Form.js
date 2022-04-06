import React, { useState, useEffect } from "react";
import * as yup from "yup"
const Form = (props) => {
    const [form, setForm] = useState({ name: '',})
    const [error, setError] = useState({ name: '',})
    const schema = yup.object().shape({
        name: yup.string().min(2, 'name must be at least 2 characters'),
    })

    const setFormErrors = (name, value) =>{
        yup.reach(schema, name).validate(value)
        .then(() => setError({...error, [name]: ''}))
        .catch(err => setError({...error, [name]: err.errors[0]}))
    }

    const change = event => {
        const {checked, value ,name, type} = event.target
        const valueToUse = type === "checkbox" ? checked : value;
        setFormErrors(name, valueToUse)
        setForm({...form, [name]: valueToUse})
    }
    return(
        <form id="pizza-form">
            <label>Name
                 <input
                    onChange={change}
                    id="name-input"
                    type="text"
                    name="name"
                />
            </label>
            <h1>{error.name}</h1>
            <label> Select Size
            <select name="pizzaSize" id="size-dropdown">
                    <option value='slice'>slice</option>
                    <option value='Halfpie'>Halfpie</option>
                    <option value='Wholepie'>Wholepie</option>
            </select>
            </label>
                <ul>Topping
                    <li>Extra Cheese<input value="extraCheese" name="toppings" type='checkbox'></input></li>
                    <li>Pepperoni<input value="pepperoni" name="toppings" type='checkbox'></input></li>
                    <li>Sausage<input value="sausage" name="toppings" type='checkbox'></input></li>
                    <li>anchovies<input value="anchovies" name="toppings" type='checkbox'></input></li>
                </ul>
            <label>Special Instructions
                <input  type='text' id="special-text" name="specialInstruction"></input>
            </label>
           <input id='order-button' type="submit"/>
        </form>
    )
}

export default Form