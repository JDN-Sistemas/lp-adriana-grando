import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: "💬",
    title: "Comunicação no Casal",
    description:
      "Aprenda a expressar sentimentos, ouvir com empatia e criar um diálogo que fortaleça a conexão entre vocês.",
  },
  {
    icon: "💛",
    title: "Crise Conjugal",
    description:
      "Suporte para casais que estão em um momento difícil, ajudando a identificar o que está por trás dos conflitos e encontrar novos caminhos.",
  },
  {
    icon: "🌿",
    title: "Reconstrução após Infidelidade",
    description:
      "Um espaço seguro para processar a dor, reconstruir a confiança e decidir juntos qual caminho desejam seguir.",
  },
  {
    icon: "🌱",
    title: "Transições de Vida a Dois",
    description:
      "Apoio em fases como chegada de filhos, mudanças de carreira, separação ou qualquer transição que impacta o relacionamento.",
  },
  {
    icon: "🤝",
    title: "Fortalecimento do Vínculo",
    description:
      "Para casais que se amam, mas querem aprofundar a conexão emocional, a intimidade e a cumplicidade no dia a dia.",
  },
  {
    icon: "⚖️",
    title: "Separação Consciente",
    description:
      "Quando a decisão de separar já foi tomada, a terapia ajuda a encerrar o ciclo com respeito, cuidado e clareza.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge mb-5 block mx-auto w-fit">
            Como posso ajudar
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Áreas de atuação
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-blush rounded-2xl p-7 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3
                className="text-lg font-semibold text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
