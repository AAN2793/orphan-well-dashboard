import Head from 'next/head'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings | Helios</title>
      </Head>

      <div className="min-h-screen p-8">
        <header className="mb-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
          <h1 className="text-4xl font-bold mb-2">⚙️ Settings</h1>
          <p className="text-slate-400">Dashboard configuration</p>
        </header>

        <div className="card max-w-2xl">
          <h2 className="text-xl font-semibold mb-6">Integrations</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-slate-400">Connected as @AAN2793</p>
              </div>
              <span className="text-green-400">✓ Connected</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
              <div>
                <p className="font-medium">Vercel</p>
                <p className="text-sm text-slate-400">Auto-deploy enabled</p>
              </div>
              <span className="text-green-400">✓ Connected</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
              <div>
                <p className="font-medium">Flight Tracking</p>
                <p className="text-sm text-slate-400">AA873 active</p>
              </div>
              <span className="text-green-400">✓ Active</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-6">Notifications</h2>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              <span>Flight delay alerts</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              <span>Market summary updates</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              <span>Activity log notifications</span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
