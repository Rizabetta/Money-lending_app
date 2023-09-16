import { Table } from "../../UI";
import "./PaymentSchedule.scss";

function PaymentSchedule({ setModalActive, setChecked, isChecked }: any) {
  const handleClick = () => setChecked(!isChecked);
  const step = 3;
  return (
    <>
      <div className="paymentSchedule_header">
        <h2>Payment Schedule</h2>
        <p>Step {step} of 5</p>
      </div>
      <Table />
      <div className="paymentSchedule_footer">
        <button className="denyButton" onClick={() => setModalActive(true)}>
          Deny
        </button>
        <div>
          <input
            type="checkbox"
            onClick={handleClick}
            id="approval"
            name="approval"
            checked={isChecked}
          />
          <label htmlFor="approval">I agree with the payment schedule</label>
          <button
            disabled={!isChecked}
            className={isChecked ? "defaultButton" : "disabledButton"}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export { PaymentSchedule };
