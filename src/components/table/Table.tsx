import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./table.css";

export interface TableColumn<T> {
  key: string;
  title: ReactNode;
  dataIndex?: keyof T;
  width?: number | string;
  align?: "left" | "center" | "right";
  render?: (value: unknown, record: T, index: number) => ReactNode;
}

export interface TableProps<T> {
  columns: Array<TableColumn<T>>;
  dataSource: T[];
  rowKey: keyof T | ((record: T) => string);
  size?: "small" | "middle" | "large";
  emptyText?: ReactNode;
}

export function Table<T extends Record<string, unknown>>({
  columns,
  dataSource,
  rowKey,
  size = "middle",
  emptyText = "No data",
}: TableProps<T>) {
  const rowPaddingClass = `nd-table--${size}`;

  function resolveKey(record: T) {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }

    return String(record[rowKey]);
  }

  return (
    <div className={classNames("nd-table", rowPaddingClass)}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  width: column.width,
                  textAlign: column.align ?? "left",
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataSource.length ? (
            dataSource.map((record, rowIndex) => (
              <tr key={resolveKey(record)}>
                {columns.map((column) => {
                  const rawValue = column.dataIndex ? record[column.dataIndex] : undefined;
                  return (
                    <td
                      key={column.key}
                      style={{
                        textAlign: column.align ?? "left",
                      }}
                    >
                      {column.render ? column.render(rawValue, record, rowIndex) : (rawValue as ReactNode)}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td className="nd-table__empty" colSpan={columns.length}>
                {emptyText}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
