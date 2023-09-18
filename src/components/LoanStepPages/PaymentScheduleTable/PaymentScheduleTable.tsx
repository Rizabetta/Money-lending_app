import { useEffect, useState } from "react";
import { api_loan } from "../../../api/loan";
import { StepTitle, Table } from "../../UI";
import "./PaymentScheduleTable.scss";

export type TTableRows = {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}[];

function PaymentScheduleTable({ setModalActive, setChecked, isChecked }: any) {
  const handleClick = () => setChecked(!isChecked);

  const titleProps = {
    title: "Payment Schedule",
    currentStep: 3,
    totalSteps: 5,
  };

  const [tableRow, setTableRow] = useState<TTableRows | null>(null);
  useEffect(() => {
    api_loan.getDevices().then((e) => {
      setTableRow(e);
    });
  }, []);

  const tableColumns = [
    "NUMBER",
    "DATE",
    "TOTAL PAYMENT",
    "INTEREST PAYMENT",
    "DEBT PAYMENT",
    "REMAINING DEBT",
  ];

  return (
    <div className="paymentSchedule">
      <StepTitle titleProps={titleProps} />
      <Table rows={tableRow} columns={tableColumns} />
      <div className="paymentSchedule_footer">
        <button className="denyButton" onClick={() => setModalActive(true)}>
          Deny
        </button>
        <div className="paymentSchedule__agreement">
          <input className="checkbox__input"
            type="checkbox"
            onClick={handleClick}
            id="approval"
            name="approval"
            defaultChecked={isChecked}
          />
          <label className="checkbox__label" htmlFor="approval">I agree with the payment schedule</label>
          <button
            disabled={!isChecked}
            className={isChecked ? "defaultButton" : "disabledButton"}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export { PaymentScheduleTable };
