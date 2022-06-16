
import React, {  useCallback, useEffect, useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Categories from "./Categories";
import 'bootstrap/dist/css/bootstrap.css';

const ProductItem = ({product}) => {
    const [cart, setCart] = useState([]);

    //const { addProduct, cartItems, increase } = useContext(CartContext);

    /*const isInCart = cartProduct => {
        return !!cartItems.find(item => item.id === cartProduct.id);
    }*/
    const addToCart = useCallback((id, item) => {
        return async (e) => {
            e.preventDefault()
            console.log(id);
            setCart(id);
            axios.post(`http://localhost:1323/cart`, {
                product_id: id
            })

            setCart([...cart, item])
        }
    });

    return ( 
        <div className="card card-body">
            <p>{product.Name}</p>
            <div className="text-right">
            <Button onClick={addToCart(product.ID, product)}>Dodaj to koszyka</Button>  
            <Categories />  
            </div>
        </div>
     );
}
 
export default ProductItem;