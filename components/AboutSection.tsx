import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-blush py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-3/4 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/adriana-grandoo.jpeg"
              alt="Psicóloga Adriana Grando"
              fill
              className="object-cover object-[center_20%]"
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
            Minha história profissional
          </p>

          <p className="text-dark/80 leading-relaxed">
            Sou psicóloga, graduada pela{" "}
            <strong className="text-dark">Pontifícia Universidade Católica do Paraná — PUCPR</strong>,
            inscrita no CRP-PR sob o nº <strong className="text-dark">08/46974</strong>.
          </p>

          <p className="text-dark/80 leading-relaxed">
            Durante a graduação, busquei ter contato com diversas áreas da Psicologia, participando
            de projetos de iniciação científica, extensão e outras experiências que ampliaram minha
            formação para além da sala de aula. Esse envolvimento com a universidade me conferiu o
            título de <strong className="text-dark">liderança estudantil</strong>, pelo Prêmio Irmão
            Clemente Ivo Juliatto, além da formação com <strong className="text-dark">menção honrosa</strong>.
          </p>

          <p className="text-dark/80 leading-relaxed">
            É a partir da minha história de vida, somada ao aparato teórico e prático desenvolvido
            ao longo da minha formação, que me apresento como{" "}
            <strong className="text-dark">psicoterapeuta de casais</strong>. Atuo com sensibilidade
            para ouvir histórias de vida que se cruzaram e decidiram construir uma vida juntas,
            considerando sempre os aspectos de gênero, raça, classe e orientação sexual, para que
            a psicoterapia seja um espaço seguro, acolhedor e livre da reprodução de estereótipos
            e preconceitos.
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
