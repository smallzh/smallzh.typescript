import React from 'react'

const Filters: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Filters</h1>
      <p className="text-gray-700">Demonstrates CSS filter utilities: blur, brightness, contrast, grayscale, hue-rotate, saturate, sepia, and backdrop.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-20 bg-blue-100 rounded flex items-center justify-center filter saturate-50">Saturate</div>
        <div className="h-20 bg-teal-100 rounded flex items-center justify-center filter contrast-125">Contrast</div>
        <div className="h-20 bg-emerald-100 rounded flex items-center justify-center filter blur-sm">Blur</div>
        <div className="h-20 bg-pink-100 rounded flex items-center justify-center filter grayscale">Gray</div>
        <div className="h-20 bg-yellow-100 rounded flex items-center justify-center filter hue-rotate-90">Hue</div>
        <div className="h-20 bg-orange-100 rounded flex items-center justify-center filter sepia">Sepia</div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-20 bg-white rounded flex items-center justify-center filter brightness-75">Bright 75%</div>
        <div className="h-20 bg-white rounded flex items-center justify-center filter backdrop-blur-sm">Backdrop blur</div>
        <div className="h-20 bg-white rounded flex items-center justify-center border">No filter</div>
      </section>
    </div>
  )
}

export default Filters
