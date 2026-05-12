"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como posso ajudar", href: "#servicos" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#3d1a28] shadow-sm"
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo — monograma AG + nome */}
        <a href="#inicio" className="flex items-center gap-3">
          <AgMonogram />
          <div className="flex flex-col leading-tight">
            <span
              className="text-sm font-semibold tracking-wide text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Adriana Grando
            </span>
            <span className="text-[10px] tracking-[0.12em] uppercase text-white/60">
              Psicoterapia de Casal
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.1em] uppercase text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#3d1a28] border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] tracking-[0.1em] uppercase text-white/80 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function AgMonogram() {
  return (
    <div
      className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      <span className="text-sm font-bold text-white italic tracking-tight">AG</span>
    </div>
  );
}
