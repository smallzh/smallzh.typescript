import React from 'react'

const TransformsAnimations: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Transforms &amp; Animations</h1>
      <p className="text-gray-700">Demonstrates Tailwind transform, transition, and animation utilities.</p>

      {/* Scale */}
      <section>
        <h2 className="text-xl font-medium mb-3">scale-*</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="w-20 h-20 bg-blue-500 flex items-center justify-center text-white text-sm">1x</div>
          <div className="w-20 h-20 bg-blue-500 scale-50 flex items-center justify-center text-white text-sm">0.5x</div>
          <div className="w-20 h-20 bg-blue-500 scale-75 flex items-center justify-center text-white text-sm">0.75x</div>
          <div className="w-20 h-20 bg-blue-500 scale-110 flex items-center justify-center text-white text-sm">1.1x</div>
          <div className="w-20 h-20 bg-blue-500 scale-125 flex items-center justify-center text-white text-sm">1.25x</div>
        </div>
      </section>

      {/* Rotate */}
      <section>
        <h2 className="text-xl font-medium mb-3">rotate-*</h2>
        <div className="flex flex-wrap gap-6 items-center">
          {[0, 12, 45, 90].map((deg) => (
            <div key={deg} className="text-center">
              <div className={`w-16 h-16 bg-rose-500 flex items-center justify-center text-white text-sm mx-auto ${deg ? `rotate-${deg}` : ''}`}>{deg}°</div>
              <p className="text-xs text-gray-500 mt-1">rotate-{deg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Translate */}
      <section>
        <h2 className="text-xl font-medium mb-3">translate-*</h2>
        <div className="relative h-32 bg-gray-100 rounded overflow-hidden">
          <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-500 translate-x-4 translate-y-4 flex items-center justify-center text-white text-xs">x4 y4</div>
          <div className="absolute top-4 left-40 w-16 h-16 bg-emerald-600 translate-x-8 flex items-center justify-center text-white text-xs">x8</div>
          <div className="absolute top-4 left-72 w-16 h-16 bg-emerald-700 -translate-y-2 flex items-center justify-center text-white text-xs">-y2</div>
        </div>
      </section>

      {/* Skew */}
      <section>
        <h2 className="text-xl font-medium mb-3">skew-*</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-24 h-16 bg-violet-500 skew-y-3 flex items-center justify-center text-white text-sm">skew-y-3</div>
          <div className="w-24 h-16 bg-violet-600 skew-x-6 flex items-center justify-center text-white text-sm">skew-x-6</div>
          <div className="w-24 h-16 bg-violet-700 -skew-x-3 flex items-center justify-center text-white text-sm">-skew-x-3</div>
        </div>
      </section>

      {/* transform-origin */}
      <section>
        <h2 className="text-xl font-medium mb-3">transform-origin</h2>
        <div className="flex flex-wrap gap-4">
          <div className="text-center"><p className="text-sm mb-1">origin-center</p><div className="w-16 h-16 bg-amber-500 origin-center rotate-12 flex items-center justify-center text-white text-xs">center</div></div>
          <div className="text-center"><p className="text-sm mb-1">origin-top-left</p><div className="w-16 h-16 bg-amber-600 origin-top-left rotate-12 flex items-center justify-center text-white text-xs">top-left</div></div>
          <div className="text-center"><p className="text-sm mb-1">origin-bottom-right</p><div className="w-16 h-16 bg-amber-700 origin-bottom-right rotate-12 flex items-center justify-center text-white text-xs">bot-right</div></div>
        </div>
      </section>

      {/* Transition */}
      <section>
        <h2 className="text-xl font-medium mb-3">transition-*, duration-*, ease-*</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">colors 300ms</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-all duration-500 ease-in-out">all 500ms ease-in-out</button>
          <div className="w-24 h-10 bg-orange-500 rounded hover:scale-125 transition-transform duration-300 flex items-center justify-center text-white text-xs">hover scale</div>
          <div className="w-24 h-10 bg-pink-500 rounded hover:rotate-45 transition-transform duration-700 ease-linear flex items-center justify-center text-white text-xs">hover rotate</div>
        </div>
      </section>

      {/* Transition delay */}
      <section>
        <h2 className="text-xl font-medium mb-3">delay-*</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors duration-300 delay-75">delay-75</button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors duration-300 delay-150">delay-150</button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors duration-300 delay-300">delay-300</button>
        </div>
      </section>

      {/* Built-in animations */}
      <section>
        <h2 className="text-xl font-medium mb-3">Built-in Animations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full animate-spin mx-auto" />
            <p className="text-sm mt-2">animate-spin</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="w-10 h-10 bg-red-500 rounded-full animate-ping relative mx-auto"><div className="absolute inset-0 rounded-full bg-red-500" /></div>
            <p className="text-sm mt-2">animate-ping</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="w-10 h-10 bg-green-500 rounded-full animate-pulse mx-auto" />
            <p className="text-sm mt-2">animate-pulse</p>
          </div>
          <div className="p-4 bg-white rounded shadow text-center">
            <div className="w-6 h-6 bg-yellow-500 rounded animate-bounce mx-auto" />
            <p className="text-sm mt-2">animate-bounce</p>
          </div>
        </div>
      </section>

      {/* Combined hover effects */}
      <section>
        <h2 className="text-xl font-medium mb-3">Combined Hover Effects</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white font-medium cursor-pointer">Scale + Shadow</div>
          <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg shadow hover:-translate-y-2 hover:rotate-3 transition-all duration-300 flex items-center justify-center text-white font-medium cursor-pointer">Lift + Rotate</div>
          <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow hover:skew-x-6 transition-transform duration-300 flex items-center justify-center text-white font-medium cursor-pointer">Skew on Hover</div>
        </div>
      </section>
    </div>
  )
}

export default TransformsAnimations