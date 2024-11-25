import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// Define the data type
interface DataPoint {
  year: number;
  value: number;
}

const LineChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data: DataPoint[] = [
      { year: 2000, value: 10 },
      { year: 2005, value: 15 },
      { year: 2010, value: 20 },
      { year: 2015, value: 25 },
      { year: 2020, value: 30 },
    ];

    // Dimensions and margins
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 80, bottom: 30, left: 50 };

    // Clear any previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year) as [number, number])
      .range([0, width - margin.left - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .range([height - margin.top - margin.bottom, 0]);

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format("d")));

    svg.append("g").call(d3.axisLeft(y));

    // Line Generator
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.year))
      .y((d) => y(d.value));

    // Draw line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add labels to the end of the lines
    svg
      .selectAll(".label")
      .data(data)
      .join("text")
      .attr("x", (d) => x(d.year) + 5)
      .attr("y", (d) => y(d.value))
      .attr("dy", "0.35em")
      .style("font-size", "12px")
      .style("fill", "black")
      .text((d) => d.value);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg ref={svgRef} className="bg-white"></svg>
    </div>
  );
};

export default LineChart;
