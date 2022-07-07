import axios from "axios";
import { useEffect } from "react";


function Payment() {
    const [payment] = useState([]);


    useEffect(() => {
        axios.post('http://localhost:1323/orders', payment)
            .then(response => this.setState({paymentId: response.data.id}));
    })

}

export default Payment;