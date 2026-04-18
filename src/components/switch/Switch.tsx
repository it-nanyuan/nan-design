import type { ButtonHTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";
import "./switch.css";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Switch({ className, checked = false, disabled, onChange, ...rest }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={classNames("nd-switch", checked && "nd-switch--checked", disabled && "nd-switch--disabled", className)}
      onClick={() => onChange?.(!checked)}
      {...rest}
    >
      <span className="nd-switch__handle" />
    </button>
  );
}
