import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-blush py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-3/4 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Psicóloga Adriana Grando"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-5">
          <p
            className="text-xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Olá! Que bom ter você aqui.
          </p>

          <p className="text-dark/80 leading-relaxed">
            Sou{" "}
            <strong className="text-dark">
              Adriana Grando, Psicóloga Clínica (CRP 08/46974)
            </strong>{" "}
            especializada em <strong className="text-dark">Psicoterapia de Casal</strong>.
            Acredito que todo relacionamento tem um potencial enorme de crescimento
            e transformação — e meu trabalho é ajudar casais a descobrirem esse caminho juntos.
          </p>

          <p className="text-dark/80 leading-relaxed">
            Trabalho com uma abordagem{" "}
            <strong className="text-dark">humanizada e acolhedora</strong>,
            focada na compreensão dos padrões relacionais, na comunicação saudável
            e no fortalecimento do vínculo afetivo entre os parceiros.
          </p>

          <p className="text-dark/80 leading-relaxed">
            Atendo <strong className="text-dark">online e presencialmente</strong> em Toledo – PR,
            oferecendo um espaço seguro e sem julgamentos para que vocês possam
            se ouvir, se entender e reconstruir a relação que desejam ter.
          </p>

          <p
            className="text-primary italic text-base"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Será um prazer acompanhar a jornada de vocês!
          </p>

          <a
            href="#servicos"
            className="mt-2 inline-block self-start border border-dark/30 hover:border-primary text-dark hover:text-primary px-6 py-2.5 rounded-full text-sm transition-all duration-200"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
