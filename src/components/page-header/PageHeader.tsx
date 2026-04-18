import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./page-header.css";

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  subtitle?: ReactNode;
  extra?: ReactNode;
}

export function PageHeader({ className, title, subtitle, extra, ...rest }: PageHeaderProps) {
  return (
    <div className={classNames("nd-page-header", className)} {...rest}>
      <div className="nd-page-header__content">
        <h1 className="nd-page-header__title">{title}</h1>
        {subtitle ? <p className="nd-page-header__subtitle">{subtitle}</p> : null}
      </div>
      {extra ? <div className="nd-page-header__extra">{extra}</div> : null}
    </div>
  );
}
