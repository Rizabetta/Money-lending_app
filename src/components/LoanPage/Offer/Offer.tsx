import { OfferCard } from "./OfferCard";
import { TResponceOffers } from "../Prescoring/Prescoring.type";
import "./Offer.scss";

type TOfferProps = {
  setIsDecisionActive: (e: boolean) => void;
};

function Offer({ setIsDecisionActive }: TOfferProps) {
  const savedObject = localStorage.getItem("offers");
  let offersList: TResponceOffers[] = [];
  if (savedObject) {
    offersList = JSON.parse(savedObject);
  }

  return (
    <section className="Offer">
      {offersList?.map((offer, index) => (
        <OfferCard
          setIsDecisionActive={setIsDecisionActive}
          key={index}
          offer={offer}
        ></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
