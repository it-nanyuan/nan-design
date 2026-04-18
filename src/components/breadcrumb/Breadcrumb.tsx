import type { HTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";
import "./breadcrumb.css";

export interface BreadcrumbItem {
  key: string;
  label: string;
  onClick?: () => void;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: string;
}

export function Breadcrumb({ className, items, separator = "/", ...rest }: BreadcrumbProps) {
  return (
    <nav className={classNames("nd-breadcrumb", className)} aria-label="Breadcrumb" {...rest}>
      {items.map((item, index) => (
        <span key={item.key} className="nd-breadcrumb__item">
          {item.onClick ? (
            <button type="button" className="nd-breadcrumb__button" onClick={item.onClick}>
              {item.label}
            </button>
          ) : (
            <span className="nd-breadcrumb__current">{item.label}</span>
          )}
          {index < items.length - 1 ? <span className="nd-breadcrumb__separator">{separator}</span> : null}
        </span>
      ))}
    </nav>
  );
}
