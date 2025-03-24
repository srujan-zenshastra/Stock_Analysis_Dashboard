import React, { useState } from 'react';
import { ChevronRightIcon, ArrowUpDownIcon, SearchIcon } from 'lucide-react';
import StockCard from '../ui/StockCard';
import { marketCapCategories } from '../../utils/mockData';
interface MarketCapViewProps {
  onSelectStock: (stockId: string) => void;
}
const MarketCapView: React.FC<MarketCapViewProps> = ({
  onSelectStock
}) => {
  const [activeTab, setActiveTab] = useState('large');
  const [sortBy, setSortBy] = useState('marketCap');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const handleSort = field => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('desc');
    }
  };
  const getSortedStocks = () => {
    const category = marketCapCategories.find(c => c.id === activeTab);
    if (!category) return [];
    let filteredStocks = category.stocks;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredStocks = filteredStocks.filter(stock => stock.name.toLowerCase().includes(query) || stock.symbol.toLowerCase().includes(query));
    }
    return [...filteredStocks].sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      // Handle string values like "2.98T" for market cap
      if (typeof aValue === 'string' && aValue.includes('T')) {
        aValue = parseFloat(aValue.replace('T', '')) * 1000;
      } else if (typeof aValue === 'string' && aValue.includes('B')) {
        aValue = parseFloat(aValue.replace('B', ''));
      } else if (typeof aValue === 'string' && aValue.includes('M')) {
        aValue = parseFloat(aValue.replace('M', '')) / 1000;
      }
      if (typeof bValue === 'string' && bValue.includes('T')) {
        bValue = parseFloat(bValue.replace('T', '')) * 1000;
      } else if (typeof bValue === 'string' && bValue.includes('B')) {
        bValue = parseFloat(bValue.replace('B', ''));
      } else if (typeof bValue === 'string' && bValue.includes('M')) {
        bValue = parseFloat(bValue.replace('M', '')) / 1000;
      }
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Market Capitalization</h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search stocks..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-8">
          {marketCapCategories.map(category => <button key={category.id} onClick={() => setActiveTab(category.id)} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === category.id ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}>
              {category.name}
            </button>)}
        </div>
      </div>
      {/* Active Tab Content */}
      {marketCapCategories.map(category => <div key={category.id} className={activeTab === category.id ? 'block' : 'hidden'}>
          <div className="mb-4">
            <h2 className="text-lg font-medium">{category.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {category.description}
            </p>
          </div>
          {/* Table Header */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-t-lg p-4 grid grid-cols-6 gap-4 font-medium text-sm border-b border-gray-200 dark:border-gray-700">
            <div className="col-span-2 flex items-center cursor-pointer" onClick={() => handleSort('name')}>
              Company
              <ArrowUpDownIcon size={14} className="ml-1" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={() => handleSort('price')}>
              Price
              <ArrowUpDownIcon size={14} className="ml-1" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={() => handleSort('change')}>
              Change
              <ArrowUpDownIcon size={14} className="ml-1" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={() => handleSort('marketCap')}>
              Market Cap
              <ArrowUpDownIcon size={14} className="ml-1" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={() => handleSort('volume')}>
              Volume
              <ArrowUpDownIcon size={14} className="ml-1" />
            </div>
          </div>
          {/* Table Body */}
          <div className="bg-white dark:bg-gray-800 rounded-b-lg divide-y divide-gray-200 dark:divide-gray-700">
            {getSortedStocks().map(stock => <div key={stock.id} onClick={() => onSelectStock(stock.id)} className="p-4 grid grid-cols-6 gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                <div className="col-span-2">
                  <p className="font-medium">{stock.symbol}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {stock.name}
                  </p>
                </div>
                <div className="font-medium">${stock.price.toFixed(2)}</div>
                <div className={stock.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {stock.change >= 0 ? '+' : ''}
                  {stock.change.toFixed(2)} (
                  {(stock.change / (stock.price - stock.change) * 100).toFixed(2)}
                  %)
                </div>
                <div>{stock.marketCap}</div>
                <div>{stock.volume}</div>
              </div>)}
          </div>
          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1-{getSortedStocks().length} of {getSortedStocks().length}{' '}
              stocks
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        </div>)}
    </div>;
};
export default MarketCapView;