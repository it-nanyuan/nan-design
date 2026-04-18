import {
  startTransition,
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
} from "react";
import { classNames } from "../../utils/classNames";
import "./select.css";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  showSearch?: boolean;
  allowClear?: boolean;
  onChange?: (value: string, option: SelectOption) => void;
}

export function Select({
  className,
  options,
  value,
  defaultValue,
  placeholder = "Please select",
  disabled = false,
  showSearch = false,
  allowClear = false,
  onChange,
  ...rest
}: SelectProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;

  const selectedOption = useMemo(
    () => options.find((option) => option.value === currentValue),
    [currentValue, options],
  );

  const filteredOptions = useMemo(() => {
    if (!showSearch || !deferredSearchText.trim()) {
      return options;
    }

    const keyword = deferredSearchText.trim().toLowerCase();
    return options.filter((option) => {
      return (
        option.label.toLowerCase().includes(keyword) ||
        option.value.toLowerCase().includes(keyword) ||
        option.description?.toLowerCase().includes(keyword)
      );
    });
  }, [deferredSearchText, options, showSearch]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function handleSelect(option: SelectOption) {
    if (option.disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(option.value);
    }

    onChange?.(option.value, option);
    setOpen(false);
    setSearchText("");
  }

  function handleToggle() {
    if (disabled) {
      return;
    }

    setOpen((current) => !current);
  }

  function handleClear() {
    if (disabled) {
      return;
    }

    if (value === undefined) {
      setInternalValue(undefined);
    }

    setOpen(false);
    setSearchText("");
  }

  return (
    <div
      ref={rootRef}
      className={classNames("nd-select", disabled && "nd-select--disabled", open && "nd-select--open", className)}
      {...rest}
    >
      <button
        type="button"
        className="nd-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        disabled={disabled}
        onClick={handleToggle}
      >
        <span className={classNames("nd-select__value", !selectedOption && "nd-select__value--placeholder")}>
          {selectedOption?.label ?? placeholder}
        </span>
        <span className="nd-select__actions">
          {allowClear && selectedOption ? (
            <span
              className="nd-select__clear"
              role="button"
              tabIndex={0}
              onClick={(event) => {
                event.stopPropagation();
                handleClear();
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleClear();
                }
              }}
            >
              ×
            </span>
          ) : null}
          <span className="nd-select__arrow" aria-hidden="true">
            ▾
          </span>
        </span>
      </button>

      {open ? (
        <div className="nd-select__dropdown">
          {showSearch ? (
            <div className="nd-select__search">
              <input
                aria-label="Search options"
                value={searchText}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  startTransition(() => setSearchText(nextValue));
                }}
                placeholder="Search..."
              />
            </div>
          ) : null}

          <div id={listId} role="listbox" className="nd-select__list">
            {filteredOptions.length ? (
              filteredOptions.map((option) => {
                const isSelected = option.value === currentValue;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    disabled={option.disabled}
                    className={classNames(
                      "nd-select__option",
                      isSelected && "nd-select__option--selected",
                      option.disabled && "nd-select__option--disabled",
                    )}
                    onClick={() => handleSelect(option)}
                  >
                    <span>{option.label}</span>
                    {option.description ? <small>{option.description}</small> : null}
                  </button>
                );
              })
            ) : (
              <div className="nd-select__empty">No options</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
