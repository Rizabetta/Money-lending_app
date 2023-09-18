import { OfferCard } from "./OfferCard";
import "./Offer.scss";
import { TResponceOffers } from "../Prescoring/Prescoring";

type TOfferProps = {
  store: any;
  setIsDecisionActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOfferActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const savedObject = localStorage.getItem("offers");
let offersList: TResponceOffers[];
if (savedObject) {
  offersList = JSON.parse(savedObject);
}

function Offer({ store, setIsDecisionActive, setIsOfferActive }: TOfferProps) {
  return (
    <section className="Offer">
      {offersList?.map((offer, index) => (
        <OfferCard key={index} offer={offer} store={store}></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
