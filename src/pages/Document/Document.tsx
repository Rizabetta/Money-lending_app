import { useState } from "react";
import { FormWrapper, ModalWrapper, Table } from "../../components/UI";
import "../../components/UI/Button/Button.scss";
import { RouteNames } from "../../routers/routes";
import { Link } from "react-router-dom";

function Document() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
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
        <div>
          <h2>Payment Schedule</h2>
          <p>Step 3 of 5</p>
        </div>
        <Table />
        <div>
          <button className="denyButton" onClick={() => setModalActive(true)}>
            Deny
          </button>
          <div>
            <input
              type="checkbox"
              onClick={handleClick}
              id="approval"
              name="approval"
              checked={checked}
            />
            <label htmlFor="approval">I agree with the payment schedule</label>
            <button
              disabled={!checked}
              className={checked ? "defaultButton" : "disabledButton"}
            >
              Send
            </button>
          </div>
        </div>
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
