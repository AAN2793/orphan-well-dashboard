import Head from 'next/head'

export default function Flight() {
  const flights = [
    { id: 'AA873', route: 'MTJ → DFW', status: 'Landed', time: 'Feb 6, 12:44 MST' }
  ]

  return (
    <>
      <Head>
        <title>Flight Tracker | Carbon Cut Solutions</title>
      </Head>

      <div className="min-h-screen p-8">
        <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-4xl font-bold mb-8">✈️ Flight Tracker</h1>

        {/* Active Flights */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Active Flights</h2>
          {flights.length === 0 ? (
            <p className="text-slate-400">No active flights tracked.</p>
          ) : (
            <div className="space-y-4">
              {flights.map((flight) => (
                <div key={flight.id} className="p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-lg">{flight.id}</p>
                      <p className="text-slate-400">{flight.route}</p>
                      <p className="text-slate-500 text-sm">{flight.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      flight.status === 'Landed' ? 'bg-green-900 text-green-300' :
                      flight.status === 'On Time' ? 'bg-blue-900 text-blue-300' :
                      'bg-yellow-900 text-yellow-300'
                    }`}>
                      {flight.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Flight Form */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Add Flight</h2>
          <p className="text-slate-400 text-sm mb-4">
            Enter flight details to track for delays. Helios will monitor and alert you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Flight Number (e.g., AA873)"
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
            />
            <input 
              type="text" 
              placeholder="Route (e.g., MTJ → DFW)"
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
            />
            <button className="btn btn-primary">
              Track Flight
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
