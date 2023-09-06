import React, { ReactNode } from "react";
import "./Modal.scss";
import close from "../../../assets/svg/Close_square.svg";

type TModal = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

function Modal({ active, setActive, children }: TModal) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__topcontainer">
          <h3>Deny application</h3>
          <img src={close} alt="close" onClick={() => setActive(false)} />
        </div>
        {children}
      </div>
    </div>
  );
}

export { Modal };
