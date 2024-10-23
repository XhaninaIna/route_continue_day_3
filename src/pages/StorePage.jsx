import React, { useState,useEffect } from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import Products from "../components/products/Products";
const productData=[
    {
        id: 1,
        name: "product1",
        description:"lorem1",
        price:"$34",
    },
    {
        id: 2,
        name: "product2",
        description:"lorem2",
        price:"$50",
    },
    {
        id: 3,
        name: "product3",
        description:"lorem3",
        price:"$98",
    },
    
]

export default function StorePage() {
    const [user,setUser]=useState(null);
    const navigate= useNavigate();
    const  location = useLocation();
    
    // useSearch params me ?
   
    // hook qe merr userin sa here hapet faqja
    console.log(location);
    useEffect(()=>{
       if(!location.state) navigate("/login");
       setUser(location.state);
},[location,user]);
    // console.log("user", user);
  return (
    <div>
     <button onClick={()=>navigate("/")}>Logout</button>
     {
        productData.map((product)=>(
            <Products id={product.id} name={product.name} description={product.description} price={product.price} key={product.id}/>
        ))
     }
    </div>

  )
}
