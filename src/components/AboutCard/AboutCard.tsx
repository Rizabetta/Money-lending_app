import "./AboutCard.scss";
import money from "../../assets/svg/Money_duotone.svg";
import calendar from "../../assets/svg/Calendar_duotone.svg";
import clock from "../../assets/svg/Clock_duotone.svg";
import bag from "../../assets/svg/Bag_duotone.svg";
import creditCard from "../../assets/svg/CreditCard_duotone.svg";

export default function AboutCard() {
  const cardList = [
    {
      src: money,
      title: <>Up to 50 000 <b>&#8381;</b></>,
      information: "Cash and transfers without commission and percent",
    },
    {
      src: calendar,
      title: "Up to 160 days",
      information: "Without percent on the loan",
    },
    {
      src: clock,
      title: "Free delivery",
      information:
        "We will deliver your card by courier at a convenient place and time for you",
    },
    {
      src: bag,
      title: "Up to 12 months",
      information:
        "No percent. For equipment, clothes and other purchases in installments",
    },
    {
      src: creditCard,
      title: "Convenient deposit and withdrawal",
      information:
        "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    },
  ];

  return (
    <section className="aboutCard">
      {cardList.map((item, key) => (
        <div className="aboutCard__card" key={key}>
          <img src={item.src} alt="icon"></img>
          <p className="aboutCard__title">{item.title}</p>
          <p className="aboutCard__information">{item.information}</p>
        </div>
      ))}
    </section>
  );
}
