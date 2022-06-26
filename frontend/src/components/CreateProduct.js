import axios from "axios";
import { useState } from "react";
import Categories from "./Categories";

function CreateProduct() {
    const [name, setName] = useState();
    const [categoryId, setCategoryId] = useState();

    const addCategoryId = (id) => {
        setCategoryId(id)
    }

    const addProduct = () => {
        axios.post('http://localhost:1323/products', {
            name: name,
            category_id: parseInt(categoryId)
        })
            .then(function(response) {
                console.log(response)
            })
    }

    return (
        <div>
            <h2>Create Product</h2>
            <label>
                Nazwa:
                <input type="text" onChange={e => setName(e.target.value)} />
            </label>
            <Categories test={addCategoryId} />
            <button onClick={addProduct}>Dodaj</button>
        </div>
    )
}

export default CreateProduct;