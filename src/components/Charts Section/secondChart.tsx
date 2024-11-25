import { countries } from "../../static/countriesFlag";
import { dynamicOptions5 } from "../../static/dynamicOptions5";
import FilterDropdown from "../Filters/filters";

const SecondChart = () => {
  return (
    <div className="p-[10px] max-h-[250px] overflow-y-auto">
      <div className="flex gap-[20px] mb-[10px]">
        <FilterDropdown items={dynamicOptions5} />
        <FilterDropdown items={dynamicOptions5} />
      </div>
      <table className="w-full text-left bg-[#051124] text-white">
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td className="px-3 text-[14px] flex justify-end items-center text-end">
                {country.name}
                <img
                  src={country.flag}
                  alt={country.flag}
                  className="w-[18px] h-[13px] ml-[10px]"
                />
              </td>
              <td className="px-[12px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  className="inline-block text-[#23D30F]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"></path>
                </svg>
                <span className="text-[#23D30F] text-[14px] pl-[5px] ">18</span>
              </td>
              <td className="text-[#23D30F] text-[14px] px-[12px]">
                Positions up
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecondChart;
