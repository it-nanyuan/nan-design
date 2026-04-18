import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./input.css";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  status?: "error" | "warning";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, prefix, suffix, status, disabled, ...rest },
  ref,
) {
  return (
    <label
      className={classNames(
        "nd-input",
        !!prefix && "nd-input--with-prefix",
        !!suffix && "nd-input--with-suffix",
        status && `nd-input--${status}`,
        disabled && "nd-input--disabled",
        className,
      )}
    >
      {prefix ? <span className="nd-input__affix">{prefix}</span> : null}
      <input ref={ref} disabled={disabled} {...rest} />
      {suffix ? <span className="nd-input__affix">{suffix}</span> : null}
    </label>
  );
});
