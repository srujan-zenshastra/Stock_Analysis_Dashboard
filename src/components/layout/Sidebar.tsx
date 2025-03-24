import React from 'react';
import { LayoutDashboardIcon, BarChart4Icon, DollarSignIcon, LineChartIcon, NewspaperIcon, AlertCircleIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
interface SidebarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}
const Sidebar: React.FC<SidebarProps> = ({
  onNavigate,
  currentView
}) => {
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    id: 'sectors',
    label: 'Sectors',
    icon: <BarChart4Icon size={20} />
  }, {
    id: 'marketcap',
    label: 'Market Cap',
    icon: <DollarSignIcon size={20} />
  }, {
    id: 'technicals',
    label: 'Technical Analysis',
    icon: <LineChartIcon size={20} />
  }, {
    id: 'news',
    label: 'News & Sentiment',
    icon: <NewspaperIcon size={20} />
  }, {
    id: 'risk',
    label: 'Risk Assessment',
    icon: <AlertCircleIcon size={20} />
  }];
  const bottomNavItems = [{
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon size={20} />
  }, {
    id: 'logout',
    label: 'Log Out',
    icon: <LogOutIcon size={20} />
  }];
  return <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
          <LineChartIcon className="mr-2" size={24} />
          StockAnalytics
        </h1>
      </div>
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {navItems.map(item => <li key={item.id}>
              <button onClick={() => onNavigate(item.id)} className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${currentView === item.id ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <ul className="space-y-1">
          {bottomNavItems.map(item => <li key={item.id}>
              <button onClick={() => onNavigate(item.id)} className="flex items-center w-full px-4 py-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>)}
        </ul>
      </div>
    </aside>;
};
export default Sidebar;