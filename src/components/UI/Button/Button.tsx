import { Link } from "react-router-dom";
import "./Button.scss";

type TButtonProps = {
  className: string;
  title: string;
  path?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
};

function Button({ className, title, path, onClick }: TButtonProps) {
  return (
    <Link className={className} to={path ?? "# "} onClick={onClick}>
      {title}
    </Link>
  );
}

export { Button };
