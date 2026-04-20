import React from 'react'

const Tables: React.FC = () => {
  const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Viewer' },
    { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Editor' },
    { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Admin' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Tables</h1>
      <p className="text-gray-700">Demonstrates Tailwind table utilities: borders, stripes, hover effects, and layout.</p>

      {/* Border collapse */}
      <section>
        <h2 className="text-xl font-medium mb-3">border-collapse</h2>
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 bg-gray-100">Header 1</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-100">Header 2</th>
              <th className="border border-gray-400 px-4 py-2 bg-gray-100">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-400 px-4 py-2">Cell 1</td><td className="border border-gray-400 px-4 py-2">Cell 2</td><td className="border border-gray-400 px-4 py-2">Cell 3</td></tr>
            <tr><td className="border border-gray-400 px-4 py-2">Cell 4</td><td className="border border-gray-400 px-4 py-2">Cell 5</td><td className="border border-gray-400 px-4 py-2">Cell 6</td></tr>
          </tbody>
        </table>
      </section>

      {/* Striped rows */}
      <section>
        <h2 className="text-xl font-medium mb-3">Striped Rows (even:bg-*)</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 border border-gray-300">{row.id}</td>
                <td className="px-4 py-2 border border-gray-300">{row.name}</td>
                <td className="px-4 py-2 border border-gray-300">{row.email}</td>
                <td className="px-4 py-2 border border-gray-300">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Hover effects */}
      <section>
        <h2 className="text-xl font-medium mb-3">Hover Effects</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 border border-blue-500">ID</th>
              <th className="px-4 py-2 border border-blue-500">Name</th>
              <th className="px-4 py-2 border border-blue-500">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-blue-50 transition-colors">
                <td className="px-4 py-2 border border-gray-300">{row.id}</td>
                <td className="px-4 py-2 border border-gray-300">{row.name}</td>
                <td className="px-4 py-2 border border-gray-300">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Table layout fixed */}
      <section>
        <h2 className="text-xl font-medium mb-3">table-fixed Layout</h2>
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="px-4 py-2 border border-green-300 w-1/4">Fixed Width (25%)</th>
              <th className="px-4 py-2 border border-green-300">Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border border-green-300 truncate">This is a very long text that will be truncated</td><td className="px-4 py-2 border border-green-300">Normal cell</td></tr>
            <tr><td className="px-4 py-2 border border-green-300 truncate">Another lengthy entry for truncation demo</td><td className="px-4 py-2 border border-green-300">More content</td></tr>
          </tbody>
        </table>
      </section>

      {/* Border spacing */}
      <section>
        <h2 className="text-xl font-medium mb-3">border-separate border-spacing-*</h2>
        <table className="border-separate border-spacing-4 w-full">
          <thead>
            <tr><th className="bg-blue-100 px-4 py-2 rounded">Col A</th><th className="bg-blue-100 px-4 py-2 rounded">Col B</th></tr>
          </thead>
          <tbody>
            <tr><td className="bg-white px-4 py-2 rounded shadow-sm">1</td><td className="bg-white px-4 py-2 rounded shadow-sm">2</td></tr>
            <tr><td className="bg-white px-4 py-2 rounded shadow-sm">3</td><td className="bg-white px-4 py-2 rounded shadow-sm">4</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Tables