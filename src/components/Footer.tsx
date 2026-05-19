export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://aurora-asset.lovable.app/assets/aurora-logo-CJy8UtaD.jpeg"
                alt="Aurora Asset"
                className="h-8 md:h-9 w-auto rounded"
              />
              <span className="text-lg md:text-xl font-medium text-black">Aurora Asset</span>
            </div>
            <p className="text-black/50 text-xs md:text-sm leading-relaxed">
              Securitizadora especializada em antecipação de recebíveis.
            </p>
            <a
              href="https://www.linkedin.com/company/aurora-asset"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-black/50 hover:text-black transition-colors text-xs md:text-sm"
            >
              LinkedIn →
            </a>
          </div>

          <div>
            <h5 className="text-black font-medium text-xs md:text-sm mb-3 md:mb-4">Navegação</h5>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">Benefícios</a></li>
              <li><a href="#analise" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">Análise de Crédito</a></li>
              <li><a href="#institucional" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">Institucional</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-black font-medium text-xs md:text-sm mb-3 md:mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div id="contato">
            <h5 className="text-black font-medium text-xs md:text-sm mb-3 md:mb-4">Contato</h5>
            <ul className="space-y-2">
              <li><a href="mailto:contato@auroraasset.com.br" className="text-black/60 hover:text-black text-xs md:text-sm transition-colors">contato@auroraasset.com.br</a></li>
              <li><span className="text-black/60 text-xs md:text-sm">São Paulo — SP, Brasil</span></li>
              <li><span className="text-black/60 text-xs md:text-sm">Seg a Sex, 9h às 18h</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
            <p className="text-black/40 text-[10px] md:text-xs">
              Securitizadora constituída nos termos da Lei 14.430/2022. Operações sujeitas à análise de crédito e validação documental.
            </p>
            <p className="text-black/40 text-[10px] md:text-xs">Aurora Asset © 2026. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
