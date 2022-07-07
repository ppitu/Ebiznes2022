import axios from "axios";
import { useEffect, useState } from "react";
import { getCart } from "../RestRequester";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51LD9HFEAp8DjvQZDMK46deLFrqeflA2ciCIeplqbPocutLecsRmrAMbwHOL8gBwbgPszkrxeOBr9YyGSQh9ujZOW00hBtDtvii");

function Cart() {
    const [carts, setCart] = useState([]);

    useEffect(() => {
        getCart()
            .then(res => {
                setCart(res.data)
            })
    },[])

    const deleteCart = () => {
        return async(e)=> {
            e.preventDefault();
            axios.delete(`http://localhost:1323/cart`)

            setCart([]);
        }
    };

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:1323/users/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
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
            {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        </div>
    )

}

export default Cart;