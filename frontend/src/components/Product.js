import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { getProducts } from "../RestRequester";
import Categories from "./Categories";

function Products() {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProduct(res.data)
            })
    }, []);

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
        <div className="products">
            <ul>
                {products.map((product, index) => (
                    <div key={index}>
                        <h3>{product.ID}:{product.Name}</h3>
                        <button onClick={addToCart(product.ID, product)}>Dodaj to koszyka</button>
                        <Categories />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Products;