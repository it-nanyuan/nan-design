import type { HTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";
import "./badge.css";

export type BadgeStatus = "default" | "processing" | "success" | "warning" | "error";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: BadgeStatus;
  dot?: boolean;
}

export function Badge({ className, status = "default", dot = false, children, ...rest }: BadgeProps) {
  return (
    <span className={classNames("nd-badge", `nd-badge--${status}`, dot && "nd-badge--dot", className)} {...rest}>
      <span className="nd-badge__indicator" aria-hidden="true" />
      {children ? <span>{children}</span> : null}
    </span>
  );
}
