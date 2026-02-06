import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Helios Dashboard</title>
        <meta name="description" content="Helios AI Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">🤖 Helios Dashboard</h1>
          <p className="text-slate-400">Your AI assistant workspace</p>
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

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mb-4">Tools & Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          
          {/* Orphan Well Tool */}
          <Link href="/orphan-well" className="card hover:border-blue-500/50 transition-all group">
            <div className="text-4xl mb-3">🛢️</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
              Orphan Well Tool
            </h3>
            <p className="text-slate-400 text-sm">
              Carbon Cut Solutions analysis tool for orphan well identification and tracking.
            </p>
          </Link>

          {/* Market Dashboard */}
          <Link href="/market" className="card hover:border-green-500/50 transition-all group">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
              Market Dashboard
            </h3>
            <p className="text-slate-400 text-sm">
              Real-time market data, premarket movers, and AlertsAndNews content.
            </p>
          </Link>

          {/* Activity Log */}
          <Link href="/activity" className="card hover:border-purple-500/50 transition-all group">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
              Activity Log
            </h3>
            <p className="text-slate-400 text-sm">
              Recent activities, tasks, and conversations with Helios.
            </p>
          </Link>

          {/* Settings */}
          <Link href="/settings" className="card hover:border-slate-500/50 transition-all group">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-slate-400 transition-colors">
              Settings
            </h3>
            <p className="text-slate-400 text-sm">
              Configure dashboard preferences and integrations.
            </p>
          </Link>
        </div>

        {/* Flight Status (if active) */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">✈️ Flight Status</h2>
          <div id="flight-status">
            <p className="text-slate-400">No active flights tracked.</p>
          </div>
        </div>
      </div>
    </>
  )
}
