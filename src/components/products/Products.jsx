import React from "react";
import {useNavigate} from "react-router-dom";

export default function Products({id, name, description, price}){
    const navigate= useNavigate();
   
    return (
    <div>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <button onClick={()=>navigate(`/store/${name}`, {state: {id, description, price, path:`/store/${name}`}})}>Show More</button>
        {/* id e kalojme sipas state */}
    </div>
    );
}