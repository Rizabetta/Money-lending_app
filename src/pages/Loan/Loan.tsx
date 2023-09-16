import {
  PlatinumCard,
  InstructionGetCart,
  Prescoring,
  Decision,
} from "../../components/LoanPage";
import { useEffect, useRef, useState } from "react";
import { Tabs } from "../../components/UI";
import { Offer } from "../../components/LoanPage/Offer/Offer";
import { FormWrapper } from "../../components/UI/FormWrapper/FormWrapper";
import { TResponceOffers } from "../../components/LoanPage/Prescoring/Prescoring";
import { createStore } from "redux";

function Loan() {
  const buttonRef = useRef<null | HTMLDivElement>(null);
  const [isPrescoringActive, setIsPrescoringActive] = useState(true);
  const [isOfferActive, setIsOfferActive] = useState(false);
  const [isDecisionActive, setIsDecisionActive] = useState(false);
  let [amount, setAmount] = useState(15000);
  const [offers, setOffers] = useState<TResponceOffers[]>([]);

  type TState = {
    statusOkPrescoring: boolean;
    statusOkOffers: boolean;
  };

  const initialState: TState = {
    statusOkPrescoring: false,
    statusOkOffers: false,
  };

  type Action = { type: "PRESCORING" } | { type: "OFFERS" };

  const reducer = (state: TState = initialState, action: Action) => {
    switch (action.type) {
      case "PRESCORING":
        return { ...state, statusOkPrescoring: true };
      case "OFFERS":
        return { ...state, statusOkOffers: true };
      default:
        return state;
    }
  };

  const store = createStore(reducer);
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("myState", JSON.stringify(state));
  });
  const savedState = localStorage.getItem("myState");
  let state: TState | undefined = undefined;
  savedState && (state = JSON.parse(savedState));

  return (
    <main className="main">
      <PlatinumCard buttonRef={buttonRef} />
      <Tabs />
      <InstructionGetCart />
      <div ref={buttonRef}>
        {!state?.statusOkPrescoring && (
          <FormWrapper>
            <Prescoring
              state={state}
              store={store}
              setOffers={setOffers}
              amount={amount}
              setAmount={setAmount}
              setIsPrescoringActive={setIsPrescoringActive}
              setIsOfferActive={setIsOfferActive}
            />
          </FormWrapper>
        )}
        {!state?.statusOkOffers && (
          <Offer
            store={store}
            offers={offers}
            setIsDecisionActive={setIsDecisionActive}
            setIsOfferActive={setIsOfferActive}
          />
        )}
        {state && state.statusOkOffers && <Decision />}
      </div>
    </main>
  );
}

export default Loan;
