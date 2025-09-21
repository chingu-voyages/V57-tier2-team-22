import React from 'react'

const Footer: React.FC = () => (
  <footer className="bg-white border-t ">
    <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-4 gap-6 items-start">
      <div>
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-black">
          <span className="w-8 h-8 rounded bg-black text-white grid place-items-center text-xs font-bold">PR</span>
          github repo ↗
        </a>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm  text-gray-700">DEVELOPERS</h4>
        <ul className="space-y-3 text-sm ">
          <li className="flex items-center gap-3">
            <span className="font-semibold min-w-[6rem] flex-none block">Jazz</span>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">LinkedIn</a>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">GitHub</a>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-semibold min-w-[6rem] flex-none block">Kevin</span>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">LinkedIn</a>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">GitHub</a>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-semibold min-w-[6rem] flex-none block">Matthew</span>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">LinkedIn</a>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">GitHub</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm text-gray-700">SCRUM MASTER</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <span className="font-semibold min-w-[6rem] flex-none block">Thaís</span>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-sm text-gray-700">Product Owner</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <span className="font-semibold min-w-[6rem] flex-none block">Viral</span>
            <a className="text-xs py-1 px-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500" href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} PR Tracker | Chingu Voyage V57</div>
  </footer>
)

export default Footer
