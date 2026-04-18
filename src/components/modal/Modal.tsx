import { useEffect, type ReactNode } from "react";
import { Button } from "../button/Button";
import { classNames } from "../../utils/classNames";
import "./modal.css";

export interface ModalProps {
  open: boolean;
  title?: ReactNode;
  children?: ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  footer?: ReactNode;
  width?: number | string;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
}

export function Modal({
  open,
  title,
  children,
  onCancel,
  onOk,
  okText = "OK",
  cancelText = "Cancel",
  footer,
  width = 520,
  maskClosable = true,
  destroyOnClose = false,
}: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCancel?.();
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onCancel]);

  if (!open && destroyOnClose) {
    return null;
  }

  return (
    <div className={classNames("nd-modal-root", !open && "nd-modal-root--hidden")} aria-hidden={!open}>
      <div
        className="nd-modal-root__mask"
        onClick={() => {
          if (maskClosable) {
            onCancel?.();
          }
        }}
      />

      <section
        role="dialog"
        aria-modal="true"
        className="nd-modal"
        style={{ width }}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="nd-modal__header">
          <div className="nd-modal__title">{title}</div>
          <button type="button" className="nd-modal__close" aria-label="Close" onClick={onCancel}>
            ×
          </button>
        </header>

        <div className="nd-modal__body">{children}</div>

        <footer className="nd-modal__footer">
          {footer ?? (
            <>
              <Button onClick={onCancel}>{cancelText}</Button>
              <Button variant="primary" onClick={onOk}>
                {okText}
              </Button>
            </>
          )}
        </footer>
      </section>
    </div>
  );
}
