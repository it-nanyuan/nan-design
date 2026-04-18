import { useEffect, type ReactNode } from "react";
import { Button } from "../button/Button";
import { classNames } from "../../utils/classNames";
import "./drawer.css";

export interface DrawerProps {
  open: boolean;
  title?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
  extra?: ReactNode;
  width?: number | string;
  placement?: "left" | "right";
  maskClosable?: boolean;
}

export function Drawer({
  open,
  title,
  children,
  onClose,
  extra,
  width = 420,
  placement = "right",
  maskClosable = true,
}: DrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className={classNames("nd-drawer-root", !open && "nd-drawer-root--hidden")} aria-hidden={!open}>
      <div
        className="nd-drawer-root__mask"
        onClick={() => {
          if (maskClosable) {
            onClose?.();
          }
        }}
      />

      <aside
        className={classNames("nd-drawer", `nd-drawer--${placement}`)}
        style={{ width }}
        role="dialog"
        aria-modal="true"
      >
        <header className="nd-drawer__header">
          <div className="nd-drawer__title">{title}</div>
          <div className="nd-drawer__extra">
            {extra}
            <Button variant="text" onClick={onClose}>
              关闭
            </Button>
          </div>
        </header>

        <div className="nd-drawer__body">{children}</div>
      </aside>
    </div>
  );
}
