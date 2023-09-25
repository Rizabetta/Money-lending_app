import { Link } from "react-router-dom";
import { Message, PinCode } from "../../../components/UI";
import { RouteNames } from "../../../routers/routes";
import surpriseImg from "../../../assets/png/OfferImg.png";

function LoanPinCode() {
  const data = {
    title: "Congratulations! You have completed your new credit card.",
    subtitle: "Your credit card will arrive soon. Thank you for choosing us!",
  };
  return (
    <main className="main">
      <PinCode numberOfСells={4} />
      <Message {...data}>
        <img alt="surpriseImg" src={surpriseImg}></img>
        <Link to={RouteNames.HOME} className="defaultButton">
          View other offers of our bank
        </Link>
      </Message>
    </main>
  );
}

export { LoanPinCode };
