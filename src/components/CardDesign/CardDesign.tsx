import "./CardDesign.scss";
import card1 from "../../assets/svg/card_1.svg";
import card2 from "../../assets/svg/card_2.svg";
import card3 from "../../assets/svg/card_3.svg";
import card4 from "../../assets/svg/card_4.svg";

export default function CardDesign() {
  return (
    <section className="cardDesign">
      <div>
        <h1>Choose the design you like and apply for card right now</h1>
        <button className="defaultButton">Choose the card</button>
      </div>
      <div className="cardDesign__container">
        <img src={card1} alt="card 1" />
        <img src={card2} alt="card 2" />
        <img src={card3} alt="card 3" />
        <img src={card4} alt="card 4" />
      </div>
    </section>
  );
}
