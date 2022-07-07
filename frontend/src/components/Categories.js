import React, { useEffect, useState } from "react";

import { getCategories } from "../RestRequester";

function Categories({ test: setCategoryId }) {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        getCategories()
            .then(res => {
                setCategory(res.data)
            })
    }, []);

    return (
        <div>
            <select name="category" onChange={(e => setCategoryId(e.target.value))}>
                {categories.map((category) => (
                    <option value={category.ID}>{category.Name}</option>
                ))}
            </select>
        </div>
    );

}

export default Categories;