import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Expenses() {
  const [expenses] = useState([
    // Banking & Financial
    { category: 'Bank Fees', annual: 180, monthly: 15, group: 'Banking & Financial' },
    { category: 'Wire Fees', annual: 100, monthly: 8, group: 'Banking & Financial' },
    { category: 'ACH Fees', annual: 0, monthly: 0, group: 'Banking & Financial' },
    { category: 'Merchant Fees', annual: 0, monthly: 0, group: 'Banking & Financial' },
    
    // Vehicles & Equipment
    { category: 'Truck Payments', annual: 14400, monthly: 1200, group: 'Vehicles & Equipment' },
    { category: 'Fuel', annual: 3750, monthly: 313, group: 'Vehicles & Equipment' },
    { category: 'Vehicle Insurance', annual: 2000, monthly: 167, group: 'Vehicles & Equipment' },
    { category: 'Vehicle Repairs & Maintenance', annual: 5000, monthly: 417, group: 'Vehicles & Equipment' },
    { category: 'Registration & Licensing', annual: 250, monthly: 21, group: 'Vehicles & Equipment' },
    { category: 'Equipment Rental', annual: 10000, monthly: 833, group: 'Vehicles & Equipment' },
    { category: 'Equipment Maintenance', annual: 2000, monthly: 167, group: 'Vehicles & Equipment' },
    
    // Labor & Contractors
    { category: 'W-2 Wages', annual: 160000, monthly: 13333, group: 'Labor & Contractors' },
    { category: 'Payroll Taxes', annual: 36000, monthly: 3000, group: 'Labor & Contractors' },
    { category: 'Employee Benefits', annual: 36000, monthly: 3000, group: 'Labor & Contractors' },
    { category: '1099 Contractors', annual: 120000, monthly: 10000, group: 'Labor & Contractors' },
    { category: 'Consulting Fees', annual: 100000, monthly: 8333, group: 'Labor & Contractors' },
    { category: 'Overtime / Premium Labor', annual: 0, monthly: 0, group: 'Labor & Contractors' },
    
    // Insurance
    { category: 'General Liability', annual: 1000, monthly: 83, group: 'Insurance' },
    { category: 'Workers Compensation', annual: 4000, monthly: 333, group: 'Insurance' },
    { category: 'Commercial Auto', annual: 2000, monthly: 167, group: 'Insurance' },
    { category: 'Umbrella / Excess Liability', annual: 500, monthly: 42, group: 'Insurance' },
    { category: 'Professional Liability (E&O)', annual: 1000, monthly: 83, group: 'Insurance' },
    
    // Interest & Financing
    { category: 'Loan Interest', annual: 5000, monthly: 417, group: 'Interest & Financing' },
    { category: 'Line of Credit Interest', annual: 0, monthly: 0, group: 'Interest & Financing' },
    { category: 'Equipment Financing Interest', annual: 5000, monthly: 417, group: 'Interest & Financing' },
    
    // Job / Project Supplies
    { category: 'Materials', annual: 1000, monthly: 83, group: 'Job / Project Supplies' },
    { category: 'Consumables', annual: 1000, monthly: 83, group: 'Job / Project Supplies' },
    { category: 'Safety Supplies', annual: 0, monthly: 0, group: 'Job / Project Supplies' },
    { category: 'PPE', annual: 300, monthly: 25, group: 'Job / Project Supplies' },
    { category: 'Disposal Fees', annual: 250, monthly: 21, group: 'Job / Project Supplies' },
    
    // Legal & Professional Services
    { category: 'Legal Fees', annual: 5000, monthly: 417, group: 'Legal & Professional Services' },
    { category: 'Accounting / CPA', annual: 1000, monthly: 83, group: 'Legal & Professional Services' },
    { category: 'Bookkeeping', annual: 1200, monthly: 100, group: 'Legal & Professional Services' },
    { category: 'Advisory Services', annual: 0, monthly: 0, group: 'Legal & Professional Services' },
    
    // Meals & Entertainment
    { category: 'Business Meals', annual: 5000, monthly: 417, group: 'Meals & Entertainment' },
    { category: 'Client Meals', annual: 1000, monthly: 83, group: 'Meals & Entertainment' },
    { category: 'Team Meals', annual: 1000, monthly: 83, group: 'Meals & Entertainment' },
    
    // Office & Administrative
    { category: 'Office Supplies', annual: 200, monthly: 17, group: 'Office & Administrative' },
    { category: 'Printing', annual: 200, monthly: 17, group: 'Office & Administrative' },
    { category: 'Postage', annual: 100, monthly: 8, group: 'Office & Administrative' },
    { category: 'Small Office Equipment', annual: 3000, monthly: 250, group: 'Office & Administrative' },
    
    // Software & Technology
    { category: 'Software Subscriptions', annual: 1800, monthly: 150, group: 'Software & Technology' },
    { category: 'Cloud Services', annual: 180, monthly: 15, group: 'Software & Technology' },
    { category: 'Data Services', annual: 800, monthly: 67, group: 'Software & Technology' },
    { category: 'Accounting Software', annual: 300, monthly: 25, group: 'Software & Technology' },
    { category: 'Project Management Tools', annual: 0, monthly: 0, group: 'Software & Technology' },
    
    // Other Business Expenses
    { category: 'Miscellaneous Operating Expenses', annual: 10000, monthly: 833, group: 'Other Business Expenses' },
    { category: 'Small Tools (Non-Capitalized)', annual: 1000, monthly: 83, group: 'Other Business Expenses' },
    
    // Fees
    { category: 'Permit Fees', annual: 0, monthly: 0, group: 'Fees' },
    { category: 'Filing Fees', annual: 5000, monthly: 417, group: 'Fees' },
    { category: 'Application Fees', annual: 1000, monthly: 83, group: 'Fees' },
    { category: 'Government Fees', annual: 0, monthly: 0, group: 'Fees' },
    
    // Reimbursable Expenses
    { category: 'Employee Reimbursements', annual: 20000, monthly: 1667, group: 'Reimbursable Expenses' },
    { category: 'Partner Reimbursements', annual: 20000, monthly: 1667, group: 'Reimbursable Expenses' },
    
    // Rent & Lease
    { category: 'Office Rent', annual: 0, monthly: 0, group: 'Rent & Lease' },
    { category: 'Yard / Storage Lease', annual: 6000, monthly: 500, group: 'Rent & Lease' },
    { category: 'Equipment Leases', annual: 4800, monthly: 400, group: 'Rent & Lease' },
    { category: 'Temporary Site Rentals', annual: 1000, monthly: 83, group: 'Rent & Lease' },
    
    // Taxes & Licensing
    { category: 'State Taxes', annual: 0, monthly: 0, group: 'Taxes & Licensing' },
    { category: 'Local Taxes', annual: 0, monthly: 0, group: 'Taxes & Licensing' },
    { category: 'Business Licenses', annual: 0, monthly: 0, group: 'Taxes & Licensing' },
    { category: 'Franchise Taxes', annual: 0, monthly: 0, group: 'Taxes & Licensing' },
    { category: 'Annual Filings', annual: 1000, monthly: 83, group: 'Taxes & Licensing' },
    
    // Travel
    { category: 'Hotels', annual: 10000, monthly: 833, group: 'Travel' },
    { category: 'Airfare', annual: 5000, monthly: 417, group: 'Travel' },
    { category: 'Rental Cars', annual: 5000, monthly: 417, group: 'Travel' },
    { category: 'Mileage', annual: 10000, monthly: 833, group: 'Travel' },
    { category: 'Per Diem', annual: 2250, monthly: 188, group: 'Travel' },
    
    // Utilities
    { category: 'Electricity', annual: 0, monthly: 0, group: 'Utilities' },
    { category: 'Water', annual: 0, monthly: 0, group: 'Utilities' },
    { category: 'Internet', annual: 225, monthly: 19, group: 'Utilities' },
    { category: 'Phone / Mobile', annual: 216, monthly: 18, group: 'Utilities' },
    { category: 'Data Plans', annual: 0, monthly: 0, group: 'Utilities' },
    
    // Marketing & Business Development
    { category: 'Advertising', annual: 0, monthly: 0, group: 'Marketing & Business Development' },
    { category: 'Website Hosting', annual: 200, monthly: 17, group: 'Marketing & Business Development' },
    { category: 'Branding & Design', annual: 600, monthly: 50, group: 'Marketing & Business Development' },
    { category: 'Sponsorships', annual: 1000, monthly: 83, group: 'Marketing & Business Development' },
    { category: 'Client Outreach', annual: 0, monthly: 0, group: 'Marketing & Business Development' },
    
    // Compliance & Safety
    { category: 'Environmental Compliance', annual: 10000, monthly: 833, group: 'Compliance & Safety' },
    { category: 'Safety Training', annual: 2000, monthly: 167, group: 'Compliance & Safety' },
    { category: 'Inspections', annual: 500, monthly: 42, group: 'Compliance & Safety' },
    { category: 'Monitoring Services', annual: 1000, monthly: 83, group: 'Compliance & Safety' },
    
    // Software Development
    { category: 'App Development', annual: 1500, monthly: 125, group: 'Software Development' },
    { category: 'Contract Developers', annual: 0, monthly: 0, group: 'Software Development' },
    { category: 'API Usage Fees', annual: 0, monthly: 0, group: 'Software Development' },
    { category: 'Hosting', annual: 0, monthly: 0, group: 'Software Development' },
  ])

  const totalAnnual = expenses.reduce((sum, e) => sum + e.annual, 0)
  const totalMonthly = expenses.reduce((sum, e) => sum + e.monthly, 0)

  const groups = [...new Set(expenses.map(e => e.group))]

  return (
    <>
      <Head>
        <title>Annual Expenses | Carbon Cut Solutions</title>
      </Head>

      <div className="min-h-screen p-4 md:p-8 bg-slate-900">
        <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">💰 Annual Estimated Expenses</h1>
        <p className="text-slate-400 mb-8">Carbon Cut Solutions - Annual Budget Overview</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card bg-blue-900/30 border-blue-700/50">
            <p className="text-slate-400 text-sm">Total Annual Expenses</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-400">${totalAnnual.toLocaleString()}</p>
          </div>
          <div className="card bg-green-900/30 border-green-700/50">
            <p className="text-slate-400 text-sm">Monthly Average</p>
            <p className="text-2xl md:text-3xl font-bold text-green-400">${totalMonthly.toLocaleString()}</p>
          </div>
          <div className="card bg-purple-900/30 border-purple-700/50">
            <p className="text-slate-400 text-sm">Categories</p>
            <p className="text-2xl md:text-3xl font-bold text-purple-400">{expenses.length}</p>
          </div>
        </div>

        {/* Expenses by Group */}
        {groups.map((group) => {
          const groupExpenses = expenses.filter(e => e.group === group)
          const groupTotal = groupExpenses.reduce((sum, e) => sum + e.annual, 0)
          
          return (
            <div key={group} className="card mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{group}</h2>
                <span className="text-blue-400 font-semibold">${groupTotal.toLocaleString()}</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <tbody>
                    {groupExpenses.map((expense, idx) => (
                      <tr key={idx} className="border-b border-slate-700/50">
                        <td className="py-2 pr-4 text-slate-300">{expense.category}</td>
                        <td className="py-2 pr-4 text-right text-slate-400">${expense.annual.toLocaleString()}</td>
                        <td className="py-2 text-right text-slate-500 text-sm">${expense.monthly.toLocaleString()}/mo</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}

        {/* Export Options */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-4">📤 Export</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-primary">Download CSV</button>
            <button className="btn bg-slate-700 hover:bg-slate-600 text-white">Print / PDF</button>
          </div>
        </div>
      </div>
    </>
  )
}
