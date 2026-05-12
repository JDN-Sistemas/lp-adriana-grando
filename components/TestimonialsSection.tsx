const testimonials = [
  {
    name: "Camila e Rafael",
    text: "A terapia com a Adriana foi um divisor de águas no nosso relacionamento. Aprendemos a nos ouvir de verdade e a resolver conflitos sem machucar um ao outro. Recomendamos muito!",
    stars: 5,
  },
  {
    name: "Mariana e Lucas",
    text: "Chegamos no limite, achando que ia terminar. A Adriana nos ajudou a entender o que estava acontecendo de verdade e hoje estamos mais unidos do que nunca. Gratidão enorme!",
    stars: 5,
  },
  {
    name: "Fernanda e João",
    text: "O atendimento online funcionou perfeitamente. A Adriana cria um ambiente tão acolhedor que a gente esquece que está em casa. Profissional incrível e muito humana.",
    stars: 5,
  },
  {
    name: "Juliana e Pedro",
    text: "Estávamos passando por um momento muito difícil depois de uma traição. A Adriana nos conduziu com muita delicadeza. Conseguimos reconstruir nossa relação com mais maturidade.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-blush">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge mb-5 block mx-auto w-fit">
            Depoimentos
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O que dizem os casais
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-base">★</span>
                ))}
              </div>
              <p className="text-dark/80 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-primary text-sm font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
