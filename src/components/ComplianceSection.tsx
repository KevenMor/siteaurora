import SectionHeader from './ui/SectionHeader';

const items = [
  { title: 'CVM e Lei 14.430/2022', description: 'Operações em conformidade com o marco regulatório de securitização.' },
  { title: 'LGPD', description: 'Tratamento de dados pessoais conforme a legislação vigente.' },
  { title: 'Auditoria independente', description: 'Processos auditados para garantir transparência e conformidade.' },
  { title: 'Sigilo operacional', description: 'Documentos e informações tratados com confidencialidade absoluta.' },
];

export default function ComplianceSection() {
  return (
    <section className="bg-aurora-surface section-pad border-t section-rule">
      <div className="container-aurora">
        <SectionHeader label="Governança" title="Compliance e segurança regulatória" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-10">
          {items.map((item) => (
            <div key={item.title} className="border-l-2 border-aurora-gold/50 pl-5 md:pl-6">
              <h3 className="text-aurora-navy text-lg md:text-xl font-medium mb-2 tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="text-aurora-navy/60 text-base leading-relaxed col-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
