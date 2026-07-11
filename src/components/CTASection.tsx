import CtaLink from './ui/CtaLink';

export default function CTASection() {
  return (
    <section id="analise" className="bg-aurora-bg section-pad">
      <div className="container-aurora">
        <div className="rounded-2xl bg-aurora-navy px-8 md:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-12 items-center">
          <div>
            <p className="section-label text-aurora-gold mb-4">Análise de crédito</p>
            <h2 className="text-white text-3xl md:text-[2.5rem] font-medium leading-tight mb-4 tracking-[-0.03em] col-measure">
              Precisa antecipar recebíveis da sua empresa?
            </h2>
            <p className="text-white/55 text-base leading-relaxed col-text">
              Envie seus dados e nossa equipe retorna com uma proposta personalizada em até 24h úteis.
            </p>
          </div>
          <CtaLink to="/contato" variant="inverse" className="shrink-0">
            Começar análise
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
