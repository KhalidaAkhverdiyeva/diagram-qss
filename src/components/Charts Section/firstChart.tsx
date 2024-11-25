import { countries } from "../../static/countriesFlag";

const FirstChart = () => {
  return (
    <div className="max-h-[250px] overflow-y-auto">
      <table className="w-full text-left bg-[#051124] text-white">
        <thead>
          <tr>
            <th className="p-3 w-[10%] text-end">Rank</th>
            <th className="p-3 w-[30%] text-end">Country</th>
            <th className="p-3 w-[35%]"></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td className="px-3 w-[10%] text-end">{index + 1}</td>
              <td className="px-3 flex justify-end items-center text-end">
                {country.name}
                <img
                  src={country.flag}
                  alt={country.flag}
                  className="w-[18px] h-[13px] ml-[10px]"
                />
              </td>
              <td className="px-3 w-[35%]">
                <div className="w-full max-w-[160px] bg-[#253041] h-[10px] rounded-full mx-auto">
                  <div
                    className="bg-[#265D7E] h-full rounded-full"
                    style={{ width: `${country.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstChart;
