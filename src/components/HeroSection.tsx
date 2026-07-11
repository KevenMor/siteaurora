import CtaLink from './ui/CtaLink';

const trustItems = [
  'Estrutura CVM',
  'Conformidade LGPD',
  'Lei 14.430/2022',
  'Auditoria independente',
  '100% digital',
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-end"
      style={{ height: 'calc(100vh - 64px)', paddingTop: '64px', paddingInline: 'var(--gutter-x)', paddingBottom: 'var(--gutter-x)' }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-aurora-navy">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover aurora-video-tone"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
        />

        <div className="absolute inset-0 aurora-video-wash-multiply pointer-events-none" />
        <div className="absolute inset-0 aurora-video-wash-gold pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-bg via-aurora-bg/88 to-transparent md:via-aurora-bg/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-aurora-bg/95 via-aurora-bg/15 to-transparent pointer-events-none" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-12">
          <div className="col-measure">
            <p className="section-label mb-4">Securitizadora de recebíveis</p>

            <h1 className="section-title text-[clamp(2.125rem,1.6vw+1.5rem,3.125rem)] mb-5 md:mb-6">
              <span className="block">Seu capital trabalha</span>
              <span className="block text-aurora-navy/75">por você</span>
            </h1>

            <p className="text-aurora-navy/70 text-[clamp(1rem,0.35vw+0.9rem,1.2rem)] leading-relaxed col-text mb-8">
              Antecipe recebíveis com estrutura regulatória, processo digital e atendimento consultivo — liquidez para quem fatura a prazo.
            </p>

            <CtaLink to="/contato" variant="primary">
              Solicitar análise
            </CtaLink>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t section-rule pt-5 mt-10 md:mt-14 whitespace-nowrap">
            {trustItems.map((item) => (
              <span key={item} className="text-aurora-navy/40 text-[11px] md:text-xs tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
