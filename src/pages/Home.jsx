import { Link } from 'react-router-dom'
import { IconTranslate, IconShuffle, IconChevronRight } from '../components/icons.jsx'

const TOOLS = [
  {
    to: '/translator',
    icon: IconTranslate,
    name: 'Translator',
    description: 'Translate English text into eight languages using a live API call.',
    tag: 'API integration',
  },
  {
    to: '/random-string',
    icon: IconShuffle,
    name: 'String Generator',
    description: 'Generate configurable random strings, built with core React hooks.',
    tag: 'State & effects',
  },
]

export default function Home() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-[22px] font-semibold text-slate-900">Overview</h1>
        <p className="mt-1 text-[13px] text-slate-500">
          Two internal tools, one workspace. Client-side routing keeps navigation instant.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Tools available" value="2" />
        <StatCard label="Routes" value="3" />
        <StatCard label="Build" value="Vite + React 18" />
      </div>

      <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-slate-500">
        Tools
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TOOLS.map((tool) => (
          <Link
            key={tool.to}
            to={tool.to}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-panel transition-all hover:border-brand-500/40 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <tool.icon className="h-4.5 w-4.5" />
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                {tool.tag}
              </span>
            </div>
            <h2 className="text-[15px] font-semibold text-slate-900">{tool.name}</h2>
            <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-500">
              {tool.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-brand-600">
              Open tool
              <IconChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-panel">
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-[20px] font-semibold text-slate-900">{value}</p>
    </div>
  )
}
