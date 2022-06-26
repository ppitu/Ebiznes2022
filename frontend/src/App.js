import './App.css';
import SingInModel from './components/SingInModel';
import {
  Link,
} from 'react-router-dom';
import ProductsGrid from './components/ProductGrid';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <Container className="p-3">
      <div className="App">
        <Header />
        <ProductsGrid />
      </div>
    </Container>
  )
}

export default App;
