import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HeroAboutSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left — texto */}
      <div className="relative flex-1 flex flex-col justify-center px-16 lg:px-32 xl:px-48 py-32 lg:py-20 bg-[#3d1a28] overflow-hidden">
        {/* Monograma decorativo de fundo */}
        <span
          className="absolute -bottom-10 -left-8 text-[22rem] font-bold italic text-white/3 select-none pointer-events-none leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          AG
        </span>

        <div className="relative z-10 max-w-lg">
          <p className="text-xs tracking-[0.25em] uppercase text-white/70 mb-5 font-medium">
            Análise do Comportamento · FAP · Terapia Feminista
          </p>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-primary italic">Comunicação e intimidade</span>{" "}
          </h1>

          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
            Terapia para <strong className="text-white">casais ou individual</strong> com foco em vínculos
            afetivos, comunicação saudável e autoconhecimento.
            Atendimento <strong className="text-white">online e presencial</strong> em Toledo – PR.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Terapia de Casal", "Atendimento Individual", "Online e Presencial"].map((tag) => (
              <span
                key={tag}
                className="text-xs border border-primary/50 text-primary/90 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <WhatsAppButton variant="light" />
        </div>
      </div>

      {/* Right — foto */}
      <div className="relative w-full lg:w-[45%] xl:w-[42%] min-h-[60vh] lg:min-h-screen bg-[#2b1120] overflow-hidden flex items-end">

        {/* Bloco de cor decorativo atrás da foto (canto superior esquerdo) */}
        <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-primary/20" />

        {/* Borda de destaque superior direita */}
        <div className="absolute top-8 right-8 w-32 h-32 border-2 border-primary/40 rounded-sm z-10 pointer-events-none" />

        {/* Foto — alinhada na base, ocupa toda a largura */}
        <div className="relative w-full h-[92%]">
          <Image
            src="/adriana-grandoo.jpeg"
            alt="Psicóloga Adriana Grando"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#2b1120]/60 to-transparent" />
        </div>

        {/* Gradiente de fusão com o lado esquerdo */}
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#3d1a28] to-transparent z-10" />
      </div>
    </section>
  );
}
