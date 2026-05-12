"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
  {
    question: "A terapia de casal é só para relacionamentos em crise?",
    answer:
      "Não! A psicoterapia de casal pode ser muito útil em qualquer momento do relacionamento — seja para resolver conflitos pontuais, aprofundar a conexão, melhorar a comunicação ou simplesmente investir na qualidade da relação. Casais que se amam e querem crescer juntos também se beneficiam muito da terapia.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Cada sessão tem duração de 50 a 60 minutos. A frequência recomendada é semanal, especialmente no início do processo, podendo ser ajustada conforme o desenvolvimento do casal.",
  },
  {
    question: "Como funcionam as sessões online?",
    answer:
      "As sessões online são realizadas por videochamada via Google Meet ou Zoom. Basta ter um dispositivo com câmera, microfone e conexão à internet. O processo é igualmente eficaz no formato remoto — muitos casais preferem justamente pela praticidade.",
  },
  {
    question: "E se um dos dois não quiser fazer terapia?",
    answer:
      "Essa é uma situação comum. Às vezes um parceiro está mais resistente do que o outro. Nesse caso, podemos começar com sessões individuais para quem tem interesse, o que muitas vezes ajuda o outro a se abrir para o processo. Conversamos sobre isso no primeiro contato.",
  },
  {
    question: "Atende por convênio ou plano de saúde?",
    answer:
      "No momento, o atendimento é particular. Posso emitir recibo para quem deseja solicitar reembolso junto ao plano de saúde — verifique as condições com a sua operadora.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "É simples! Clique no botão abaixo e me chame no WhatsApp. Responderei em breve para conversarmos sobre a disponibilidade de horários e tirar qualquer dúvida antes de começarmos.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 px-6 bg-sand">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="italic text-primary">Perguntas </span>
            <span className="font-semibold">frequentes</span>
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-dark text-sm font-medium hover:text-primary transition-colors duration-200"
                onClick={() => toggle(i)}
              >
                <span>{faq.question}</span>
                <span className={`shrink-0 ml-4 text-xl transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
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
