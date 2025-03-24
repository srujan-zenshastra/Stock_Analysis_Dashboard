import React from 'react';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
interface StockCardProps {
  stock: {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent?: number;
    marketCap?: string;
    volume?: string;
  };
  onClick?: () => void;
  compact?: boolean;
}
const StockCard: React.FC<StockCardProps> = ({
  stock,
  onClick,
  compact = false
}) => {
  const isPositive = stock.change >= 0;
  const changePercentValue = stock.changePercent || stock.change / (stock.price - stock.change) * 100;
  if (compact) {
    return <div onClick={onClick} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors cursor-pointer">
        <div className="flex flex-col">
          <span className="font-bold text-sm">{stock.symbol}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[120px]">
            {stock.name}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-semibold">${stock.price.toFixed(2)}</span>
          <span className={`text-xs flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUpIcon size={12} className="mr-1" /> : <TrendingDownIcon size={12} className="mr-1" />}
            {stock.change.toFixed(2)} ({changePercentValue.toFixed(2)}%)
          </span>
        </div>
      </div>;
  }
  return <div onClick={onClick} className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg">{stock.symbol}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[200px]">
            {stock.name}
          </p>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${isPositive ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
          {isPositive ? '+' : ''}
          {changePercentValue.toFixed(2)}%
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <div>
          <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
          <p className={`text-sm ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isPositive ? '+' : ''}
            {stock.change.toFixed(2)}
          </p>
        </div>
        {stock.marketCap && <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Market Cap
            </p>
            <p className="text-sm font-medium">{stock.marketCap}</p>
          </div>}
        {stock.volume && !stock.marketCap && <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400">Volume</p>
            <p className="text-sm font-medium">{stock.volume}</p>
          </div>}
      </div>
    </div>;
};
export default StockCard;