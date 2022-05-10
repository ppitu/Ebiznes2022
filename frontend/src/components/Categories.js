import React, {useEffect, useState} from "react";

import {getCategories} from "../RestRequester";

function Categories() {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        getCategories()
            .then(res => {
                setCategory(res.data)
            })
    }, []);

    console.log(categories)

    return (
        <select name="category">
            {categories.map((category, index) => (
                <option value={category.ID}>{category.Name}</option>
            ))}
        </select>
    );

}

export default Categories;