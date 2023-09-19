import { OfferCard } from "./OfferCard";
import "./Offer.scss";
import { TResponceOffers } from "../Prescoring/Prescoring";

type TOfferProps = {
  store: any;
};

const savedObject = localStorage.getItem("offers");
let offersList: TResponceOffers[];
if (savedObject) {
  offersList = JSON.parse(savedObject);
}

function Offer({ store }: TOfferProps) {
  return (
    <section className="Offer">
      {offersList?.map((offer, index) => (
        <OfferCard key={index} offer={offer} store={store}></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
