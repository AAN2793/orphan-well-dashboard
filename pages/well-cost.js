import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function WellCost() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [complexity, setComplexity] = useState('typical')
  const [wellType, setWellType] = useState('oil')

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', href: '/' },
    { id: 'analyzer', name: 'Well Analyzer', href: '/orphan-well' },
    { id: 'cost', name: 'Well Cost Calculator', href: '/well-cost' },
    { id: 'expenses', name: 'Annual Expenses', href: '/expenses' },
    { id: 'todo', name: 'To-Do List', href: '/todo' },
    { id: 'settings', name: 'Settings', href: '/settings' },
  ]

  // Real bid data from PA & OH contracts
  const costTiers = {
    low: { oil: 75000, gas: 75000, desc: 'Simple access, straightforward plug' },
    typical: { oil: 106381, gas: 106381, desc: 'Based on Ohio 2024 avg: $106,381/well' },
    high: { oil: 150000, gas: 150000, desc: 'Difficult access, multiple casings, environmental concerns' }
  }

  const getCost = () => {
    return costTiers[complexity][wellType]
  }

  return (
    <>
      <Head>
        <title>Well Cost Calculator | Carbon Cut Solutions</title>
        <meta name="description" content="Cost estimates based on real contract bids" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
        {/* Oil Derrick Background */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg className="w-full h-full max-w-4xl max-h-[800px] opacity-[0.08] absolute" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <g transform="translate(100, 75)">
              <path d="M-8,60 L-4,10 L-2,10 L-2,0 L2,0 L2,10 L4,10 L8,60 Z" fill="url(#oilGrad)"/>
              <rect x="-15" y="-8" width="30" height="6" rx="1" fill="url(#oilGrad)"/>
              <line x1="-4" y1="30" x2="4" y2="30" stroke="url(#oilGrad)" strokeWidth="1"/>
              <line x1="-6" y1="45" x2="6" y2="45" stroke="url(#oilGrad)" strokeWidth="1"/>
              <line x1="-4" y1="20" x2="4" y2="20" stroke="url(#oilGrad)" strokeWidth="1"/>
              <rect x="-20" y="60" width="40" height="10" rx="2" fill="url(#oilGrad)"/>
            </g>
          </svg>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#111111] border-b border-[#222222] flex items-center justify-between px-4 z-50">
          <span className="text-lg">Carbon Cut</span>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0a0a0a] z-40 pt-14 p-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a key={item.id} href={item.href} className="block p-4 bg-[#111111] rounded-lg text-white" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Sidebar */}
        <aside className={`hidden md:block fixed left-0 top-0 h-full bg-[#111111] border-r border-[#222222] transition-all duration-300 z-40 ${sidebarOpen ? 'w-56' : 'w-14'}`}>
          <div className="h-14 flex items-center px-4 border-b border-[#222222]">
            <span className="text-xl">🛢️</span>
            {sidebarOpen && <span className="ml-2 font-medium">Carbon Cut</span>}
          </div>
          <nav className="p-2 space-y-1">
            {navItems.map((item) => (
              <a key={item.id} href={item.href} className={`flex items-center px-3 py-2.5 rounded-lg text-sm transition-all ${item.id === 'cost' ? 'text-white bg-[#1a1a1a]' : 'text-[#888888] hover:text-white hover:bg-[#1a1a1a]'}`}>
                <span className="w-5">{item.id === 'cost' ? '●' : '○'}</span>
                {sidebarOpen && <span className="ml-2">{item.name}</span>}
              </a>
            ))}
          </nav>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#1a1a1a] rounded text-[#666666] hover:text-white">
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </aside>

        {/* Main Content */}
        <main className={`md:transition-all md:duration-300 relative z-10 ${sidebarOpen ? 'md:ml-56' : 'md:ml-14'}`}>
          <div className="pt-16 md:pt-0 max-w-5xl mx-auto px-4 md:px-8 py-8">
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">Well Cost Calculator</h1>
              <p className="text-[#666666]">Based on real PA & OH contract bids</p>
            </header>

            {/* Real Data Reference */}
            <section className="mb-6">
              <div className="p-4 bg-[#111111] border border-[#222222] rounded-xl">
                <h3 className="text-white font-medium mb-2">Real Contract Data</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#0d0d0d] rounded-lg">
                    <p className="text-[#666666] text-sm">Pennsylvania Avg</p>
                    <p className="text-white font-semibold">$110,132/well</p>
                    <p className="text-[#555555] text-xs">227 wells (2022-2024)</p>
                  </div>
                  <div className="p-3 bg-[#0d0d0d] rounded-lg">
                    <p className="text-[#666666] text-sm">Ohio Avg</p>
                    <p className="text-white font-semibold">$106,381/well</p>
                    <p className="text-[#555555] text-xs">346 wells (2024)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Calculator */}
            <section className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Well Type */}
                <div className="p-6 bg-[#111111] border border-[#222222] rounded-xl">
                  <h2 className="text-lg font-medium text-white mb-4">Well Type</h2>
                  <div className="space-y-2">
                    {[
                      { id: 'oil', name: 'Oil Well' },
                      { id: 'gas', name: 'Gas Well' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setWellType(type.id)}
                        className={`w-full p-4 rounded-lg text-left transition-all ${wellType === type.id ? 'bg-[#222222] text-white border border-[#444444]' : 'bg-[#0d0d0d] text-[#888888] border border-[#1a1a1a]'}`}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complexity */}
                <div className="p-6 bg-[#111111] border border-[#222222] rounded-xl">
                  <h2 className="text-lg font-medium text-white mb-4">Complexity</h2>
                  <div className="space-y-2">
                    {[
                      { id: 'low', name: 'Low Complexity', desc: costTiers.low.desc },
                      { id: 'typical', name: 'Typical', desc: costTiers.typical.desc },
                      { id: 'high', name: 'High Complexity', desc: costTiers.high.desc },
                    ].map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setComplexity(level.id)}
                        className={`w-full p-4 rounded-lg text-left transition-all ${complexity === level.id ? 'bg-[#222222] text-white border border-[#444444]' : 'bg-[#0d0d0d] text-[#888888] border border-[#1a1a1a]'}`}
                      >
                        <p className="font-medium">{level.name}</p>
                        <p className="text-sm text-[#666666]">{level.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Display */}
            <section className="mb-8">
              <div className="p-6 bg-[#111111] border border-[#222222] rounded-xl text-center">
                <p className="text-[#666666] mb-2">Estimated Cost Per Well</p>
                <p className="text-4xl md:text-5xl font-semibold text-white">${getCost().toLocaleString()}</p>
              </div>
            </section>

            {/* Cost Tiers Reference */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-white mb-3">Cost Tiers Reference</h2>
              <div className="grid grid-cols-3 gap-4">
                {['Low', 'Typical', 'High'].map((tier, idx) => {
                  const tierKey = tier.toLowerCase()
                  return (
                    <div key={tier} className="p-4 bg-[#111111] border border-[#222222] rounded-xl">
                      <p className="text-white font-medium mb-2">{tier} Complexity</p>
                      <p className="text-[#666666]">${costTiers[tierKey].oil.toLocaleString()}/well</p>
                    </div>
                  )
                })}
              </div>
            </section>

            <footer className="pt-6 border-t border-[#222222]">
              <div className="flex items-center justify-between text-sm text-[#444444]">
                <span>Carbon Cut Solutions</span>
                <a href="/settings" className="hover:text-white">Settings</a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}