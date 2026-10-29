export default function PsychologistBioSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">

        <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium">
          Psicóloga · CRP 08/46974
        </p>

        <h2
          className="text-3xl md:text-4xl font-bold text-dark leading-snug"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Adriana Grando
        </h2>

        <p className="text-dark/75 text-base leading-relaxed max-w-2xl">
          Sou psicóloga e psicoterapeuta de casais, graduada pela{" "}
          <strong className="text-dark">PUCPR</strong> com menção honrosa. Minha atuação clínica é
          orientada pela <strong className="text-dark">Análise do Comportamento</strong> e pelas{" "}
          <strong className="text-dark">Terapias Comportamentais Contextuais</strong>, com ênfase na{" "}
          <strong className="text-dark">Terapia Comportamental Integrativa de Casal (IBCT)</strong>.
        </p>

        <p className="text-dark/75 text-base leading-relaxed max-w-2xl">
          Meu trabalho busca compreender os padrões de interação que mantêm conflitos, afastamento
          e sofrimento na relação, integrando aceitação e mudança a partir da formulação específica
          de cada casal.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {[
            "IBCT",
            "Terapias Comportamentais Contextuais",
            "Análise do Comportamento",
            "Online em todo o Brasil",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs border border-primary/40 text-primary px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 w-52 h-px bg-primary/30 mx-auto" />
      </div>
    </section>
  );
}
