"use client";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

const NavSearch = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => setQuery("");

  return (
    <div
      className={`
        w-full lg:w-[350px] lg:shrink-0
        flex items-center gap-3
        bg-ds-card
        border rounded-full
        px-4 py-2
        transition-[border-color,box-shadow,background-color] duration-200
        ${
          isFocused
            ? "border-teal-500 shadow-md shadow-teal-500/10 bg-ds-background"
            : "border-ds-border hover:border-ds-ring"
        }
      `}
    >
      {/* Search Icon — pulses teal when focused */}
      <Search
        size={16}
        className={`
          flex-shrink-0 transition-colors duration-200
          ${isFocused ? "text-teal-500" : "text-ds-muted-foreground"}
        `}
      />

      {/* Text Input */}
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search RFQs, Suppliers, Products..."
        className="
          flex-1 bg-transparent border-0 outline-none
          text-sm text-ds-text
          placeholder:text-ds-muted-foreground
          focus-visible:ring-0 focus-visible:ring-offset-0
          h-auto p-0
        "
      />

      {/* Clear Button — only shows when there is text */}
      {query.length > 0 && (
        <button
          onClick={handleClear}
          aria-label="Clear search"
          className="
            flex-shrink-0 p-0.5 rounded-full
            text-ds-muted-foreground
            hover:text-ds-text hover:bg-ds-border
            transition-colors duration-150
          "
        >
          <X size={13} />
        </button>
      )}

      {/* Keyboard shortcut hint — space reserved on lg to prevent width jump on focus */}
      {!query && (
        <span
          aria-hidden={isFocused}
          className={`
            hidden lg:flex items-center gap-1
            flex-shrink-0 text-[10px] font-medium
            text-ds-muted-foreground
            bg-ds-border/60 rounded px-1.5 py-0.5
            ${isFocused ? "invisible" : ""}
          `}
        >
          <kbd>⌘</kbd>
          <kbd>K</kbd>
        </span>
      )}
    </div>
  );
};

export default NavSearch;
