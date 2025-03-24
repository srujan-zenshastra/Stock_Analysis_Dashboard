import React from 'react';
interface DataPoint {
  date: string;
  close: number;
}
interface SimpleChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
  color?: string;
  showTooltip?: boolean;
}
const SimpleChart: React.FC<SimpleChartProps> = ({
  data,
  width = 100,
  height = 40,
  color = '#3b82f6',
  showTooltip = false
}) => {
  if (!data || data.length === 0) return null;
  // Extract just the values for the chart
  const values = data.map(d => d.close);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  // Determine if trend is positive
  const isPositive = data[data.length - 1].close >= data[0].close;
  const strokeColor = isPositive ? color : '#ef4444';
  // Calculate points for the polyline
  const points = data.map((d, i) => {
    const x = i / (data.length - 1) * width;
    const y = height - (d.close - min) / range * height;
    return `${x},${y}`;
  }).join(' ');
  return <svg width={width} height={height} className="overflow-visible">
      <polyline points={points} fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
};
export default SimpleChart;