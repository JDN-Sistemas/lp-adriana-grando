import Image from "next/image";

const clinicPhotos = [
  {
    src: "/ambiente-1.jpeg",
    alt: "Mesa de atendimento com estante iluminada",
  },
  {
    src: "/ambiente-2.jpeg",
    alt: "Consultório com poltronas e janela ampla",
  },
  {
    src: "/ambiente-3.jpeg",
    alt: "Vista geral do consultório",
  },
  {
    src: "/ambiente-4.jpeg",
    alt: "Consultório visto da porta, com poltronas e janela",
  },
  {
    src: "/ambiente-5.jpeg",
    alt: "Poltronas do consultório com quadros na parede",
  },
];

export default function ClinicSection() {
  return (
    <section id="consultorio" className="py-24 px-6 bg-mint">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge mb-5 block mx-auto w-fit">
            Atendimento presencial
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ambiente confortável e reservado
          </h2>
          <p className="mt-4 text-muted text-sm max-w-md mx-auto">
            Um espaço pensado para que vocês possam conversar com liberdade,
            privacidade e sigilo durante o processo terapêutico.
          </p>
        </div>

        {/* Photos grid — 6 colunas para centralizar a última linha */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
          {clinicPhotos.map((photo, i) => (
            <div
              key={i}
              className={`relative aspect-4/3 sm:col-span-2 ${i === 3 ? "sm:col-start-2" : ""} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="text-center mt-10 flex flex-col gap-2">
          <p className="text-muted text-sm flex items-center justify-center gap-2">
            <span>📍</span>
            <span>Edifício Tívoli – R. Nossa Sra. Do Rocio, 1817 – Centro, Toledo – PR, 85900-180, Sala 25, 2º andar</span>
          </p>
          <p className="text-muted text-sm flex items-center justify-center gap-2">
            <span>💻</span>
            <span>Atendimento online por videoconferência, disponível para casais em todo o Brasil.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
