import { PlatinumCard, InstructionGetCart, Prescoring } from "../../components/LoanPage";
import { useRef } from "react";
import { Tabs } from "../../components/UI";

function Loan() {
  const buttonRef = useRef<null | HTMLDivElement>(null);

  return (
    <main className="main">
      <PlatinumCard buttonRef={buttonRef} />
      <Tabs />
      <InstructionGetCart />
      <Prescoring buttonRef={buttonRef} />
    </main>
  );
}

export default Loan ;
