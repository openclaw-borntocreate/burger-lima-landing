import { Flame, Camera, Music2, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal border-t border-warm-amber/20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#" className="flex items-center gap-2 text-warm-amber font-bold text-lg">
            <Flame className="size-5" />
            La Brasa Limeña
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-warm-amber transition-colors"
              aria-label="Instagram (Camera)"
            >
              <Camera className="size-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-warm-amber transition-colors"
              aria-label="TikTok"
            >
              <Music2 className="size-5" />
            </a>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-warm-amber transition-colors flex items-center gap-1"
            >
              <Phone className="size-4" />
              <span className="text-sm">+51 999 999 999</span>
            </a>
          </div>
        </div>

        <div className="text-center text-cream/40 text-xs">
          &copy; {new Date().getFullYear()} La Brasa Limeña. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
