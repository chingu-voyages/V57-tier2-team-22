import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const HomePage: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <Hero />
        <section className="features">
          <article className="feature">
            <div className="feature-icon" aria-hidden>👁️</div>
            <h3>See Open PRs, Instantly</h3>
            <p>Quick overview of all pending pull requests</p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden>🕒</div>
            <h3>Review Closed PRs at a Glance</h3>
            <p>Track completed work and review history</p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden>❓</div>
            <h3>AI Help When You Need It</h3>
            <p>Get assistance with PR management</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
