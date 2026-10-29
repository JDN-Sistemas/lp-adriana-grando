import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HeroAboutSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#3d1a28] overflow-hidden flex items-center"
    >
      {/* Foto — à direita, centralizada, fundindo com o fundo */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[55%]">
        <Image
          src="/adriana-grando3.jpeg"
          alt="Psicóloga Adriana Grando"
          fill
          className="object-cover object-[center_20%]"
          priority
          sizes="(max-width: 640px) 100vw, 55vw"
        />
        {/* Gradiente esquerda — funde foto com o fundo */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-linear-to-r from-[#3d1a28] via-[#3d1a28]/80 to-transparent" />
        {/* Gradiente superior */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-[#3d1a28] to-transparent" />
        {/* Gradiente inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#3d1a28] to-transparent" />
      </div>

      {/* Monograma decorativo de fundo */}
      <span
        className="hidden lg:block absolute -bottom-16 -left-8 text-[22rem] font-bold italic text-white/3 select-none pointer-events-none leading-none z-0"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        AG
      </span>

      {/* Texto — à esquerda, sobre o fundo */}
      <div className="relative z-10 pl-8 pr-6 sm:pl-16 lg:pl-32 xl:pl-48 pt-64 sm:pt-24 pb-12 lg:py-0 max-w-2xl lg:max-w-3xl">
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70 mb-3 font-medium leading-relaxed">
          Psicoterapia de Casal · IBCT · Online em todo o Brasil
        </p>

        <h1
          className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-white">Quando a vida funciona, mas a relação</span>{" "}
          <span className="text-primary italic">entrou em crise.</span>
        </h1>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
          Psicoterapia de casal para relações atravessadas por conflitos persistentes,
          afastamento, quebra de confiança ou decisões importantes — especialmente entre
          casais que conciliam carreira, família e grandes responsabilidades.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["IBCT", "Online em todo o Brasil", "Presencial em Toledo-PR"].map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs border border-white/30 text-white/80 px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <WhatsAppButton variant="light" />
      </div>
    </section>
  );
}
