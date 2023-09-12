import { Link } from "react-router-dom";
import { PinCode } from "../../components/CodePage";
import { MessageWrapper } from "../../components/UI";
import { RouteNames } from "../../routers/routes";
import surpriseImg from "../../assets/png/OfferImg.png";

function Code() {
  return (
    <main className="main">
      <PinCode />
      <br></br>
      <br></br>
      <br></br>
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
