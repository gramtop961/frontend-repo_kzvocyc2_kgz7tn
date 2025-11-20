import React from 'react'

const reviews = [
  { name: 'Anna', text: 'Fantastisk kaffe og smuk, rolig atmosfære. Mit nye yndlingssted!', rating: 5 },
  { name: 'Jonas', text: 'Elsker deres signaturdrinks – virkelig noget særligt.', rating: 5 },
  { name: 'Mette', text: 'Bagværket er altid frisk, og personalet er super søde.', rating: 4 },
]

const Star = ({ filled }) => (
  <svg viewBox="0 0 24 24" className={`h-4 w-4 ${filled ? 'fill-yellow-400' : 'fill-neutral-300'}`}>
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.164L12 18.896l-7.335 3.865 1.401-8.164L.132 9.21l8.2-1.192z" />
  </svg>
)

const Reviews = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">Hvad Siger Vores Gæster?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < r.rating} />
                ))}
              </div>
              <p className="mt-4 text-neutral-700">“{r.text}”</p>
              <p className="mt-3 text-sm font-medium text-neutral-900">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews