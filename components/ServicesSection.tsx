import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: "💬",
    title: "Conflitos que sempre chegam ao mesmo lugar",
    description:
      "Discussões que mudam de assunto, mas repetem a mesma dinâmica entre vocês.",
  },
  {
    icon: "❤️",
    title: "Uma relação que virou administração da rotina",
    description:
      "A vida funciona, mas intimidade, presença e parceria começaram a perder espaço.",
  },
  {
    icon: "🤍",
    title: "Afastamento e perda de conexão",
    description:
      "Vocês convivem, mas a sensação é de distância emocional e pouca cumplicidade.",
  },
  {
    icon: "🔒",
    title: "Quebra de confiança",
    description:
      "Algo aconteceu e a relação precisa de um espaço cuidadoso para compreender o que foi vivido.",
  },
  {
    icon: "🧭",
    title: "Decisões importantes sobre o futuro",
    description:
      "Momentos de definição sobre continuidade, família ou novos projetos, que pedem clareza a dois.",
  },
];

export default function ServicesSection() {
  return (
    <section id="quando-buscar" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Quando a terapia de casal pode fazer sentido
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-blush rounded-2xl p-7 flex gap-5 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-3xl shrink-0">{service.icon}</span>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-lg font-semibold text-dark leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
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
