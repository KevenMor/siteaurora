import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import auroraLogo from '../assets/aurora-logo.png';

const LOGO_WIDTH = 625;
const LOGO_HEIGHT = 193;

const navLinks = [
  { label: 'Como Funciona', to: '/#como-funciona' },
  { label: 'Benefícios', to: '/#beneficios' },
  { label: 'Análise de Crédito', to: '/contato' },
  { label: 'Sobre Nós', to: '/#institucional' },
  { label: 'Contato', to: '/contato' },
];

function isActive(pathname: string, to: string) {
  if (to === '/contato') return pathname === '/contato';
  return false;
}

type NavbarProps = {
  variant?: 'hero' | 'standalone';
};

export default function Navbar({ variant = 'hero' }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHero = variant === 'hero';

  return (
    <nav
      className={
        isHero
          ? 'absolute top-0 left-0 right-0 z-20 px-4 md:px-6 py-4 md:py-5'
          : 'fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 bg-aurora-bg/92 backdrop-blur-sm border-b section-rule'
      }
    >
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        <Link to="/" className="shrink-0 leading-none" onClick={() => setOpen(false)}>
          <img
            src={auroraLogo}
            alt="Aurora Asset"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            decoding="async"
            className="h-11 md:h-12 w-auto max-w-none object-contain"
            style={{ aspectRatio: `${LOGO_WIDTH} / ${LOGO_HEIGHT}` }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-base font-medium transition-colors duration-200 ${
                isActive(pathname, link.to)
                  ? 'text-aurora-navy'
                  : 'text-aurora-navy/70 hover:text-aurora-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6 text-aurora-navy" /> : <Menu className="w-6 h-6 text-aurora-navy" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl p-6 shadow-lg border border-aurora-navy/10">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(pathname, link.to)
                    ? 'text-aurora-navy'
                    : 'text-aurora-navy/70 hover:text-aurora-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
