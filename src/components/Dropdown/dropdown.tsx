interface DropdownProps {
  filteredItems: string[];
  handleSelectItem: (item: string) => void;
  selectedItem: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({
  filteredItems,
  handleSelectItem,
  selectedItem,
}) => {
  return (
    <ul className="absolute z-10 mt-2 w-full bg-[#293F64]  rounded-md shadow-lg max-h-[220px] overflow-y-auto transition-transform duration-200 ease-in-out">
      {filteredItems.length > 0 ? (
        filteredItems.map((item: string, index: number) => (
          <li
            key={index}
            onClick={() => handleSelectItem(item)}
            className={`px-4 py-2 text-sm cursor-pointer
          ${
            selectedItem === item
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-[#A7B4CA] font-[500] hover:bg-blue-500 hover:text-white"
          }`}
          >
            {item}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-sm text-gray-500">No options found</li>
      )}
    </ul>
  );
};

export default Dropdown;
