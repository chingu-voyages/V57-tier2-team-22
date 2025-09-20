import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Track Your Team's GitHub Pull Requests with Ease</h1>
        <p>Stay on top of open and closed PRs, collaborate smarter, and never miss updates.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" aria-label="View open pull requests"
            onClick={() => alert('Would go to Open PRs (not wired)')}>
            Get Started → View Open PRs
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/vite.svg" alt="GitHub cube illustration" loading="lazy" />
      </div>
    </section>
  )
}

export default Hero
