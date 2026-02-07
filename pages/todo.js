import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Todo() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTask, setNewTask] = useState({ title: '', category: 'todo', priority: 'medium' })
  const [filter, setFilter] = useState('all')

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', href: '/' },
    { id: 'analyzer', name: 'Well Analyzer', href: '/orphan-well' },
    { id: 'cost', name: 'Well Cost Calculator', href: '/well-cost' },
    { id: 'expenses', name: 'Annual Expenses', href: '/expenses' },
    { id: 'todo', name: 'To-Do List', href: '/todo' },
    { id: 'settings', name: 'Settings', href: '/settings' },
  ]

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Research orphan well databases', status: 'todo', priority: 'high' },
    { id: 2, title: 'Contact state environmental agency', status: 'todo', priority: 'medium' },
    { id: 3, title: 'Review cost estimation formulas', status: 'todo', priority: 'low' },
    { id: 4, title: 'Set up project timeline', status: 'doing', priority: 'medium' },
    { id: 5, title: 'Build initial dashboard', status: 'finished', priority: 'high' },
    { id: 6, title: 'Design cost calculator UI', status: 'finished', priority: 'high' },
    { id: 7, title: 'Add API integration for well data', status: 'future', priority: 'medium' },
    { id: 8, title: 'Create mobile app version', status: 'future', priority: 'low' },
    { id: 9, title: 'Add PDF report generation', status: 'future', priority: 'low' },
  ])

  const addTask = (e) => {
    e.preventDefault()
    if (!newTask.title.trim()) return
    const task = {
      id: Date.now(),
      title: newTask.title,
      category: newTask.category,
      priority: newTask.priority
    }
    setTasks([...tasks, task])
    setNewTask({ title: '', category: 'todo', priority: 'medium' })
    setShowAddModal(false)
  }

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const todoTasks = tasks.filter(t => t.status === 'todo' || t.status === 'doing')
  const finishedTasks = tasks.filter(t => t.status === 'finished')
  const futureTasks = tasks.filter(t => t.status === 'future')

  const getPriorityColor = (p) => {
    switch(p) {
      case 'high': return 'text-red-400 bg-red-900/20'
      case 'medium': return 'text-yellow-400 bg-yellow-900/20'
      case 'low': return 'text-green-400 bg-green-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

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

        {/* Add Task Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-4">Add New Task</h2>
              <form onSubmit={addTask}>
                <div className="mb-4">
                  <label className="block text-[#888888] text-sm mb-2">Task Description</label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-[#444444]"
                    placeholder="Enter task..."
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#888888] text-sm mb-2">Category</label>
                  <select
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                    className="w-full p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg text-white focus:outline-none"
                  >
                    <option value="todo">To Do</option>
                    <option value="doing">In Progress</option>
                    <option value="future">Future Ideas</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-[#888888] text-sm mb-2">Priority</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg text-white focus:outline-none"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 p-3 bg-[#222222] text-white rounded-lg hover:bg-[#333333]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 p-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className={`md:transition-all md:duration-300 relative z-10 ${sidebarOpen ? 'md:ml-56' : 'md:ml-14'}`}>
          <div className="pt-16 md:pt-0 max-w-6xl mx-auto px-4 md:px-8 py-8">
            <header className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">To-Do List</h1>
                <p className="text-[#666666]">Task management and project planning</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200"
              >
                + Add Task
              </button>
            </header>

            {/* Category Filter Tabs */}
            <div className="flex gap-2 mb-6">
              {[
                { id: 'all', label: 'All' },
                { id: 'todo', label: 'To Do' },
                { id: 'finished', label: 'Finished' },
                { id: 'future', label: 'Future Ideas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${filter === tab.id ? 'bg-white text-black' : 'bg-[#111111] text-[#888888] hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* To Do */}
              {(filter === 'all' || filter === 'todo') && (
                <section>
                  <h2 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    To Do
                    <span className="text-xs bg-[#222222] text-[#888888] px-2 py-0.5 rounded">{todoTasks.length}</span>
                  </h2>
                  <div className="space-y-2">
                    {todoTasks.filter(t => t.status === 'todo' || t.status === 'doing').map((task) => (
                      <div key={task.id} className="p-4 bg-[#111111] border border-[#222222] rounded-xl group">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-white">{task.title}</p>
                          <button onClick={() => deleteTask(task.id)} className="text-[#444444] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            ×
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <div className="flex gap-1">
                            <button
                              onClick={() => moveTask(task.id, 'finished')}
                              className="text-xs text-[#666666] hover:text-green-400"
                              title="Mark Finished"
                            >
                              ✓
                            </button>
                            <button
                              onClick={() => moveTask(task.id, 'future')}
                              className="text-xs text-[#666666] hover:text-blue-400"
                              title="Move to Future"
                            >
                              →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filter === 'todo' && todoTasks.filter(t => t.status === 'todo' || t.status === 'doing').length === 0 && (
                      <p className="text-[#555555] text-center py-4">No tasks in To Do</p>
                    )}
                  </div>
                </section>
              )}

              {/* Finished */}
              {(filter === 'all' || filter === 'finished') && (
                <section>
                  <h2 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    Finished
                    <span className="text-xs bg-[#222222] text-[#888888] px-2 py-0.5 rounded">{finishedTasks.length}</span>
                  </h2>
                  <div className="space-y-2">
                    {finishedTasks.map((task) => (
                      <div key={task.id} className="p-4 bg-[#111111] border border-[#222222] rounded-xl opacity-60 group">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-white line-through">{task.title}</p>
                          <button onClick={() => deleteTask(task.id)} className="text-[#444444] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            ×
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <button
                            onClick={() => moveTask(task.id, 'todo')}
                            className="text-xs text-[#666666] hover:text-yellow-400"
                            title="Move back to To Do"
                          >
                            ↺
                          </button>
                        </div>
                      </div>
                    ))}
                    {filter === 'finished' && finishedTasks.length === 0 && (
                      <p className="text-[#555555] text-center py-4">No finished tasks</p>
                    )}
                  </div>
                </section>
              )}

              {/* Future Ideas */}
              {(filter === 'all' || filter === 'future') && (
                <section>
                  <h2 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    Future Ideas
                    <span className="text-xs bg-[#222222] text-[#888888] px-2 py-0.5 rounded">{futureTasks.length}</span>
                  </h2>
                  <div className="space-y-2">
                    {futureTasks.map((task) => (
                      <div key={task.id} className="p-4 bg-[#111111] border border-[#222222] rounded-xl group">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-[#888888]">{task.title}</p>
                          <button onClick={() => deleteTask(task.id)} className="text-[#444444] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            ×
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <div className="flex gap-1">
                            <button
                              onClick={() => moveTask(task.id, 'todo')}
                              className="text-xs text-[#666666] hover:text-yellow-400"
                              title="Move to To Do"
                            >
                              ↺
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filter === 'future' && futureTasks.length === 0 && (
                      <p className="text-[#555555] text-center py-4">No future ideas</p>
                    )}
                  </div>
                </section>
              )}
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