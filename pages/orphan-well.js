import Head from 'next/head'
import { useState } from 'react'

export default function OrphanWell() {
  const [wellData, setWellData] = useState({
    location: '',
    state: '',
    county: '',
    apiNumber: '',
    operator: '',
    status: 'active'
  })
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const analyzeWell = () => {
    setLoading(true)
    // Simulated analysis - replace with actual API calls
    setTimeout(() => {
      setResults([
        { metric: 'Methane Risk Score', value: 'High', color: 'red' },
        { metric: 'Plugging Cost Estimate', value: '$45,000-$80,000', color: 'yellow' },
        { metric: 'Government Grant Eligibility', value: 'Eligible', color: 'green' },
        { metric: 'Environmental Impact', value: 'Significant', color: 'red' },
      ])
      setLoading(false)
    }, 1500)
  }

  return (
    <>
      <Head>
        <title>Orphan Well Tool | Helios</title>
      </Head>

      <div className="min-h-screen p-8">
        <header className="mb-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
          <h1 className="text-4xl font-bold mb-2">🛢️ Orphan Well Analysis Tool</h1>
          <p className="text-slate-400">Carbon Cut Solutions - Well identification and analysis</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Well Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">API Number</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter API number..."
                  value={wellData.apiNumber}
                  onChange={(e) => setWellData({...wellData, apiNumber: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">State</label>
                <select 
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                  value={wellData.state}
                  onChange={(e) => setWellData({...wellData, state: e.target.value})}
                >
                  <option value="">Select State...</option>
                  <option value="TX">Texas</option>
                  <option value="OK">Oklahoma</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="OH">Ohio</option>
                  <option value="WV">West Virginia</option>
                  <option value="CO">Colorado</option>
                  <option value="NM">New Mexico</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">County</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter county..."
                  value={wellData.county}
                  onChange={(e) => setWellData({...wellData, county: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Operator Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter operator..."
                  value={wellData.operator}
                  onChange={(e) => setWellData({...wellData, operator: e.target.value})}
                />
              </div>

              <button 
                onClick={analyzeWell}
                disabled={loading}
                className="btn btn-primary w-full mt-4 disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : 'Analyze Well'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            
            {results.length === 0 ? (
              <p className="text-slate-400">Enter well data and click analyze to see results.</p>
            ) : (
              <div className="space-y-3">
                {results.map((result, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">{result.metric}</span>
                    <span className={`font-semibold ${
                      result.color === 'green' ? 'text-green-400' :
                      result.color === 'yellow' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {result.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Data Sources */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-4">📊 Data Sources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-slate-700/30 rounded-lg">
              <p className="text-slate-400">EPA Orphan Well Database</p>
              <p className="text-green-400">Connected</p>
            </div>
            <div className="p-3 bg-slate-700/30 rounded-lg">
              <p className="text-slate-400">State Plugging Reports</p>
              <p className="text-green-400">Connected</p>
            </div>
            <div className="p-3 bg-slate-700/30 rounded-lg">
              <p className="text-slate-400">Methane Emission Data</p>
              <p className="text-yellow-400">Partial</p>
            </div>
            <div className="p-3 bg-slate-700/30 rounded-lg">
              <p className="text-slate-400">Grant Programs</p>
              <p className="text-green-400">Connected</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
