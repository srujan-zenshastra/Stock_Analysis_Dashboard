import React from 'react';
import { ArrowUpRightIcon, ArrowDownRightIcon, TrendingUpIcon, BarChart4Icon, DollarSignIcon } from 'lucide-react';
import StockCard from '../ui/StockCard';
import MetricCard from '../ui/MetricCard';
import SimpleChart from '../ui/SimpleChart';
import { marketIndices, watchlist, trendingStocks, appleStockData } from '../../utils/mockData';
interface DashboardHomeProps {
  onSelectStock: (stockId: string) => void;
}
const DashboardHome: React.FC<DashboardHomeProps> = ({
  onSelectStock
}) => {
  return <div className="space-y-6">
      {/* Market Overview */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Market Overview</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {marketIndices.map(index => <MetricCard key={index.name} title={index.name} value={index.value.toFixed(2)} change={index.changePercent} icon={index.changePercent >= 0 ? <ArrowUpRightIcon size={16} className="text-green-500" /> : <ArrowDownRightIcon size={16} className="text-red-500" />} />)}
        </div>
      </section>
      {/* Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl text-white cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.location.href = '#sectors'}>
          <BarChart4Icon size={24} className="mb-3" />
          <h3 className="text-xl font-bold mb-2">Sectors</h3>
          <p className="mb-4 opacity-90">
            Analyze performance across industry sectors
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-75">5 Major Sectors</span>
            <ArrowUpRightIcon size={20} />
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl text-white cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.location.href = '#market-cap'}>
          <DollarSignIcon size={24} className="mb-3" />
          <h3 className="text-xl font-bold mb-2">Market Cap</h3>
          <p className="mb-4 opacity-90">
            Explore stocks by market capitalization
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-75">Large, Mid, Small Cap</span>
            <ArrowUpRightIcon size={20} />
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl text-white cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.location.href = '#technical-analysis'}>
          <TrendingUpIcon size={24} className="mb-3" />
          <h3 className="text-xl font-bold mb-2">Technical Analysis</h3>
          <p className="mb-4 opacity-90">
            Advanced technical indicators and charts
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-75">
              RSI, MACD, Bollinger Bands
            </span>
            <ArrowUpRightIcon size={20} />
          </div>
        </div>
      </section>
      {/* Trending Stocks */}
      <section>
        <h2 className="text-lg font-bold mb-4">Trending Stocks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingStocks.map(stock => <StockCard key={stock.id} stock={stock} onClick={() => onSelectStock(stock.id)} />)}
        </div>
      </section>
      {/* Watchlist and Recent News */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Watchlist */}
        <section className="lg:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">My Watchlist</h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            {watchlist.map(stock => <StockCard key={stock.id} stock={stock} onClick={() => onSelectStock(stock.id)} compact />)}
          </div>
        </section>
        {/* Recent News */}
        <section className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">Recent Market News</h2>
          <div className="space-y-4">
            {appleStockData.news.map(item => <div key={item.id} className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${item.sentiment === 'positive' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : item.sentiment === 'negative' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                    {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.summary}
                </p>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span>{item.source}</span>
                  <span>{item.date}</span>
                </div>
              </div>)}
          </div>
        </section>
      </div>
    </div>;
};
export default DashboardHome;