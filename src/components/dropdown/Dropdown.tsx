import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./dropdown.css";

export interface DropdownItem {
  key: string;
  label: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  items: DropdownItem[];
}

export function Dropdown({ className, trigger, items, ...rest }: DropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={classNames("nd-dropdown", className)} {...rest}>
      <div className="nd-dropdown__trigger" onClick={() => setOpen((value) => !value)}>
        {trigger}
      </div>

      {open ? (
        <div className="nd-dropdown__menu" role="menu">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              className={classNames(
                "nd-dropdown__item",
                item.danger && "nd-dropdown__item--danger",
                item.disabled && "nd-dropdown__item--disabled",
              )}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
