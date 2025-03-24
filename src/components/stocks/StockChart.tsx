import React, { useState } from 'react';
interface DataPoint {
  date: string;
  close: number;
}
interface StockChartProps {
  data: DataPoint[];
  height?: number;
  isPositive?: boolean;
}
const StockChart: React.FC<StockChartProps> = ({
  data,
  height = 300,
  isPositive = true
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
  if (!data || data.length === 0) return <div>No data available</div>;
  const values = data.map(d => d.close);
  const min = Math.min(...values) * 0.98; // Add some padding
  const max = Math.max(...values) * 1.02;
  const range = max - min;
  const width = '100%';
  const chartColor = isPositive ? '#10b981' : '#ef4444';
  // Calculate points for the path
  const points = data.map((d, i) => {
    const x = `${i / (data.length - 1) * 100}%`;
    const y = height - (d.close - min) / range * height;
    return `${x},${y}`;
  }).join(' ');
  // Area under the curve
  const areaPath = `
    M0,${height} 
    ${data.map((d, i) => {
    const x = `${i / (data.length - 1) * 100}%`;
    const y = height - (d.close - min) / range * height;
    return `L${x},${y}`;
  }).join(' ')}
    L100%,${height} Z
  `;
  const handleMouseMove = e => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    // Find the closest data point based on x position
    const index = Math.min(Math.floor(x / width * data.length), data.length - 1);
    setHoveredPoint(data[index]);
  };
  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };
  return <div className="relative">
      {hoveredPoint && <div className="absolute top-0 left-0 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700/20 rounded p-2 z-10 transform -translate-y-full">
          <div className="text-sm font-medium">{hoveredPoint.date}</div>
          <div className="text-lg font-bold">
            ${hoveredPoint.close.toFixed(2)}
          </div>
        </div>}
      <svg width={width} height={height} className="overflow-visible" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map(ratio => {
        const y = height - ratio * height;
        const value = min + ratio * range;
        return <g key={ratio}>
              <line x1="0" y1={y} x2="100%" y2={y} stroke="#e5e7eb" strokeWidth="1" strokeDasharray={ratio === 0 || ratio === 1 ? 'none' : '4'} />
              <text x="0" y={y - 5} className="text-xs fill-gray-500 dark:fill-gray-400">
                ${value.toFixed(2)}
              </text>
            </g>;
      })}
        {/* Area under the curve */}
        <path d={areaPath} fill={chartColor} fillOpacity="0.1" />
        {/* Line chart */}
        <polyline points={points} fill="none" stroke={chartColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Interactive overlay */}
        {data.map((point, i) => {
        const x = `${i / (data.length - 1) * 100}%`;
        const y = height - (point.close - min) / range * height;
        return <circle key={i} cx={x} cy={y} r={hoveredPoint === point ? 4 : 0} fill={chartColor} stroke="white" strokeWidth="1" />;
      })}
      </svg>
    </div>;
};
export default StockChart;