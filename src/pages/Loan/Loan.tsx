import {
  PlatinumCard,
  InstructionGetCart,
  Prescoring,
  Decision,
} from "../../components/LoanPage";
import { useRef, useState } from "react";
import { Tabs } from "../../components/UI";
import { Offer } from "../../components/LoanPage/Offer/Offer";
import { FormWrapper } from "../../components/UI/FormWrapper/FormWrapper";

function Loan() {
  const buttonRef = useRef<null | HTMLDivElement>(null);
  const [isPrescoringActive, setIsPrescoringActive] = useState(true);
  const [isOfferActive, setIsOfferActive] = useState(false);
  const [isDecisionActive, setIsDecisionActive] = useState(false);
  let [amount, setAmount] = useState(15000);

  return (
    <main className="main">
      <PlatinumCard buttonRef={buttonRef} />
      <Tabs />
      <InstructionGetCart />
      {isPrescoringActive && (
        <FormWrapper>
          <Prescoring
            amount={amount}
            setAmount={setAmount}
            setIsPrescoringActive={setIsPrescoringActive}
            setIsOfferActive={setIsOfferActive}
            buttonRef={buttonRef}
          />
        </FormWrapper>
      )}
      {isOfferActive && <Offer amount={amount} setIsDecisionActive={setIsDecisionActive} setIsOfferActive={setIsOfferActive}/>}
      {isDecisionActive && <Decision />}
    </main>
  );
}

export default Loan;
