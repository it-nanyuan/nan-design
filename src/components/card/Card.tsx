import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./card.css";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  extra?: ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
}

export function Card({
  className,
  title,
  extra,
  bordered = true,
  hoverable = false,
  children,
  ...rest
}: CardProps) {
  return (
    <section
      className={classNames(
        "nd-card",
        !bordered && "nd-card--borderless",
        hoverable && "nd-card--hoverable",
        className,
      )}
      {...rest}
    >
      {(title || extra) && (
        <header className="nd-card__header">
          <div className="nd-card__title">{title}</div>
          <div className="nd-card__extra">{extra}</div>
        </header>
      )}
      <div className="nd-card__body">{children}</div>
    </section>
  );
}
