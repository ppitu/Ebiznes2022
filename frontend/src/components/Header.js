import {
    Link,
  } from 'react-router-dom';

function Header()
{
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-white">
            <h1>Sklep</h1>
            <div class="form-inline my-2 my-lg-0">
            <Link class="m-2" to="/cart">Koszyk</Link>
            <Link to="/login">Logowanie</Link>
            </div>
        </div>
    )
}

export default Header;