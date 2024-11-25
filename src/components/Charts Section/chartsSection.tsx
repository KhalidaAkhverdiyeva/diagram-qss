const ScrollableComponent = () => {
  const countries = [
    { name: "United States", flag: "https://flagcdn.com/us.svg", progress: 90 },
    { name: "China", flag: "https://flagcdn.com/cn.svg", progress: 80 },
    { name: "Japan", flag: "https://flagcdn.com/jp.svg", progress: 70 },
    { name: "Germany", flag: "https://flagcdn.com/de.svg", progress: 60 },
    { name: "India", flag: "https://flagcdn.com/in.svg", progress: 50 },
    {
      name: "United Kingdom",
      flag: "https://flagcdn.com/gb.svg",
      progress: 40,
    },
    { name: "France", flag: "https://flagcdn.com/fr.svg", progress: 30 },
    { name: "Italy", flag: "https://flagcdn.com/it.svg", progress: 20 },
    { name: "Brazil", flag: "https://flagcdn.com/br.svg", progress: 10 },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg", progress: 5 },
  ];

  return (
    <div className="shadow-custom rounded-md w-[50%]">
      <h2 className="text-[14px] h-[45px] flex items-center bg-[#0D1F3D] p-[5px] rounded-t-[6px] text-[#A7B4CA]">
        Gross Domestic Product billions of U.S. dollars in 2019 year
      </h2>
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
    </div>
  );
};

export default ScrollableComponent;
