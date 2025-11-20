import React from 'react'

const categories = [
  {
    name: 'Kaffe',
    items: [
      { title: 'Sort Kaffe', desc: 'En klassisk, fyldig kop brygget på friskristede bønner.' },
      { title: 'Cappuccino', desc: 'Blød, cremet og perfekt afbalanceret.' },
      { title: 'Latte', desc: 'Mild espresso med varm, silkeblød mælk.' },
    ],
  },
  {
    name: 'Espresso',
    items: [
      { title: 'Espresso', desc: 'Intens og aromatisk ristning serveret i sin reneste form.' },
      { title: 'Dobbelt Espresso', desc: 'Dobbelt styrke, dobbelt nydelse.' },
      { title: 'Macchiato', desc: 'Espresso med en let skumtop.' },
    ],
  },
  {
    name: 'Te',
    items: [
      { title: 'Grøn Te', desc: 'Let, frisk og naturlig.' },
      { title: 'Sort Te', desc: 'Aromatisk og afrundet.' },
      { title: 'Urte Te', desc: 'Koffeinfri blanding af naturlige urter.' },
    ],
  },
  {
    name: 'Bagværk',
    items: [
      { title: 'Croissant', desc: 'Smøragtig og friskbagt hver morgen.' },
      { title: 'Kanelbolle', desc: 'Sød, blød og kanelduftende.' },
    ],
  },
  {
    name: 'Morgenmad',
    items: [
      { title: 'Yoghurt med Granola', desc: 'Lun og sprød granola med frisk frugt.' },
      { title: 'Avocadomad', desc: 'Frisk avokado på surdejsbrød.' },
    ],
  },
  {
    name: 'Sæsonspecialiteter',
    items: [
      { title: 'Pumpkin Spice Latte (efterår)', desc: 'Krydret, varm og fyldig.' },
      { title: 'Sommer Iskaffe', desc: 'Kold, forfriskende og aromatisk.' },
    ],
  },
  {
    name: 'Signaturdrinks',
    items: [
      { title: 'Kop&Kaffe Signature Latte', desc: 'Vores helt egen latte med mørk chokoladenote.' },
      { title: 'Honningshake Espresso', desc: 'Sødmefuld espresso rystet med honning.' },
    ],
  },
]

const Menu = () => {
  return (
    <section id="menu" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">Vores Menu</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">{cat.name}</h3>
              <ul className="mt-4 space-y-3">
                {cat.items.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                    <div>
                      <p className="font-medium text-neutral-900">{item.title}</p>
                      <p className="text-sm text-neutral-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu