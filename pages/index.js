import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carbon Cut Solutions | Orphan Well Tool</title>
        <meta name="description" content="Orphan Well Analysis Tool for Carbon Cut Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">🛢️ Carbon Cut Solutions</h1>
          <p className="text-slate-400">Orphan Well Analysis Tool</p>
        </header>

        {/* Status Card */}
        <div className="card mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">System Status</h2>
              <p className="text-slate-400">All systems operational</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400">Online</span>
            </div>
          </div>
        </div>

        {/* Orphan Well Tools */}
        <h2 className="text-2xl font-bold mb-4">🛢️ Well Analysis Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          
          {/* Primary Well Analyzer */}
          <Link href="/orphan-well" className="card hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
              Well Analyzer</h3>
            
            <p className="text-slate-400 text-sm">
              Look up orphan wells by API, state, county, or operator.
            </p>
          </Link>

          {/* Annual Expenses */}
          <Link href="/expenses" className="card hover:border-green-500/50 transition-all group">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
              Annual Expenses</h3>
            <p className="text-slate-400 text-sm">
              Budget overview, expense tracking, and financial planning.
            </p>
          </Link>

          {/* Placeholder - Grant Finder */}
          <div className="card opacity-60 cursor-not-allowed">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-semibold mb-2">Grant Finder</h3>
            <p className="text-slate-400 text-sm">
              Coming soon - Government grant matching
            </p>
          </div>

          {/* Placeholder - Methane Tracker */}
          <div className="card opacity-60 cursor-not-allowed">
            <div className="text-4xl mb-3">🌡️</div>
            <h3 className="text-xl font-semibold mb-2">Methane Tracker</h3>
            <p className="text-slate-400 text-sm">
              Coming soon - Emission monitoring
            </p>
          </div>

          {/* Placeholder - Plugging Calculator */}
          <div className="card opacity-60 cursor-not-allowed">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-semibold mb-2">Cost Calculator</h3>
            <p className="text-slate-400 text-sm">
              Coming soon - Plugging cost estimates
            </p>
          </div>

          {/* Placeholder - Compliance */}
          <div className="card opacity-60 cursor-not-allowed">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-semibold mb-2">Compliance Check</h3>
            <p className="text-slate-400 text-sm">
              Coming soon - Regulatory compliance
            </p>
          </div>
        </div>

        {/* Settings */}
        <h2 className="text-2xl font-bold mb-4">⚙️ Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/settings" className="card hover:border-slate-500/50 transition-all group">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-slate-400 transition-colors">
              Settings
            </h3>
            <p className="text-slate-400 text-sm">
              API keys, business info, preferences.
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
