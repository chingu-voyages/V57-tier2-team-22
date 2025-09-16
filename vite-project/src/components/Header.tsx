import React from 'react'

export const Header: React.FC = () => {
  const formattedDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <div className="text-2xl" aria-hidden>🧭</div>
        <span className="text-xl font-semibold">PR Tracker</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm" aria-label={`Today is ${formattedDate}`}>{formattedDate}</span>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="Refresh">
          ⟳ Refresh
        </button>
      </div>
    </header>
  )
}

export default Header
