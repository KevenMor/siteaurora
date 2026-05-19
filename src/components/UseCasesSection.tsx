import { ArrowRight } from 'lucide-react';

export default function UseCasesSection() {
  return (
    <section className="bg-[#F5F5F5] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-xs md:text-sm mb-2">Aurora Asset na Prática</p>
          <h2
            className="text-4xl md:text-6xl font-medium leading-none mb-4 md:mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Para quem é
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-sm">
            Nossa estrutura atende negócios que precisam destravar caixa sem comprometer o ritmo operacional.
          </p>
          <ul className="mt-4 md:mt-6 space-y-2.5 md:space-y-3 text-black/70 text-sm md:text-base">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Clínicas</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Prestadores de serviços</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Empresas com notas fiscais a receber</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Empresas que precisam de capital de giro</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Negócios que recebem a prazo</li>
          </ul>
        </div>

        <div className="relative rounded-3xl overflow-hidden min-h-[480px] md:min-h-[720px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
          />
          <div className="relative z-10 p-6 md:p-12">
            <h3
              className="text-3xl md:text-5xl font-medium leading-tight mb-4 md:mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Antecipação de Recebíveis
            </h3>
            <p className="text-black/70 text-sm md:text-base max-w-md mb-6 md:mb-8">
              Operações estruturadas com análise de crédito criteriosa, transparência documental e atendimento especializado. Retorno em até 24h úteis com proposta personalizada.
            </p>
            <a href="#analise" className="inline-flex items-center gap-3 group">
              <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
              <span className="text-black font-medium text-sm md:text-base">Solicitar análise</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
