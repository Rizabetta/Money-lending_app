import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers";
import { Footer, Header } from "./layout";
import { Loader } from "./components/UI";
import "./scss/normalize.css";
import "./scss/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routers />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
