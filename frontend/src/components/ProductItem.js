
import React, {  useCallback, useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const ProductItem = ({product}) => {
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((id, item) => {
        return async (e) => {
            e.preventDefault()
            setCart(id);
            axios.post(`http://localhost:1323/cart`, {
                product_id: id
            })

            setCart([...cart, item])
        }
    });

    return ( 
        <div className="card card-body">
            <p>Nazwa: {product.Name}</p>
            <p>Kategoria: {product.Category.Name}</p>
            <div className="text-right">
            <Button onClick={addToCart(product.ID, product)}>Dodaj to koszyka</Button>  
            </div>
        </div>
     );
}
 
export default ProductItem;