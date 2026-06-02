import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-charcoal via-dark-charcoal to-warm-amber/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-warm-amber/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Flame className="size-16 mx-auto mb-6 text-warm-amber" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
        >
          Las mejores hamburguesas de Lima
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10"
        >
          Hamburguesas artesanales con ingredientes frescos y sabor peruano
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#menu">
            <Button className="bg-warm-amber hover:bg-warm-amber/90 text-dark-charcoal font-bold px-8 py-6 text-base cursor-pointer">
              Ver menú
            </Button>
          </a>
          <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-warm-amber text-warm-amber hover:bg-warm-amber/10 px-8 py-6 text-base cursor-pointer">
              Pedir ahora
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
