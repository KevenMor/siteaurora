import SectionHeader from './ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Envie seus documentos',
    description: 'Cartão CNPJ e, se desejar, as notas fiscais que pretende antecipar.',
  },
  {
    number: '02',
    title: 'Análise de crédito',
    description: 'Avaliamos o perfil da empresa, os recebíveis e as condições da operação.',
  },
  {
    number: '03',
    title: 'Receba a proposta',
    description: 'Retorno em até 24h úteis com condições personalizadas para o seu caso.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-aurora-surface section-pad border-y section-rule">
      <div className="container-aurora">
        <SectionHeader
          label="Processo"
          title="Como funciona"
          description="Do primeiro envio à proposta em três etapas objetivas, sem burocracia desnecessária."
        />

        <ol className="steps-flow">
          {steps.map((step, index) => (
            <li key={step.number} className="step-card group">
              {index < steps.length - 1 && (
                <span className="step-connector" aria-hidden="true" />
              )}

              <div className="step-card__inner">
                <div className="step-card__head">
                  <span className="step-badge">Passo {index + 1}</span>
                  <span className="step-number">{step.number}</span>
                </div>

                <div className="step-card__body">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
