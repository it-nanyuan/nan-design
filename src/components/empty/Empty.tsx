import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import "./empty.css";

export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  extra?: ReactNode;
}

export function Empty({
  className,
  title = "暂无内容",
  description = "这里还没有数据，可以先创建一条内容或调整筛选条件。",
  extra,
  ...rest
}: EmptyProps) {
  return (
    <div className={classNames("nd-empty", className)} {...rest}>
      <div className="nd-empty__image" aria-hidden="true" />
      <strong className="nd-empty__title">{title}</strong>
      <p className="nd-empty__description">{description}</p>
      {extra ? <div className="nd-empty__extra">{extra}</div> : null}
    </div>
  );
}
