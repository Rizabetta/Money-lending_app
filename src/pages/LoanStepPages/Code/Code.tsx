import { Link } from "react-router-dom";
import { MessageWrapper, PinCode } from "../../../components/UI";
import { RouteNames } from "../../../routers/routes";
import surpriseImg from "../../../assets/png/OfferImg.png";

function Code() {
  return (
    <main className="main">
      <PinCode numberOfСells={4} />
      <MessageWrapper>
        <img alt="surpriseImg" src={surpriseImg}></img>
        <h3>Congratulations! You have completed your new credit card.</h3>
        <p>Your credit card will arrive soon. Thank you for choosing us!</p>
        <Link to={RouteNames.HOME} className="defaultButton">
          View other offers of our bank
        </Link>
      </MessageWrapper>
    </main>
  );
}

export { Code };
