import { useState } from "react";
import { nanoid } from "nanoid";
import dropUp from "../../../assets/svg/Arrow_drop_up.svg";
import dropDown from "../../../assets/svg/dropDown.svg";
import { TTableRows } from "../../LoanStepPages/PaymentScheduleTable/PaymentScheduleTable";

export type TTable = {
  rows: TTableRows | null;
  columns: {
    id: number;
    title: string;
  }[];
};

function Table({ rows, columns }: TTable) {
  const [sortDirection, setSortDirection] = useState(
    Array.from({ length: columns.length }, () => "asc")
  );
  console.log(JSON.stringify(rows));

  const handleSort = (index: number) => {
    setSortDirection((prevSortDirection) => {
      const newSortDirection = { ...prevSortDirection };
      newSortDirection[index] =
        prevSortDirection[index] === "asc" ? "desc" : "asc";
      return newSortDirection;
    });
  };

  return (
    <div className="table__container">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>
                <div
                  className="table__title-div"
                  onClick={() => handleSort(column.id)}
                >
                  {column.title}
                  <img
                    className={
                      sortDirection[column.id] === "asc" ? "asc" : "desc"
                    }
                    src={sortDirection[column.id] === "asc" ? dropUp : dropDown}
                    alt="dropUp"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => (
            <tr key={nanoid()}>
              {Object.values(row).map((value) => (
                <td key={nanoid()}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
