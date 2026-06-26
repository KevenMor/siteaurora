import { ArrowRight } from 'lucide-react';

const badges = [
  { name: 'Estrutura CVM', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
  { name: 'Conformidade LGPD', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { name: 'Lei 14.430/2022', style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
  { name: 'Auditoria Independente', style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { name: 'Sigilo Operacional', style: { fontFamily: "Palatino, 'Book Antiqua', serif", fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
  { name: 'Segurança Jurídica', style: { fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
  { name: '100% Digital', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
];

export default function HeroSection() {
  return (
    <section className="flex-1 px-4 md:px-6 pt-16 md:pt-20 pb-4 md:pb-6 flex items-end">
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-white/55 via-white/20 to-transparent pointer-events-none" />

        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="w-full max-w-2xl p-6 md:p-10 md:pb-8">
            <p className="text-black/50 text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase mb-3 md:mb-4">
              Securitizadora de recebíveis
            </p>

            <h1
              className="text-black text-[2.5rem] md:text-[4.25rem] font-medium leading-[1.02] tracking-[-0.04em] mb-5 md:mb-6"
            >
              Seu capital<br />trabalha por você
            </h1>

            <div className="space-y-3 md:space-y-3.5 mb-7 md:mb-8 max-w-lg">
              <p className="text-black text-base md:text-xl leading-snug font-medium">
                Transforme recebíveis em caixa com agilidade, transparência e estrutura regulatória.
              </p>
              <p className="text-black/60 text-sm md:text-base leading-relaxed">
                Para empresas que faturam a prazo e precisam de liquidez imediata — sem abrir mão da segurança jurídica.
              </p>
            </div>

            <button className="inline-flex items-center gap-3 bg-black text-white text-sm md:text-lg font-medium pl-6 md:pl-8 pr-2 py-2.5 md:py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Solicitar análise
              <span className="bg-white rounded-full p-1.5 md:p-2">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </span>
            </button>
          </div>

          <div className="relative w-full overflow-hidden pb-5 md:pb-6">
            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[#F5F5F5]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[#F5F5F5]/90 to-transparent z-10 pointer-events-none" />
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 22s linear infinite;
              }
            `}</style>
            <div className="marquee-track">
              {[...badges, ...badges].map((badge, i) => (
                <span
                  key={i}
                  className="mx-5 md:mx-7 shrink-0 text-black/55 whitespace-nowrap"
                  style={badge.style}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
