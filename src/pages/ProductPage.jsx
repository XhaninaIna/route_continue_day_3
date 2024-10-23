import React, { useState, useEffect } from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';

// i kalojme te dhenat nga historia e state 
export default function ProductPage() {
    // marrim te dhenat nga historia e state me locationin   
    const location = useLocation();
    // state qe marrim produktin
    const [product, setProduct] = useState(null);
    //query strings
    const [searchParams, setSearchParams]= useSearchParams();
    console.log(searchParams);
    // mbushim product me vlera qe ka state
    useEffect(() => {
        if (location.state) {
            setProduct(location.state);
        }
    }, [location]);

   
    return (
        <div>
            <p>id: {product?.id}</p>
            <p>name: {product?.name}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}</p>
            <p>Path: {product.path}</p>
        </div>
    );
}
