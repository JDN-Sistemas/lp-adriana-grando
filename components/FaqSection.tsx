import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
  {
    question: "A terapia de casal é apenas para casais em crise?",
    answer:
      "Não. Embora muitas pessoas procurem atendimento em momentos de crise, a psicoterapia também pode ajudar quando existem conflitos persistentes, afastamento, dificuldades de intimidade ou decisões importantes a serem tomadas.",
  },
  {
    question: "A psicóloga vai dizer quem está certo ou errado?",
    answer:
      "Não. A psicoterapia de casal não tem como objetivo eleger culpados. O trabalho clínico busca compreender a dinâmica da relação, os padrões que se repetem e a forma como cada pessoa participa desses ciclos.",
  },
  {
    question: "O atendimento serve para evitar uma separação?",
    answer:
      "A psicoterapia de casal não promete manter ou encerrar uma relação. O processo oferece um espaço profissional para que o casal compreenda melhor o que está vivendo e possa tomar decisões com mais clareza e responsabilidade.",
  },
  {
    question: "Os dois precisam querer participar?",
    answer:
      "A participação de ambos é importante para o processo de casal. Quando apenas uma pessoa procura atendimento, pode ser avaliada a possibilidade de psicoterapia individual para trabalhar questões relacionadas à vivência afetiva e relacional.",
  },
  {
    question: "Quanto tempo dura a sessão de psicoterapia de casal?",
    answer:
      "As sessões de psicoterapia de casal têm duração aproximada de 90 minutos. Os encontros individuais com cada pessoa do casal têm duração aproximada de 50 minutos.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim. Os atendimentos online são realizados por videoconferência, pelo WhatsApp ou pelo Google Meet, para casais em todo o Brasil.",
  },
  {
    question: "Você atende por convênio?",
    answer:
      "No momento, os atendimentos são realizados apenas de forma particular, sem atendimento por convênios.",
  },
  {
    question: "Qual é o valor da sessão?",
    answer:
      "O valor dos atendimentos é informado diretamente pelo WhatsApp, para que eu possa explicar melhor o funcionamento do processo terapêutico e tirar possíveis dúvidas antes do agendamento.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 px-6 bg-blush-dark">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-semibold text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dúvidas frequentes
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Perguntas */}
        <div className="flex flex-col gap-5">
          {faqs.map((item) => (
            <div key={item.question} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3
                className="text-dark font-semibold text-base mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.question}
              </h3>
              <p className="text-dark/70 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
