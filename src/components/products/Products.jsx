import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function Products({id, name, description, price}){
    const navigation= useNavigate();
   
    return (
    <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>description: {description}</p>
        <p>price: {price}</p>
        <button onClick={()=>navigation(`/store/${name}`, {state: {id,name,description,price, path:`/store/${name}`}})}>Show More</button>
        {/* id e kalojme sipas state */}
    </div>
    );
}