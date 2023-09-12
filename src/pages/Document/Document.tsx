import { useState } from "react";
import { FormWrapper, ModalWrapper, Table } from "../../components/UI";
import "../../components/UI/Button/Button.scss";
import { RouteNames } from "../../routers/routes";
import { Link } from "react-router-dom";
import { PaymentSchedule } from "../../components/DocumentPage";

function Document() {
  const [isChecked, setChecked] = useState(false);
  async function getDevices() {
    const settings = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:8080/admin/application`,
        settings
      );
      const data = await fetchResponse.json();
      // data.map((element:any)=>(console.log(element)
      // ))
      console.log(data);
    } catch (e) {
      return e;
    }
  }
  getDevices();

  const [modalActive, setModalActive] = useState(false);
  const [denylActive, setDenyActive] = useState(false);

  return (
    <main className="main">
      <FormWrapper>
        <PaymentSchedule
          setModalActive={setModalActive}
          setChecked={setChecked}
          isChecked={isChecked}
        />
      </FormWrapper>
      {modalActive && (
        <ModalWrapper denylActive={denylActive} setActive={setModalActive}>
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

export { Document };
