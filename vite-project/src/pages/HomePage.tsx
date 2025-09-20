import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 flex-grow">
        <Hero />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4" aria-hidden>👁️</div>
            <h3 className="text-xl font-semibold mb-2">See Open PRs, Instantly</h3>
            <p className="text-gray-600">Quick overview of all pending pull requests</p>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4" aria-hidden>🕒</div>
            <h3 className="text-xl font-semibold mb-2">Review Closed PRs at a Glance</h3>
            <p className="text-gray-600">Track completed work and review history</p>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4" aria-hidden>❓</div>
            <h3 className="text-xl font-semibold mb-2">AI Help When You Need It</h3>
            <p className="text-gray-600">Get assistance with PR management</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
