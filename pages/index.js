import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [dropdown, setDropdown] = useState(null)

  const navItems = {
    'Tools': [
      { name: '🔍 Well Analyzer', href: '/orphan-well', desc: 'Look up orphan wells' },
      { name: '🏗️ Well Cost Calculator', href: '/well-cost', desc: 'Cost estimates by complexity' },
      { name: '💰 Annual Expenses', href: '/expenses', desc: 'Budget & expense tracking' },
    ],
    'Planning': [
      { name: '📋 Project Templates', href: '/templates', desc: 'Coming soon' },
      { name: '📊 Cost Analysis', href: '/analysis', desc: 'Coming soon' },
    ],
    'Resources': [
      { name: '📁 Documents', href: '/documents', desc: 'Coming soon' },
      { name: '🔗 External Links', href: '/links', desc: 'Coming soon' },
    ],
  }

  return (
    <>
      <Head>
        <title>Carbon Cut Solutions | Orphan Well Tool</title>
        <meta name="description" content="Orphan Well Analysis Tool for Carbon Cut Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-slate-900" onClick={() => setDropdown(null)}>
        {/* Top Navigation Bar */}
        <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="text-xl">🛢️</span>
                <span className="font-bold text-lg">Carbon Cut Solutions</span>
              </div>

              {/* Nav Links */}
              <div className="flex items-center gap-1">
                {Object.entries(navItems).map(([label, items]) => (
                  <div 
                    key={label}
                    className="relative"
                    onClick={(e) => { e.stopPropagation(); setDropdown(dropdown === label ? null : label); }}
                  >
                    <button className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors text-sm md:text-base">
                      {label} ▾
                    </button>
                    
                    {dropdown === label && (
                      <div 
                        className="absolute top-full right-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 max-h-64 overflow-y-auto z-50"
                      >
                        {items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 hover:bg-slate-700 transition-colors"
                          >
                            <div className="font-medium text-white text-sm md:text-base">{item.name}</div>
                            {item.desc && <div className="text-xs text-slate-400">{item.desc}</div>}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-sm hidden md:flex">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-slate-400">Online</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">🛢️ Orphan Well Analysis Tool</h1>
            <p className="text-slate-400">Carbon Cut Solutions - Well Planning & Cost Management</p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8">
            <div className="card">
              <p className="text-slate-400 text-xs md:text-sm">Active Tools</p>
              <p className="text-xl md:text-2xl font-bold text-blue-400">3</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-xs md:text-sm">Cost Calculators</p>
              <p className="text-xl md:text-2xl font-bold text-green-400">1</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-xs md:text-sm">Budget Tracked</p>
              <p className="text-xl md:text-2xl font-bold text-yellow-400">$640K</p>
            </div>
            <div className="card">
              <p className="text-slate-400 text-xs md:text-sm">Complexity Levels</p>
              <p className="text-xl md:text-2xl font-bold text-purple-400">3</p>
            </div>
          </div>

          {/* Tools Grid */}
          <h2 className="text-2xl font-bold mb-4">🛠️ Available Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            
            {/* Well Analyzer */}
            <Link href="/orphan-well" className="card hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                Well Analyzer
              </h3>
              <p className="text-slate-400 text-sm">
                Look up orphan wells by API, state, county, or operator.
              </p>
            </Link>

            {/* Well Cost Calculator */}
            <Link href="/well-cost" className="card hover:border-yellow-500/50 transition-all group">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                Well Cost Calculator
              </h3>
              <p className="text-slate-400 text-sm">
                Low, Typical, and High complexity cost estimates.
              </p>
            </Link>

            {/* Annual Expenses */}
            <Link href="/expenses" className="card hover:border-green-500/50 transition-all group">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                Annual Expenses
              </h3>
              <p className="text-slate-400 text-sm">
                Budget overview, expense tracking, and financial planning.
              </p>
            </Link>
          </div>

          {/* Placeholders */}
          <h2 className="text-2xl font-bold mb-4">🔜 Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="card opacity-60 cursor-not-allowed">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Grant Finder</h3>
              <p className="text-slate-400 text-sm">
                Government grant matching
              </p>
            </div>

            <div className="card opacity-60 cursor-not-allowed">
              <div className="text-4xl mb-3">🌡️</div>
              <h3 className="text-xl font-semibold mb-2">Methane Tracker</h3>
              <p className="text-slate-400 text-sm">
                Emission monitoring
              </p>
            </div>

            <div className="card opacity-60 cursor-not-allowed">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-semibold mb-2">Compliance Check</h3>
              <p className="text-slate-400 text-sm">
                Regulatory compliance
              </p>
            </div>
          </div>

          {/* Settings Link */}
          <div className="flex justify-end">
            <Link href="/settings" className="text-slate-400 hover:text-white text-sm">
              ⚙️ Settings →
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}
