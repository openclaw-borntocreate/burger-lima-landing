import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-dark-charcoal">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4">Encuéntranos</h2>
          <p className="text-cream/60 text-lg">Ven a visitarnos en Miraflores</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="size-6 text-warm-amber shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-cream text-lg">Dirección</h3>
                <p className="text-cream/60">Av. Larco 456, Miraflores, Lima</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="size-6 text-warm-amber shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-cream text-lg">Horario</h3>
                <p className="text-cream/60">Lun - Dom: 12:00 - 23:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="size-6 text-warm-amber shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-cream text-lg">Teléfono</h3>
                <p className="text-cream/60">+51 999 999 999</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-2xl overflow-hidden bg-dark-charcoal/50 border border-dark-charcoal/10 flex items-center justify-center"
          >
            <div className="text-center text-cream/40">
              <MapPin className="size-12 mx-auto mb-2 text-warm-amber/50" />
              <p className="text-sm">Av. Larco 456, Miraflores</p>
              <p className="text-xs">Mapa interactivo próximamente</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
