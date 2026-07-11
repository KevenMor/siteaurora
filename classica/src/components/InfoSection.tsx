import SectionHeader from './ui/SectionHeader';
import CtaLink from './ui/CtaLink';

const pillars = [
  {
    title: 'Estrutura jurídica sólida',
    description: 'Operações de securitização com respaldo regulatório e documentação transparente em cada etapa.',
  },
  {
    title: 'Processo consultivo',
    description: 'Entendemos o negócio antes de propor — cada operação é construída a partir do perfil da empresa.',
  },
  {
    title: 'Liquidez sem burocracia',
    description: 'Digital, ágil e com acompanhamento próximo — do envio dos documentos à proposta final.',
  },
];

export default function InfoSection() {
  return (
    <section id="institucional" className="bg-aurora-bg px-4 md:px-6 py-20 md:py-28">
      <div className="max-w-[88rem] mx-auto">
        <SectionHeader
          label="Institucional"
          title="Sobre a Aurora Asset"
          description="Soluções financeiras para empresas que buscam liquidez, previsibilidade e crescimento — com segurança e relacionamento de longo prazo."
          align="split"
          className="mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="lg:col-span-5 space-y-8">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="flex gap-5">
                <span className="text-aurora-gold/45 text-xs font-medium tracking-widest pt-1 w-7 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-aurora-navy text-lg md:text-xl font-medium mb-2 tracking-[-0.02em]">
                    {pillar.title}
                  </h3>
                  <p className="text-aurora-navy/60 text-sm md:text-base leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
            <CtaLink to="/contato" variant="primary" className="mt-2">
              Solicitar análise
            </CtaLink>
          </div>

          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden min-h-[22rem] md:min-h-[28rem] bg-aurora-navy">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover aurora-video-tone opacity-85"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            />
            <div className="absolute inset-0 aurora-video-wash-multiply pointer-events-none" />
            <div className="absolute inset-0 aurora-video-wash-gold pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-aurora-navy/95 via-aurora-navy/35 to-aurora-navy/10" />
            <div className="relative z-10 h-full min-h-[22rem] md:min-h-[28rem] flex flex-col justify-end p-7 md:p-10">
              <p className="section-label text-aurora-gold mb-3">Securitizadora</p>
              <p className="text-white text-2xl md:text-3xl font-medium leading-snug max-w-md tracking-[-0.03em]">
                Especialistas em antecipação de recebíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
