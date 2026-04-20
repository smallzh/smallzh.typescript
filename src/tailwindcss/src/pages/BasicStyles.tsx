import React from 'react'

const BasicStyles: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Basic Styles</h1>
      <p className="text-gray-700">Explore basic typography, colors, gradients, shadows, and text decorations using Tailwind utilities.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Typography sizes */}
        {[
          { label: 'text-xs', cls: 'text-xs' },
          { label: 'text-sm', cls: 'text-sm' },
          { label: 'text-base', cls: 'text-base' },
          { label: 'text-lg', cls: 'text-lg' },
          { label: 'text-xl', cls: 'text-xl' },
          { label: 'text-2xl', cls: 'text-2xl' },
          { label: 'text-3xl', cls: 'text-3xl' },
          { label: 'text-4xl', cls: 'text-4xl' },
          { label: 'text-5xl', cls: 'text-5xl' },
          { label: 'text-6xl', cls: 'text-6xl' },
          { label: 'text-7xl', cls: 'text-7xl' },
          { label: 'text-8xl', cls: 'text-8xl' },
        ].map((it) => (
          <div key={it.label} className={`p-4 rounded bg-white shadow`}>
            <span className={it.cls}>{it.label}</span>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Colors */}
        {[
          'bg-blue-100 text-blue-700',
          'bg-green-100 text-green-700',
          'bg-yellow-100 text-yellow-800',
          'bg-purple-100 text-purple-800',
          'bg-pink-100 text-pink-800',
          'bg-indigo-100 text-indigo-800',
        ].map((cls, idx) => (
          <div key={idx} className={`p-4 rounded bg-white shadow ${cls}`}>
            <div>Color sample {idx + 1}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Gradients and shadows */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md">Gradient card</div>
        <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg">Gradient diagonal</div>
        <div className="p-6 rounded-lg bg-white shadow-xl">Plain card</div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Opacity and text decorations */}
        <div className="p-4 bg-white rounded shadow">
          <p className="opacity-60">Opacity 60%</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="line-through">Line-through</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <p className="underline decoration-2">Underline</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Text transforms and alignment */}
        <div className="p-4 bg-white rounded shadow">
          <p className="uppercase">uppercase text</p>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <p>centered text</p>
        </div>
        <div className="p-4 bg-white rounded shadow text-right">
          <p>right aligned</p>
        </div>
      </section>
    </div>
  )
}

export default BasicStyles
