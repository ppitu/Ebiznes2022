import axios from "axios";
import { useEffect, useState } from "react";
import { getCart } from "../RestRequester";


function Cart() {
    const [carts, setCart] = useState([]);

    useEffect(() => {
        getCart()
            .then(res => {
                console.log("T")
                console.log(res.data)
                setCart(res.data)
            })
    },[])

    const deleteCart = () => {
        return async(e)=> {
            e.preventDefault();
            console.log("Test")
            axios.delete(`http://localhost:1323/cart`)

            setCart([]);
        }
    };

    return (
        <div className="cart">
            <h1>Koszyk</h1>
            <ul>
                {carts.map((cart, index) => (
                    <div key={index}>
                        <h1>{cart.Product.Name}</h1>
                        <p>Test</p>
                    </div>
                ))}
            </ul>
            <button onClick={deleteCart()}>Zamów</button>
        </div>
    )

}

export default Cart;