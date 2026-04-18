import type { HTMLAttributes } from "react";
import { Button } from "../button/Button";
import { classNames } from "../../utils/classNames";
import "./pagination.css";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  current: number;
  total: number;
  pageSize?: number;
  onChange?: (page: number) => void;
}

export function Pagination({ className, current, total, pageSize = 10, onChange, ...rest }: PaginationProps) {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1).slice(0, 5);

  return (
    <div className={classNames("nd-pagination", className)} {...rest}>
      <Button variant="default" size="small" disabled={current <= 1} onClick={() => onChange?.(current - 1)}>
        上一页
      </Button>

      <div className="nd-pagination__pages">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={classNames("nd-pagination__page", page === current && "nd-pagination__page--active")}
            onClick={() => onChange?.(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <Button variant="default" size="small" disabled={current >= pageCount} onClick={() => onChange?.(current + 1)}>
        下一页
      </Button>
    </div>
  );
}
