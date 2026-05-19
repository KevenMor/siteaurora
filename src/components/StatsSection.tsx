export default function StatsSection() {
  const stats = [
    { value: 'R$ 50M+', label: 'em operações estruturadas' },
    { value: '120+', label: 'empresas atendidas' },
    { value: '24h', label: 'para retorno da análise' },
    { value: '100%', label: 'conformidade regulatória' },
  ];

  return (
    <section className="bg-[#F5F5F5] px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-black text-4xl md:text-5xl font-medium mb-2"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </p>
              <p className="text-black/60 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
