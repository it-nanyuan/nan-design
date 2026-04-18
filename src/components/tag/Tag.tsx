import type { HTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";
import "./tag.css";

export type TagColor = "default" | "blue" | "green" | "gold" | "red" | "purple";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  color?: TagColor;
  bordered?: boolean;
}

export function Tag({ className, color = "default", bordered = true, children, ...rest }: TagProps) {
  return (
    <span
      className={classNames("nd-tag", `nd-tag--${color}`, !bordered && "nd-tag--borderless", className)}
      {...rest}
    >
      {children}
    </span>
  );
}
