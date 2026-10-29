const steps = [
  {
    title: "Sessão inicial com o casal",
    description:
      "Compreensão da demanda, do contexto atual e dos principais padrões de interação.",
  },
  {
    title: "Encontros individuais",
    description:
      "Um encontro com cada parceiro permite aprofundar aspectos relevantes da experiência individual e conjugal.",
  },
  {
    title: "Formulação do casal",
    description:
      "As informações são integradas para compreender diferenças, vulnerabilidades, fatores externos e ciclos que mantêm o problema.",
  },
  {
    title: "Devolutiva",
    description:
      "O casal recebe uma compreensão integrada da dinâmica da relação e são definidos os objetivos terapêuticos.",
  },
  {
    title: "Psicoterapia",
    description:
      "O trabalho passa a integrar aceitação e mudança sobre os padrões específicos identificados.",
  },
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Como começa a psicoterapia de casal
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Etapas */}
        <ol className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-blush rounded-2xl p-6 flex gap-5">
              <span
                className="text-3xl font-semibold text-primary leading-none shrink-0"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3
                  className="text-lg font-semibold text-dark"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* IBCT */}
        <div className="mt-5 bg-blush-dark rounded-2xl p-6 flex gap-5">
          <span className="text-3xl shrink-0">🧠</span>
          <div className="flex flex-col gap-1.5">
            <h3
              className="text-lg font-semibold text-primary"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Terapia Comportamental Integrativa de Casal (IBCT)
            </h3>
            <p className="text-sm text-dark/70 leading-relaxed">
              Uma abordagem orientada por formulação clínica, padrões de interação, aceitação e
              mudança. A IBCT integra compreensão dos fatores que mantêm o problema com
              intervenções voltadas à construção de novos repertórios na relação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
