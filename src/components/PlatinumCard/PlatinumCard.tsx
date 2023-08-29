import imgCard from "../../assets/svg/PlatinumCard.svg";
import "./PlatinumCard.scss";
import { Tooltip } from "../../components";

function PlatinumCard({ buttonRef }: any) {
  const platinumCardList = [
    {
      title: "Up to 160 days",
      description: "No percent",
      tooltiptext: "When repaying the full debt up to 160 days.",
    },
    {
      title: (
        <>
          Up to 600 000 <b>&#8381;</b>
        </>
      ),
      description: "Credit limit",
      tooltiptext: "Over the limit willaccrue percent",
    },
    {
      title: (
        <>
          0 <b>&#8381;</b>
        </>
      ),
      description: "Card service is free",
      tooltiptext: "Promotion valid until December 31, 2022.",
    },
  ];

  const handleClick = () => {
    buttonRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="platinumCard">
      <div className="platinumCard__description">
        <h1>Platinum digital credit card</h1>
        <p>
          Our best credit card. Suitable for everyday spending and shopping.
          Cash withdrawals and transfers without commission and interest.
        </p>
        <div className="platinumCard__columns">
          {platinumCardList.map((item, key) => (
            <Tooltip
              key={key}
              tooltiptext={item.tooltiptext}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <button className="defaultButton" onClick={handleClick}>
          Apply for card
        </button>
      </div>
      <div className="platinumCard__img">
        <img src={imgCard} alt="Platinum Card"></img>
      </div>
    </section>
  );
}

export { PlatinumCard };
