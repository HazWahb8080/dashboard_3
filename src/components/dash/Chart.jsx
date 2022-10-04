import React from "react";
import Chart from "react-apexcharts";

function ChartX() {
  const options = {
    chart: {
      id: "apexchart-example",
       },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    colors: ['#286965', '#E0D4C4','#010201'],
    grid: {
        show: true,
        borderColor: '#E0D4C4',
        strokeDashArray: 10,
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className="items-center justify-center flex w-full">
      <Chart
        options={options}
        series={series}
        type="bar"
        className="w-[500px] py-4"
      />
    </div>
  );
}

export default ChartX;
