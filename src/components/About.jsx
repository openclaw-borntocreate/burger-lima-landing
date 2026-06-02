import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <section id="historia" className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-dark-charcoal mb-4">
            Nuestra Historia
          </h2>
          <div className="flex justify-center mb-8">
            <Separator className="w-20 bg-warm-amber h-1 rounded" />
          </div>
          <p className="text-lg md:text-xl text-dark-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            Nacimos en el corazón de Miraflores con una misión clara: traer a Lima las hamburguesas artesanales
            más auténticas. Cada una de nuestras creaciones combina ingredientes frescos y locales con técnicas
            tradicionales de la parrilla peruana. En <strong className="text-warm-amber">La Brasa Limeña</strong>,
            no solo hacemos hamburguesas — creamos una experiencia que celebra el sabor único de nuestra tierra.
            Desde la carne sellada a la brasa hasta la salsa de ají que despierta los sentidos, cada bocado
            cuenta una historia de pasión y dedicación.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
