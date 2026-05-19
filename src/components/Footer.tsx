export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] px-6 pt-16 pb-8">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://aurora-asset.lovable.app/assets/aurora-logo-CJy8UtaD.jpeg"
                alt="Aurora Asset"
                className="h-9 w-auto rounded"
              />
              <span className="text-xl font-medium text-black">Aurora Asset</span>
            </div>
            <p className="text-black/50 text-sm leading-relaxed">
              Securitizadora especializada em antecipação de recebíveis.
            </p>
            <a
              href="https://www.linkedin.com/company/aurora-asset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-black/50 hover:text-black transition-colors text-sm"
            >
              LinkedIn →
            </a>
          </div>

          <div>
            <h5 className="text-black font-medium text-sm mb-4">Navegação</h5>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-black/60 hover:text-black text-sm transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-black/60 hover:text-black text-sm transition-colors">Benefícios</a></li>
              <li><a href="#analise" className="text-black/60 hover:text-black text-sm transition-colors">Análise de Crédito</a></li>
              <li><a href="#institucional" className="text-black/60 hover:text-black text-sm transition-colors">Institucional</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-black font-medium text-sm mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-black/60 hover:text-black text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-black/60 hover:text-black text-sm transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div id="contato">
            <h5 className="text-black font-medium text-sm mb-4">Contato</h5>
            <ul className="space-y-2">
              <li><a href="mailto:contato@auroraasset.com.br" className="text-black/60 hover:text-black text-sm transition-colors">contato@auroraasset.com.br</a></li>
              <li><span className="text-black/60 text-sm">São Paulo — SP, Brasil</span></li>
              <li><span className="text-black/60 text-sm">Seg a Sex, 9h às 18h</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/40 text-xs">
              Securitizadora constituída nos termos da Lei 14.430/2022. Operações sujeitas à análise de crédito e validação documental.
            </p>
            <p className="text-black/40 text-xs">Aurora Asset © 2026. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
