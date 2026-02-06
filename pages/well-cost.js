import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function WellCost() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [complexity, setComplexity] = useState('typical')
  const [expanded, setExpanded] = useState(false)

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', href: '/' },
    { id: 'analyzer', name: 'Well Analyzer', href: '/orphan-well' },
    { id: 'cost', name: 'Well Cost Calculator', href: '/well-cost' },
    { id: 'expenses', name: 'Annual Expenses', href: '/expenses' },
    { id: 'todo', name: 'To-Do List', href: '/todo' },
    { id: 'settings', name: 'Settings', href: '/settings' },
  ]

  const costData = {
    low: {
      total: 39124.35,
      items: [
        { code: '1100', desc: 'Mobilization', qty: 1, unit: 'Each', price: 375.07, total: 375.07 },
        { code: '1110', desc: 'Demobilization', qty: 1, unit: 'Each', price: 312.56, total: 312.56 },
        { code: '1140', desc: 'Clearing & Grubbing', qty: 1, unit: 'Each', price: 250.05, total: 250.05 },
        { code: '1150', desc: 'Filter Fabric', qty: 80, unit: 'Sq Yards', price: 0.50, total: 40 },
        { code: '1160', desc: 'Silt Fence', qty: 195, unit: 'Linear Ft', price: 0.44, total: 85.80 },
        { code: '1230', desc: 'No. 4 Stone', qty: 80, unit: 'Tons', price: 4.37, total: 349.60 },
        { code: '1250', desc: 'No. 57 Stone', qty: 155, unit: 'Tons', price: 3.75, total: 581.25 },
        { code: '2100', desc: 'Site Safety', qty: 1, unit: 'Each', price: 150.03, total: 150.03 },
        { code: '2130', desc: 'Secondary Containment', qty: 1, unit: 'Each', price: 75.02, total: 75.02 },
        { code: '2160', desc: 'Well Head Control', qty: 1, unit: 'Each', price: 375.07, total: 375.07 },
        { code: '2171', desc: 'Well Kill Fluid', qty: 300, unit: 'Barrel', price: 1.87, total: 561 },
        { code: '3100', desc: 'Well Prep & Plugging', qty: 1, unit: 'Each', price: 30000, total: 30000 },
        { code: '3290', desc: 'Severing', qty: 1, unit: 'Each', price: 112.52, total: 112.52 },
        { code: '3310', desc: 'Tubing', qty: 2, unit: 'Each', price: 187.54, total: 375.08 },
        { code: '3340', desc: 'Approved Cement (Sack)', qty: 350, unit: 'Each', price: 10, total: 3500 },
        { code: '3350', desc: 'Cement Mixing & Pumping', qty: 1, unit: 'Each', price: 625.12, total: 625.12 },
        { code: '4100', desc: 'Site Restoration', qty: 1, unit: 'Each', price: 437.59, total: 437.59 },
        { code: '4160', desc: 'Approved Resoil', qty: 40, unit: 'Tons', price: 3.12, total: 124.80 },
        { code: '4420', desc: 'Contaminated Material Disposal', qty: 25, unit: 'Tons', price: 8.75, total: 218.75 },
        { code: '4440', desc: 'Salvage Material Disposal', qty: 1, unit: 'Each', price: 125.02, total: 125.02 },
        { code: '4460', desc: 'Fluid Disposal', qty: 250, unit: 'Barrel', price: 1.50, total: 375 },
        { code: '4450', desc: 'Steam Cleaning', qty: 1, unit: 'Each', price: 75.02, total: 75.02 },
      ]
    },
    typical: {
      total: 80541.98,
      items: [
        { code: '1100', desc: 'Mobilization', qty: 1, unit: 'Each', price: 3033.55, total: 3033.55 },
        { code: '1110', desc: 'Demobilization', qty: 1, unit: 'Each', price: 2527.97, total: 2527.97 },
        { code: '1140', desc: 'Clearing & Grubbing', qty: 1, unit: 'Each', price: 884.79, total: 884.79 },
        { code: '1150', desc: 'Filter Fabric', qty: 80, unit: 'Sq Yards', price: 1.02, total: 81.60 },
        { code: '1160', desc: 'Silt Fence', qty: 195, unit: 'Linear Ft', price: 0.88, total: 171.60 },
        { code: '1230', desc: 'No. 4 Stone', qty: 80, unit: 'Tons', price: 8.85, total: 708 },
        { code: '1250', desc: 'No. 57 Stone', qty: 155, unit: 'Tons', price: 7.59, total: 1176.45 },
        { code: '1510', desc: 'Road Mats (Composite)', qty: 1, unit: 'Each', price: 2022.37, total: 2022.37 },
        { code: '2100', desc: 'Site Safety', qty: 1, unit: 'Each', price: 1643.18, total: 1643.18 },
        { code: '2130', desc: 'Secondary Containment', qty: 1, unit: 'Each', price: 1643.18, total: 1643.18 },
        { code: '2160', desc: 'Well Head Control', qty: 1, unit: 'Each', price: 2148.77, total: 2148.77 },
        { code: '2171', desc: 'Well Kill Fluid', qty: 300, unit: 'Barrel', price: 6.32, total: 1896 },
        { code: '3100', desc: 'Well Prep & Plugging', qty: 1, unit: 'Each', price: 35000, total: 35000 },
        { code: '3240', desc: 'Logging (GR/CCL/Temp/Bond/Caliper)', qty: 1, unit: 'Each', price: 3033.55, total: 3033.55 },
        { code: '3290', desc: 'Severing', qty: 1, unit: 'Each', price: 379.19, total: 379.19 },
        { code: '3310', desc: 'Tubing', qty: 2, unit: 'Each', price: 505.60, total: 1011.20 },
        { code: '3340', desc: 'Approved Cement (Sack)', qty: 828, unit: 'Each', price: 10, total: 8280 },
        { code: '3350', desc: 'Cement Mixing & Pumping', qty: 1, unit: 'Each', price: 5055.92, total: 5055.92 },
        { code: '4100', desc: 'Site Restoration', qty: 1, unit: 'Each', price: 1895.97, total: 1895.97 },
        { code: '4160', desc: 'Approved Resoil', qty: 40, unit: 'Tons', price: 6.32, total: 252.80 },
        { code: '4420', desc: 'Contaminated Material Disposal', qty: 25, unit: 'Tons', price: 17.69, total: 442.25 },
        { code: '4440', desc: 'Salvage Material Disposal', qty: 1, unit: 'Each', price: 631.99, total: 631.99 },
        { code: '4460', desc: 'Fluid Disposal', qty: 250, unit: 'Barrel', price: 3.79, total: 947.50 },
        { code: '4450', desc: 'Steam Cleaning', qty: 1, unit: 'Each', price: 151.67, total: 151.67 },
        { code: '240', desc: 'Professional Services (Mud Engineer) (Contingency)', qty: 1, unit: 'Each', price: 631.99, total: 631.99 },
        { code: '1520', desc: 'Road Mats (Contingency)', qty: 1, unit: 'Each', price: 505.60, total: 505.60 },
        { code: '2181', desc: 'Additional Circulation Fluid (Freshwater) (Contingency)', qty: 200, unit: 'Barrel', price: 0.63, total: 126 },
        { code: '2220', desc: 'Well Casing Tap (Contingency)', qty: 1, unit: 'Each', price: 126.39, total: 126.39 },
        { code: '3450', desc: 'Lost Circulation Materials (Sack) (Contingency)', qty: 20, unit: 'Each', price: 6.32, total: 126.40 },
        { code: '3370', desc: 'Class H Cement (Sack) (Contingency)', qty: 100, unit: 'Each', price: 2.53, total: 253 },
        { code: '3460', desc: 'Drilling Mud (Sack) (Contingency)', qty: 50, unit: 'Each', price: 3.04, total: 152 },
        { code: '3380', desc: 'Nine Sack Grout (Contingency)', qty: 5, unit: 'Cu Yard', price: 20.22, total: 101.10 },
        { code: '4240', desc: 'Formed Concrete (Contingency)', qty: 10, unit: 'Cu Yard', price: 350, total: 3500 },
      ]
    },
    high: {
      total: 171717.68,
      items: [
        { code: '1100', desc: 'Mobilization', qty: 1, unit: 'Each', price: 8959.19, total: 8959.19 },
        { code: '1110', desc: 'Demobilization', qty: 1, unit: 'Each', price: 8959.19, total: 8959.19 },
        { code: '1140', desc: 'Clearing & Grubbing', qty: 1, unit: 'Each', price: 2389.11, total: 2389.11 },
        { code: '1150', desc: 'Filter Fabric', qty: 80, unit: 'Sq Yards', price: 1.20, total: 96 },
        { code: '1160', desc: 'Silt Fence', qty: 195, unit: 'Linear Ft', price: 1.04, total: 202.80 },
        { code: '1230', desc: 'No. 4 Stone', qty: 80, unit: 'Tons', price: 10.45, total: 836 },
        { code: '1250', desc: 'No. 57 Stone', qty: 155, unit: 'Tons', price: 8.96, total: 1388.80 },
        { code: '1510', desc: 'Road Mats (Composite)', qty: 1, unit: 'Each', price: 13000, total: 13000 },
        { code: '2100', desc: 'Site Safety', qty: 1, unit: 'Each', price: 5823.47, total: 5823.47 },
        { code: '2130', desc: 'Secondary Containment', qty: 1, unit: 'Each', price: 3882.32, total: 3882.32 },
        { code: '2160', desc: 'Well Head Control', qty: 1, unit: 'Each', price: 3882.32, total: 3882.32 },
        { code: '2171', desc: 'Well Kill Fluid', qty: 300, unit: 'Barrel', price: 13.44, total: 4032 },
        { code: '3100', desc: 'Well Prep & Plugging', qty: 1, unit: 'Each', price: 44000, total: 44000 },
        { code: '3240', desc: 'Logging (GR/CCL/Temp/Bond/Caliper)', qty: 1, unit: 'Each', price: 5972.79, total: 5972.79 },
        { code: '3290', desc: 'Severing', qty: 1, unit: 'Each', price: 1194.56, total: 1194.56 },
        { code: '3310', desc: 'Tubing', qty: 1, unit: 'Each', price: 597.28, total: 597.28 },
        { code: '3340', desc: 'Approved Cement (Sack)', qty: 798, unit: 'Each', price: 10, total: 7980 },
        { code: '3350', desc: 'Cement Mixing & Pumping', qty: 1, unit: 'Each', price: 10158, total: 10158 },
        { code: '4100', desc: 'Site Restoration', qty: 1, unit: 'Each', price: 4479.59, total: 4479.59 },
        { code: '4160', desc: 'Approved Resoil', qty: 40, unit: 'Tons', price: 8.96, total: 358.40 },
        { code: '4420', desc: 'Contaminated Material Disposal', qty: 25, unit: 'Tons', price: 29.87, total: 746.75 },
        { code: '4440', desc: 'Salvage Material Disposal', qty: 1, unit: 'Each', price: 4479.59, total: 4479.59 },
        { code: '4460', desc: 'Fluid Disposal', qty: 250, unit: 'Barrel', price: 8.96, total: 2240 },
        { code: '4450', desc: 'Steam Cleaning', qty: 1, unit: 'Each', price: 358.36, total: 358.36 },
        { code: '240', desc: 'Professional Services (Mud Engineer) (Contingency)', qty: 1, unit: 'Each', price: 1791.83, total: 1791.83 },
        { code: '1520', desc: 'Road Mats (Contingency)', qty: 1, unit: 'Each', price: 2269.66, total: 2269.66 },
        { code: '2150', desc: 'H2S Safety Team Standby (Contingency)', qty: 1, unit: 'Days', price: 895.92, total: 895.92 },
        { code: '2140', desc: 'H2S Safety Team (Contingency)', qty: 1, unit: 'Days', price: 4479.59, total: 4479.59 },
        { code: '2181', desc: 'Additional Circulation Fluid (Freshwater) (Contingency)', qty: 200, unit: 'Barrel', price: 1.50, total: 300 },
        { code: '2200', desc: 'Well Head Control (H2S) (Contingency)', qty: 1, unit: 'Each', price: 895.92, total: 895.92 },
        { code: '2220', desc: 'Well Casing Tap (Contingency)', qty: 1, unit: 'Each', price: 447.96, total: 447.96 },
        { code: '2360', desc: 'Downhole Videography (Contingency)', qty: 1, unit: 'Each', price: 1791.83, total: 1791.83 },
        { code: '3140', desc: 'Fishing (Contingency)', qty: 8, unit: 'Hour', price: 447.96, total: 3583.68 },
        { code: '3160', desc: 'Milling/Drillout (Contingency)', qty: 8, unit: 'Hour', price: 597.28, total: 4778.24 },
        { code: '3170', desc: 'Magnet (Contingency)', qty: 1, unit: 'Each', price: 89.59, total: 89.59 },
        { code: '3250', desc: 'Shooting (Contingency)', qty: 1, unit: 'Each', price: 4180.96, total: 4180.96 },
        { code: '3450', desc: 'Lost Circulation Materials (Sack) (Contingency)', qty: 20, unit: 'Each', price: 19.41, total: 388.20 },
        { code: '3370', desc: 'Class H Cement (Sack) (Contingency)', qty: 100, unit: 'Each', price: 3.58, total: 358 },
        { code: '3460', desc: 'Drilling Mud (Sack) (Contingency)', qty: 50, unit: 'Each', price: 4.78, total: 239 },
        { code: '3380', desc: 'Nine Sack Grout (Contingency)', qty: 5, unit: 'Cu Yard', price: 134.39, total: 671.95 },
        { code: '3480', desc: 'Hydrogen Sulfide Scavenger (Contingency)', qty: 25, unit: 'Gallon', price: 14.93, total: 373.25 },
        { code: '4240', desc: 'Formed Concrete (Contingency)', qty: 10, unit: 'Cu Yard', price: 500, total: 5000 },
        { code: '4700', desc: 'Crop Damage (Corn/Soy/Wheat) (If Ag)', qty: 1, unit: 'Each', price: 3165.58, total: 3165.58 },
      ]
    }
  }

  const currentData = costData[complexity]

  return (
    <>
      <Head>
        <title>Well Cost Calculator | Carbon Cut Solutions</title>
        <meta name="description" content="Detailed cost breakdown by complexity" />
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
              <a key={item.id} href={item.href} className={`flex items-center px-3 py-2.5 rounded-lg text-sm transition-all ${item.id === 'cost' ? 'text-white bg-[#1a1a1a]' : 'text-[#888888] hover:text-white hover:bg-[#1a1a1a]'}`}>
                <span className="w-5">{item.id === 'cost' ? '●' : '○'}</span>
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
          <div className="pt-16 md:pt-0 max-w-6xl mx-auto px-4 md:px-8 py-8">
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">Well Cost Calculator</h1>
              <p className="text-[#666666]">Detailed line-item breakdown by complexity</p>
            </header>

            {/* Cost Summary */}
            <section className="mb-6">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'low', name: 'Low Complexity', amount: 39124.35 },
                  { id: 'typical', name: 'Typical', amount: 80541.98 },
                  { id: 'high', name: 'High Complexity', amount: 171717.68 },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setComplexity(tier.id)}
                    className={`p-4 rounded-xl border transition-all ${complexity === tier.id ? 'bg-[#222222] border-[#444444]' : 'bg-[#111111] border-[#222222]'}`}
                  >
                    <p className="text-[#666666] text-sm mb-1">{tier.name}</p>
                    <p className="text-2xl font-semibold text-white">${tier.amount.toLocaleString()}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Line Items Table */}
            <section className="mb-8">
              <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#0d0d0d]">
                      <tr>
                        <th className="text-left p-3 text-[#666666] font-medium">Code</th>
                        <th className="text-left p-3 text-[#666666] font-medium">Description</th>
                        <th className="text-right p-3 text-[#666666] font-medium">Qty</th>
                        <th className="text-right p-3 text-[#666666] font-medium">Unit</th>
                        <th className="text-right p-3 text-[#666666] font-medium">Unit Price</th>
                        <th className="text-right p-3 text-[#666666] font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.items.map((item, idx) => (
                        <tr key={idx} className="border-t border-[#222222]">
                          <td className="p-3 text-white font-mono">{item.code}</td>
                          <td className="p-3 text-[#cccccc]">{item.desc}</td>
                          <td className="p-3 text-right text-[#888888]">{item.qty}</td>
                          <td className="p-3 text-right text-[#888888]">{item.unit}</td>
                          <td className="p-3 text-right text-[#888888]">${item.price.toFixed(2)}</td>
                          <td className="p-3 text-right text-white font-medium">${item.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-[#0d0d0d]">
                      <tr className="border-t border-[#333333]">
                        <td colSpan={5} className="p-4 text-right text-white font-semibold">TOTAL PER WELL</td>
                        <td className="p-4 text-right text-white font-semibold text-lg">${currentData.total.toLocaleString()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
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