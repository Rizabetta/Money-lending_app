import "./Table.scss";
import dropUp from "../../../assets/svg/Arrow_drop_up.svg";

const tableColumns = [
  "NUMBER",
  "DATE",
  "TOTAL PAYMENT",
  "INTEREST PAYMENT",
  "DEBT PAYMENT",
  "REMAINING DEBT",
];

function Table() {
  return (
    <div className="table__container">
      <ul className="table__container-table">
        {tableColumns.map((element, key) => (
          <div key={key} className="table__container-row">
            <div className="table__container-drop cursor-pointer">
              <li>{element}</li>
              <img src={dropUp} alt="drop" />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export { Table };
