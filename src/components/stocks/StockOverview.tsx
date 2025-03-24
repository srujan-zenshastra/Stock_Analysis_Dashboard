import React, { useState } from 'react';
import { ArrowLeftIcon, TrendingUpIcon, TrendingDownIcon, DollarSignIcon, BarChart4Icon, LineChartIcon, NewspaperIcon, AlertCircleIcon, ShareIcon, DownloadIcon } from 'lucide-react';
import StockChart from './StockChart';
import MetricCard from '../ui/MetricCard';
import { getStockDetails } from '../../utils/mockData';
interface StockOverviewProps {
  stockId: string;
  onBack: () => void;
}
const StockOverview: React.FC<StockOverviewProps> = ({
  stockId,
  onBack
}) => {
  const [activeTimeframe, setActiveTimeframe] = useState('1M');
  const [activeTab, setActiveTab] = useState('overview');
  const stockData = getStockDetails(stockId);
  if (!stockData) {
    return <div className="text-center py-12">
        <h2 className="text-xl">Stock not found</h2>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Go Back
        </button>
      </div>;
  }
  const isPositive = stockData.change >= 0;
  const chartData = activeTimeframe === '1W' ? stockData.priceHistory.daily.slice(-7) : activeTimeframe === '1M' ? stockData.priceHistory.daily : stockData.priceHistory.weekly;
  const timeframes = [{
    id: '1D',
    label: '1D'
  }, {
    id: '1W',
    label: '1W'
  }, {
    id: '1M',
    label: '1M'
  }, {
    id: '3M',
    label: '3M'
  }, {
    id: '6M',
    label: '6M'
  }, {
    id: '1Y',
    label: '1Y'
  }, {
    id: '5Y',
    label: '5Y'
  }];
  const tabs = [{
    id: 'overview',
    label: 'Overview',
    icon: <BarChart4Icon size={16} />
  }, {
    id: 'financials',
    label: 'Financials',
    icon: <DollarSignIcon size={16} />
  }, {
    id: 'technical',
    label: 'Technical',
    icon: <LineChartIcon size={16} />
  }, {
    id: 'news',
    label: 'News & Sentiment',
    icon: <NewspaperIcon size={16} />
  }, {
    id: 'risk',
    label: 'Risk Assessment',
    icon: <AlertCircleIcon size={16} />
  }];
  return <div className="space-y-6">
      {/* Header with back button */}
      <div className="flex items-center space-x-4">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <ArrowLeftIcon size={20} />
        </button>
        <h1 className="text-2xl font-bold">
          {stockData.name} ({stockData.symbol})
        </h1>
      </div>
      {/* Stock price and summary */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            {/* Stock price header */}
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div>
                <div className="flex items-baseline">
                  <h2 className="text-3xl font-bold mr-3">
                    ${stockData.price.toFixed(2)}
                  </h2>
                  <span className={`flex items-center text-lg ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? <TrendingUpIcon size={20} className="mr-1" /> : <TrendingDownIcon size={20} className="mr-1" />}
                    {isPositive ? '+' : ''}
                    {stockData.change.toFixed(2)} ({stockData.changePercent}%)
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {new Date().toLocaleTimeString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">
                  <ShareIcon size={16} className="mr-1" />
                  Share
                </button>
                <button className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">
                  <DownloadIcon size={16} className="mr-1" />
                  Export
                </button>
              </div>
            </div>
            {/* Chart timeframe selector */}
            <div className="flex space-x-1 mb-4">
              {timeframes.map(timeframe => <button key={timeframe.id} onClick={() => setActiveTimeframe(timeframe.id)} className={`px-3 py-1 text-sm rounded-md ${activeTimeframe === timeframe.id ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                  {timeframe.label}
                </button>)}
            </div>
            {/* Stock chart */}
            <div className="h-64 md:h-80">
              <StockChart data={chartData} height={320} isPositive={isPositive} />
            </div>
          </div>
        </div>
        {/* Key metrics */}
        <div className="space-y-4">
          <MetricCard title="Market Cap" value={stockData.marketCap} />
          <MetricCard title="Volume" value={stockData.volume} change={stockData.volume > stockData.avgVolume ? 10 : -10} changeLabel="vs avg" />
          <MetricCard title="P/E Ratio" value={stockData.peRatio || 'N/A'} />
          <MetricCard title="52W Range" value={`$${stockData.yearLow} - $${stockData.yearHigh}`} />
          <MetricCard title="Dividend Yield" value={`${stockData.dividendYield}%`} />
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap space-x-8">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center py-3 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>)}
        </div>
      </div>
      {/* Tab content */}
      <div className="pb-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Company Profile */}
            <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4">Company Profile</h3>
              <p className="mb-4">
                {stockData.name} is a leading company in the technology sector,
                specializing in consumer electronics, software, and online
                services. The company has shown consistent growth over the past
                decade, with a strong focus on innovation and user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400">
                    Industry
                  </h4>
                  <p>Technology</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400">
                    Founded
                  </h4>
                  <p>1976</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400">
                    CEO
                  </h4>
                  <p>Tim Cook</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400">
                    Headquarters
                  </h4>
                  <p>Cupertino, California</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400">
                    Employees
                  </h4>
                  <p>154,000</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600 dark:text-gray-400">
                    Website
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    www.apple.com
                  </p>
                </div>
              </div>
            </div>
            {/* Key Statistics */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4">Key Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Open</span>
                  <span className="font-medium">
                    $
                    {(stockData.price - stockData.change * Math.random()).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Previous Close
                  </span>
                  <span className="font-medium">
                    ${(stockData.price - stockData.change).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Day Range
                  </span>
                  <span className="font-medium">
                    $
                    {(stockData.price - Math.abs(stockData.change) - 1).toFixed(2)}{' '}
                    - ${(stockData.price + 0.5).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Volume
                  </span>
                  <span className="font-medium">{stockData.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Avg. Volume
                  </span>
                  <span className="font-medium">{stockData.avgVolume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Market Cap
                  </span>
                  <span className="font-medium">{stockData.marketCap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Beta</span>
                  <span className="font-medium">{stockData.beta}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    P/E Ratio
                  </span>
                  <span className="font-medium">
                    {stockData.peRatio || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    EPS (TTM)
                  </span>
                  <span className="font-medium">${stockData.eps}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Dividend & Yield
                  </span>
                  <span className="font-medium">
                    ${stockData.dividend} ({stockData.dividendYield}%)
                  </span>
                </div>
              </div>
            </div>
            {/* Recent News */}
            <div className="lg:col-span-3 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-4">Recent News</h3>
              <div className="space-y-4">
                {stockData.news.map(item => <div key={item.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${item.sentiment === 'positive' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : item.sentiment === 'negative' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                        {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {item.summary}
                    </p>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>}
        {/* Financials Tab */}
        {activeTab === 'financials' && <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-6">Financial Performance</h3>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Quarterly Revenue (Billions $)</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-md">
                    Revenue
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    Earnings
                  </button>
                </div>
              </div>
              <div className="h-64">
                <div className="flex h-full">
                  {stockData.revenue.quarterly.map((quarter, index) => {
                const height = `${quarter.value / Math.max(...stockData.revenue.quarterly.map(q => q.value)) * 100}%`;
                return <div key={index} className="flex-1 flex flex-col items-center justify-end">
                        <div className="w-4/5 bg-blue-500 dark:bg-blue-600 rounded-t-md" style={{
                    height
                  }}></div>
                        <div className="mt-2 text-xs text-center">
                          <div>{quarter.period}</div>
                          <div className="font-medium">${quarter.value}B</div>
                        </div>
                      </div>;
              })}
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h4 className="font-medium mb-4">Annual Revenue (Billions $)</h4>
              <div className="h-64">
                <div className="flex h-full">
                  {stockData.revenue.annual.map((year, index) => {
                const height = `${year.value / Math.max(...stockData.revenue.annual.map(y => y.value)) * 100}%`;
                return <div key={index} className="flex-1 flex flex-col items-center justify-end">
                        <div className="w-4/5 bg-indigo-500 dark:bg-indigo-600 rounded-t-md" style={{
                    height
                  }}></div>
                        <div className="mt-2 text-xs text-center">
                          <div>{year.period}</div>
                          <div className="font-medium">${year.value}B</div>
                        </div>
                      </div>;
              })}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Financial Ratios</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Profit Margin
                  </p>
                  <p className="text-xl font-bold">21.3%</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Operating Margin
                  </p>
                  <p className="text-xl font-bold">28.7%</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Return on Equity
                  </p>
                  <p className="text-xl font-bold">43.2%</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Current Ratio
                  </p>
                  <p className="text-xl font-bold">1.43</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Debt to Equity
                  </p>
                  <p className="text-xl font-bold">2.1</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Price to Book
                  </p>
                  <p className="text-xl font-bold">35.8</p>
                </div>
              </div>
            </div>
          </div>}
        {/* Other tabs would be similarly implemented */}
        {(activeTab === 'technical' || activeTab === 'news' || activeTab === 'risk') && <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 dark:text-gray-400">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{' '}
                analysis content would appear here.
              </p>
            </div>
          </div>}
      </div>
    </div>;
};
export default StockOverview;