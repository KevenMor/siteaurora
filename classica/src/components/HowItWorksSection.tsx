export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Envie seus documentos',
      description: 'Envie o cartão CNPJ da empresa e, se desejar, anexe as notas fiscais que pretende antecipar.',
    },
    {
      number: '02',
      title: 'Análise de crédito',
      description: 'Nossa equipe avalia os dados da empresa, os recebíveis e as condições da operação.',
    },
    {
      number: '03',
      title: 'Receba a proposta',
      description: 'Após a análise, devolvemos uma proposta personalizada para antecipação dos seus recebíveis.',
    },
  ];

  return (
    <section id="como-funciona" className="bg-aurora-bg px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="mb-10 md:mb-16">
          <p className="text-aurora-navy/60 text-xs md:text-sm mb-2">Processo</p>
          <h2
            className="text-aurora-navy text-3xl md:text-5xl font-medium leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Como funciona
          </h2>
          <p className="text-aurora-navy/60 text-sm md:text-base mt-3 md:mt-4 max-w-md">
            Três passos simples, do primeiro contato à proposta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-6 md:p-8 min-h-48 md:min-h-64 flex flex-col justify-between bg-aurora-navy"
            >
              <span className="text-aurora-gold/35 text-5xl md:text-6xl font-medium" style={{ letterSpacing: '-0.04em' }}>
                {step.number}
              </span>
              <div>
                <h3 className="text-white text-lg md:text-xl font-medium mb-2 md:mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
