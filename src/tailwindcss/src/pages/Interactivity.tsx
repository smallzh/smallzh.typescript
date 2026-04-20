import React from 'react'

const Interactivity: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Interactivity</h1>
      <p className="text-gray-700">Demonstrates Tailwind interactivity utilities: cursors, focus states, scroll behavior, user-select, and more.</p>

      {/* Cursor */}
      <section>
        <h2 className="text-xl font-medium mb-3">cursor-*</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'cursor-default', cls: 'cursor-default' },
            { name: 'cursor-pointer', cls: 'cursor-pointer' },
            { name: 'cursor-wait', cls: 'cursor-wait' },
            { name: 'cursor-text', cls: 'cursor-text' },
            { name: 'cursor-move', cls: 'cursor-move' },
            { name: 'cursor-not-allowed', cls: 'cursor-not-allowed' },
            { name: 'cursor-crosshair', cls: 'cursor-crosshair' },
            { name: 'cursor-grab', cls: 'cursor-grab' },
          ].map((item) => (
            <div key={item.name} className={`${item.cls} p-4 bg-white rounded shadow text-center`}>
              <p className="font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accent color */}
      <section>
        <h2 className="text-xl font-medium mb-3">accent-*</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-blue-500 w-5 h-5" />
            <span>accent-blue-500</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-red-500 w-5 h-5" />
            <span>accent-red-500</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-green-500 w-5 h-5" />
            <span>accent-green-500</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="range" min="0" max="100" defaultValue="50" className="accent-purple-500 w-32" />
            <span>accent-purple-500</span>
          </label>
        </div>
      </section>

      {/* Appearance */}
      <section>
        <h2 className="text-xl font-medium mb-3">appearance-none</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>Default select</option>
            <option>Option B</option>
          </select>
          <select className="appearance-none border border-gray-300 rounded px-3 py-2 bg-white">
            <option>appearance-none</option>
            <option>Custom styled</option>
          </select>
        </div>
      </section>

      {/* Focus styles */}
      <section>
        <h2 className="text-xl font-medium mb-3">focus:ring-*, focus:outline-*</h2>
        <div className="flex flex-wrap gap-4">
          <input type="text" placeholder="focus:ring-2 ring-blue-500" className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="text" placeholder="focus:ring-2 ring-red-500" className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none" />
          <input type="text" placeholder="focus:border-green-500" className="border border-gray-300 rounded px-3 py-2 focus:border-green-500 focus:outline-none" />
        </div>
      </section>

      {/* Pointer events */}
      <section>
        <h2 className="text-xl font-medium mb-3">pointer-events-none / pointer-events-auto</h2>
        <div className="relative w-64 h-32 bg-gray-200 rounded overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 pointer-events-none opacity-50">
              pointer-events-none
            </button>
          </div>
          <p className="absolute bottom-2 right-2 text-sm text-gray-500">Button above cannot be clicked</p>
        </div>
      </section>

      {/* Resize */}
      <section>
        <h2 className="text-xl font-medium mb-3">resize-*</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="font-medium mb-1">resize-none</p>
            <textarea className="w-full h-24 border border-gray-300 rounded p-2 resize-none" defaultValue="Cannot resize" />
          </div>
          <div>
            <p className="font-medium mb-1">resize-y</p>
            <textarea className="w-full h-24 border border-gray-300 rounded p-2 resize-y" defaultValue="Resize vertically" />
          </div>
          <div>
            <p className="font-medium mb-1">resize (both)</p>
            <textarea className="w-full h-24 border border-gray-300 rounded p-2 resize" defaultValue="Resize both directions" />
          </div>
        </div>
      </section>

      {/* Scroll behavior */}
      <section>
        <h2 className="text-xl font-medium mb-3">scroll-smooth</h2>
        <div className="border border-gray-300 rounded p-3 bg-white">
          <p className="text-sm text-gray-600 mb-2">Apply <code className="bg-gray-100 px-1 rounded">scroll-smooth</code> to a scrollable container for smooth scrolling.</p>
          <nav className="flex gap-2 mb-2">
            <a href="#section1" className="text-blue-500 underline text-sm">Section 1</a>
            <a href="#section2" className="text-blue-500 underline text-sm">Section 2</a>
            <a href="#section3" className="text-blue-500 underline text-sm">Section 3</a>
          </nav>
          <div className="h-32 overflow-y-auto scroll-smooth border rounded">
            <div id="section1" className="h-32 bg-blue-50 flex items-center justify-center">Section 1</div>
            <div id="section2" className="h-32 bg-green-50 flex items-center justify-center">Section 2</div>
            <div id="section3" className="h-32 bg-yellow-50 flex items-center justify-center">Section 3</div>
          </div>
        </div>
      </section>

      {/* Scroll snap */}
      <section>
        <h2 className="text-xl font-medium mb-3">scroll-snap-*</h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'].map((color, idx) => (
            <div
              key={color}
              className={`snap-start min-w-[200px] h-40 flex-shrink-0 rounded-lg flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${
                idx === 0 ? 'from-red-500 to-rose-600' :
                idx === 1 ? 'from-orange-500 to-amber-600' :
                idx === 2 ? 'from-yellow-500 to-lime-600' :
                idx === 3 ? 'from-green-500 to-emerald-600' :
                idx === 4 ? 'from-blue-500 to-cyan-600' :
                idx === 5 ? 'from-indigo-500 to-violet-600' :
                'from-purple-500 to-fuchsia-600'
              }`}
            >
              {color}
            </div>
          ))}
        </div>
      </section>

      {/* User select */}
      <section>
        <h2 className="text-xl font-medium mb-3">select-none / select-text / select-all</h2>
        <div className="space-y-3">
          <div className="p-3 bg-white rounded shadow select-none">
            <p>This text cannot be selected (select-none)</p>
          </div>
          <div className="p-3 bg-white rounded shadow select-text">
            <p>This text can be selected normally (select-text)</p>
          </div>
          <div className="p-3 bg-white rounded shadow select-all">
            <p>Click to select all of this text (select-all)</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Interactivity