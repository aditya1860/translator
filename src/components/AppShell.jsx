import { NavLink } from 'react-router-dom'
import { IconHome, IconTranslate, IconShuffle } from './icons.jsx'

const NAV_ITEMS = [
  { to: '/', label: 'Overview', icon: IconHome, end: true },
  { to: '/translator', label: 'Translator', icon: IconTranslate },
  { to: '/random-string', label: 'String Generator', icon: IconShuffle },
]

function SidebarLink({ to, label, icon: Icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
          isActive
            ? 'bg-brand-500/15 text-white'
            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-md ${
              isActive ? 'bg-brand-500 text-white' : 'bg-white/5 text-slate-400 group-hover:text-slate-200'
            }`}
          >
            <Icon className="h-4 w-4" />
          </span>
          {label}
        </>
      )}
    </NavLink>
  )
}

export default function AppShell({ children, breadcrumb }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-ink-950 px-4 py-5 sm:flex">
        <div className="mb-8 flex items-center gap-2.5 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-sm font-bold text-white">
            S1
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-tight text-white">Slab1 Labs</p>
            <p className="text-[11px] leading-tight text-slate-500">Developer Tools</p>
          </div>
        </div>

        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <SidebarLink key={item.to} {...item} />
          ))}
        </nav>

        <div className="mt-auto rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="text-[12px] font-medium text-slate-200">Environment</p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            Sandbox build · v0.1.0
          </p>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-2 text-[13px] text-slate-500">
            <span className="font-medium text-slate-800">{breadcrumb?.[0]}</span>
            {breadcrumb?.[1] && (
              <>
                <span className="text-slate-300">/</span>
                <span>{breadcrumb[1]}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
            <div className="h-8 w-8 rounded-full bg-slate-200" />
          </div>
        </header>

        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  )
}
