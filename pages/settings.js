import Head from 'next/head'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings | Carbon Cut Solutions</title>
      </Head>

      <div className="min-h-screen p-8">
        <header className="mb-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
          <h1 className="text-4xl font-bold mb-2">⚙️ Settings</h1>
          <p className="text-slate-400">Orphan Well Tool Configuration</p>
        </header>

        <div className="card max-w-2xl">
          <h2 className="text-xl font-semibold mb-6">API Connections</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">EPA Orphan Well API Key</label>
              <input 
                type="password" 
                placeholder="Enter API key..."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">State Plugging Database</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                <option value="">Select state database...</option>
                <option value="TX">Texas</option>
                <option value="OK">Oklahoma</option>
                <option value="PA">Pennsylvania</option>
                <option value="OH">Ohio</option>
                <option value="WV">West Virginia</option>
                <option value="CO">Colorado</option>
                <option value="NM">New Mexico</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-6">Business Info</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Company Name</label>
              <input 
                type="text" 
                defaultValue="Carbon Cut Solutions"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Contact Email</label>
              <input 
                type="email" 
                placeholder="info@carboncutssolutions.com"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-6">Notifications</h2>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              <span>Email analysis results</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
              <span>New grant opportunities</span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
