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

    return (
        <div className="cart">
            <ul>
                {carts.map((cart, index) => (
                    <div key={index}>
                        <h1>{cart.ProductID}</h1>
                        <p>Test</p>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default Cart;