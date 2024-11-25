import FirstChart from "./firstChart";
import LineChart from "./lineChart";
import SecondChart from "./secondChart";

const ScrollableComponent = () => {
  return (
    <div className="flex gap-[20px]">
      <div className="shadow-custom rounded-md w-[50%] h-[300px]">
        <h2 className="text-[14px] h-[45px] flex items-center bg-[#0D1F3D] p-[5px] rounded-t-[6px] text-[#A7B4CA]">
          Gross Domestic Product billions of U.S. dollars in 2019 year
        </h2>
        <FirstChart />
      </div>
      <div className="shadow-custom rounded-md w-[40%] h-[300px]">
        <h2 className="text-[14px] h-[45px] flex items-center bg-[#0D1F3D] p-[5px] rounded-t-[6px] text-[#A7B4CA]">
          Difference in rank between years
        </h2>
        <SecondChart />
      </div>
      <div className="shadow-custom rounded-md w-[50%] h-[300px]">
        <h2 className="text-[14px] h-[45px] flex items-center bg-[#0D1F3D] p-[5px] rounded-t-[6px] text-[#A7B4CA]">
          Gross Domestic Product billions of U.S. dollars over years
        </h2>
        <LineChart />
      </div>
    </div>
  );
};

export default ScrollableComponent;
