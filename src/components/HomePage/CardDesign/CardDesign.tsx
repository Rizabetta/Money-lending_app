import "./CardDesign.scss";
import card1 from "../../../assets/svg/card_1.svg";
import card2 from "../../../assets/svg/card_2.svg";
import card3 from "../../../assets/svg/card_3.svg";
import card4 from "../../../assets/svg/card_4.svg";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routers/routes";

const cardList = [
  { id: 1, src: card1 },
  { id: 2, src: card2 },
  { id: 3, src: card3 },
  { id: 4, src: card4 },
];

function CardDesign() {
  return (
    <section className="cardDesign">
      <div>
        <h1>Choose the design you like and apply for card right now</h1>
        <Link to={RouteNames.LOAN} className="defaultButton">
          Choose the card
        </Link>
      </div>
      <div className="cardDesign__container">
        {cardList.map((element) => (
          <img key={element.id} src={element.src} alt="card" />
        ))}
      </div>
    </section>
  );
}
export { CardDesign };
