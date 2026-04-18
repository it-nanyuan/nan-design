import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Children } from "react";
import { classNames } from "../../utils/classNames";
import "./space.css";

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  size?: number | "small" | "middle" | "large";
  align?: CSSProperties["alignItems"];
  wrap?: boolean;
  split?: ReactNode;
}

const sizeMap = {
  small: 8,
  middle: 16,
  large: 24,
} as const;

export function Space({
  className,
  direction = "horizontal",
  size = "middle",
  align = "center",
  wrap = false,
  split,
  children,
  style,
  ...rest
}: SpaceProps) {
  const gap = typeof size === "number" ? size : sizeMap[size];
  const items = Children.toArray(children);

  return (
    <div
      className={classNames("nd-space", `nd-space--${direction}`, wrap && "nd-space--wrap", className)}
      style={{
        gap,
        alignItems: align,
        ...style,
      }}
      {...rest}
    >
      {items.map((child, index) => (
        <div className="nd-space__item" key={index}>
          {child}
          {split && index < items.length - 1 ? <span className="nd-space__split">{split}</span> : null}
        </div>
      ))}
    </div>
  );
}
