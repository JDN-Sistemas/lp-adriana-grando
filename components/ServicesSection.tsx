import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: "💬",
    title: "Comunicação e conflitos",
    description:
      "Dificuldades de comunicação, brigas frequentes e formas de expressar sentimentos com mais clareza e respeito.",
  },
  {
    icon: "💛",
    title: "Afastamento e intimidade",
    description:
      "Afastamento emocional, perda de intimidade e reconstrução da conexão e da cumplicidade no relacionamento.",
  },
  {
    icon: "🌿",
    title: "Ciúmes e inseguranças",
    description:
      "Ciúmes, inseguranças e dificuldades para confiar, compreendendo os padrões que alimentam esses sentimentos.",
  },
  {
    icon: "🌱",
    title: "Crise e reconstrução",
    description:
      "Crises na relação, reconstrução de confiança e decisões sobre continuidade ou término com clareza e cuidado.",
  },
  {
    icon: "🤝",
    title: "Planejamento a dois",
    description:
      "Planejamento de vida a dois, planejamento familiar, adaptação a novas fases e construção de acordos mais saudáveis.",
  },
  {
    icon: "⚖️",
    title: "Fortalecimento do vínculo",
    description:
      "Prevenção de conflitos futuros, fortalecimento da parceria e do vínculo para casais que desejam crescer juntos.",
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
