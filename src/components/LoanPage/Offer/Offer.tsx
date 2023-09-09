import { OfferCard } from "./OfferCard";
import "./Offer.scss";

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
  amount: number;
  setIsDecisionActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOfferActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function Offer({ amount, setIsDecisionActive, setIsOfferActive }: TOfferProps) {
  const offerList = [
    { id: 1, term: 24, rate: 15, insurance: false, salary: false },
    { id: 2, term: 24, rate: 11, insurance: true, salary: false },
    { id: 3, term: 24, rate: 14, insurance: false, salary: true },
    { id: 4, term: 24, rate: 10, insurance: true, salary: true },
  ];

  return (
    <section className="Offer">
      {offerList.map((offer) => (
        <OfferCard
          setIsDecisionActive={setIsDecisionActive}
          setIsOfferActive={setIsOfferActive}
          amount={amount}
          id={offer.id}
          term={offer.term}
          key={offer.id}
          rate={offer.rate}
          insurance={offer.insurance}
          salary={offer.salary}
        ></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
