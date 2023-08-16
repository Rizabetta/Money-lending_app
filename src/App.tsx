import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./scss/normalize.css";
import "./scss/index.scss";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loan from "./pages/Loan/Loan";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
