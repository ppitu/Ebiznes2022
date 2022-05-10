import axios from "axios";
import { useEffect } from "react";


function Basket() {
    const [basket, setBasket] = useState([]);


    useEffect(() => {
        axios.post('http://localhost:1323/orders', basket)
            .then(response => this.setState({orderId: response.data.id}));
    })

}

export default Basket;