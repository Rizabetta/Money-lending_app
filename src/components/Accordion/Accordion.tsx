import expandUp from "../../assets/svg/Expand_up.svg";
import expandDown from "../../assets/svg/Expand_down.svg";
import { useState } from "react";

function Accordion(props: any) {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="faq__item">
      <div className="faq__title" onClick={() => toggle(props.index)}>
        <p>{props.question}</p>
        <img
          src={selected === props.index ? expandUp : expandDown}
          alt="alt"
        ></img>
      </div>
      <p
        className={
          selected === props.index ? "faq__content faq__show" : "faq__content"
        }
      >
        {props.answer}
      </p>
    </div>
  );
}

export { Accordion };
