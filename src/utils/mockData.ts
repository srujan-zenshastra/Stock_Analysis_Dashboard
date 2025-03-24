// Mock data for stock analysis dashboard
// Market indices
export const marketIndices = [{
  name: 'S&P 500',
  value: 4892.38,
  change: 0.73,
  changePercent: 1.42
}, {
  name: 'NASDAQ',
  value: 15982.34,
  change: 184.78,
  changePercent: 1.17
}, {
  name: 'DOW',
  value: 38654.42,
  change: -51.38,
  changePercent: -0.13
}, {
  name: 'RUSSELL 2000',
  value: 1947.72,
  change: 21.55,
  changePercent: 1.12
}, {
  name: 'VIX',
  value: 13.25,
  change: -0.51,
  changePercent: -3.71
}];
// Sectors with performance
export const sectors = [{
  id: 'technology',
  name: 'Technology',
  performance: 2.7,
  description: 'Information Technology sector including software, hardware, and IT services',
  marketCap: '14.2T',
  peRatio: 28.6,
  topStocks: [{
    id: 'aapl',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 189.84,
    change: 1.54,
    marketCap: '2.98T'
  }, {
    id: 'msft',
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 402.56,
    change: 2.12,
    marketCap: '3.01T'
  }, {
    id: 'nvda',
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 721.33,
    change: 3.45,
    marketCap: '1.78T'
  }, {
    id: 'googl',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.38,
    change: 0.87,
    marketCap: '1.80T'
  }]
}, {
  id: 'healthcare',
  name: 'Healthcare',
  performance: -0.5,
  description: 'Healthcare sector including pharmaceuticals, biotechnology, and medical devices',
  marketCap: '7.1T',
  peRatio: 22.3,
  topStocks: [{
    id: 'jnj',
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    price: 156.76,
    change: -0.32,
    marketCap: '378.2B'
  }, {
    id: 'unh',
    symbol: 'UNH',
    name: 'UnitedHealth Group',
    price: 518.28,
    change: -1.24,
    marketCap: '478.5B'
  }, {
    id: 'pfe',
    symbol: 'PFE',
    name: 'Pfizer Inc.',
    price: 27.14,
    change: -0.87,
    marketCap: '153.4B'
  }, {
    id: 'abbv',
    symbol: 'ABBV',
    name: 'AbbVie Inc.',
    price: 172.23,
    change: 0.43,
    marketCap: '304.1B'
  }]
}, {
  id: 'financial',
  name: 'Financial',
  performance: 1.3,
  description: 'Financial sector including banks, insurance, and investment services',
  marketCap: '8.9T',
  peRatio: 14.1,
  topStocks: [{
    id: 'jpm',
    symbol: 'JPM',
    name: 'JPMorgan Chase',
    price: 174.73,
    change: 1.21,
    marketCap: '504.6B'
  }, {
    id: 'bac',
    symbol: 'BAC',
    name: 'Bank of America',
    price: 33.47,
    change: 0.87,
    marketCap: '263.8B'
  }, {
    id: 'v',
    symbol: 'V',
    name: 'Visa Inc.',
    price: 276.96,
    change: 0.54,
    marketCap: '555.2B'
  }, {
    id: 'ma',
    symbol: 'MA',
    name: 'Mastercard Inc.',
    price: 458.32,
    change: 1.12,
    marketCap: '427.9B'
  }]
}, {
  id: 'consumer',
  name: 'Consumer',
  performance: 0.8,
  description: 'Consumer sector including retail, automotive, and consumer goods',
  marketCap: '5.3T',
  peRatio: 19.8,
  topStocks: [{
    id: 'amzn',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 171.18,
    change: 1.98,
    marketCap: '1.77T'
  }, {
    id: 'wmt',
    symbol: 'WMT',
    name: 'Walmart Inc.',
    price: 175.42,
    change: 0.43,
    marketCap: '472.3B'
  }, {
    id: 'ko',
    symbol: 'KO',
    name: 'Coca-Cola Co.',
    price: 59.87,
    change: -0.21,
    marketCap: '258.7B'
  }, {
    id: 'pep',
    symbol: 'PEP',
    name: 'PepsiCo Inc.',
    price: 171.33,
    change: -0.12,
    marketCap: '235.6B'
  }]
}, {
  id: 'energy',
  name: 'Energy',
  performance: -1.2,
  description: 'Energy sector including oil, gas, and renewable energy companies',
  marketCap: '2.8T',
  peRatio: 10.4,
  topStocks: [{
    id: 'xom',
    symbol: 'XOM',
    name: 'Exxon Mobil Corp.',
    price: 102.41,
    change: -1.34,
    marketCap: '408.5B'
  }, {
    id: 'cvx',
    symbol: 'CVX',
    name: 'Chevron Corp.',
    price: 149.14,
    change: -0.76,
    marketCap: '281.7B'
  }, {
    id: 'cop',
    symbol: 'COP',
    name: 'ConocoPhillips',
    price: 112.57,
    change: -0.92,
    marketCap: '132.6B'
  }, {
    id: 'bp',
    symbol: 'BP',
    name: 'BP p.l.c.',
    price: 35.42,
    change: -1.54,
    marketCap: '98.3B'
  }]
}];
// Market cap categories
export const marketCapCategories = [{
  id: 'large',
  name: 'Large Cap',
  description: 'Market capitalization over $10 billion',
  stocks: [{
    id: 'aapl',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 189.84,
    change: 1.54,
    marketCap: '2.98T',
    volume: '58.4M',
    peRatio: 31.2
  }, {
    id: 'msft',
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 402.56,
    change: 2.12,
    marketCap: '3.01T',
    volume: '23.7M',
    peRatio: 34.8
  }, {
    id: 'amzn',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 171.18,
    change: 1.98,
    marketCap: '1.77T',
    volume: '42.1M',
    peRatio: 59.3
  }, {
    id: 'googl',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.38,
    change: 0.87,
    marketCap: '1.80T',
    volume: '27.9M',
    peRatio: 24.5
  }, {
    id: 'meta',
    symbol: 'META',
    name: 'Meta Platforms',
    price: 459.41,
    change: 3.76,
    marketCap: '1.17T',
    volume: '18.3M',
    peRatio: 30.8
  }, {
    id: 'tsla',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 193.57,
    change: -2.14,
    marketCap: '615.8B',
    volume: '125.7M',
    peRatio: 55.2
  }]
}, {
  id: 'mid',
  name: 'Mid Cap',
  description: 'Market capitalization between $2-10 billion',
  stocks: [{
    id: 'etsy',
    symbol: 'ETSY',
    name: 'Etsy Inc.',
    price: 72.66,
    change: 0.87,
    marketCap: '8.59B',
    volume: '3.7M',
    peRatio: 24.7
  }, {
    id: 'crox',
    symbol: 'CROX',
    name: 'Crocs Inc.',
    price: 102.35,
    change: 1.24,
    marketCap: '6.32B',
    volume: '1.5M',
    peRatio: 10.1
  }, {
    id: 'dash',
    symbol: 'DASH',
    name: 'DoorDash Inc.',
    price: 119.84,
    change: 2.35,
    marketCap: '9.87B',
    volume: '4.2M',
    peRatio: null
  }, {
    id: 'deck',
    symbol: 'DECK',
    name: 'Deckers Outdoor',
    price: 875.45,
    change: 3.42,
    marketCap: '8.91B',
    volume: '0.4M',
    peRatio: 29.6
  }, {
    id: 'wolf',
    symbol: 'WOLF',
    name: 'Wolfspeed Inc.',
    price: 25.96,
    change: -1.87,
    marketCap: '3.25B',
    volume: '3.8M',
    peRatio: null
  }]
}, {
  id: 'small',
  name: 'Small Cap',
  description: 'Market capitalization under $2 billion',
  stocks: [{
    id: 'play',
    symbol: 'PLAY',
    name: 'Dave & Buster\'s',
    price: 52.74,
    change: 0.32,
    marketCap: '1.95B',
    volume: '1.2M',
    peRatio: 19.1
  }, {
    id: 'prts',
    symbol: 'PRTS',
    name: 'CarParts.com',
    price: 3.21,
    change: -0.24,
    marketCap: '183.1M',
    volume: '0.7M',
    peRatio: null
  }, {
    id: 'hear',
    symbol: 'HEAR',
    name: 'Turtle Beach',
    price: 11.56,
    change: 0.87,
    marketCap: '197.3M',
    volume: '0.3M',
    peRatio: null
  }, {
    id: 'clsk',
    symbol: 'CLSK',
    name: 'CleanSpark Inc.',
    price: 14.87,
    change: 2.54,
    marketCap: '1.75B',
    volume: '28.4M',
    peRatio: null
  }, {
    id: 'mnmd',
    symbol: 'MNMD',
    name: 'Mind Medicine',
    price: 8.54,
    change: -3.76,
    marketCap: '585.2M',
    volume: '1.1M',
    peRatio: null
  }]
}];
// Detailed stock data for Apple (example)
export const appleStockData = {
  id: 'aapl',
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: 189.84,
  change: 1.54,
  changePercent: 0.82,
  marketCap: '2.98T',
  volume: '58.4M',
  avgVolume: '62.1M',
  peRatio: 31.2,
  eps: 6.08,
  dividend: 0.96,
  dividendYield: 0.51,
  beta: 1.28,
  yearHigh: 198.23,
  yearLow: 124.17,
  fiftyDayAvg: 185.67,
  twoHundredDayAvg: 179.34,
  // Financial metrics
  revenue: {
    quarterly: [{
      period: 'Q1 2023',
      value: 119.58
    }, {
      period: 'Q2 2023',
      value: 94.84
    }, {
      period: 'Q3 2023',
      value: 81.80
    }, {
      period: 'Q4 2023',
      value: 89.50
    }],
    annual: [{
      period: '2020',
      value: 274.52
    }, {
      period: '2021',
      value: 365.82
    }, {
      period: '2022',
      value: 394.33
    }, {
      period: '2023',
      value: 383.29
    }]
  },
  // Price history for charts
  priceHistory: {
    daily: Array(30).fill(0).map((_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      close: 180 + Math.sin(i / 5) * 15 + Math.random() * 5
    })),
    weekly: Array(52).fill(0).map((_, i) => ({
      date: new Date(Date.now() - (51 - i) * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      close: 160 + Math.sin(i / 10) * 30 + i / 2 + Math.random() * 10
    }))
  },
  // Technical indicators
  technicalIndicators: {
    rsi: 58.4,
    macd: {
      macd: 1.87,
      signal: 1.24,
      histogram: 0.63
    },
    bollingerBands: {
      upper: 195.23,
      middle: 185.67,
      lower: 176.11
    }
  },
  // News and sentiment
  news: [{
    id: 1,
    title: 'Apple Reports Record Services Revenue in Q1',
    date: '2023-02-02',
    source: 'Financial Times',
    sentiment: 'positive',
    summary: 'Apple reported record-breaking services revenue despite overall sales decline.'
  }, {
    id: 2,
    title: 'Apple Vision Pro Launches to Mixed Reviews',
    date: '2023-02-03',
    source: 'Tech Insider',
    sentiment: 'neutral',
    summary: 'The Vision Pro headset launched with impressive technology but a steep price point.'
  }, {
    id: 3,
    title: 'Apple Faces Antitrust Scrutiny Over App Store Policies',
    date: '2023-02-01',
    source: 'Wall Street Journal',
    sentiment: 'negative',
    summary: 'Regulators are examining Apple\'s App Store practices and commission structure.'
  }, {
    id: 4,
    title: 'Analysts Predict Strong iPhone 15 Cycle for Apple',
    date: '2023-01-30',
    source: 'Bloomberg',
    sentiment: 'positive',
    summary: 'Wall Street analysts expect the iPhone 15 to drive a significant upgrade cycle.'
  }],
  // Risk metrics
  riskMetrics: {
    sharpeRatio: 1.32,
    standardDeviation: 0.84,
    maxDrawdown: -18.7,
    var: -2.4
  }
};
// Generate more detailed stock data for other stocks
export const getStockDetails = stockId => {
  if (stockId === 'aapl') {
    return appleStockData;
  }
  // Find the stock in our mock data
  let stockInfo = null;
  sectors.forEach(sector => {
    const found = sector.topStocks.find(s => s.id === stockId);
    if (found) stockInfo = found;
  });
  if (!stockInfo) {
    marketCapCategories.forEach(category => {
      const found = category.stocks.find(s => s.id === stockId);
      if (found) stockInfo = found;
    });
  }
  if (!stockInfo) return null;
  // Generate mock detailed data based on the basic info
  return {
    ...stockInfo,
    changePercent: (stockInfo.change / (stockInfo.price - stockInfo.change) * 100).toFixed(2),
    volume: stockInfo.volume || `${Math.floor(Math.random() * 50)}M`,
    avgVolume: `${Math.floor(Math.random() * 50)}M`,
    eps: (stockInfo.price / (stockInfo.peRatio || 25)).toFixed(2),
    dividend: (stockInfo.price * 0.01 * (Math.random() + 0.5)).toFixed(2),
    dividendYield: (Math.random() * 2).toFixed(2),
    beta: (0.8 + Math.random()).toFixed(2),
    yearHigh: (stockInfo.price * (1 + Math.random() * 0.3)).toFixed(2),
    yearLow: (stockInfo.price * (1 - Math.random() * 0.3)).toFixed(2),
    fiftyDayAvg: (stockInfo.price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2),
    twoHundredDayAvg: (stockInfo.price * (1 + (Math.random() - 0.5) * 0.15)).toFixed(2),
    revenue: {
      quarterly: [{
        period: 'Q1 2023',
        value: Math.floor(Math.random() * 100)
      }, {
        period: 'Q2 2023',
        value: Math.floor(Math.random() * 100)
      }, {
        period: 'Q3 2023',
        value: Math.floor(Math.random() * 100)
      }, {
        period: 'Q4 2023',
        value: Math.floor(Math.random() * 100)
      }],
      annual: [{
        period: '2020',
        value: Math.floor(Math.random() * 300)
      }, {
        period: '2021',
        value: Math.floor(Math.random() * 300)
      }, {
        period: '2022',
        value: Math.floor(Math.random() * 300)
      }, {
        period: '2023',
        value: Math.floor(Math.random() * 300)
      }]
    },
    priceHistory: {
      daily: Array(30).fill(0).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        close: stockInfo.price * (0.9 + Math.sin(i / 5) * 0.1 + Math.random() * 0.05)
      })),
      weekly: Array(52).fill(0).map((_, i) => ({
        date: new Date(Date.now() - (51 - i) * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        close: stockInfo.price * (0.7 + Math.sin(i / 10) * 0.15 + i / 100 + Math.random() * 0.1)
      }))
    },
    technicalIndicators: {
      rsi: Math.floor(Math.random() * 100),
      macd: {
        macd: (Math.random() * 4 - 2).toFixed(2),
        signal: (Math.random() * 4 - 2).toFixed(2),
        histogram: (Math.random() * 2 - 1).toFixed(2)
      },
      bollingerBands: {
        upper: (stockInfo.price * 1.05).toFixed(2),
        middle: stockInfo.price,
        lower: (stockInfo.price * 0.95).toFixed(2)
      }
    },
    news: [{
      id: 1,
      title: `${stockInfo.name} Reports Quarterly Results`,
      date: '2023-02-02',
      source: 'Financial Times',
      sentiment: Math.random() > 0.5 ? 'positive' : 'neutral',
      summary: `${stockInfo.name} reported quarterly results that ${Math.random() > 0.5 ? 'exceeded' : 'met'} analyst expectations.`
    }, {
      id: 2,
      title: `${stockInfo.name} Announces New Product Line`,
      date: '2023-02-01',
      source: 'Business Insider',
      sentiment: 'positive',
      summary: `${stockInfo.name} unveiled a new product line expected to drive growth in the coming year.`
    }, {
      id: 3,
      title: `Analysts ${Math.random() > 0.5 ? 'Upgrade' : 'Downgrade'} ${stockInfo.symbol}`,
      date: '2023-01-30',
      source: 'Wall Street Journal',
      sentiment: Math.random() > 0.5 ? 'positive' : 'negative',
      summary: `Wall Street analysts adjusted their outlook on ${stockInfo.name} citing ${Math.random() > 0.5 ? 'strong' : 'weak'} fundamentals.`
    }],
    riskMetrics: {
      sharpeRatio: (Math.random() * 2).toFixed(2),
      standardDeviation: (Math.random() * 2).toFixed(2),
      maxDrawdown: -(Math.random() * 30).toFixed(1),
      var: -(Math.random() * 5).toFixed(1)
    }
  };
};
// Watchlist
export const watchlist = [{
  id: 'aapl',
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: 189.84,
  change: 1.54,
  changePercent: 0.82
}, {
  id: 'msft',
  symbol: 'MSFT',
  name: 'Microsoft Corp.',
  price: 402.56,
  change: 2.12,
  changePercent: 0.53
}, {
  id: 'tsla',
  symbol: 'TSLA',
  name: 'Tesla Inc.',
  price: 193.57,
  change: -2.14,
  changePercent: -1.09
}, {
  id: 'amzn',
  symbol: 'AMZN',
  name: 'Amazon.com Inc.',
  price: 171.18,
  change: 1.98,
  changePercent: 1.17
}, {
  id: 'meta',
  symbol: 'META',
  name: 'Meta Platforms',
  price: 459.41,
  change: 3.76,
  changePercent: 0.83
}];
// Trending stocks
export const trendingStocks = [{
  id: 'nvda',
  symbol: 'NVDA',
  name: 'NVIDIA Corp.',
  price: 721.33,
  change: 3.45,
  changePercent: 0.48,
  volume: '98.7M'
}, {
  id: 'amd',
  symbol: 'AMD',
  name: 'Advanced Micro Devices',
  price: 172.48,
  change: 4.21,
  changePercent: 2.50,
  volume: '74.3M'
}, {
  id: 'pltr',
  symbol: 'PLTR',
  name: 'Palantir Technologies',
  price: 24.67,
  change: 1.23,
  changePercent: 5.25,
  volume: '132.5M'
}, {
  id: 'sofi',
  symbol: 'SOFI',
  name: 'SoFi Technologies',
  price: 7.86,
  change: 0.34,
  changePercent: 4.52,
  volume: '68.2M'
}];