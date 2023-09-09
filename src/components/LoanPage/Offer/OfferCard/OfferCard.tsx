 import offerimg from "../../../../assets/png/OfferImg.png";
import invalid from "../../../../assets/svg/Invalid.svg";
import valid from "../../../../assets/svg/Valid.svg";
import "./OfferCard.scss";
import { api_loan } from "../../../../api/loan";

function OfferCard({
  amount,
  id,
  term,
  rate,
  insurance,
  salary,
  setIsOfferActive,
  setIsDecisionActive,
}: any) {
  const handleClick = async () => {
    const responce = api_loan.postOffer({
      amount,
      id,
      term,
      rate,
      insurance,
      salary,
    });
    const status = (await responce).status;
    status === 200 && setIsOfferActive(false);
    status === 200 && setIsDecisionActive(true);
    console.log(status);
  };
  return (
    <div className="offer__card">
      <img className="offer__card-img" src={offerimg} alt="offer"></img>
      <p>Requested amount: {amount.toLocaleString("ru-RU")} ₽</p>
      <p>Total amount: {amount.toLocaleString("ru-RU")} ₽</p>
      <p>For {term} months</p>
      <p>
        Monthly payment:{" "}
        {(amount / term + (amount / 100) * rate).toLocaleString("ru-RU")}₽
      </p>
      <p>Your rate: {rate} %</p>
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
      <button className="defaultButton" onClick={handleClick}>
        Select
      </button>
    </div>
  );
}
export { OfferCard };
