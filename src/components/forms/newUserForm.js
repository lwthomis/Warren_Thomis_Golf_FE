import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function NewUserForm() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const [checked, setCheck] = useState(false); 

    const isAdmin = sessionStorage.getItem("isAdmin");
    let navigate = useNavigate();


    function handleChange(event) {
        const {name, value} = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        });
    }

    function handleCheck() {
        setCheck(!checked);
    }

    function handleClick(event) {
        event.preventDefault();
        const newUser = {
            email: input.email,
            password: input.password,
            isAdmin: checked,
        };

        axios.post(`${process.env.REACT_APP_API}/users/`, newUser);
            
        if (isAdmin === "true") {
            window.location.reload(true);
            alert("User Created");
        } else navigate('/login');

    }


    return (
        <div className="new-form">
            <h1>Register New User</h1> 
            <form>                
                <div className="text-inputs-wrapper">
                    <input 
                        onChange={handleChange}
                        name='email'
                        value={input.email}
                        className="input email-field" 
                        type='email' 
                        placeholder="Email"
                    ></input>
                </div>

                <div className="text-inputs-wrapper">
                    <input 
                        onChange={handleChange}
                        name='password'
                        value={input.password}
                        className="input password-field" 
                        type='password' 
                        placeholder="Password"
                    ></input>
                </div>

                {isAdmin === 'true' ? 
                    <div className="admin-checkbox-wrapper">
                        <label htmlFor='checkbox'>
                            <input 
                                type='checkbox'
                                className='checkbox' 
                                onChange={handleCheck} 
                            ></input>
                            Admin?
                        </label>
                    </div> : null
                } 

                <button onClick={handleClick} type='submit' className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default NewUserForm;