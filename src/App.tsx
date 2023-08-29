import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./scss/normalize.css";
import "./scss/index.scss";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import { Routers } from "./components";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routers />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
