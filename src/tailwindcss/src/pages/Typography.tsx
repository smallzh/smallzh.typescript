import React from 'react'

const Typography: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Typography Utilities</h1>
      <p className="text-gray-700">Demonstrates font families, sizes, weights, tracking, leading, and text transformations.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow-sm p-4">
          <h2 className="text-xl font-serif mb-1">Heading with serif</h2>
          <p className="text-gray-600">Body with serif font</p>
        </div>
        <div className="bg-white rounded shadow-sm p-4">
          <p className="font-sans">Sans font sample</p>
          <p className="text-sm text-gray-500">Small text with tailwind sans</p>
        </div>
        <div className="bg-white rounded shadow-sm p-4">
          <p className="font-mono">Monospace sample</p>
          <p className="tracking-wide">Tracking wide</p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow-sm">
          <p className="font-semibold">Font weight 600</p>
          <p className="font-normal">Normal weight text</p>
        </div>
        <div className="p-4 bg-white rounded shadow-sm">
          <p className="leading-tight">Line height tight</p>
          <p className="leading-relaxed">Line height relaxed for readability</p>
        </div>
        <div className="p-4 bg-white rounded shadow-sm">
          <p className="text-right">Right aligned</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow-sm">
          <p className="uppercase text-sm tracking-wider">uppercase</p>
          <p className="normal-case">Normal case text</p>
        </div>
        <div className="p-4 bg-white rounded shadow-sm">
          <p className="underline decoration-2">Underlined</p>
          <p className="line-through">Line-through</p>
        </div>
      </section>
    </div>
  )
}

export default Typography
