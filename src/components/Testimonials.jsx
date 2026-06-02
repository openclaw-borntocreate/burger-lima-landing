import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María García',
    quote: 'Las mejores hamburguesas que he probado en Lima. La Doble Brasa es increíble, la carne tiene un sabor ahumado único.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    quote: 'El ambiente es espectacular y la atención de primera. La hamburguesa La Criolla me transportó a la comida de mi abuela.',
    rating: 5,
  },
  {
    name: 'Valeria Torres',
    quote: 'Soy vegana y la La Veggie me sorprendió gratamente. Tiene un sabor increíble, definitivamente mi lugar favorito.',
    rating: 5,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-dark-charcoal/60 text-lg">Opiniones de quienes ya disfrutaron la experiencia</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-lg border border-warm-amber/10 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-5 fill-warm-amber text-warm-amber" />
                ))}
              </div>
              <p className="text-dark-charcoal/70 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-bold text-dark-charcoal">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
