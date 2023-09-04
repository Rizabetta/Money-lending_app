import { OfferCard } from "./OfferCard";
import "./Offer.scss";

export type TOfferCardProps = {
  rate: string;
  insurance: boolean;
  salary: boolean;
};

function Offer() {
  const offerList = [
    { id: 1, rate: "15%", insurance: false, salary: false },
    { id: 2, rate: "11%", insurance: true, salary: false },
    { id: 3, rate: "14%", insurance: false, salary: true },
    { id: 4, rate: "10%", insurance: true, salary: true },
  ];

  return (
    <section className="Offer">
      {offerList.map((offer) => (
        <OfferCard key={offer.id}
          rate={offer.rate}
          insurance={offer.insurance}
          salary={offer.salary}
        ></OfferCard>
      ))}
    </section>
  );
}

export { Offer };
