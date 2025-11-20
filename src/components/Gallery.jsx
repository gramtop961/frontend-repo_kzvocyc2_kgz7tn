import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1200&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm">
              <img src={src} alt="Galleri billede" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery