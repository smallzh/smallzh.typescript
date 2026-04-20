import React from 'react'

const Sizing: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Sizing Utilities</h1>
      <p className="text-gray-700">Demonstrates width, height, min/max sizes, and responsive sizing.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-10 bg-blue-100 rounded flex items-center justify-center">w-12</div>
        <div className="w-40 h-12 bg-teal-100 rounded flex items-center justify-center">w-40</div>
        <div className="w-full h-12 bg-amber-100 rounded flex items-center justify-center">w-full</div>
        <div className="min-w-[120px] max-w-[200px] h-12 bg-pink-100 rounded flex items-center justify-center">min-w 120 / max-w 200</div>
        <div className="min-h-[80px] h-12 bg-green-100 rounded flex items-center justify-center">min-h 80</div>
        <div className="max-h-40 overflow-hidden bg-indigo-100 rounded flex items-center justify-center">max-h 40</div>
      </section>
    </div>
  )
}

export default Sizing
