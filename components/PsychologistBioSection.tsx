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
          Graduada pela <strong className="text-dark">PUCPR</strong> com menção honrosa, atuo como
          psicoterapeuta de casais com base na{" "}
          <strong className="text-dark">Análise do Comportamento e na FAP</strong> — uma abordagem
          que compreende a relação terapêutica como um espaço vivo, seguro e acolhedor, onde novas
          formas de se relacionar podem surgir.
        </p>

        <p className="text-dark/75 text-base leading-relaxed max-w-2xl">
          Meu trabalho é oferecer escuta e orientação sem julgamentos, considerando a história,
          os valores e a singularidade de cada casal — para que construam juntos caminhos mais
          saudáveis e satisfatórios.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {[
            "Análise do Comportamento",
            "FAP",
            "Terapia Feminista",
            "Online e Presencial",
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
