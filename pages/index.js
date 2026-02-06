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
        {/* Oil Derrick Visual - Prominent in Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-[0.05]" viewBox="0 0 100 75" preserveAspectRatio="none">
            <defs>
              <linearGradient id="oilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Derrick */}
            <path d="M35,75 L35,45 L30,45 L30,48 L25,48 L25,35 L32,35 L32,15 L35,15 L35,35 L45,35 L45,48 L40,48 L40,45 L35,45 Z" fill="url(#oilGrad)"/>
            <rect x="20" y="48" width="30" height="27" fill="url(#oilGrad)"/>
            <rect x="0" y="72" width="100" height="3" fill="url(#oilGrad)"/>
          </svg>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#111111] border-b border-[#222222] flex items-center justify-between px-4 z-50">
          <span className="text-lg">🛢️ Carbon Cut</span>
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
        <main className={`md:transition-all md:duration-300 ${sidebarOpen ? 'md:ml-56' : 'md:ml-14'}`}>
          <div className="pt-16 md:pt-0 max-w-5xl mx-auto px-4 md:px-8 py-8 relative z-10">
            {/* Header with Oil Visual */}
            <header className="mb-8 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M8 21h8M8 21V9M8 9L4 5M8 9L12 5M12 5h4M12 9v12M16 9l4-4M16 9v12" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="6" y="15" width="12" height="6" rx="1"/>
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">Carbon Cut Solutions</h1>
              <p className="text-[#666666]">Orphan well analysis and project management</p>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
              {[
                { label: 'Active Tools', value: '4' },
                { label: 'Cost Tiers', value: '3' },
                { label: 'Annual Budget', value: '$640K' },
                { label: 'Tasks', value: '8' },
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