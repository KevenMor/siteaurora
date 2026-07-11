import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="analise" className="bg-aurora-bg px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        <div
          className="rounded-2xl p-8 md:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-aurora-navy-dark) 0%, var(--color-aurora-navy) 100%)' }}
        >
          <h2
            className="text-white text-3xl md:text-5xl font-medium leading-tight mb-4 md:mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Precisa antecipar recebíveis<br />da sua empresa?
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed">
            Envie seus dados para análise e nossa equipe entrará em contato com uma proposta personalizada em até 24h úteis.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 bg-white text-aurora-navy text-sm md:text-lg font-medium pl-6 md:pl-8 pr-2 py-2.5 md:py-3 rounded-full hover:bg-aurora-gold-muted transition-colors duration-200"
          >
            Começar análise agora
            <span className="bg-aurora-navy rounded-full p-1.5 md:p-2">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
