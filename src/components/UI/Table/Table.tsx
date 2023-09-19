import dropUp from "../../../assets/svg/Arrow_drop_up.svg";
import { TTableRows } from "../../LoanStepPages/PaymentScheduleTable/PaymentScheduleTable";

export type TTable = {
  rows: TTableRows | null;
  columns: string[];
};

function Table({ rows, columns }: TTable) {
  return (
    <div className="table__container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <div className="table__title-div">
                  {column}
                  <img src={dropUp} alt="dropUp" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => (
            <tr key={row.number}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
