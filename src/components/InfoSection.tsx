import { ArrowRight } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="institucional" className="bg-[#F5F5F5] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16 items-start">
          <div>
            <h2
              className="text-black text-3xl md:text-5xl font-medium leading-tight mb-6 md:mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Sobre a Aurora Asset.
            </h2>
            <a href="#analise" className="inline-flex items-center gap-3 bg-black text-white text-sm md:text-base font-medium pl-6 md:pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Solicitar análise
              <span className="bg-white rounded-full p-1.5 md:p-2">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </span>
            </a>
          </div>
          <p className="text-black/70 text-xl md:text-3xl leading-relaxed">
            A Aurora Asset nasceu para oferecer soluções financeiras inteligentes para empresas que buscam liquidez, previsibilidade e crescimento — com foco em segurança, transparência e relacionamento de longo prazo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div
            className="sm:col-span-2 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-5 md:p-7 min-h-64 md:min-h-80 flex flex-col justify-between">
              <h3
                className="text-black text-xl md:text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Securitizadora especializada
              </h3>
              <p className="text-black/70 text-sm md:text-base max-w-xs">
                Atuamos com estrutura jurídica sólida, processos digitais e atendimento consultivo em antecipação de recebíveis.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-5 md:p-7 min-h-64 md:min-h-80 flex flex-col justify-between" style={{ backgroundColor: '#2B2644' }}>
            <h3
              className="text-white text-xl md:text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Experiência clara<br />e personalizada.
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              Simplificamos cada etapa — da análise à proposta — para que sua empresa possa focar no que realmente importa: crescer.
            </p>
          </div>

          <div className="rounded-2xl p-5 md:p-7 min-h-64 md:min-h-80 flex flex-col justify-between" style={{ backgroundColor: '#2B2644' }}>
            <h3
              className="text-white text-xl md:text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Acesso a capital<br />sem burocracia
            </h3>
            <p className="text-white/60 text-sm md:text-base">
              Acreditamos que o acesso a capital não precisa ser burocrático. Operação ágil, digital e segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
