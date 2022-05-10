import axios from "axios";
import { useEffect } from "react";


function Payemnt() {
    const [payment, setPayment] = useState([]);


    useEffect(() => {
        axios.post('http://localhost:1323/orders', payment)
            .then(response => this.setState({paymentId: response.data.id}));
    })

}

export default Payemnt;