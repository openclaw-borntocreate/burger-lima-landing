import { useState } from 'react'
import { Menu, X, Flame } from 'lucide-react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#historia', label: 'Historia' },
  { href: '#menu', label: 'Menú' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-charcoal/95 backdrop-blur-sm border-b border-warm-amber/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-warm-amber font-bold text-xl tracking-tight">
          <Flame className="size-6" />
          La Brasa Limeña
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-cream/80 hover:text-warm-amber transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cream">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-charcoal/98 border-t border-warm-amber/20">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-cream/80 hover:text-warm-amber hover:bg-warm-amber/10 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
