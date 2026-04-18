import { forwardRef, type ReactNode, type TextareaHTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";
import "./textarea.css";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "prefix"> {
  prefix?: ReactNode;
  status?: "error" | "warning";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, prefix, status, disabled, rows = 4, ...rest },
  ref,
) {
  return (
    <label
      className={classNames(
        "nd-textarea",
        !!prefix && "nd-textarea--with-prefix",
        status && `nd-textarea--${status}`,
        disabled && "nd-textarea--disabled",
        className,
      )}
    >
      {prefix ? <span className="nd-textarea__affix">{prefix}</span> : null}
      <textarea ref={ref} disabled={disabled} rows={rows} {...rest} />
    </label>
  );
});
