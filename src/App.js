import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
