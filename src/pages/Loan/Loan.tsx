import { useEffect, useRef, useState } from "react";
import {
  PlatinumCard,
  InstructionGetCart,
  Prescoring,
  Decision,
} from "../../components/LoanPage";
import { Tabs } from "../../components/UI";
import { Offer } from "../../components/LoanPage/Offer/Offer";
import { FormWrapper } from "../../components/UI/FormWrapper/FormWrapper";
import { TResponceOffers } from "../../components/LoanPage/Prescoring/Prescoring.type";
import store from "../../storage/storage";

export type TState = {
  statusOkPrescoring: boolean;
  statusOkOffers: boolean;
};

function Loan() {
  const buttonRef = useRef<null | HTMLDivElement>(null);
  const [isPrescoringActive, setIsPrescoringActive] = useState(true);
  const [isOfferActive, setIsOfferActive] = useState(false);
  const [isDecisionActive, setIsDecisionActive] = useState(false);
  let [amount, setAmount] = useState(15000);
  const [offers, setOffers] = useState<TResponceOffers[]>([]);

  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("myState", JSON.stringify(state));
  });
  const savedState = localStorage.getItem("myState");
  let state: TState | undefined = undefined;
  savedState && (state = JSON.parse(savedState));

  useEffect(() => {
    setIsPrescoringActive(!state?.statusOkPrescoring);
    setIsOfferActive(!state?.statusOkOffers);
    setIsDecisionActive(!!state?.statusOkOffers);
  }, [
    amount,
    offers,
    state?.statusOkOffers,
    state?.statusOkPrescoring,
    setAmount,
  ]);
  return (
    <main className="main">
      <PlatinumCard buttonRef={buttonRef} />
      <Tabs />
      <InstructionGetCart />
      <div ref={buttonRef}>
        {isPrescoringActive && (
          <FormWrapper>
            <Prescoring
              setOffers={setOffers}
              amount={amount}
              setAmount={setAmount}
            />
          </FormWrapper>
        )}
        {isOfferActive && <Offer setIsDecisionActive={setIsDecisionActive} />}
        {isDecisionActive && <Decision />}
      </div>
    </main>
  );
}

export default Loan;
