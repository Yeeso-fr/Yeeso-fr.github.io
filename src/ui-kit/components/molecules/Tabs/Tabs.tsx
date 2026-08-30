"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import "./Tabs.css";

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  ariaLabel: string;
};

export const Tabs = ({ items, ariaLabel }: TabsProps) => {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusTab = (index: number) => {
    const item = items[index];
    if (!item) return;
    tabRefs.current[item.id]?.focus();
    setActiveId(item.id);
  };

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab((index + 1) % items.length);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab((index - 1 + items.length) % items.length);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(items.length - 1);
        break;
    }
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label={ariaLabel} className="tabs__list">
        {items.map((item, index) => (
          <button
            key={item.id}
            id={`tab-${item.id}`}
            ref={(el) => {
              tabRefs.current[item.id] = el;
            }}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            aria-controls={`panel-${item.id}`}
            tabIndex={item.id === activeId ? 0 : -1}
            className="tabs__tab"
            onClick={() => setActiveId(item.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== activeId}
          className="tabs__panel"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};
