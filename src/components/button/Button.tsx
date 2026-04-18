import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./button.css";

export type ButtonVariant = "primary" | "default" | "dashed" | "text" | "link";
export type ButtonSize = "small" | "middle" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  danger?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}

export function Button({
  children,
  className,
  variant = "default",
  size = "middle",
  block = false,
  danger = false,
  loading = false,
  icon,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "nd-btn",
        `nd-btn--${variant}`,
        `nd-btn--${size}`,
        block && "nd-btn--block",
        danger && "nd-btn--danger",
        loading && "nd-btn--loading",
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <span className="nd-btn__spinner" aria-hidden="true" /> : icon ? <span className="nd-btn__icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}
