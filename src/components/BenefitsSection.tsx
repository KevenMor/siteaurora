import { Calendar, Monitor, Shield, SlidersHorizontal, Users, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  { icon: Zap, title: 'Capital de giro rápido', description: 'Transforme recebíveis futuros em liquidez para o fluxo de caixa da sua empresa.' },
  { icon: Monitor, title: 'Processo digital', description: 'Envio de documentos e acompanhamento da operação inteiramente online.' },
  { icon: Users, title: 'Atendimento consultivo', description: 'Uma equipe que entende o seu negócio antes de propor a operação.' },
  { icon: Shield, title: 'Segurança jurídica', description: 'Estrutura documental robusta do início ao fim da operação.' },
  { icon: SlidersHorizontal, title: 'Proposta sob medida', description: 'Condições construídas a partir do perfil e dos recebíveis da empresa.' },
  { icon: Calendar, title: 'Recebíveis a prazo', description: 'Solução pensada para quem fatura e precisa esperar para receber.' },
];

const trustPoints = [
  'Retorno em até 24h úteis',
  'Estrutura regulatória CVM',
  'Processo 100% digital',
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-aurora-bg section-pad">
      <div className="container-aurora">
        <div className="benefits-layout">
          <aside className="benefits-aside">
            <SectionHeader
              label="Benefícios"
              title={<>Por que a<br />Aurora Asset</>}
              description="Previsibilidade financeira com estrutura sólida para empresas que não podem esperar o prazo."
              className="mb-8 md:mb-10"
            />

            <ul className="benefits-trust">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </aside>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="benefit-card group">
                <benefit.icon className="benefit-card__icon" aria-hidden="true" />
                <div>
                  <h3 className="benefit-card__title">{benefit.title}</h3>
                  <p className="benefit-card__desc">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
