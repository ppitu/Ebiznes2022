import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart';
import SuccesLogin from './components/SuccesLogin';
import {CookiesProvider} from "react-cookie";
import SignInModal from './components/SingInModel';
import CreateProduct from './components/CreateProduct';
import CreateCategory from './components/CreateCategory';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <CookiesProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<SignInModal />} />
      <Route path="success" element={<SuccesLogin />} />
      <Route path="admin/create/product" element={<CreateProduct />} />
      <Route path="admin/create/category" element={<CreateCategory />} />
    </Routes>
  </BrowserRouter>
  </CookiesProvider>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
