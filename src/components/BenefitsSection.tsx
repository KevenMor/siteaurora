import { Zap, Monitor, Users, Shield, SlidersHorizontal, Calendar } from 'lucide-react';

const benefits = [
  { icon: Zap, title: 'Capital de giro rápido', description: 'Transforme recebíveis futuros em liquidez para o fluxo de caixa da sua empresa.' },
  { icon: Monitor, title: 'Processo simples e digital', description: 'Envio de documentos e acompanhamento da operação 100% online.' },
  { icon: Users, title: 'Atendimento consultivo', description: 'Uma equipe próxima que entende o seu negócio antes de propor a operação.' },
  { icon: Shield, title: 'Segurança na operação', description: 'Estrutura jurídica e documental robusta do início ao fim.' },
  { icon: SlidersHorizontal, title: 'Proposta personalizada', description: 'Condições construídas a partir do perfil da sua empresa.' },
  { icon: Calendar, title: 'Ideal para recebíveis a prazo', description: 'Solução desenhada para quem fatura e precisa esperar para receber.' },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-[#F5F5F5] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16 items-start">
          <div>
            <p className="text-black/60 text-xs md:text-sm mb-2">Benefícios</p>
            <h2
              className="text-black text-3xl md:text-5xl font-medium leading-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Por que escolher<br />a Aurora Asset
            </h2>
          </div>
          <p className="text-black/70 text-xl md:text-3xl leading-relaxed">
            Uma operação pensada para empresas que precisam de previsibilidade financeira sem abrir mão da segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl p-5 md:p-7 min-h-44 md:min-h-56 flex flex-col justify-between bg-white"
            >
              <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-black/70 mb-4 md:mb-6" />
              <div>
                <h3 className="text-black text-base md:text-lg font-medium mb-1.5 md:mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {benefit.title}
                </h3>
                <p className="text-black/60 text-sm md:text-base leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
