import './App.css';
import ProductsGrid from './components/ProductsGrid';
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
