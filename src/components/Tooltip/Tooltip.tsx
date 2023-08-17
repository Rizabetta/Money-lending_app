import './Tooltip.scss';

export default function Tooltip(props: any) {
  return (
    <ul className="tooltip">
      <li>{props.title}</li>
      <li>{props.description}</li>
      <span className="tooltiptext">{props.tooltiptext}</span>
    </ul>
  );
}
