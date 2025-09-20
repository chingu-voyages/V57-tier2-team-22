import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  const formattedDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold hover:text-blue-600">
          <div className="text-2xl" aria-hidden>🧭</div>
          <span>PR Tracker</span>
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/design-system" className="text-gray-600 hover:text-blue-600">Design System</Link>
        <Link to="/prs" className="text-gray-600 hover:text-blue-600">PRs</Link>
        <span className="text-gray-600 text-sm" aria-label={`Today is ${formattedDate}`}>{formattedDate}</span>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="Refresh">
          ⟳ Refresh
        </button>
      </nav>
    </header>
  )
}

export default Header
