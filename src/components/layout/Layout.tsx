import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useTheme } from '../../context/ThemeContext';
interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: string) => void;
  currentView: string;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  onNavigate,
  currentView
}) => {
  const {
    theme
  } = useTheme();
  return <div className={`flex h-screen w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200`}>
      <Sidebar onNavigate={onNavigate} currentView={currentView} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>;
};
export default Layout;