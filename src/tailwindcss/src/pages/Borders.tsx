import React from 'react'

const Borders: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Borders</h1>
      <p className="text-gray-700">Demonstrates border widths, colors, styles, radii and dividers.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-16 bg-white rounded border border-gray-300 flex items-center justify-center">border</div>
        <div className="h-16 bg-white rounded-md border-2 border-blue-500 flex items-center justify-center">border-2</div>
        <div className="h-16 bg-white rounded-md border-4 border-dashed border-pink-500 flex items-center justify-center">border-dashed</div>
        <div className="h-16 bg-white rounded-md border-t border-r border-l border-b border-gray-400 flex items-center justify-center">border edges</div>
        <div className="h-16 bg-white rounded-md border-2 border-green-500 rounded-full flex items-center justify-center">rounded-full</div>
        <div className="h-16 bg-white rounded-md border-2 border-yellow-400 flex items-center justify-center">outline</div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="h-14 bg-gray-100 rounded p-2 border">divide-y</div>
        <div className="h-14 bg-gray-100 rounded p-2 border-t border-gray-300">divider</div>
      </section>
    </div>
  )
}

export default Borders
