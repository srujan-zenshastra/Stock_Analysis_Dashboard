import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import DashboardHome from './components/dashboard/DashboardHome';
import SectorView from './components/dashboard/SectorView';
import MarketCapView from './components/dashboard/MarketCapView';
import StockOverview from './components/stocks/StockOverview';
export function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedStock, setSelectedStock] = useState(null);
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardHome onSelectStock={handleSelectStock} />;
      case 'sectors':
        return <SectorView onSelectStock={handleSelectStock} />;
      case 'marketcap':
        return <MarketCapView onSelectStock={handleSelectStock} />;
      case 'stock':
        return <StockOverview stockId={selectedStock} onBack={() => setCurrentView('dashboard')} />;
      default:
        return <DashboardHome onSelectStock={handleSelectStock} />;
    }
  };
  const handleSelectStock = stockId => {
    setSelectedStock(stockId);
    setCurrentView('stock');
  };
  const handleNavigate = view => {
    setCurrentView(view);
  };
  return <ThemeProvider>
      <Layout onNavigate={handleNavigate} currentView={currentView}>
        {renderView()}
      </Layout>
    </ThemeProvider>;
}