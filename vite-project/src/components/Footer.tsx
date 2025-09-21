import React from 'react'

const Footer: React.FC = () => (
  <footer className="bg-white border-t">
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-8 items-start">
      <div>
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-black">
          <span className="size-8 rounded bg-black text-white grid place-items-center text-xs font-bold">PR</span>
          github repo ↗
        </a>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm text-gray-700">DEVELOPERS</h4>
        <ul className="space-y-1 text-sm">
          <li>Jazz <a className="underline text-orange-500" href="#">linkedin</a> <a className="underline text-orange-500" href="#">github</a></li>
          <li>Kevin <a className="underline text-orange-500" href="#">linkedin</a> <a className="underline text-orange-500" href="#">github</a></li>
          <li>Matthew <a className="underline text-orange-500" href="#">linkedin</a> <a className="underline text-orange-500" href="#">github</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm text-gray-700">SCRUM MASTER</h4>
        <ul className="space-y-1 text-sm">
          <li>Thaís <a className="underline text-orange-500" href="#">linkedin</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm text-gray-700">Product Owner</h4>
        <ul className="space-y-1 text-sm">
          <li>Viral <a className="underline text-orange-500" href="#">linkedin</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} PR Tracker | Chingu Voyage V57</div>
  </footer>
)

export default Footer
