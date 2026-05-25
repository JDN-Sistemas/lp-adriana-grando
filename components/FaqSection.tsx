"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
  {
    question: "Quanto tempo dura a sessão de psicoterapia de casal?",
    answer:
      "As sessões de psicoterapia de casal têm duração aproximada de 90 minutos. Quando necessário, também podem ser realizadas sessões individuais com uma das pessoas do casal. Nesses casos, a duração é de aproximadamente 50 minutos.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim. Os atendimentos podem ser realizados de forma online, por videochamada pelo WhatsApp ou pelo Google Meet, conforme a preferência e a necessidade do casal.",
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
