import { Link } from 'react-router-dom';
import auroraLogo from '../assets/aurora-logo.png';

const LOGO_WIDTH = 625;
const LOGO_HEIGHT = 193;

export default function Footer() {
  return (
    <footer className="bg-aurora-surface px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8 border-t section-rule">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={auroraLogo}
                alt="Aurora Asset"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="h-9 md:h-10 w-auto max-w-none"
                style={{ aspectRatio: `${LOGO_WIDTH} / ${LOGO_HEIGHT}` }}
              />
            </Link>
            <p className="text-aurora-navy/50 text-xs md:text-sm leading-relaxed">
              Securitizadora especializada em antecipação de recebíveis.
            </p>
            <a
              href="https://www.linkedin.com/company/aurora-asset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-aurora-navy/50 hover:text-aurora-navy transition-colors text-xs md:text-sm"
            >
              LinkedIn →
            </a>
          </div>

          <div>
            <h5 className="text-aurora-navy font-medium text-xs md:text-sm mb-3 md:mb-4">Navegação</h5>
            <ul className="space-y-2">
              <li><Link to="/#como-funciona" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Como Funciona</Link></li>
              <li><Link to="/#beneficios" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Benefícios</Link></li>
              <li><Link to="/contato" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Análise de Crédito</Link></li>
              <li><Link to="/#institucional" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Institucional</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-aurora-navy font-medium text-xs md:text-sm mb-3 md:mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div id="contato">
            <h5 className="text-aurora-navy font-medium text-xs md:text-sm mb-3 md:mb-4">Contato</h5>
            <ul className="space-y-2">
              <li><Link to="/contato" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">Solicitar análise</Link></li>
              <li><a href="mailto:contato@auroraasset.com.br" className="text-aurora-navy/60 hover:text-aurora-navy text-xs md:text-sm transition-colors">contato@auroraasset.com.br</a></li>
              <li><span className="text-aurora-navy/60 text-xs md:text-sm">São Paulo — SP, Brasil</span></li>
              <li><span className="text-aurora-navy/60 text-xs md:text-sm">Seg a Sex, 9h às 18h</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-aurora-navy/10 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
            <p className="text-aurora-navy/40 text-[10px] md:text-xs">
              Securitizadora constituída nos termos da Lei 14.430/2022. Operações sujeitas à análise de crédito e validação documental.
            </p>
            <p className="text-aurora-navy/40 text-[10px] md:text-xs">Aurora Asset © 2026. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
