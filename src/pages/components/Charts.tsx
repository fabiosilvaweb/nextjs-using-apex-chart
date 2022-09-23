import React from 'react';
import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

interface ChartProps {
  type?: "area" | "line" | "candlestick" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "radar" | "polarArea" | "rangeBar"
  options?: any
  series?: any[]
}

const Charts: React.FC<ChartProps> = (
  {
    type,
    options,
    series 
  }
) => {
  return (
    <div>
      <ApexChart 
        type={type}
        options={options} 
        series={series}
        width={840} 
        height={380} 
      />
    </div>
  );
}

Charts.defaultProps = {
  type: "candlestick",
}

export default Charts;