import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CtaLink from '../components/ui/CtaLink';
import { absoluteAppUrl } from '../lib/routerBase';

const steps = [
  { number: '01', text: 'Envie os dados da empresa e dos recebíveis' },
  { number: '02', text: 'Nossa equipe realiza a análise de crédito' },
  { number: '03', text: 'Proposta personalizada em até 24h úteis' },
];

const fieldClassName =
  'w-full bg-aurora-bg border-0 border-b border-aurora-navy/15 rounded-none px-0 py-3.5 text-sm md:text-base text-aurora-navy placeholder:text-aurora-navy/30 outline-none transition-colors focus:border-aurora-gold';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const sent = searchParams.get('enviado') === '1';

  const nextUrl = useMemo(
    () => absoluteAppUrl('/contato?enviado=1'),
    [],
  );

  return (
    <section className="px-4 md:px-6 pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-[88rem] mx-auto">
        {sent ? (
          <div className="max-w-2xl mx-auto border-t section-rule pt-12 md:pt-16 text-center">
            <p className="section-label mb-4">Confirmação</p>
            <h1 className="section-title text-3xl md:text-4xl mb-4">Solicitação recebida</h1>
            <p className="text-aurora-navy/60 text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto">
              Nossa equipe analisará seus dados e retornará com uma proposta personalizada em até 24h úteis.
            </p>
            <CtaLink to="/" variant="primary">
              Voltar ao início
            </CtaLink>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <p className="section-label mb-4">Análise de crédito</p>
              <h1 className="section-title text-3xl md:text-[2.75rem] mb-5">
                <span className="block">Solicite sua</span>
                <span className="block">proposta</span>
              </h1>
              <p className="text-aurora-navy/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                Preencha os dados ao lado. Avaliamos o perfil da sua empresa e estruturamos uma operação sob medida.
              </p>

              <div className="space-y-6 border-t section-rule pt-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <span className="text-aurora-gold/50 text-sm font-medium w-7 shrink-0">{step.number}</span>
                    <p className="text-aurora-navy/70 text-sm md:text-base leading-snug">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-aurora-surface border section-rule rounded-2xl p-8 md:p-10 lg:p-12">
              <form
                action="https://formsubmit.co/contato@auroraasset.com.br"
                method="POST"
                className="space-y-8"
              >
                <input type="hidden" name="_subject" value="Nova solicitação de análise | Aurora Asset" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={nextUrl} />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="section-label mb-2 block">Nome completo</label>
                    <input id="name" name="name" type="text" required className={fieldClassName} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="empresa" className="section-label mb-2 block">Empresa</label>
                    <input id="empresa" name="empresa" type="text" required className={fieldClassName} />
                  </div>

                  <div>
                    <label htmlFor="email" className="section-label mb-2 block">E-mail</label>
                    <input id="email" name="email" type="email" required className={fieldClassName} />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="section-label mb-2 block">Telefone</label>
                    <input id="telefone" name="telefone" type="tel" required className={fieldClassName} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="mensagem" className="section-label mb-2 block">
                      Sobre os recebíveis <span className="normal-case tracking-normal text-aurora-navy/35">(opcional)</span>
                    </label>
                    <textarea id="mensagem" name="mensagem" rows={3} className={`${fieldClassName} resize-none`} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-4 border-t section-rule">
                  <p className="text-aurora-navy/40 text-xs leading-relaxed max-w-xs">
                    Ao enviar, você concorda em ser contatado pela Aurora Asset sobre esta solicitação.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2.5 bg-aurora-navy text-white px-7 py-3.5 text-sm md:text-base font-medium rounded-lg hover:bg-aurora-navy-dark transition-colors"
                  >
                    Enviar solicitação
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
