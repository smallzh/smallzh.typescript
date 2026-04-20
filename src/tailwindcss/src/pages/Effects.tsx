import React from 'react'

const Effects: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Effects & Shadows</h1>
      <p className="text-gray-700">Showcases shadows, opacity, rings, and backdrop blur effects.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-20 bg-white rounded shadow" />
        <div className="h-20 bg-white rounded shadow-md" />
        <div className="h-20 bg-white rounded shadow-lg" />
        <div className="h-20 bg-white rounded shadow-xl" />
        <div className="h-20 bg-white rounded inner shadow-2xl" />
        <div className="h-20 bg-white rounded shadow-inner" />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-20 bg-white rounded p-4 flex items-center justify-center opacity-60">Opacity 60%</div>
        <div className="h-20 bg-white rounded p-4 flex items-center justify-center filter blur-sm">Blur</div>
        <div className="h-20 bg-white rounded p-4 flex items-center justify-center filter saturate-50">Saturate</div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="h-20 bg-white rounded flex items-center justify-center ring-4 ring-offset-2 ring-indigo-500">Ring</div>
        <div className="h-20 bg-white rounded flex items-center justify-center mix-blend-overlay">Blend</div>
      </section>
    </div>
  )
}

export default Effects
