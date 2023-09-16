import { OfferCard } from "./OfferCard";
import "./Offer.scss";
import { TResponceOffers } from "../Prescoring/Prescoring";

export type TOfferCardProps = {
  id: number;
  term: number;
  rate: number;
  insurance: boolean;
  salary: boolean;
  amount: number;
  setIsDecisionActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOfferActive: React.Dispatch<React.SetStateAction<boolean>>;
};

type TOfferProps = {
  store: any
  offers: TResponceOffers[];
  setIsDecisionActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOfferActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const savedObject  = localStorage.getItem("offers");
let offersList: TResponceOffers[];
if (savedObject) {
  offersList = JSON.parse(savedObject);
} 

function Offer({ store, offers, setIsDecisionActive, setIsOfferActive }: TOfferProps) {
  return (
    <section className="Offer">
      {offersList?.map((offer, index) => (
        <OfferCard key={index} offer={offer} store={store}></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
