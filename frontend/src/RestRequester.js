import axios from "axios";

const serverURL = "http://localhost:1323";
const categoryURL = `${serverURL}/categories`;
const productURL = `${serverURL}/products`;
const cartURL = `${serverURL}/cart`;
const OrderURL = `${serverURL}/orders`;

export const getCategories = () => {
    return axios.get(categoryURL, {
        method: 'GET',       
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    })
}

export const getProducts = () => {
    return axios.get(productURL, {
        method: 'GET',      
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    })
}

export const getCart = () => {
    return axios.get(cartURL,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    })
}