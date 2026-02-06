import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', href: '/' },
    { id: 'analyzer', name: 'Well Analyzer', href: '/orphan-well' },
    { id: 'cost', name: 'Well Cost Calculator', href: '/well-cost' },
    { id: 'expenses', name: 'Annual Expenses', href: '/expenses' },
    { id: 'todo', name: 'To-Do List', href: '/todo' },
    { id: 'settings', name: 'Settings', href: '/settings' },
  ]

  return (
    <>
      <Head>
        <title>Carbon Cut Solutions</title>
        <meta name="description" content="Orphan Well Analysis Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
        {/* Large Oil Derrick Background - Static and Prominent */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg className="w-full h-full max-w-4xl max-h-[800px] opacity-[0.08] absolute" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Derrick Tower */}
            <g transform="translate(100, 75)">
              {/* Main tower legs */}
              <path d="M-8,60 L-4,10 L-2,10 L-2,0 L2,0 L2,10 L4,10 L8,60 Z" fill="url(#oilGrad)"/>
              {/* Platform */}
              <rect x="-15" y="-8" width="30" height="6" rx="1" fill="url(#oilGrad)"/>
              {/* Cross braces */}
              <line x1="-4" y1="30" x2="4" y2="30" stroke="url(#oilGrad)" strokeWidth="1"/>
              <line x1="-6" y1="45" x2="6" y2="45" stroke="url(#oilGrad)" strokeWidth="1"/>
              <line x1="-4" y1="20" x2="4" y2="20" stroke="url(#oilGrad)" strokeWidth="1"/>
              {/* Base */}
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
                <a
                  key={item.id}
                  href={item.href}
                  className="block p-4 bg-[#111111] rounded-lg text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className={`hidden md:block fixed left-0 top-0 h-full bg-[#111111] border-r border-[#222222] transition-all duration-300 z-40 ${sidebarOpen ? 'w-56' : 'w-14'}`}>
          <div className="h-14 flex items-center px-4 border-b border-[#222222]">
            <span className="text-xl">🛢️</span>
            {sidebarOpen && <span className="ml-2 font-medium">Carbon Cut</span>}
          </div>
          <nav className="p-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center px-3 py-2.5 rounded-lg text-sm text-[#888888] hover:text-white hover:bg-[#1a1a1a] transition-all"
              >
                <span className="w-5">{item.id === 'dashboard' ? '●' : '○'}</span>
                {sidebarOpen && <span className="ml-2">{item.name}</span>}
              </a>
            ))}
          </nav>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#1a1a1a] rounded text-[#666666] hover:text-white"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </aside>

        {/* Main Content */}
        <main className={`md:transition-all md:duration-300 relative z-10 ${sidebarOpen ? 'md:ml-56' : 'md:ml-14'}`}>
          <div className="pt-16 md:pt-0 max-w-5xl mx-auto px-4 md:px-8 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">Carbon Cut Solutions</h1>
              <p className="text-[#666666]">Orphan well analysis and project management</p>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
              {[
                { label: 'Low Complexity', value: '$39,124' },
                { label: 'Typical', value: '$80,542' },
                { label: 'High Complexity', value: '$171,718' },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 md:p-5 bg-[#111111] rounded-xl border border-[#222222]">
                  <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs md:text-sm text-[#666666] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-white mb-3">Tools</h2>
              <div className="space-y-2">
                {[
                  { name: 'Well Analyzer', desc: 'Look up orphan wells by API, state, county', href: '/orphan-well' },
                  { name: 'Well Cost Calculator', desc: 'Cost estimates by complexity level', href: '/well-cost' },
                  { name: 'Annual Expenses', desc: 'Budget overview and expense tracking', href: '/expenses' },
                  { name: 'To-Do List', desc: 'Task management and project planning', href: '/todo' },
                ].map((tool, idx) => (
                  <a
                    key={idx}
                    href={tool.href}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#444444] transition-all group"
                  >
                    <div className="mb-2 md:mb-0">
                      <p className="text-white group-hover:text-blue-300 transition-colors text-base md:text-lg">{tool.name}</p>
                      <p className="text-sm text-[#666666]">{tool.desc}</p>
                    </div>
                    <span className="text-[#444444] group-hover:text-white transition-colors">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Coming Soon */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-white mb-3">Coming Soon</h2>
              <div className="space-y-2">
                {['Project Templates', 'Cost Analysis', 'Documents'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#0d0d0d] border border-[#1a1a1a]"
                  >
                    <p className="text-[#555555]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
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