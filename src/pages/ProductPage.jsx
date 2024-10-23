
import { useSearchParams , useLocation, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
// i kalojme te dhenat nga historia e state 
export default function ProductPage() {
    //query strings
    const [searchParams, setSearchParams]= useSearchParams();
    console.log(searchParams);
    // marrim te dhenat nga historia e state me locationin   
    const location = useLocation();
    // marrim emrin me useParams
    const {productSlug}=useParams();
    // state qe marrim produktin
    const [product, setProduct] = useState(null);
    

    // mbushim product me vlera qe ka state
    useEffect(() => {
        console.log(location.state);
        if (location.state!==null) {
            setProduct(location.state);
        }
    }, [location]);

   
    return (
        <div>
      <p> Id : {product?.id} </p>
      <p> Name : {productSlug}</p>
      <p>Description:{product?.description}</p>
      <p> price: {product?.price}</p>
      <p> Path: {product?.path}</p>
        </div>
    );
}
