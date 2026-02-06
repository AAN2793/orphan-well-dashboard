import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Market() {
  const [marketData, setMarketData] = useState({
    sp500: { value: '6,023.65', change: '+0.45%' },
    nasdaq: { value: '19,856.32', change: '+0.72%' },
    dow: { value: '43,892.11', change: '+0.28%' }
  })

  const [premarketMovers] = useState([
    { symbol: 'LBTYB', name: 'Liberty Global', price: '33.99', change: '+182.5%' },
    { symbol: 'WHLR', name: 'Wheeler Real Estate', price: '3.17', change: '+44.7%' },
    { symbol: 'AMZN', name: 'Amazon', price: '204.05', change: '-8.4%' },
    { symbol: 'NVDA', name: 'NVIDIA', price: '176.79', change: '+2.9%' },
    { symbol: 'AVGO', name: 'Broadcom', price: '321.35', change: '+3.5%' },
  ])

  return (
    <>
      <Head>
        <title>Market Dashboard | Helios</title>
      </Head>

      <div className="min-h-screen p-8">
        <header className="mb-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
          <h1 className="text-4xl font-bold mb-2">📈 Market Dashboard</h1>
          <p className="text-slate-400">Real-time market data and AlertsAndNews</p>
        </header>

        {/* Major Indices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <p className="text-slate-400 text-sm">S&P 500</p>
            <p className="text-2xl font-bold">{marketData.sp500.value}</p>
            <p className="text-green-400">{marketData.sp500.change}</p>
          </div>
          <div className="card">
            <p className="text-slate-400 text-sm">NASDAQ</p>
            <p className="text-2xl font-bold">{marketData.nasdaq.value}</p>
            <p className="text-green-400">{marketData.nasdaq.change}</p>
          </div>
          <div className="card">
            <p className="text-slate-400 text-sm">DOW</p>
            <p className="text-2xl font-bold">{marketData.dow.value}</p>
            <p className="text-green-400">{marketData.dow.change}</p>
          </div>
        </div>

        {/* Premarket Movers */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Premarket Movers - Feb 6, 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700">
                  <th className="pb-3">Symbol</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Change</th>
                </tr>
              </thead>
              <tbody>
                {premarketMovers.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-slate-700/50">
                    <td className="py-3 font-semibold text-blue-400">{stock.symbol}</td>
                    <td className="py-3 text-slate-300">{stock.name}</td>
                    <td className="py-3">${stock.price}</td>
                    <td className={`py-3 ${stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stock.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AlertsAndNews Content */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">📱 AlertsAndNews Drafts</h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-xs text-slate-500 mb-2">Post Option 1 - AMZN Drop</p>
              <p className="text-sm text-slate-300">
                🚨 AMZN -10% ON CAPEX SPEND... EPS miss, $200B 2026 capex for AWS AI...
              </p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-xs text-slate-500 mb-2">Post Option 2 - Premarket Movers</p>
              <p className="text-sm text-slate-300">
                📈 PREMARKET MOVERS: LBTYB +182%, WHLR +45%, BATL +20%...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
