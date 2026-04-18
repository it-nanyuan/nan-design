import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./statistic.css";

export interface StatisticProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  value: ReactNode;
  suffix?: ReactNode;
  trend?: ReactNode;
}

export function Statistic({ className, title, value, suffix, trend, ...rest }: StatisticProps) {
  return (
    <div className={classNames("nd-statistic", className)} {...rest}>
      <span className="nd-statistic__title">{title}</span>
      <div className="nd-statistic__value-row">
        <strong className="nd-statistic__value">{value}</strong>
        {suffix ? <span className="nd-statistic__suffix">{suffix}</span> : null}
      </div>
      {trend ? <span className="nd-statistic__trend">{trend}</span> : null}
    </div>
  );
}
