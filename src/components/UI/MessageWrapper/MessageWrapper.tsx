import { IChildrenProps } from "../FormWrapper/FormWrapper";
import './MessageWrapper.scss';

function MessageWrapper({ children }: IChildrenProps) {
  return (
    <div className="message">
      {children}
    </div>
  );
}

export { MessageWrapper };
