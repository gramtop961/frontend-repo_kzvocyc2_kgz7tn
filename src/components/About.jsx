import React from 'react'

const About = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">Om kop&kaffe</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            kop&kaffe er et moderne, minimalistisk kaffested skabt til dig, der sætter pris på kvalitet, ro og en ren smagsoplevelse. Vi fokuserer på friskristede bønner, håndværk og en varm atmosfære.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop"
              alt="barista laver kaffe bag baren"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About