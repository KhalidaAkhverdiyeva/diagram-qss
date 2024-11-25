import ChartsSection from "./components/Charts Section/chartsSection";
import FilterDropdown from "./components/Filters/filters";
import DoubleRangeSlider from "./components/Range Bar/rangeBar";

const App = () => {
  const dynamicOptions1 = [
    "Army ",
    "Index",
    "Health",
    "Transportation",
    "Education",
    "Social",
    "Government",
    "Transportation",
    "Business",
    "Technology & Innovation",
    "Agriculture",
  ];
  const dynamicOptions2 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const dynamicOptions3 = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
  ];

  return (
    <div className="bg-[#051124] min-h-screen">
      <div className="flex items-center gap-[20px] pt-[50px] px-[30px]">
        <div className="w-[30%]">
          <p className="text-[#A7B4CA] font-[500] pb-[10px]">Sector</p>
          <FilterDropdown items={dynamicOptions1} />
        </div>
        <div className="w-[35%]">
          <p className="text-[#A7B4CA] font-[500] pb-[10px]">Subsector</p>
          <FilterDropdown items={dynamicOptions2} />
        </div>
        <div className="w-[40%]">
          <p className="text-[#A7B4CA] font-[500] pb-[10px]">Indicator</p>
          <FilterDropdown items={dynamicOptions2} />
        </div>
        <div className="w-[40%]">
          <p className="text-[#A7B4CA] font-[500] pb-[10px]">Country</p>
          <FilterDropdown items={dynamicOptions1} />
        </div>
        <div className="w-[10%]">
          <p className="text-[#A7B4CA] font-[500] pb-[10px]">Year</p>
          <FilterDropdown items={dynamicOptions3} />
        </div>
        <div className="w-[30%]">
          <DoubleRangeSlider />
        </div>
      </div>
      <div className="mt-[20px] px-[30px]">
        <ChartsSection />
      </div>
    </div>
  );
};

export default App;
