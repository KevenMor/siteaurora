import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import auroraLogo from '../assets/aurora-logo.png';

const LOGO_WIDTH = 625;
const LOGO_HEIGHT = 193;

const navLinks = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Análise de Crédito', href: '#analise' },
  { label: 'Sobre Nós', href: '#institucional' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-4 md:px-6 py-4 md:py-5">
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        <a href="#" className="shrink-0 leading-none">
          <img
            src={auroraLogo}
            alt="Aurora Asset"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            decoding="async"
            className="h-11 md:h-12 w-auto max-w-none object-contain"
            style={{ aspectRatio: `${LOGO_WIDTH} / ${LOGO_HEIGHT}` }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Área do Cliente
        </button>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-gray-700 hover:text-black font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 bg-black text-white text-base font-medium px-7 py-2.5 rounded-full text-center hover:bg-gray-800 transition-colors duration-200"
            >
              Área do Cliente
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
