import ChartsSection from "./components/Charts Section/chartsSection";
import FilterDropdown from "./components/Filters/filters";
import DoubleRangeSlider from "./components/Range Bar/rangeBar";
import {
  dynamicOptions1,
  dynamicOptions2,
  dynamicOptions3,
} from "./static/dynamicOptions5";

const App = () => {
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
