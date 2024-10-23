import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
const user={
    name:"Xhanina", 
    email:"xhaninacela2@gmail.com",
    phone:"0696696448"
}
export default function HomePage(){
    
    const navigate=useNavigate();
    function handleClick(){
        navigate("/store", {state:user} );
       
    }
    function handleHomePage(){
        navigate("/");
    }
    
    return (
        <div>
             {/* button for homepage */}
             <button onClick={handleHomePage}>Home Page</button>
            <button onClick={handleClick}>
                    Login
            </button>

        </div>
    )
}