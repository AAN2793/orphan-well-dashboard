import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Expenses() {
  const [expenses, setExpenses] = useState([
    { category: 'Labor', annual: 240000, monthly: 20000 },
    { category: 'Equipment', annual: 85000, monthly: 7083 },
    { category: 'Insurance', annual: 36000, monthly: 3000 },
    { category: 'Transportation', annual: 42000, monthly: 3500 },
    { category: 'Permits & Compliance', annual: 18000, monthly: 1500 },
    { category: 'Software & Tech', annual: 12000, monthly: 1000 },
    { category: 'Marketing', annual: 24000, monthly: 2000 },
    { category: 'Office & Admin', annual: 18000, monthly: 1500 },
  ])

  const totalAnnual = expenses.reduce((sum, e) => sum + e.annual, 0)
  const totalMonthly = expenses.reduce((sum, e) => sum + e.monthly, 0)

  return (
    <>
      <Head>
        <title>Annual Expenses | Carbon Cut Solutions</title>
      </Head>

      <div className="min-h-screen p-4 md:p-8">
        <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">💰 Annual Estimated Expenses</h1>
        <p className="text-slate-400 mb-8">Carbon Cut Solutions - Annual Budget Overview</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card bg-blue-900/30 border-blue-700/50">
            <p className="text-slate-400 text-sm">Total Annual Expenses</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-400">${totalAnnual.toLocaleString()}</p>
          </div>
          <div className="card bg-green-900/30 border-green-700/50">
            <p className="text-slate-400 text-sm">Monthly Average</p>
            <p className="text-2xl md:text-3xl font-bold text-green-400">${totalMonthly.toLocaleString()}</p>
          </div>
          <div className="card bg-purple-900/30 border-purple-700/50">
            <p className="text-slate-400 text-sm">Categories</p>
            <p className="text-2xl md:text-3xl font-bold text-purple-400">{expenses.length}</p>
          </div>
        </div>

        {/* Add Category Form */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">➕ Add Expense Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Category name..."
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
            />
            <input 
              type="number" 
              placeholder="Annual estimate..."
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
            />
            <input 
              type="number" 
              placeholder="Monthly..."
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
            />
            <button className="btn btn-primary">Add</button>
          </div>
        </div>

        {/* Expenses Table */}
        <div className="card overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">📊 Expense Breakdown</h2>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-slate-400 text-sm border-b border-slate-700">
                <th className="pb-3 pr-4">Category</th>
                <th className="pb-3 pr-4">Annual</th>
                <th className="pb-3 pr-4">Monthly</th>
                <th className="pb-3">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, idx) => (
                <tr key={idx} className="border-b border-slate-700/50">
                  <td className="py-3 pr-4 font-medium">{expense.category}</td>
                  <td className="py-3 pr-4 text-slate-300">${expense.annual.toLocaleString()}</td>
                  <td className="py-3 pr-4 text-slate-300">${expense.monthly.toLocaleString()}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500" 
                          style={{ width: `${(expense.annual / totalAnnual) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-400">
                        {((expense.annual / totalAnnual) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-600">
                <td className="py-4 pr-4 font-bold">TOTAL</td>
                <td className="py-4 pr-4 font-bold text-blue-400">${totalAnnual.toLocaleString()}</td>
                <td className="py-4 pr-4 font-bold text-green-400">${totalMonthly.toLocaleString()}</td>
                <td className="py-4">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Export Options */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-4">📤 Export</h2>
          <div className="flex gap-4">
            <button className="btn btn-primary">Download CSV</button>
            <button className="btn bg-slate-700 hover:bg-slate-600 text-white">Print / PDF</button>
          </div>
        </div>
      </div>
    </>
  )
}
