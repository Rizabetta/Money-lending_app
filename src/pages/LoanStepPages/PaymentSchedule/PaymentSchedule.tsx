import { useState } from "react";
import { FormWrapper, ModalWrapper } from "../../../components/UI";
import { RouteNames } from "../../../routers/routes";
import { Link } from "react-router-dom";
import { PaymentScheduleTable } from "../../../components/LoanStepPages";

function PaymentSchedule() {
  const [isChecked, setChecked] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [denylActive, setDenyActive] = useState(false);
  const title = "Deny application";

  return (
    <main className="main">
      <FormWrapper>
        <PaymentScheduleTable
          setModalActive={setModalActive}
          setChecked={setChecked}
          isChecked={isChecked}
        />
      </FormWrapper>
      {modalActive && (
        <ModalWrapper
          title={title}
          denylActive={denylActive}
          setActive={setModalActive}
        >
          {denylActive ? (
            <>
              <p>Your application has been deny!</p>
              <div className="modal__button">
                <Link
                  to={RouteNames.HOME}
                  className="defaultButton"
                  onClick={() => setModalActive(false)}
                >
                  Go home
                </Link>
              </div>
            </>
          ) : (
            <>
              <p>You exactly sure, you want to cancel this application?</p>
              <div className="modal__button">
                <button
                  className="denyButton"
                  onClick={() => {
                    setDenyActive(true);
                  }}
                >
                  Deny
                </button>
                <button
                  className="defaultButton"
                  onClick={() => setModalActive(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </ModalWrapper>
      )}
    </main>
  );
}

export { PaymentSchedule };
