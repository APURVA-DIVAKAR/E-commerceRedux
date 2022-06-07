import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductsDetail from './components/ProductsDetail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductListing/>}></Route>
        <Route  path="/product/:productId" element={<ProductsDetail/>} ></Route>
        <Route >404 not found</Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
