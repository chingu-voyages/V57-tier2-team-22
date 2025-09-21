import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f5f3] flex flex-col">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center flex-grow">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black">
            Track Your Team's GitHub Pull Requests
            <span className="block italic">with <span className="text-[#fd9f49] underline decoration-4">ease</span></span>
          </h1>
          <p className="mt-5 text-gray-700 max-w-md">
            Stay in the loop, power up your collab, and keep every PR on your radar
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 bg-[#0f7a6e] hover:bg-[#0c5f59] text-white font-medium px-5 py-3 rounded-lg shadow-sm">
              Get started → See Open PR’s
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg aspect-[4/3] rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] grid place-items-center">
            <span className="text-6xl" aria-hidden>🛹</span>
          </div>
        </div>
      </section>

      {/* Green feature band */}
      <section className="bg-[#134b47] text-black/90 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl p-6 shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 grid place-items-center text-xl mb-3">👁️</div>
              <h3 className="text-lg font-semibold">See Open PRs, Instantly</h3>
              <p className="text-gray-600 text-sm mt-1">Quick overview of all pending pull requests</p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 grid place-items-center text-xl mb-3">🕒</div>
              <h3 className="text-lg font-semibold">Review Closed PRs at a Glance</h3>
              <p className="text-gray-600 text-sm mt-1">Track completed work and review history</p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 grid place-items-center text-xl mb-3">❓</div>
              <h3 className="text-lg font-semibold">AI help when you need it</h3>
              <p className="text-gray-600 text-sm mt-1">Get assistance with PR management</p>
            </article>
          </div>
        </div>
      </section>

      {/* floating chat button */}
      <button aria-label="chat" className="fixed bottom-6 right-6 size-12 rounded-full bg-white shadow grid place-items-center border">
        💬
      </button>
    </div>
  )
}

export default HomePage
