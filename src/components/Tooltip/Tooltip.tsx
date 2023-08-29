import "./Tooltip.scss";

function Tooltip(props: any) {
  return (
    <ul className="tooltip">
      <li>{props.title}</li>
      <li>{props.description}</li>
      <span className="tooltiptext">{props.tooltiptext}</span>
    </ul>
  );
}

export { Tooltip };
