import {
  PlatinumCard,
  Tabs,
  InstructionGetCart,
  Prescoring,
} from "../../components";
import "../../components/Main/main.scss";
import { useRef } from "react";

export default function Loan() {
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
