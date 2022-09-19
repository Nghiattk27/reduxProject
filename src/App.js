import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './containers/Header';
import Counter from './containers/components/Counter/Counter';

function App() {
  return (
    <Router >
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
