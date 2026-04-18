import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./nav-menu.css";

export interface NavMenuItem {
  key: string;
  label: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
}

export interface NavMenuProps extends HTMLAttributes<HTMLElement> {
  items: NavMenuItem[];
  activeKey?: string;
}

export function NavMenu({ className, items, activeKey, ...rest }: NavMenuProps) {
  return (
    <nav className={classNames("nd-nav-menu", className)} {...rest}>
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={classNames("nd-nav-menu__item", activeKey === item.key && "nd-nav-menu__item--active")}
          onClick={item.onClick}
        >
          <span className="nd-nav-menu__label">{item.label}</span>
          {item.description ? <small className="nd-nav-menu__description">{item.description}</small> : null}
        </button>
      ))}
    </nav>
  );
}
