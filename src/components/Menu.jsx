import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const burgers = [
  { name: 'La Limeña', desc: 'Hamburguesa clásica con lechuga, tomate, cebolla caramelizada y nuestra salsa especial de la casa.', price: 'S/ 28', tag: 'Clásica' },
  { name: 'Doble Brasa', desc: 'Dos carnes jugosas a la parrilla con queso doble, tocino ahumado y salsa BBQ de la casa.', price: 'S/ 35', tag: 'Premium' },
  { name: 'La Criolla', desc: 'Con cebolla encurtida, huevo frito, papas nativas crocantes y salsa criolla.', price: 'S/ 25', tag: 'Clásica' },
  { name: 'Ají Burger', desc: 'Carne sellada con ají amarillo, jalapeños frescos, guacamole y queso pepper jack.', price: 'S/ 30', tag: 'Picante' },
  { name: 'La Veggie', desc: 'Medallón de quinoa, lentejas y vegetales frescos, con palta y mayonesa vegana.', price: 'S/ 22', tag: 'Veggie' },
  { name: 'BBQ Andina', desc: 'Cubierta con pulled pork ahumado, cebolla crispy, salsa BBQ andina y queso cheddar.', price: 'S/ 32', tag: 'Especial' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-dark-charcoal">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4">Nuestro Menú</h2>
          <p className="text-cream/60 text-lg">Hamburguesas artesanales hechas con pasión</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {burgers.map((b, i) => (
            <motion.div key={i} variants={item}>
              <Card className="bg-dark-charcoal/80 border-warm-amber/20 hover:border-warm-amber/50 transition-all group h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-cream group-hover:text-warm-amber transition-colors">
                      {b.name}
                    </h3>
                    <Badge variant="outline" className="text-warm-amber border-warm-amber/40 text-xs">
                      {b.tag}
                    </Badge>
                  </div>
                  <p className="text-cream/60 text-sm leading-relaxed flex-1">
                    {b.desc}
                  </p>
                  <p className="text-warm-amber font-bold text-xl mt-4">
                    {b.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
