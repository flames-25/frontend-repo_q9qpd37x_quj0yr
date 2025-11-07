import { useState } from 'react';
import { Menu, X, Rocket, Home, Boxes, BookOpen, LineChart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const LinkItem = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-[15px] font-medium text-slate-700 hover:text-teal-800 hover:bg-teal-50 transition-colors"
      style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}
    >
      <Icon size={18} />
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-[#0F766E] grid place-content-center text-white">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>Manasikhub</div>
              <div className="text-xs text-slate-500" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>Ekosistem Digital Haji</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <LinkItem href="#home" icon={Home} label="Home" />
            <LinkItem href="#products" icon={Boxes} label="Products" />
            <LinkItem href="#blog" icon={BookOpen} label="Blog" />
            <a
              href="#investor"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FFBF47] text-slate-900 font-semibold hover:brightness-95 transition"
              style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}
            >
              <LineChart size={18} /> Investor
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              <LinkItem href="#home" icon={Home} label="Home" />
              <LinkItem href="#products" icon={Boxes} label="Products" />
              <LinkItem href="#blog" icon={BookOpen} label="Blog" />
              <a
                href="#investor"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#FFBF47] text-slate-900 font-semibold hover:brightness-95 transition"
                style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}
              >
                <LineChart size={18} /> Investor
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
