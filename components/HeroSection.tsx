import WhatsAppButton from "@/components/WhatsAppButton";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1600&q=80')",
          filter: "blur(3px)",
          transform: "scale(1.05)",
        }}
      />
      {/* Overlay rosé */}
      <div className="absolute inset-0 bg-blush/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="text-sm tracking-[0.2em] uppercase text-[--color-primary] mb-4 font-medium"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Psicoterapia de Casal
        </p>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-[--color-primary]">
            Toda relação amorosa
          </span>{" "}
          <span className="text-[--color-dark]">
            tem uma história.
          </span>
        </h1>

        <p className="text-base md:text-lg text-[--color-dark]/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Eu posso te ajudar a compreender como a sua vem sendo construída.
          Atendimento online e presencial em Toledo – PR.
        </p>

        <WhatsAppButton />
      </div>
    </section>
  );
}
