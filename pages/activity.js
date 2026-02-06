import Head from 'next/head'

export default function Activity() {
  const activities = [
    { time: '5:50 AM', event: 'Morning settlement letter generated', type: 'market' },
    { time: '6:51 AM', event: 'Weekend communication mode set - text only', type: 'system' },
    { time: '6:53 AM', event: 'Flight AA873 tracking enabled - MTJ → DFW', type: 'flight' },
    { time: '6:57 AM', event: 'Terminal access credentials saved', type: 'system' },
    { time: '7:04 AM', event: 'Dashboard project created', type: 'project' },
    { time: '7:07 AM', event: 'GitHub account connected (AAN2793)', type: 'system' },
  ]

  return (
    <>
      <Head>
        <title>Activity Log | Helios</title>
      </Head>

      <div className="min-h-screen p-8">
        <header className="mb-8">
          <a href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">← Back to Dashboard</a>
          <h1 className="text-4xl font-bold mb-2">📋 Activity Log</h1>
          <p className="text-slate-400">Today's activities and conversations</p>
        </header>

        <div className="card">
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-slate-700/30 rounded-lg">
                <span className="text-slate-500 text-sm min-w-[80px]">{activity.time}</span>
                <div className="flex-1">
                  <p className="text-slate-200">{activity.event}</p>
                  <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${
                    activity.type === 'market' ? 'bg-green-900 text-green-300' :
                    activity.type === 'flight' ? 'bg-blue-900 text-blue-300' :
                    activity.type === 'project' ? 'bg-purple-900 text-purple-300' :
                    'bg-slate-700 text-slate-400'
                  }`}>
                    {activity.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
