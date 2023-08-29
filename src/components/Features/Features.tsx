import checkMark from "../../assets/svg/Check_mark.svg";
import illustration from "../../assets/svg/Illustration_2.svg";
const featuresList = [
  { id: 1, title: "Powerfull online protection." },
  { id: 2, title: "Cashback without borders." },
  { id: 3, title: "Personal design" },
  { id: 4, title: "Work anywhere in the world" },
];

function Features() {
  return (
    <section className="features">
      <img
        src={illustration}
        className="features__illustration"
        alt="Illustration"
      />
      <div className="features__item">
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul>
          {featuresList.map((item) => (
            <li key={item.id}>
              <img src={checkMark} alt="Check mark" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { Features };
