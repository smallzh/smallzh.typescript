import React from 'react'

const Spacing: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Spacing Utilities</h1>
      <p className="text-gray-700">Demonstrates padding, margin, and space utilities with vivid boxes.</p>

      <section className="bg-white rounded shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 bg-blue-100 rounded w-full md:w-1/3">p-4</div>
          <div className="p-6 bg-blue-200 rounded w-full md:w-1/3">p-6</div>
          <div className="p-8 bg-blue-300 rounded w-full md:w-1/3">p-8</div>
        </div>
      </section>

      <section className="bg-white rounded shadow-sm p-4">
        <div className="space-x-4">
          <span className="inline-block bg-gray-100 p-2 rounded">m-0</span>
          <span className="inline-block bg-gray-200 p-3 rounded">m-3</span>
          <span className="inline-block bg-gray-300 p-4 rounded">m-6</span>
        </div>
      </section>

      <section className="bg-white rounded shadow-sm p-4">
        <div className="space-y-2">
          <div className="flex space-x-2">
            <div className="p-3 bg-purple-100 rounded">space-x-2</div>
            <div className="p-3 bg-purple-200 rounded">space-x-2</div>
            <div className="p-3 bg-purple-300 rounded">space-x-2</div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="p-3 bg-green-100 rounded">space-y-2</div>
            <div className="p-3 bg-green-200 rounded">space-y-2</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Spacing
