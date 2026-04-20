import React from 'react'

const Layout: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Layout & Display Utilities</h1>
      <p className="text-gray-700">Demonstrates container, aspect ratios, responsive columns, display types, float, overflow, and positioning.</p>

      {/* Container & grid columns */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center text-white font-semibold">Box {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Aspect ratio demonstration */}
      <section className="p-4 bg-white rounded shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded flex items-center justify-center aspect-video">Aspect Video</div>
        <div className="bg-blue-100 rounded flex items-center justify-center aspect-square">Aspect Square</div>
      </section>

      {/* Display types & breakpoints */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['block','inline','inline-block','.flex','grid','hidden','table','table-cell'].map((name)=> (
            <div key={name} className="h-20 bg-gray-50 border rounded flex items-center justify-center text-sm">{name}</div>
          ))}
        </div>
      </section>

      {/* Float & Clear demonstration */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="clearfix">
          <div className="float-left w-1/3 h-20 bg-pink-500 text-white flex items-center justify-center rounded-l">Float Left</div>
          <div className="float-right w-1/2 h-20 bg-emerald-500 text-white flex items-center justify-center rounded-r">Float Right</div>
        </div>
        <div className="clear-both" />
        <div className="mt-4 p-3 bg-yellow-100 rounded">After clear: normal flow content</div>
      </section>

      {/* Overflow & positioning */}
      <section className="p-4 bg-white rounded shadow-sm">
        <div className="relative h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md overflow-hidden">
          <div className="absolute bottom-0 right-0 m-3 p-2 bg-white/80 rounded">Positioned box</div>
        </div>
      </section>
    </div>
  )
}

export default Layout
