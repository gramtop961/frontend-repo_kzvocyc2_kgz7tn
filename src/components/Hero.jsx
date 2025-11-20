import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft light gradient overlay to harmonize with light theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs tracking-wide text-neutral-700 shadow-sm backdrop-blur">
            moderne-minimal • lys
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl">
            Velkommen til <span className="underline decoration-neutral-300 underline-offset-4">kop&kaffe</span>
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            Moderne kaffeoplevelser i rolige omgivelser
          </p>
          <a href="#menu" className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20">
            Se Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero