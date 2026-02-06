import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function WellCost() {
  const [complexity, setComplexity] = useState('low')
  const [numWells, setNumWells] = useState(1)

  const costData = {
    low: {
      name: 'Low Complexity',
      totalPerWell: 39124.35,
      items: [
        { code: '1100', label: 'Mobilization', qty: 1, unit: 'Each', price: 375.07 },
        { code: '1110', label: 'Demobilization', qty: 1, unit: 'Each', price: 312.56 },
        { code: '1140', label: 'Clearing & Grubbing', qty: 1, unit: 'Each', price: 250.05 },
        { code: '1150', label: 'Filter Fabric', qty: 80, unit: 'Sq Yards', price: 0.50 },
        { code: '1160', label: 'Silt Fence', qty: 195, unit: 'Linear Ft', price: 0.44 },
        { code: '1230', label: 'No. 4 Stone', qty: 80, unit: 'Tons', price: 4.37 },
        { code: '1250', label: 'No. 57 Stone', qty: 155, unit: 'Tons', price: 3.75 },
        { code: '2100', label: 'Site Safety', qty: 1, unit: 'Each', price: 150.03 },
        { code: '2130', label: 'Secondary Containment', qty: 1, unit: 'Each', price: 75.02 },
        { code: '2160', label: 'Well Head Control', qty: 1, unit: 'Each', price: 375.07 },
        { code: '2171', label: 'Well Kill Fluid', qty: 300, unit: 'Barrel', price: 1.87 },
        { code: '3100', label: 'Well Prep & Plugging', qty: 1, unit: 'Each', price: 30000 },
        { code: '3290', label: 'Severing', qty: 1, unit: 'Each', price: 112.52 },
        { code: '3310', label: 'Tubing', qty: 2, unit: 'Each', price: 187.54 },
        { code: '3340', label: 'Approved Cement (Sack)', qty: 350, unit: 'Each', price: 10 },
        { code: '3350', label: 'Cement Mixing & Pumping', qty: 1, unit: 'Each', price: 625.12 },
        { code: '4100', label: 'Site Restoration', qty: 1, unit: 'Each', price: 437.59 },
        { code: '4160', label: 'Approved Resoil', qty: 40, unit: 'Tons', price: 3.12 },
        { code: '4420', label: 'Contaminated Material Disposal', qty: 25, unit: 'Tons', price: 8.75 },
        { code: '4440', label: 'Salvage Material Disposal', qty: 1, unit: 'Each', price: 125.02 },
        { code: '4460', label: 'Fluid Disposal', qty: 250, unit: 'Barrel', price: 1.50 },
        { code: '4450', label: 'Steam Cleaning', qty: 1, unit: 'Each', price: 75.02 },
      ]
    },
    typical: {
      name: 'Typical Complexity',
      totalPerWell: 80541.98,
      items: [
        { code: '1100', label: 'Mobilization', qty: 1, unit: 'Each', price: 3033.55 },
        { code: '1110', label: 'Demobilization', qty: 1, unit: 'Each', price: 2527.97 },
        { code: '1140', label: 'Clearing & Grubbing', qty: 1, unit: 'Each', price: 884.79 },
        { code: '1150', label: 'Filter Fabric', qty: 80, unit: 'Sq Yards', price: 1.02 },
        { code: '1160', label: 'Silt Fence', qty: 195, unit: 'Linear Ft', price: 0.88 },
        { code: '1230', label: 'No. 4 Stone', qty: 80, unit: 'Tons', price: 8.85 },
        { code: '1250', label: 'No. 57 Stone', qty: 155, unit: 'Tons', price: 7.59 },
        { code: '1510', label: 'Road Mats (Composite)', qty: 1, unit: 'Each', price: 2022.37 },
        { code: '2100', label: 'Site Safety', qty: 1, unit: 'Each', price: 1643.18 },
        { code: '2130', label: 'Secondary Containment', qty: 1, unit: 'Each', price: 1643.18 },
        { code: '2160', label: 'Well Head Control', qty: 1, unit: 'Each', price: 2148.77 },
        { code: '2171', label: 'Well Kill Fluid', qty: 300, unit: 'Barrel', price: 6.32 },
        { code: '3100', label: 'Well Prep & Plugging', qty: 1, unit: 'Each', price: 35000 },
        { code: '3240', label: 'Logging (GR/CCL/Temp/Bond/Caliper)', qty: 1, unit: 'Each', price: 3033.55 },
        { code: '3290', label: 'Severing', qty: 1, unit: 'Each', price: 379.19 },
        { code: '3310', label: 'Tubing', qty: 2, unit: 'Each', price: 505.60 },
        { code: '3340', label: 'Approved Cement (Sack)', qty: 828, unit: 'Each', price: 10 },
        { code: '3350', label: 'Cement Mixing & Pumping', qty: 1, unit: 'Each', price: 5055.92 },
        { code: '4100', label: 'Site Restoration', qty: 1, unit: 'Each', price: 1895.97 },
        { code: '4160', label: 'Approved Resoil', qty: 40, unit: 'Tons', price: 6.32 },
        { code: '4420', label: 'Contaminated Material Disposal', qty: 25, unit: 'Tons', price: 17.69 },
        { code: '4440', label: 'Salvage Material Disposal', qty: 1, unit: 'Each', price: 631.99 },
        { code: '4460', label: 'Fluid Disposal', qty: 250, unit: 'Barrel', price: 3.79 },
        { code: '4450', label: 'Steam Cleaning', qty: 1, unit: 'Each', price: 151.67 },
        { code: '240', label: 'Professional Services (Mud Engineer)', qty: 1, unit: 'Each', price: 631.99 },
        // Contingency items
        { code: '1520', label: 'Road Mats (Contingency)', qty: 1, unit: 'Each', price: 505.60 },
        { code: '2181', label: 'Additional Circulation Fluid (Contingency)', qty: 200, unit: 'Barrel', price: 0.63 },
        { code: '2220', label: 'Well Casing Tap (Contingency)', qty: 1, unit: 'Each', price: 126.39 },
        { code: '3450', label: 'Lost Circulation Materials (Contingency)', qty: 20, unit: 'Each', price: 6.32 },
        { code: '3370', label: "Class 'H' Cement (Contingency)", qty: 100, unit: 'Each', price: 2.53 },
        { code: '3460', label: 'Drilling Mud (Contingency)', qty: 50, unit: 'Each', price: 3.04 },
        { code: '3380', label: 'Nine Sack Grout (Contingency)', qty: 5, unit: 'Cu Yard', price: 20.22 },
        { code: '4240', label: 'Formed Concrete (Contingency)', qty: 10, unit: 'Cu Yard', price: 350 },
      ]
    },
    high: {
      name: 'High Complexity',
      totalPerWell: 171717.68,
      items: [
        { code: '1100', label: 'Mobilization', qty: 1, unit: 'Each', price: 8959.19 },
        { code: '1110', label: 'Demobilization', qty: 1, unit: 'Each', price: 8959.19 },
        { code: '1140', label: 'Clearing & Grubbing', qty: 1, unit: 'Each', price: 2389.11 },
        { code: '1150', label: 'Filter Fabric', qty: 80, unit: 'Sq Yards', price: 1.20 },
        { code: '1160', label: 'Silt Fence', qty: 195, unit: 'Linear Ft', price: 1.04 },
        { code: '1230', label: 'No. 4 Stone', qty: 80, unit: 'Tons', price: 10.45 },
        { code: '1250', label: 'No. 57 Stone', qty: 155, unit: 'Tons', price: 8.96 },
        { code: '1510', label: 'Road Mats (Composite)', qty: 1, unit: 'Each', price: 13000 },
        { code: '2100', label: 'Site Safety', qty: 1, unit: 'Each', price: 5823.47 },
        { code: '2130', label: 'Secondary Containment', qty: 1, unit: 'Each', price: 3882.32 },
        { code: '2160', label: 'Well Head Control', qty: 1, unit: 'Each', price: 3882.32 },
        { code: '2171', label: 'Well Kill Fluid', qty: 300, unit: 'Barrel', price: 13.44 },
        { code: '3100', label: 'Well Prep & Plugging', qty: 1, unit: 'Each', price: 44000 },
        { code: '3240', label: 'Logging (GR/CCL/Temp/Bond/Caliper)', qty: 1, unit: 'Each', price: 5972.79 },
        { code: '3290', label: 'Severing', qty: 1, unit: 'Each', price: 1194.56 },
        { code: '3310', label: 'Tubing', qty: 1, unit: 'Each', price: 597.28 },
        { code: '3340', label: 'Approved Cement (Sack)', qty: 798, unit: 'Each', price: 10 },
        { code: '3350', label: 'Cement Mixing & Pumping', qty: 1, unit: 'Each', price: 10158 },
        { code: '4100', label: 'Site Restoration', qty: 1, unit: 'Each', price: 4479.59 },
        { code: '4160', label: 'Approved Resoil', qty: 40, unit: 'Tons', price: 8.96 },
        { code: '4420', label: 'Contaminated Material Disposal', qty: 25, unit: 'Tons', price: 29.87 },
        { code: '4440', label: 'Salvage Material Disposal', qty: 1, unit: 'Each', price: 4479.59 },
        { code: '4460', label: 'Fluid Disposal', qty: 250, unit: 'Barrel', price: 8.96 },
        { code: '4450', label: 'Steam Cleaning', qty: 1, unit: 'Each', price: 358.36 },
        { code: '240', label: 'Professional Services (Mud Engineer)', qty: 1, unit: 'Each', price: 1791.83 },
        { code: '1520', label: 'Road Mats (Contingency)', qty: 1, unit: 'Each', price: 2269.66 },
        { code: '2150', label: 'H2S Safety Team Standby (Contingency)', qty: 1, unit: 'Days', price: 895.92 },
        { code: '2140', label: 'H2S Safety Team (Contingency)', qty: 1, unit: 'Days', price: 4479.59 },
        { code: '2181', label: 'Additional Circulation Fluid (Contingency)', qty: 200, unit: 'Barrel', price: 1.50 },
        { code: '2200', label: 'Well Head Control (H2S) (Contingency)', qty: 1, unit: 'Each', price: 895.92 },
        { code: '2220', label: 'Well Casing Tap (Contingency)', qty: 1, unit: 'Each', price: 447.96 },
        { code: '2360', label: 'Downhole Videography (Contingency)', qty: 1, unit: 'Each', price: 1791.83 },
        { code: '3140', label: 'Fishing (Contingency)', qty: 8, unit: 'Hour', price: 447.96 },
        { code: '3160', label: 'Milling/Drillout (Contingency)', qty: 8, unit: 'Hour', price: 597.28 },
        { code: '3170', label: 'Magnet (Contingency)', qty: 1, unit: 'Each', price: 89.59 },
        { code: '3250', label: 'Shooting (Contingency)', qty: 1, unit: 'Each', price: 4180.96 },
        { code: '3450', label: 'Lost Circulation Materials (Contingency)', qty: 20, unit: 'Each', price: 19.41 },
        { code: '3370', label: "Class 'H' Cement (Contingency)", qty: 100, unit: 'Each', price: 3.58 },
        { code: '3460', label: 'Drilling Mud (Contingency)', qty: 50, unit: 'Each', price: 4.78 },
        { code: '3380', label: 'Nine Sack Grout (Contingency)', qty: 5, unit: 'Cu Yard', price: 134.39 },
        { code: '3480', label: 'Hydrogen Sulfide Scavenger (Contingency)', qty: 25, unit: 'Gallon', price: 14.93 },
        { code: '4240', label: 'Formed Concrete (Contingency)', qty: 10, unit: 'Cu Yard', price: 500 },
        { code: '4700', label: 'Crop Damage (Contingency)', qty: 1, unit: 'Each', price: 3165.58 },
      ]
    }
  }

  const currentData = costData[complexity]
  const totalForProject = currentData.totalPerWell * numWells

  return (
    <>
      <Head>
        <title>Well Cost Calculator | Carbon Cut Solutions</title>
      </Head>

      <div className="min-h-screen p-4 md:p-8 bg-slate-900">
        <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">🏗️ Well Cost Calculator</h1>
        <p className="text-slate-400 mb-8">Carbon Cut Solutions - Well Plugging Cost Estimator</p>

        {/* Complexity Selector */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Complexity Level</h2>
          <div className="grid grid-cols-3 gap-4">
            {['low', 'typical', 'high'].map((level) => (
              <button
                key={level}
                onClick={() => setComplexity(level)}
                className={`p-4 rounded-lg border transition-colors ${
                  complexity === level
                    ? 'bg-blue-900/50 border-blue-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <div className="font-semibold capitalize">{costData[level].name}</div>
                <div className="text-sm opacity-70">${costData[level].totalPerWell.toLocaleString()}/well</div>
              </button>
            ))}
          </div>
        </div>

        {/* Well Count */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Number of Wells</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setNumWells(Math.max(1, numWells - 1))}
              className="btn bg-slate-700 hover:bg-slate-600"
            >
              -
            </button>
            <input
              type="number"
              value={numWells}
              onChange={(e) => setNumWells(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white text-center text-xl font-bold"
            />
            <button
              onClick={() => setNumWells(numWells + 1)}
              className="btn bg-slate-700 hover:bg-slate-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card bg-blue-900/30 border-blue-700/50">
            <p className="text-slate-400 text-sm">Per Well</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-400">${currentData.totalPerWell.toLocaleString()}</p>
          </div>
          <div className="card bg-green-900/30 border-green-700/50">
            <p className="text-slate-400 text-sm">Number of Wells</p>
            <p className="text-2xl md:text-3xl font-bold text-green-400">{numWells}</p>
          </div>
          <div className="card bg-purple-900/30 border-purple-700/50">
            <p className="text-slate-400 text-sm">Total Project Cost</p>
            <p className="text-2xl md:text-3xl font-bold text-purple-400">${totalForProject.toLocaleString()}</p>
          </div>
        </div>

        {/* Cost Breakdown Table */}
        <div className="card overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">📋 Cost Breakdown ({currentData.name})</h2>
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-left text-slate-400 text-sm border-b border-slate-700">
                <th className="pb-3 pr-4 w-20">Code</th>
                <th className="pb-3 pr-4">Item</th>
                <th className="pb-3 pr-4 w-24">Qty</th>
                <th className="pb-3 pr-4 w-24">Unit</th>
                <th className="pb-3 pr-4 w-32 text-right">Unit Price</th>
                <th className="pb-3 pr-4 w-32 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {currentData.items.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-700/50">
                  <td className="py-2 pr-4 text-slate-500 font-mono text-sm">{item.code}</td>
                  <td className="py-2 pr-4 text-slate-300">{item.label}</td>
                  <td className="py-2 pr-4 text-slate-400">{item.qty}</td>
                  <td className="py-2 pr-4 text-slate-400">{item.unit}</td>
                  <td className="py-2 pr-4 text-right text-slate-400">${item.price.toLocaleString()}</td>
                  <td className="py-2 pr-4 text-right text-slate-200">${(item.qty * item.price).toLocaleString()}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-600">
                <td colSpan={5} className="py-4 pr-4 font-bold text-right">TOTAL PER WELL</td>
                <td className="py-4 pr-4 font-bold text-blue-400 text-right">${currentData.totalPerWell.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Export */}
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
