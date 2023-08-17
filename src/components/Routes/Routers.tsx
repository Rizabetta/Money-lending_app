import { Routes, Route } from "react-router-dom";
import { Home, Loan } from "../../pages";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loan" element={<Loan />} />
    </Routes>
  );
}

export default Routers;
