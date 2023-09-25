import { useState } from "react";
import { nanoid } from "nanoid";
import dropUp from "../../../assets/svg/Arrow_drop_up.svg";
import dropDown from "../../../assets/svg/dropDown.svg";

export interface TableRow {
  [key: string]: number | string;
}

export type TTableRows = TableRow[];

export type TTable = {
  rows: TTableRows | null;
  columns: {
    id: number;
    title: string;
    columnName: keyof TableRow;
  }[];
};

function Table({ rows, columns }: TTable) {
  const [sortDirection, setSortDirection] = useState(
    Array.from({ length: columns.length }, () => "asc")
  );
  let sortedArray = rows;

  const handleSort = (id: number, name: keyof TableRow) => {
    setSortDirection((prevSortDirection) => {
      const newSortDirection = [...prevSortDirection];
      newSortDirection[id] = prevSortDirection[id] === "asc" ? "desc" : "asc";
      return newSortDirection;
    });

    sortedArray =
      rows?.sort((a, b) => {
        const valueA = a[name];
        const valueB = b[name];
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      }) || null;
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
                  onClick={() => handleSort(column.id, column.columnName)}
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
          {sortedArray?.map((row) => (
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
