import CtaLink from './ui/CtaLink';
import SectionHeader from './ui/SectionHeader';

const audiences = [
  'Clínicas e prestadores de saúde',
  'Prestadores de serviços',
  'Empresas com notas fiscais a receber',
  'Negócios que precisam de capital de giro',
  'Empresas que recebem a prazo',
];

export default function UseCasesSection() {
  return (
    <section className="bg-aurora-bg section-pad">
      <div className="container-aurora grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-16 items-center">
        <div>
          <SectionHeader
            label="Na prática"
            title="Para quem é"
            description="Estrutura para negócios que precisam destravar caixa sem comprometer o ritmo operacional."
            className="mb-8 md:mb-10"
          />

          <ul className="space-y-4 border-t section-rule pt-8">
            {audiences.map((item) => (
              <li key={item} className="flex items-baseline gap-4 text-aurora-navy/75 text-base border-b section-rule pb-4">
                <span className="text-aurora-gold/70 text-xs shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CtaLink to="/contato">Solicitar análise</CtaLink>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden min-h-[26rem] md:min-h-[32rem] bg-aurora-navy">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover aurora-video-tone opacity-85"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
          />
          <div className="absolute inset-0 aurora-video-wash-multiply pointer-events-none" />
          <div className="absolute inset-0 aurora-video-wash-gold pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-aurora-navy via-aurora-navy/35 to-aurora-navy/10" />
          <div className="relative z-10 p-7 md:p-10 flex flex-col justify-end h-full min-h-[26rem] md:min-h-[32rem]">
            <p className="section-label text-aurora-gold mb-3">Operação</p>
            <h3 className="text-white text-2xl md:text-3xl font-medium leading-snug mb-4 tracking-[-0.03em] col-text">
              Antecipação de recebíveis
            </h3>
            <p className="text-white/60 text-base leading-relaxed col-text">
              Análise criteriosa, transparência documental e retorno em até 24h úteis com proposta personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
