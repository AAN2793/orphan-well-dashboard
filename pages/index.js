import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [dropdown, setDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = {
    'Tools': [
      { name: 'Well Analyzer', href: '/orphan-well', desc: 'Look up orphan wells' },
      { name: 'Well Cost Calculator', href: '/well-cost', desc: 'Cost estimates by complexity' },
      { name: 'Annual Expenses', href: '/expenses', desc: 'Budget & expense tracking' },
    ],
    'Planning': [
      { name: 'To-Do List', href: '/todo', desc: 'Task management' },
      { name: 'Project Templates', href: '/templates', desc: 'Coming soon' },
      { name: 'Cost Analysis', href: '/analysis', desc: 'Coming soon' },
    ],
    'Resources': [
      { name: 'Documents', href: '/documents', desc: 'Coming soon' },
      { name: 'External Links', href: '/links', desc: 'Coming soon' },
    ],
  }

  const quickLinks = [
    { name: 'Well Analyzer', href: '/orphan-well', category: 'tools' },
    { name: 'Well Cost Calculator', href: '/well-cost', category: 'tools' },
    { name: 'Annual Expenses', href: '/expenses', category: 'tools' },
    { name: 'To-Do List', href: '/todo', category: 'planning' },
    { name: 'Settings', href: '/settings', category: 'settings' },
  ]

  return (
    <>
      <Head>
        <title>Carbon Cut Solutions | Orphan Well Tool</title>
        <meta name="description" content="Orphan Well Analysis Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-slate-900">
        {/* Mobile Header */}
        <div className="md:hidden bg-gradient-to-r from-slate-800 to-slate-700 p-4 flex items-center justify-between">
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
              Settings
            </a>
          </div>
        )}

        {/* Desktop Navbar */}
        <nav className="hidden md:block bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛢️</span>
                <div>
                  <span className="font-bold text-lg">Carbon Cut Solutions</span>
                  <p className="text-xs text-slate-400">Orphan Well Analysis Tool</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Object.entries(navItems).map(([label, items]) => (
                  <div 
                    key={label}
                    className="relative"
                    onMouseEnter={() => setDropdown(label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-all text-sm">
                      {label} ▾
                    </button>
                    {dropdown === label && (
                      <div className="absolute top-full right-0 mt-1 w-56 bg-slate-800 border border-slate-600 rounded-lg shadow-xl py-2 z-50">
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
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-400 text-sm">Online</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:p-8 pt-12 pb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Carbon Cut Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              Orphan well analysis, cost estimation, and project management for environmental remediation.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pb-16">
          {/* Quick Links Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Quick Access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 hover:from-slate-700 hover:to-slate-600 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -mr-16 -mt-16 transform group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <span className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {link.name} →
                    </span>
                    <p className="text-sm text-slate-400 mt-1 capitalize">{link.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Coming Soon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                'Project Templates',
                'Cost Analysis', 
                'Documents'
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                >
                  <span className="text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl p-6 text-center border border-blue-700/30">
              <p className="text-3xl font-bold text-blue-400">3</p>
              <p className="text-sm text-slate-400">Active Tools</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-2xl p-6 text-center border border-green-700/30">
              <p className="text-3xl font-bold text-green-400">$640K</p>
              <p className="text-sm text-slate-400">Annual Budget</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-6 text-center border border-purple-700/30">
              <p className="text-3xl font-bold text-purple-400">3</p>
              <p className="text-sm text-slate-400">Cost Tiers</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-2xl p-6 text-center border border-yellow-700/30">
              <p className="text-3xl font-bold text-yellow-400">1</p>
              <p className="text-sm text-slate-400">Active Projects</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 flex justify-between items-center text-sm text-slate-500">
            <span>Carbon Cut Solutions</span>
            <a href="/settings" className="hover:text-white transition-colors">Settings →</a>
          </div>
        </main>
      </div>
    </>
  )
}