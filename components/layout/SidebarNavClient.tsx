"use client";

import { useEffect, useState } from "react";

interface Item {
  id: string;
  label: string;
}

// How far from the top of the viewport counts as "active"
const OFFSET = 120; // px — accounts for sticky navbar height

export default function SidebarNavClient({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const getActive = () => {
      // Find the last section that has started entering or passing the top area
      let current = items[0]?.id ?? "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET + 10) {
          current = id;
        }
      }

      // Special case: bottom-out detection
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom && items.length > 0) {
        current = items[items.length - 1].id;
      }

      setActive(current);
    };

    getActive(); // run once on mount
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <aside className="hidden lg:flex flex-col gap-0.5 sticky top-20 h-fit w-44 shrink-0 select-none">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/10 -z-10" />

      {items.map(({ id, label }) => {
        const isActive = active === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`
              flex items-center gap-3 text-left text-base py-2 cursor-pointer
              transition-all duration-200
              ${isActive
                ? "text-foreground font-semibold"
                : "text-foreground/50 hover:text-foreground/70"
              }
            `}
          >
            <span
              className="shrink-0 rounded-full transition-all duration-200"
              style={{
                width: isActive ? 13 : 8,
                height: isActive ? 13 : 8,
                marginLeft: isActive ? 0 : 3,
                backgroundColor: isActive ? "var(--accent)" : "currentColor",
                opacity: isActive ? 1 : 0.4,
              }}
            />
            {label}
          </button>
        );
      })}
    </aside>
  );
}