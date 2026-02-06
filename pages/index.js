import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activePage, setActivePage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

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
        {/* Subtle oil derrick silhouette background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute bottom-0 right-0 w-[800px] h-[600px] opacity-[0.03]" viewBox="0 0 100 75" preserveAspectRatio="none">
            <path d="M30,75 L30,40 L25,40 L25,45 L20,45 L20,35 L28,35 L28,20 L32,20 L32,35 L40,35 L40,45 L35,45 L35,40 L30,40 Z" fill="white"/>
            <rect x="15" y="45" width="30" height="30" fill="white" opacity="0.5"/>
            <path d="M0,75 L100,75 L100,70 L0,70 Z" fill="white" opacity="0.1"/>
          </svg>
        </div>

        {/* Sidebar */}
        <aside className={`fixed left-0 top-0 h-full bg-[#111111] border-r border-[#222222] transition-all duration-300 z-50 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
          {/* Logo */}
          <div className="h-16 flex items-center px-4 border-b border-[#222222]">
            <span className="text-2xl">🛢️</span>
            {sidebarOpen && <span className="ml-3 font-semibold text-lg">Carbon Cut</span>}
          </div>

          {/* Nav */}
          <nav className="p-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  activePage === item.id 
                    ? 'bg-[#1a1a1a] text-white' 
                    : 'text-[#888888] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <span className="text-lg w-6">{item.id === 'dashboard' ? '◎' : item.id === 'analyzer' ? '◎' : item.id === 'cost' ? '◎' : item.id === 'expenses' ? '◎' : item.id === 'todo' ? '◎' : '◎'}</span>
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </a>
            ))}
          </nav>

          {/* Toggle */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute bottom-4 right-4 w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#666666] hover:text-white transition-colors"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </aside>

        {/* Main Content */}
        <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl font-semibold text-white mb-2">Carbon Cut Solutions</h1>
              <p className="text-[#666666]">Orphan well analysis and project management</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Active Tools', value: '4' },
                { label: 'Cost Tiers', value: '3' },
                { label: 'Annual Budget', value: '$640K' },
                { label: 'Tasks', value: '8' },
              ].map((stat, idx) => (
                <div key={idx} className="p-4">
                  <p className="text-2xl font-semibold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-[#666666]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Section */}
            <section className="mb-10">
              <h2 className="text-lg font-medium text-white mb-4">Tools</h2>
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
                    className="flex items-center justify-between p-4 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all group"
                  >
                    <div>
                      <p className="text-white group-hover:text-blue-300 transition-colors">{tool.name}</p>
                      <p className="text-sm text-[#666666]">{tool.desc}</p>
                    </div>
                    <span className="text-[#444444] group-hover:text-white transition-colors">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Coming Soon */}
            <section className="mb-10">
              <h2 className="text-lg font-medium text-white mb-4">Coming Soon</h2>
              <div className="space-y-2">
                {['Project Templates', 'Cost Analysis', 'Documents'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a0a] border border-[#1a1a1a]"
                  >
                    <p className="text-[#555555]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-[#222222]">
              <div className="flex items-center justify-between text-sm text-[#444444]">
                <span>Carbon Cut Solutions</span>
                <a href="/settings" className="hover:text-white transition-colors">Settings</a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}