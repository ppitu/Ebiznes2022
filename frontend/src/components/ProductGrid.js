import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { getProducts } from "../RestRequester";

const ProductsGrid = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProduct(res.data)
            })
    }, []);

    return ( 
        <div class="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
            </div>
            <div class="row">

                {
                    products.map((product, index) => (
                        <ProductItem key={product.ID} product={product}/>
                    ))
                }

            </div>
        </div>
     );
}
 
export default ProductsGrid;