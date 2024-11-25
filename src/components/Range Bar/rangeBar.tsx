import { useState } from "react";
import { Range } from "react-range";

const DoubleRangeSlider = () => {
  const [values, setValues] = useState([0, 10]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  return (
    <div className="flex justify-end items-center mt-[30px]">
      <output className="p-[10px] flex  items-center mr-[20px] w-[56px] h-[38px] border-solid border-[1px] border-[#A7B4CA] rounded-[8px] text-[#A7B4CA]">
        {values[0]}
      </output>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "100%",
              background: "#293F64",
              borderRadius: "10px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "12px",
              backgroundColor: "#D9D9D9",
              borderRadius: "10px",
            }}
          />
        )}
      />
      <output className="p-[10px] flex  items-center ml-[20px] w-[56px] h-[38px] border-solid border-[1px] border-[#A7B4CA] rounded-[8px] text-[#A7B4CA]">
        {values[1]}
      </output>
    </div>
  );
};

export default DoubleRangeSlider;
