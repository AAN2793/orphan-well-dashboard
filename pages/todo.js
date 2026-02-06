import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Todo() {
  const [tasks, setTasks] = useState({
    'To Do': [
      { id: 1, title: 'Finalize grant applications', tag: 'grant' },
      { id: 2, title: 'Contact state regulators', tag: 'compliance' },
      { id: 3, title: 'Review well cost estimates', tag: 'planning' },
    ],
    'Working On': [
      { id: 4, title: 'Methane tracker design', tag: 'tool' },
      { id: 5, title: 'Update expense categories', tag: 'admin' },
    ],
    'Complete': [
      { id: 6, title: 'Well cost calculator', tag: 'tool', completed: true },
      { id: 7, title: 'Annual expenses sheet', tag: 'finance', completed: true },
      { id: 8, title: 'Navigation toolbar', tag: 'ui', completed: true },
    ],
    'Future Ideas': [
      { id: 9, title: 'AI-powered well identification', tag: 'ai' },
      { id: 10, title: 'Automated report generation', tag: 'automation' },
      { id: 11, title: 'Mobile app version', tag: 'mobile' },
      { id: 12, title: 'Partner portal', tag: 'feature' },
    ],
  })

  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('To Do')
  const [draggedTask, setDraggedTask] = useState(null)

  const categories = ['To Do', 'Working On', 'Complete', 'Future Ideas']

  const addTask = () => {
    if (!newTask.trim()) return
    const task = {
      id: Date.now(),
      title: newTask,
      tag: 'general'
    }
    setTasks({
      ...tasks,
      [newCategory]: [...tasks[newCategory], task]
    })
    setNewTask('')
  }

  const deleteTask = (category, taskId) => {
    setTasks({
      ...tasks,
      [category]: tasks[category].filter(t => t.id !== taskId)
    })
  }

  const toggleComplete = (category, taskId) => {
    setTasks({
      ...tasks,
      [category]: tasks[category].map(t => 
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    })
  }

  const handleDragStart = (e, task, fromCategory) => {
    setDraggedTask({ task, fromCategory })
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, toCategory) => {
    e.preventDefault()
    if (!draggedTask) return
    
    const { task, fromCategory } = draggedTask
    if (fromCategory === toCategory) return
    
    const newFromList = tasks[fromCategory].filter(t => t.id !== task.id)
    const newToList = [...tasks[toCategory], task]
    
    setTasks({
      ...tasks,
      [fromCategory]: newFromList,
      [toCategory]: newToList
    })
    setDraggedTask(null)
  }

  const getTagColor = (tag) => {
    const colors = {
      'tool': 'bg-blue-900 text-blue-300',
      'grant': 'bg-green-900 text-green-300',
      'compliance': 'bg-red-900 text-red-300',
      'planning': 'bg-yellow-900 text-yellow-300',
      'finance': 'bg-purple-900 text-purple-300',
      'admin': 'bg-slate-700 text-slate-300',
      'ai': 'bg-indigo-900 text-indigo-300',
      'automation': 'bg-cyan-900 text-cyan-300',
      'mobile': 'bg-pink-900 text-pink-300',
      'feature': 'bg-orange-900 text-orange-300',
      'ui': 'bg-teal-900 text-teal-300',
      'general': 'bg-slate-700 text-slate-400',
    }
    return colors[tag] || colors['general']
  }

  return (
    <>
      <Head>
        <title>To-Do List | Carbon Cut Solutions</title>
      </Head>

      <div className="min-h-screen bg-slate-900 p-4 md:p-8">
        <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">To-Do List</h1>
        <p className="text-slate-400 mb-8">Carbon Cut Solutions - Task Management</p>

        {/* Add New Task */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task..."
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button onClick={addTask} className="btn btn-primary">
              Add Task
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(category => (
            <div
              key={category}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, category)}
              className="bg-slate-800 rounded-xl p-4 min-h-[300px]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{category}</h3>
                <span className="text-slate-400 text-sm">{tasks[category].length}</span>
              </div>
              
              <div className="space-y-2">
                {tasks[category].map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task, category)}
                    className={`p-3 bg-slate-700 rounded-lg cursor-move hover:bg-slate-600 transition-colors ${
                      task.completed ? 'opacity-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className={`text-sm ${task.completed ? 'line-through text-slate-500' : 'text-white'}`}>
                          {task.title}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded mt-1 inline-block ${getTagColor(task.tag)}`}>
                          {task.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {category !== 'Complete' && (
                          <button
                            onClick={() => toggleComplete(category, task.id)}
                            className="text-slate-400 hover:text-green-400"
                          >
                            ✓
                          </button>
                        )}
                        <button
                          onClick={() => deleteTask(category, task.id)}
                          className="text-slate-400 hover:text-red-400"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>Add tasks: Type a task name and select a column, then click "Add Task"</li>
            <li>Move tasks: Drag and drop tasks between columns</li>
            <li>Complete tasks: Click the checkmark to mark as complete</li>
            <li>Delete tasks: Click the X to remove a task</li>
            <li>Tag system: Use tags like 'tool', 'grant', 'compliance' for organization</li>
          </ul>
        </div>
      </div>
    </>
  )
}
