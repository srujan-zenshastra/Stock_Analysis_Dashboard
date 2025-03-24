import React from 'react';
import { ChevronRightIcon, BarChart3Icon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import StockCard from '../ui/StockCard';
import SimpleChart from '../ui/SimpleChart';
import { sectors } from '../../utils/mockData';
interface SectorViewProps {
  onSelectStock: (stockId: string) => void;
}
const SectorView: React.FC<SectorViewProps> = ({
  onSelectStock
}) => {
  // Generate mock chart data for sectors
  const generateMockData = (baseValue: number, isPositive: boolean) => {
    return Array(20).fill(0).map((_, i) => ({
      date: new Date(Date.now() - (19 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      close: baseValue + (isPositive ? 1 : -1) * (Math.sin(i / 3) * 2 + Math.random() * 0.5)
    }));
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sector Analysis</h1>
        <div className="flex space-x-2">
          <select className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 bg-white dark:bg-gray-800 text-sm">
            <option>Performance: 1D</option>
            <option>Performance: 1W</option>
            <option>Performance: 1M</option>
            <option>Performance: YTD</option>
          </select>
        </div>
      </div>
      {/* Sector Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sectors.map(sector => {
        const isPositive = sector.performance > 0;
        const chartData = generateMockData(100, isPositive);
        return <div key={sector.id} className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-500 transition-colors cursor-pointer" onClick={() => document.getElementById(sector.id)?.scrollIntoView({
          behavior: 'smooth'
        })}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{sector.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {sector.description}
                  </p>
                </div>
                <div className={`flex items-center px-2 py-1 rounded text-sm font-medium ${isPositive ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {isPositive ? <TrendingUpIcon size={16} className="mr-1" /> : <TrendingDownIcon size={16} className="mr-1" />}
                  {isPositive ? '+' : ''}
                  {sector.performance.toFixed(1)}%
                </div>
              </div>
              <div className="flex justify-between items-end">
                <SimpleChart data={chartData} width={150} height={50} color={isPositive ? '#10b981' : '#ef4444'} />
                <div className="text-right">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Market Cap
                    </span>
                    <span className="font-medium">{sector.marketCap}</span>
                  </div>
                  <div className="flex flex-col mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      P/E Ratio
                    </span>
                    <span className="font-medium">{sector.peRatio}</span>
                  </div>
                </div>
              </div>
            </div>;
      })}
      </div>
      {/* Detailed Sector Breakdowns */}
      {sectors.map(sector => <section key={sector.id} id={sector.id} className="pt-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold flex items-center">
              <BarChart3Icon className="mr-2" size={20} />
              {sector.name} Sector
            </h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              View All <ChevronRightIcon size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sector.topStocks.map(stock => <StockCard key={stock.id} stock={stock} onClick={() => onSelectStock(stock.id)} />)}
          </div>
        </section>)}
    </div>;
};
export default SectorView;