import { OfferCard } from "./OfferCard";
import "./Offer.scss";
import { Action, Store } from "redux";
import { TState } from "../../../pages/Loan/Loan";
import { TResponceOffers } from "../Prescoring/Prescoring.type";

type TOfferProps = {
  store: Store<TState, Action>;
  setIsDecisionActive:(e:boolean)=>void;
};

function Offer({ store, setIsDecisionActive}: TOfferProps) {
  const savedObject = localStorage.getItem("offers");
  let offersList: TResponceOffers[] = [];
  if (savedObject) {
    offersList = JSON.parse(savedObject);
    console.log(offersList);
  }

  return (
    <section className="Offer">
      {offersList?.map((offer, index) => (
        <OfferCard setIsDecisionActive={setIsDecisionActive} key={index} offer={offer} store={store}></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
