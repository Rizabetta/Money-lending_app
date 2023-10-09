import { useState } from "react";
import { Link } from "react-router-dom";
import { Message, PinCode } from "../../../components/UI";
import { RouteNames } from "../../../routers/routes";
import surpriseImg from "../../../assets/png/OfferImg.png";
import store from "../../../storage/storage";

function LoanPinCode() {
  const [messageActive, setMessageActive] = useState(true);
  const data = {
    title: "Congratulations! You have completed your new credit card.",
    subtitle: "Your credit card will arrive soon. Thank you for choosing us!",
  };

  const handleClick = () => {
    localStorage.clear();
    store.dispatch({ type: "CLEAR" });
  };

  return (
    <main className="main">
      {messageActive ? (
        <Message {...data}>
          <img alt="surpriseImg" src={surpriseImg}></img>
          <Link
            className="defaultButton"
            onClick={handleClick}
            to={RouteNames.HOME}
          >
            View other offers of our bank
          </Link>
        </Message>
      ) : (
        <PinCode numberOfСells={4} setMessageActive={setMessageActive} />
      )}
    </main>
  );
}

export { LoanPinCode };
