import React from 'react';
import { Route , Routes, BrowserRouter} from "react-router-dom";
import './scss/normalize.css';
import './scss/index.scss';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
  <BrowserRouter>
    <div>
        <Header />
        <Routes>
          <Route  path="/" element={<Home/>} />
          
        </Routes>
      </div>
      <Footer />  
  </BrowserRouter>
  );
}

export default App;
