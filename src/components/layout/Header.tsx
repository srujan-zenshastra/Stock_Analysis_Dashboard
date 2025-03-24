import React from 'react';
import { SearchIcon, BellIcon, UserIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
const Header: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <header className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search stocks, sectors..." className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          {theme === 'dark' ? <SunIcon className="h-5 w-5 text-gray-400" /> : <MoonIcon className="h-5 w-5 text-gray-600" />}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
          <BellIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <UserIcon className="h-5 w-5" />
        </div>
      </div>
    </header>;
};
export default Header;