import React from 'react'

const Backgrounds: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Backgrounds & Gradients</h1>
      <p className="text-gray-700">Demonstrates background colors, gradients, and background positioning techniques.</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-24 bg-blue-500 rounded-md flex items-center justify-center text-white">bg-blue-500</div>
        <div className="h-24 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md flex items-center justify-center text-white">Gradient</div>
        <div className="h-24 bg-yellow-100 rounded-md flex items-center justify-center">bg-yellow-100</div>
        <div className="h-24 bg-[radial-gradient(circle at center, rgba(255,255,255,.25), rgba(0,0,0,.0))] rounded-md flex items-center justify-center text-black">Radial overlay</div>
        <div className="h-24 bg-[length:60%_60%] bg-[url('https://dummyimage.com/400x200/000/fff')] bg-no-repeat rounded-md flex items-center justify-center text-white">External bg</div>
        <div className="h-24 bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 rounded-md flex items-center justify-center text-white">Multi-stop</div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-20 bg-no-repeat bg-[center/200%] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22><defs/><rect width=%2220%22 height=%2220%22 fill=%22%23999%22/></svg>')] rounded flex items-center justify-center text-white">Pattern</div>
        <div className="h-20 bg-[length:50%_50%] bg-[radial-gradient(circle at 30% 30%, rgba(255,255,255,.4), rgba(0,0,0,.0))] rounded flex items-center justify-center text-black">Radial Shine</div>
        <div className="h-20 bg-cyan-600 rounded flex items-center justify-center text-white">bg-cyan-600</div>
      </section>
    </div>
  )
}

export default Backgrounds
