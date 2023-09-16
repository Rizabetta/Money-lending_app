import offerimg from "../../../../assets/png/OfferImg.png";
import invalid from "../../../../assets/svg/Invalid.svg";
import valid from "../../../../assets/svg/Valid.svg";
import "./OfferCard.scss";
import { api_loan } from "../../../../api/loan";
import { TResponceOffers } from "../../Prescoring/Prescoring";

function OfferCard({ offer, store }: any) {
  const handleClick = async () => {
    // const responce = api_loan.postOffer({
    //   offer,
    // });
    const status = (await api_loan.postOffer({ offer })).ok;
    status && store.dispatch({ type: "OFFERS" });
    status && store.dispatch({ type: "PRESCORING" });
  };

  return (
    <div className="offer__card">
      <img className="offer__card-img" src={offerimg} alt="offer"></img>
      <p>Requested amount: {offer.requestedAmount.toLocaleString("ru")} ₽</p>
      <p>Total amount: {offer.totalAmount.toLocaleString("ru")} ₽</p>
      <p>For {offer.term} months</p>
      <p>Monthly payment: {offer.monthlyPayment}₽</p>
      <p>Your rate: {offer.rate} %</p>
      <div className="offer__status">
        <p>Insurance included </p>
        {offer.isInsuranceEnabled ? (
          <img src={valid} alt="valid"></img>
        ) : (
          <img src={invalid} alt="invalid"></img>
        )}
      </div>
      <div className="offer__status">
        <p>Salary client </p>
        {offer.isSalaryClient ? (
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
