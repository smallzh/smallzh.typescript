import React, { useMemo, useState } from 'react'
import BasicStyles from './pages/BasicStyles'
import Layout from './pages/Layout'
import FlexboxGrid from './pages/FlexboxGrid'
import Spacing from './pages/Spacing'
import Sizing from './pages/Sizing'
import Typography from './pages/Typography'
import Backgrounds from './pages/Backgrounds'
import Borders from './pages/Borders'
import Effects from './pages/Effects'
import Filters from './pages/Filters'
import Tables from './pages/Tables'
import TransformsAnimations from './pages/TransformsAnimations'
import Interactivity from './pages/Interactivity'

type PageComponent = React.FC<any>

const App: React.FC = () => {
  const pages: Record<string, PageComponent> = {
    BasicStyles,
    Layout,
    FlexboxGrid,
    Spacing,
    Sizing,
    Typography,
    Backgrounds,
    Borders,
    Effects,
    Filters,
    Tables,
    TransformsAnimations,
    Interactivity,
  }

  const pageNames = useMemo(() => Object.keys(pages), [pages])

  const [current, setCurrent] = useState<string>(pageNames[0] ?? 'BasicStyles')
  const [drawer, setDrawer] = useState(false)

  const CurrentPage = pages[current as string] || pages[pageNames[0]]

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed h-full w-64 bg-white border-r z-10 p-4 flex-col">
        <div className="text-xl font-semibold mb-4">Tailwind Demo</div>
        <nav className="flex-1 space-y-1">
          {pageNames.map((name) => (
            <button
              key={name}
              onClick={() => setCurrent(name)}
              className={
                `w-full text-left px-3 py-2 rounded ` +
                (current === name
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700')
              }
            >
              {name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-20">
        <button
          aria-label="Open menu"
          onClick={() => setDrawer(true)}
          className="p-2 rounded-md bg-gray-100"
        >
          <span className="block w-6 h-0.5 bg-black mb-1" />
          <span className="block w-6 h-0.5 bg-black mb-1" />
          <span className="block w-6 h-0.5 bg-black" />
        </button>
        <div className="text-lg font-semibold">Tailwind Demo</div>
        <div className="w-6" />
      </header>

      {/* Mobile Drawer */}
      {drawer && (
        <div className="md:hidden fixed inset-0 z-30">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setDrawer(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl p-4">
            <button className="mb-4 p-2 rounded" onClick={() => setDrawer(false)}>Close</button>
            <nav className="flex flex-col space-y-1">
              {pageNames.map((name) => (
                <button key={name} onClick={() => { setCurrent(name); setDrawer(false); }} className={`text-left px-3 py-2 rounded ${current === name ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
                  {name}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Content Area */}
      <main className="md:ml-64 p-6">
        <section className="max-w-7xl mx-auto">
          <CurrentPage />
        </section>
      </main>
    </div>
  )
}

export default App
