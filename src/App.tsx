import FilterDropdown from "./components/Filters/filters";

const App = () => {
  const dynamicOptions1 = ["Apple", "Banana", "Orange", "Grapes"];
  const dynamicOptions2 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <div className="bg-[#051124] min-h-screen">
      <div className="flex gap-[20px]">
        <div>
          <p className="text-[#A7B4CA] font-[500]">Sector</p>
          <FilterDropdown items={dynamicOptions1} />
        </div>

        <FilterDropdown items={dynamicOptions2} />
      </div>
    </div>
  );
};

export default App;
