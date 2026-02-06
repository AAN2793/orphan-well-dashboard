import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Todo() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Research orphan well databases', status: 'todo', priority: 'high' },
    { id: 2, title: 'Contact state environmental agency', status: 'todo', priority: 'medium' },
    { id: 3, title: 'Review cost estimation formulas', status: 'todo', priority: 'low' },
    { id: 4, title: 'Set up project timeline', status: 'doing', priority: 'medium' },
  ])

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', href: '/' },
    { id: 'analyzer', name: 'Well Analyzer', href: '/orphan-well' },
    { id: 'cost', name: 'Well Cost Calculator', href: '/well-cost' },
    { id: 'expenses', name: 'Annual Expenses', href: '/expenses' },
    { id: 'todo', name: 'To-Do List', href: '/todo' },
    { id: 'settings', name: 'Settings', href: '/settings' },
  ]

  const todoTasks = tasks.filter(t => t.status === 'todo')
  const doingTasks = tasks.filter(t => t.status === 'doing')
  const doneTasks = tasks.filter(t => t.status === 'done')

  return (
    <>
      <Head>
        <title>To-Do List | Carbon Cut Solutions</title>
        <meta name="description" content="Task management and project planning" />
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
              <a key={item.id} href={item.href} className={`flex items-center px-3 py-2.5 rounded-lg text-sm transition-all ${item.id === 'todo' ? 'text-white bg-[#1a1a1a]' : 'text-[#888888] hover:text-white hover:bg-[#1a1a1a]'}`}>
                <span className="w-5">{item.id === 'todo' ? '●' : '○'}</span>
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
            <header className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">To-Do List</h1>
                <p className="text-[#666666]">Task management and project planning</p>
              </div>
              <button className="px-4 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333]">
                + Add Task
              </button>
            </header>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* To Do */}
              <section>
                <h2 className="text-lg font-medium text-white mb-3">To Do ({todoTasks.length})</h2>
                <div className="space-y-2">
                  {todoTasks.map((task) => (
                    <div key={task.id} className="p-4 bg-[#111111] border border-[#222222] rounded-xl">
                      <p className="text-white mb-2">{task.title}</p>
                      <span className={`text-xs px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-900/30 text-red-400' : task.priority === 'medium' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-green-900/30 text-green-400'}`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Doing */}
              <section>
                <h2 className="text-lg font-medium text-white mb-3">Doing ({doingTasks.length})</h2>
                <div className="space-y-2">
                  {doingTasks.map((task) => (
                    <div key={task.id} className="p-4 bg-[#111111] border border-[#222222] rounded-xl">
                      <p className="text-white mb-2">{task.title}</p>
                      <span className={`text-xs px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-900/30 text-red-400' : task.priority === 'medium' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-green-900/30 text-green-400'}`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Done */}
              <section>
                <h2 className="text-lg font-medium text-white mb-3">Done ({doneTasks.length})</h2>
                <div className="space-y-2">
                  {doneTasks.map((task) => (
                    <div key={task.id} className="p-4 bg-[#111111] border border-[#222222] rounded-xl opacity-50">
                      <p className="text-white mb-2 line-through">{task.title}</p>
                      <span className="text-xs px-2 py-1 rounded bg-[#333333] text-[#888888]">
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

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