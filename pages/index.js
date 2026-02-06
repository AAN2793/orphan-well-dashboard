import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [dropdown, setDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = {
    'Tools': [
      { name: '🔍 Well Analyzer', href: '/orphan-well', desc: 'Look up orphan wells' },
      { name: '🏗️ Well Cost Calculator', href: '/well-cost', desc: 'Cost estimates' },
      { name: '💰 Annual Expenses', href: '/expenses', desc: 'Budget tracking' },
    ],
    'Planning': [
      { name: '📋 To-Do List', href: '/todo', desc: 'Task management' },
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
        <meta name="description" content="Orphan Well Analysis Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-slate-900">
        {/* Mobile Header */}
        <div className="md:hidden bg-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛢️</span>
            <span className="font-bold">Carbon Cut</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 p-4 space-y-2">
            {Object.entries(navItems).map(([label, items]) => (
              <div key={label}>
                <div className="text-slate-400 text-sm mb-1">{label}</div>
                {items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block py-2 px-2 text-white bg-slate-700 rounded mb-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
            <a href="/settings" className="block py-2 px-2 text-white bg-slate-700 rounded">
              ⚙️ Settings
            </a>
          </div>
        )}

        {/* Desktop Navbar */}
        <nav className="hidden md:block bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛢️</span>
                <span className="font-bold">Carbon Cut Solutions</span>
              </div>
              <div className="flex items-center gap-1">
                {Object.entries(navItems).map(([label, items]) => (
                  <div 
                    key={label}
                    className="relative"
                    onMouseEnter={() => setDropdown(label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                      {label} ▾
                    </button>
                    {dropdown === label && (
                      <div className="absolute top-full right-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 z-50">
                        {items.map((item, idx) => (
                          <a key={idx} href={item.href} className="block px-4 py-2 hover:bg-slate-700">
                            <div className="text-white text-sm">{item.name}</div>
                            <div className="text-slate-400 text-xs">{item.desc}</div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-slate-400 text-sm">Online</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Header */}
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">🛢️ Orphan Well Analysis Tool</h1>
            <p className="text-slate-400 text-sm md:text-base">Carbon Cut Solutions - Well Planning & Cost Management</p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
            {[
              { label: 'Active Tools', value: '3', color: 'blue' },
              { label: 'Calculators', value: '1', color: 'green' },
              { label: 'Budget', value: '$640K', color: 'yellow' },
              { label: 'Complexity', value: '3', color: 'purple' },
            ].map((stat, idx) => (
              <div key={idx} className="card text-center">
                <p className="text-slate-400 text-xs md:text-sm">{stat.label}</p>
                <p className={`text-xl md:text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <h2 className="text-lg md:text-2xl font-bold mb-4">🛠️ Available Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            {[
              { href: '/orphan-well', icon: '🔍', title: 'Well Analyzer', desc: 'Look up orphan wells' },
              { href: '/well-cost', icon: '🏗️', title: 'Well Cost Calculator', desc: 'Cost estimates by complexity' },
              { href: '/expenses', icon: '💰', title: 'Annual Expenses', desc: 'Budget & expense tracking' },
            ].map((tool, idx) => (
              <a key={idx} href={tool.href} className="card hover:border-blue-500/50 transition-all">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{tool.title}</h3>
                <p className="text-slate-400 text-sm">{tool.desc}</p>
              </a>
            ))}
          </div>

          {/* Coming Soon */}
          <h2 className="text-lg md:text-2xl font-bold mb-4">🔜 Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            {[
              { icon: '💰', title: 'Grant Finder', desc: 'Government grants' },
              { icon: '🌡️', title: 'Methane Tracker', desc: 'Emission monitoring' },
              { icon: '📋', title: 'Compliance Check', desc: 'Regulatory compliance' },
            ].map((item, idx) => (
              <div key={idx} className="card opacity-60">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Settings */}
          <div className="flex justify-end">
            <a href="/settings" className="text-slate-400 hover:text-white text-sm">⚙️ Settings →</a>
          </div>
        </main>
      </div>
    </>
  )
}