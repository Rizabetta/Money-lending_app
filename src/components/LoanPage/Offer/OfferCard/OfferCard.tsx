import { TOfferCardProps } from "../Offer";
import offerimg from "../../../../assets/png/OfferImg.png";
import invalid from "../../../../assets/svg/Invalid.svg";
import valid from "../../../../assets/svg/Valid.svg";
import "./OfferCard.scss";

function OfferCard({ rate, insurance, salary }: TOfferCardProps) {
  return (
    <div className="offer__card">
      <img className="offer__card-img" src={offerimg} alt="offer"></img>
      <p>Requested amount: 200 000 ₽</p>
      <p>Total amount: 200 000 ₽</p>
      <p>For 24 months</p>
      <p>Monthly payment: 9 697 ₽</p>
      <p>Your rate: {rate}</p>
      <div className="offer__status">
        <p>Insurance included </p>
        {insurance ? (
          <img src={valid} alt="valid"></img>
        ) : (
          <img src={invalid} alt="invalid"></img>
        )}
      </div>
      <div className="offer__status">
        <p>Salary client </p>
        {salary ? (
          <img src={valid} alt="valid"></img>
        ) : (
          <img src={invalid} alt="invalid"></img>
        )}
      </div>
      <button className="defaultButton">Select</button>
    </div>
  );
}
export { OfferCard };
