const ScrollableComponent = () => {
  const countries = [
    { name: "United States", flag: "🇺🇸", progress: 90 },
    { name: "China", flag: "🇨🇳", progress: 80 },
    { name: "Japan", flag: "🇯🇵", progress: 70 },
    { name: "Germany", flag: "🇩🇪", progress: 60 },
    { name: "India", flag: "🇮🇳", progress: 50 },
    { name: "United Kingdom", flag: "🇬🇧", progress: 40 },
    { name: "France", flag: "🇫🇷", progress: 30 },
    { name: "Italy", flag: "🇮🇹", progress: 20 },
    { name: "Brazil", flag: "🇧🇷", progress: 10 },
    { name: "Canada", flag: "🇨🇦", progress: 5 },
  ];

  return (
    <div className="shadow-lg rounded-md w-[50%] max-h-[400px] overflow-y-auto">
      <h2 className="text-2xl bg-[#0D1F3D] p-[5px] rounded-t-[6px] text-[#A7B4CA]">
        Gross Domestic Product billions of U.S. dollars in 2019 year
      </h2>
      <table className="w-full text-left bg-[#051124] text-[#A7B4CA]">
        <thead>
          <tr>
            <th className="p-3">Rank</th>
            <th className="p-3">Country</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index} className="even:bg-[#0D1F3D]">
              <td className="p-3 text-end">{index + 1}</td>
              <td className="p-3 flex items-center">
                <span className="mr-2">{country.flag}</span>
                {country.name}
              </td>
              <td className="p-3">
                <div className="w-full bg-[#293F64] h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-full rounded-full"
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

export default ScrollableComponent;
