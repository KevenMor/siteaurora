const navLinks = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Análise de Crédito', href: '#analise' },
  { label: 'Sobre Nós', href: '#institucional' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="https://aurora-asset.lovable.app/assets/aurora-logo-CJy8UtaD.jpeg"
            alt="Aurora Asset"
            className="h-9 w-auto rounded"
          />
          <span className="text-2xl font-medium tracking-tight text-black">Aurora Asset</span>
        </div>

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

        <button className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Área do Cliente
        </button>
      </div>
    </nav>
  );
}
