import axios from "axios";
import { useEffect, useState } from "react";
import { getCart } from "../RestRequester";
import {useCookies} from "react-cookie";
import {
    Link,
  } from 'react-router-dom';

function SuccesLogin() {
    const [cookies, setCookie] = useCookies();

    return (
        <div className="succesLogin">
            <h1>Welcome</h1>
            <h2>{cookies.user}</h2>
            <Link to="/">Strona główna</Link>
        </div>
    )

}

export default SuccesLogin;