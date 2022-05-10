import React, {useEffect, useState} from "react";
import {getProducts} from "../RestRequester";
import Categories from "./Categories";

function Products() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProduct(res.data)
            })}, []
    );

    return (
        <div className="products">
            <ul>
                {products.map((product, index) => (
                    <div key={index}>
                        <h3>{product.ID}:{product.Name}</h3>
                        <button>Dodaj to koszyka</button>
                        <Categories />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Products;