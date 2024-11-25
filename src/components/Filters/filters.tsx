import React, { useState, useRef, useEffect } from "react";
import Dropdown from "../Dropdown/dropdown";

interface FilterDropdownProps {
  items: string[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [items]);

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setFilterText("");
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredItems = filterText
    ? items.filter((item) =>
        item.toLowerCase().includes(filterText.toLowerCase())
      )
    : items;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder={selectedItem || "Search or select an option..."}
          className="w-full border bg-[#293F64] border-[#4A628A] text-[#A7B4CA] font-[500] rounded-md placeholder:text-[#A7B4CA] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <Dropdown
          filteredItems={filteredItems}
          handleSelectItem={handleSelectItem}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export default FilterDropdown;
