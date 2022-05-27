import './App.css';
import Products from './components/Product';
import SingInModel from './components/SingInModel';
import {
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SingInModel />
      <Products />
      <h2>Koszyk</h2>
      <Link to="/cart">Koszyk</Link>
    </div>
  )
}

export default App;
