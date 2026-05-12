import Image from "next/image";

const clinicPhotos = [
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    alt: "Sala de espera do consultório",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
    alt: "Consultório principal",
  },
  {
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80",
    alt: "Ambiente aconchegante",
  },
];

export default function ClinicSection() {
  return (
    <section id="consultorio" className="py-24 px-6 bg-mint">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge mb-5 block mx-auto w-fit">
            Meu Consultório
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ambiente confortável e seguro
          </h2>
          <p className="mt-4 text-muted text-sm max-w-md mx-auto">
            Um espaço pensado para que vocês se sintam à vontade para se abrir,
            sem julgamentos e com total sigilo.
          </p>
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {clinicPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
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
            <span>Toledo – PR | Atendimento online e presencial</span>
          </p>
          <p className="text-muted text-sm">
            Sessões online via Google Meet ou Zoom — do conforto da sua casa
          </p>
        </div>
      </div>
    </section>
  );
}
