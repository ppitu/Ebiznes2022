import axios from "axios";
import { useState } from "react";

function CreateCategory() {
    const [name, setName] = useState();

    const addCategory = () => {
            axios.post('http://localhost:1323/categories', {
                name: name
            })
            .then(function(response){
                console.log(response)
            })
    };

    return (
        <div>
            <h2>Create Category</h2>
                <label>
                    Nazwa:
                    <input type="text" onChange={e => setName(e.target.value)} />
                </label>
                <button onClick={addCategory}>Stwórz</button>
        </div>
    )
}

export default CreateCategory;