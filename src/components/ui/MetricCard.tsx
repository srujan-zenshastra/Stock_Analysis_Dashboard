import React from 'react';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-react';
interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
}
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  icon
}) => {
  const renderChange = () => {
    if (change === undefined) return null;
    const isPositive = change > 0;
    const isNeutral = change === 0;
    return <div className="flex items-center mt-1">
        {isPositive ? <TrendingUpIcon size={14} className="text-green-500 mr-1" /> : isNeutral ? <MinusIcon size={14} className="text-gray-500 mr-1" /> : <TrendingDownIcon size={14} className="text-red-500 mr-1" />}
        <span className={`text-xs ${isPositive ? 'text-green-600 dark:text-green-400' : isNeutral ? 'text-gray-600 dark:text-gray-400' : 'text-red-600 dark:text-red-400'}`}>
          {isPositive ? '+' : ''}
          {change.toFixed(2)}% {changeLabel || ''}
        </span>
      </div>;
  };
  return <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex items-center mb-2">
        {icon && <div className="mr-2 text-gray-500 dark:text-gray-400">{icon}</div>}
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {renderChange()}
    </div>;
};
export default MetricCard;