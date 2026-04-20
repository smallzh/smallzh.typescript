import React from 'react'

const FlexboxGrid: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Flexbox & Grid Utilities</h1>
      <p className="text-gray-700">Showcases flexbox directions, wrapping, justification, alignment, order, and grid layouts with Tailwind.</p>

      {/* Flexbox row with wrap and alignment */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-40 h-16 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-md flex items-center justify-center font-semibold">Item {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Grid demonstration with spans */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 bg-gray-100 rounded-md flex items-center justify-center">Col {i + 1}</div>
          ))}
          <div className="col-span-2 h-14 bg-gray-200 rounded-md flex items-center justify-center">Col-span-2</div>
          <div className="col-span-3 h-14 bg-gray-300 rounded-md flex items-center justify-center">Col-span-3</div>
        </div>
      </section>

      {/* Alignment and ordering */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="flex flex-row-reverse gap-4">
          {['A','B','C','D'].map((l, idx) => (
            <div key={l} className={`w-20 h-12 bg-${idx === 0 ? 'red-500' : 'blue-500'} text-white rounded-md flex items-center justify-center`}>#{idx+1}{l}</div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FlexboxGrid
