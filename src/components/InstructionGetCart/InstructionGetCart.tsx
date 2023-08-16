import "./InstructionGetCart.scss";

export default function InstructionGetCart() {
  const instructionGetCartList = [
    {
      id: 1,
      instruction:
        "Fill out an online application - you do not need to visit the bank",
    },
    {
      id: 2,
      instruction:
        "Find out the bank's decision immediately after filling out the application",
    },
    {
      id: 3,
      instruction:
        "The bank will deliver the card free of charge, wherever convenient, to your city",
    },
  ];

  return (
    <section className="instruction">
      <h3>How to get a card</h3>
      <div className="instruction__container">
        {instructionGetCartList.map((item) => (
          <div key={item.id}>
            <div className="instruction__step">
              <span>{item.id}</span>
              <hr></hr>
            </div>
            <p>{item.instruction}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
