import type { HTMLAttributes, PropsWithChildren } from "react";
import { classNames } from "../../utils/classNames";
import "./typography.css";

export interface TypographyTextProps extends HTMLAttributes<HTMLSpanElement> {
  type?: "default" | "secondary" | "success" | "warning" | "danger";
}

export interface TypographyParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: TypographyTextProps["type"];
}

export interface TypographyTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}

function textTone(type: TypographyTextProps["type"]) {
  return type ? `nd-typography--${type}` : undefined;
}

function Text({ className, type = "default", children, ...rest }: PropsWithChildren<TypographyTextProps>) {
  return (
    <span className={classNames("nd-typography", textTone(type), className)} {...rest}>
      {children}
    </span>
  );
}

function Paragraph({
  className,
  type = "default",
  children,
  ...rest
}: PropsWithChildren<TypographyParagraphProps>) {
  return (
    <p className={classNames("nd-paragraph", textTone(type), className)} {...rest}>
      {children}
    </p>
  );
}

function Title({ className, level = 1, children, ...rest }: PropsWithChildren<TypographyTitleProps>) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={classNames("nd-title", `nd-title--${level}`, className)} {...rest}>
      {children}
    </Tag>
  );
}

export const Typography = {
  Text,
  Paragraph,
  Title,
};
