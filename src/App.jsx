import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-base font-semibold">kop&kaffe</a>
          <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
            <a href="#menu" className="hover:text-neutral-900">Menu</a>
            <a href="#kontakt" className="hover:text-neutral-900">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <section id="kontakt">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
