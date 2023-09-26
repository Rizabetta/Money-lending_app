import { useEffect, useState } from "react";
import { api_loan } from "../../../api/loan";
import { StepTitle, Table } from "../../UI";
import { TableRow } from "../../UI/Table/Table";
import "./PaymentScheduleTable.scss";

export type TTableRows = {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}[];

type TTableProps = {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
  setMessageActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function PaymentScheduleTable({
  setModalActive,
  setChecked,
  isChecked,
  setMessageActive,
}: TTableProps) {
  const handleClick = () => setChecked(!isChecked);
  const handleSendClick = async () => {
    setMessageActive((await api_loan.createDocuments()).ok);
  };

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
    { id: 1, title: "NUMBER", columnName: "number" as keyof TableRow },
    { id: 2, title: "DATE", columnName: "date" as keyof TableRow },
    {
      id: 3,
      title: "TOTAL PAYMENT",
      columnName: "totalPayment" as keyof TableRow,
    },
    {
      id: 4,
      title: "INTEREST PAYMENT",
      columnName: "interestPayment" as keyof TableRow,
    },
    {
      id: 5,
      title: "DEBT PAYMENT",
      columnName: "debtPayment" as keyof TableRow,
    },
    {
      id: 6,
      title: "REMAINING DEBT",
      columnName: "remainingDebt" as keyof TableRow,
    },
  ];

  return (
    <div className="paymentSchedule">
      <StepTitle titleProps={titleProps} />
      <Table rows={tableRow} columns={tableColumns} />
      <div className="paymentSchedule_footer">
        <button
          className="denyButton"
          onClick={() => {
            setModalActive(true);
            localStorage.clear();
          }}
        >
          Deny
        </button>
        <div className="paymentSchedule__agreement">
          <div className="paymentSchedule__agreement-input">
            <input
              className="checkbox__input"
              type="checkbox"
              onClick={handleClick}
              id="approval"
              name="approval"
              defaultChecked={isChecked}
            />
            <label className="checkbox__label" htmlFor="approval">
              I agree with the payment schedule
            </label>
          </div>

          <button
            disabled={!isChecked}
            className={isChecked ? "defaultButton" : "disabledButton"}
            onClick={handleSendClick}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export { PaymentScheduleTable };
