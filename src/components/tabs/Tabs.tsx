import { useId, useState } from "react";
import { classNames } from "../../utils/classNames";
import "./tabs.css";

export interface TabItem {
  key: string;
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

export function Tabs({ items, activeKey, defaultActiveKey, onChange }: TabsProps) {
  const id = useId();
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey ?? items[0]?.key);
  const currentKey = activeKey ?? internalActiveKey;
  const activeItem = items.find((item) => item.key === currentKey) ?? items[0];

  function handleChange(nextKey: string) {
    if (activeKey === undefined) {
      setInternalActiveKey(nextKey);
    }
    onChange?.(nextKey);
  }

  return (
    <div className="nd-tabs">
      <div className="nd-tabs__nav" role="tablist" aria-label="Tabs">
        {items.map((item) => {
          const isActive = item.key === activeItem?.key;

          return (
            <button
              key={item.key}
              id={`${id}-${item.key}`}
              type="button"
              role="tab"
              className={classNames("nd-tabs__tab", isActive && "nd-tabs__tab--active")}
              aria-selected={isActive}
              aria-controls={`${id}-${item.key}-panel`}
              disabled={item.disabled}
              onClick={() => handleChange(item.key)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem ? (
        <div
          id={`${id}-${activeItem.key}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-${activeItem.key}`}
          className="nd-tabs__panel"
        >
          {activeItem.children}
        </div>
      ) : null}
    </div>
  );
}
