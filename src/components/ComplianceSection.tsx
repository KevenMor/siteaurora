import { Landmark, FileText, Scale, Lock } from 'lucide-react';

const items = [
  { icon: Landmark, title: 'CVM e Lei 14.430/2022', description: 'Operações em conformidade com o marco regulatório de securitização' },
  { icon: FileText, title: 'LGPD', description: 'Tratamento de dados pessoais conforme a legislação vigente' },
  { icon: Scale, title: 'Auditoria independente', description: 'Processos auditados para garantir transparência e conformidade' },
  { icon: Lock, title: 'Sigilo operacional', description: 'Documentos e informações tratados com confidencialidade absoluta' },
];

export default function ComplianceSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="mb-16">
          <p className="text-black/60 text-sm mb-2">Governança</p>
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Compliance e segurança regulatória
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-7 min-h-56 flex flex-col justify-between">
              <item.icon className="w-7 h-7 text-black/70 mb-6" />
              <div>
                <h3 className="text-black text-lg font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p className="text-black/60 text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
