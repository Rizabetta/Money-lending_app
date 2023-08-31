import "./Tooltip.scss";

function Tooltip({
  title,
  description,
  tooltiptext,
}: {
  title: any;
  description: string;
  tooltiptext: string;
}) {
  return (
    <ul className="tooltip">
      <li>{title}</li>
      <li>{description}</li>
      <span className="tooltiptext">{tooltiptext}</span>
    </ul>
  );
}

export { Tooltip };
