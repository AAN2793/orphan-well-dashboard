import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Expenses() {
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

  const expenses = [
    { category: 'Banking & Financial', subcategory: 'Bank Fees', amount: 180 },
    { category: 'Banking & Financial', subcategory: 'Wire Fees', amount: 100 },
    { category: 'Vehicles & Equipment', subcategory: 'Truck Payments', amount: 14400 },
    { category: 'Vehicles & Equipment', subcategory: 'Fuel', amount: 3750 },
    { category: 'Vehicles & Equipment', subcategory: 'Vehicle Insurance', amount: 2000 },
    { category: 'Vehicles & Equipment', subcategory: 'Vehicle Repairs & Maintenance', amount: 5000 },
    { category: 'Vehicles & Equipment', subcategory: 'Registration & Licensing', amount: 250 },
    { category: 'Vehicles & Equipment', subcategory: 'Equipment Rental', amount: 10000 },
    { category: 'Vehicles & Equipment', subcategory: 'Equipment Maintenance', amount: 2000 },
    { category: 'Labor & Contractors', subcategory: 'W-2 Wages', amount: 160000 },
    { category: 'Labor & Contractors', subcategory: 'Payroll Taxes', amount: 36000 },
    { category: 'Labor & Contractors', subcategory: 'Employee Benefits', amount: 36000 },
    { category: 'Labor & Contractors', subcategory: '1099 Contractors', amount: 120000 },
    { category: 'Labor & Contractors', subcategory: 'Consulting Fees', amount: 100000 },
    { category: 'Insurance', subcategory: 'General Liability', amount: 1000 },
    { category: 'Insurance', subcategory: 'Workers Compensation', amount: 4000 },
    { category: 'Insurance', subcategory: 'Commercial Auto', amount: 2000 },
    { category: 'Insurance', subcategory: 'Umbrella / Excess Liability', amount: 500 },
    { category: 'Insurance', subcategory: 'Professional Liability (E&O)', amount: 1000 },
    { category: 'Interest & Financing', subcategory: 'Loan Interest', amount: 5000 },
    { category: 'Interest & Financing', subcategory: 'Equipment Financing Interest', amount: 5000 },
    { category: 'Job / Project Supplies', subcategory: 'Materials', amount: 1000 },
    { category: 'Job / Project Supplies', subcategory: 'Consumables', amount: 1000 },
    { category: 'Job / Project Supplies', subcategory: 'Safety Supplies', amount: 0 },
    { category: 'Job / Project Supplies', subcategory: 'PPE', amount: 300 },
    { category: 'Job / Project Supplies', subcategory: 'Disposal Fees', amount: 250 },
    { category: 'Legal & Professional Services', subcategory: 'Legal Fees', amount: 5000 },
    { category: 'Legal & Professional Services', subcategory: 'Accounting / CPA', amount: 1000 },
    { category: 'Legal & Professional Services', subcategory: 'Bookkeeping', amount: 1200 },
    { category: 'Legal & Professional Services', subcategory: 'Advisory Services', amount: 0 },
    { category: 'Meals & Entertainment', subcategory: 'Business Meals', amount: 5000 },
    { category: 'Meals & Entertainment', subcategory: 'Client Meals', amount: 1000 },
    { category: 'Meals & Entertainment', subcategory: 'Team Meals', amount: 1000 },
    { category: 'Office & Administrative', subcategory: 'Office Supplies', amount: 200 },
    { category: 'Office & Administrative', subcategory: 'Printing', amount: 200 },
    { category: 'Office & Administrative', subcategory: 'Postage', amount: 100 },
    { category: 'Office & Administrative', subcategory: 'Small Office Equipment', amount: 3000 },
    { category: 'Software & Technology', subcategory: 'Software Subscriptions', amount: 1800 },
    { category: 'Software & Technology', subcategory: 'Cloud Services', amount: 180 },
    { category: 'Software & Technology', subcategory: 'Data Services', amount: 800 },
    { category: 'Software & Technology', subcategory: 'Accounting Software', amount: 300 },
    { category: 'Software & Technology', subcategory: 'Project Management Tools', amount: 0 },
    { category: 'Other Business Expenses', subcategory: 'Miscellaneous Operating Expenses', amount: 10000 },
    { category: 'Other Business Expenses', subcategory: 'Small Tools (Non-Capitalized)', amount: 1000 },
    { category: 'Fees', subcategory: 'Permit Fees', amount: 0 },
    { category: 'Fees', subcategory: 'Filing Fees', amount: 5000 },
    { category: 'Fees', subcategory: 'Application Fees', amount: 1000 },
    { category: 'Fees', subcategory: 'Government Fees', amount: 0 },
    { category: 'Reimbursable Expenses', subcategory: 'Employee Reimbursements', amount: 20000 },
    { category: 'Reimbursable Expenses', subcategory: 'Partner Reimbursements', amount: 20000 },
    { category: 'Rent & Lease', subcategory: 'Office Rent', amount: 0 },
    { category: 'Rent & Lease', subcategory: 'Yard / Storage Lease', amount: 6000 },
    { category: 'Rent & Lease', subcategory: 'Equipment Leases', amount: 0 },
    { category: 'Rent & Lease', subcategory: 'Temporary Site Rentals', amount: 0 },
    { category: 'Repairs & Maintenance', subcategory: 'Facility Maintenance', amount: 0 },
    { category: 'Repairs & Maintenance', subcategory: 'Equipment Repairs', amount: 0 },
    { category: 'Repairs & Maintenance', subcategory: 'Grounds Maintenance', amount: 0 },
    { category: 'Software Development', subcategory: 'App Development', amount: 0 },
    { category: 'Software Development', subcategory: 'Contract Developers', amount: 0 },
    { category: 'Software Development', subcategory: 'API Usage Fees', amount: 0 },
    { category: 'Software Development', subcategory: 'Hosting', amount: 0 },
    { category: 'Taxes & Licensing', subcategory: 'State Taxes', amount: 0 },
    { category: 'Taxes & Licensing', subcategory: 'Local Taxes', amount: 0 },
    { category: 'Taxes & Licensing', subcategory: 'Business Licenses', amount: 0 },
    { category: 'Taxes & Licensing', subcategory: 'Franchise Taxes', amount: 0 },
    { category: 'Taxes & Licensing', subcategory: 'Annual Filings', amount: 1000 },
    { category: 'Travel', subcategory: 'Hotels', amount: 10000 },
    { category: 'Travel', subcategory: 'Airfare', amount: 5000 },
    { category: 'Travel', subcategory: 'Rental Cars', amount: 5000 },
    { category: 'Travel', subcategory: 'Mileage', amount: 10000 },
    { category: 'Travel', subcategory: 'Per Diem', amount: 2250 },
    { category: 'Utilities', subcategory: 'Electricity', amount: 0 },
    { category: 'Utilities', subcategory: 'Water', amount: 0 },
    { category: 'Utilities', subcategory: 'Internet', amount: 225 },
    { category: 'Utilities', subcategory: 'Phone / Mobile', amount: 216 },
    { category: 'Utilities', subcategory: 'Data Plans', amount: 0 },
    { category: 'Marketing & Business Development', subcategory: 'Advertising', amount: 0 },
    { category: 'Marketing & Business Development', subcategory: 'Website Hosting', amount: 200 },
    { category: 'Marketing & Business Development', subcategory: 'Branding & Design', amount: 600 },
    { category: 'Marketing & Business Development', subcategory: 'Sponsorships', amount: 1000 },
    { category: 'Marketing & Business Development', subcategory: 'Client Outreach', amount: 0 },
    { category: 'Compliance & Safety', subcategory: 'Environmental Compliance', amount: 10000 },
    { category: 'Compliance & Safety', subcategory: 'Safety Training', amount: 2000 },
    { category: 'Compliance & Safety', subcategory: 'Inspections', amount: 500 },
    { category: 'Compliance & Safety', subcategory: 'Monitoring Services', amount: 1000 },
  ]

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  // Group by category
  const categories = {}
  expenses.forEach(e => {
    if (!categories[e.category]) categories[e.category] = 0
    categories[e.category] += e.amount
  })

  return (
    <>
      <Head>
        <title>Annual Expenses | Carbon Cut Solutions</title>
        <meta name="description" content="Budget overview and expense tracking" />
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
              <a key={item.id} href={item.href} className={`flex items-center px-3 py-2.5 rounded-lg text-sm transition-all ${item.id === 'expenses' ? 'text-white bg-[#1a1a1a]' : 'text-[#888888] hover:text-white hover:bg-[#1a1a1a]'}`}>
                <span className="w-5">{item.id === 'expenses' ? '●' : '○'}</span>
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
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">Annual Expenses</h1>
              <p className="text-[#666666]">Detailed budget breakdown</p>
            </header>

            {/* Total */}
            <section className="mb-8">
              <div className="p-6 bg-[#111111] border border-[#222222] rounded-xl text-center">
                <p className="text-[#666666] mb-2">Total Annual Budget</p>
                <p className="text-4xl md:text-5xl font-semibold text-white">${total.toLocaleString()}</p>
              </div>
            </section>

            {/* Category Summary */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-white mb-3">By Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {Object.entries(categories).map(([cat, amount]) => (
                  <div key={cat} className="p-3 bg-[#111111] border border-[#222222] rounded-xl">
                    <p className="text-[#666666] text-xs">{cat}</p>
                    <p className="text-white font-semibold">${amount.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Full Expense List */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-white mb-3">All Expenses</h2>
              <div className="space-y-1">
                {expenses.filter(e => e.amount > 0).map((expense, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-[#111111] border border-[#222222] rounded-lg">
                    <div>
                      <p className="text-white text-sm">{expense.subcategory}</p>
                      <p className="text-[#555555] text-xs">{expense.category}</p>
                    </div>
                    <p className="text-[#888888]">${expense.amount.toLocaleString()}</p>
                  </div>
                ))}
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