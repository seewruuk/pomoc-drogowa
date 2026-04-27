"use client";

import { useEffect, useState } from "react";

const PHONE = "+48 600 000 000";
const PHONE_HREF = "tel:+48600000000";

const services = [
  {
    title: "Holowanie",
    desc: "Niezależnie od lokalizacji — laweta na miejscu w 30 minut. Auta osobowe, dostawcze, premium.",
    tag: "24/7",
  },
  {
    title: "Awaryjne odpalanie",
    desc: "Rozładowany akumulator? Uruchamiamy auto na miejscu, bez konieczności holowania.",
    tag: "Na miejscu",
  },
  {
    title: "Wymiana koła",
    desc: "Przebita opona w trasie. Wymieniamy na koło zapasowe lub odholowujemy do warsztatu.",
    tag: "Szybko",
  },
  {
    title: "Maszyny budowlane",
    desc: "Transport koparek, walców, żurawi i innych ciężkich maszyn. Lawety do 25t.",
    tag: "Do 25t",
  },
  {
    title: "Maszyny rolnicze",
    desc: "Traktory, kombajny, opryskiwacze. Bezpieczny transport sprzętu rolniczego.",
    tag: "Cała PL",
  },
  {
    title: "Urządzenia przemysłowe",
    desc: "Maszyny produkcyjne, generatory, sprzęt specjalistyczny. Indywidualna wycena.",
    tag: "B2B",
  },
];

const faq = [
  {
    q: "Jak szybko dotrzecie na miejsce?",
    a: "W granicach Trójmiasta zazwyczaj 15–30 minut. Czas reakcji potwierdzamy przy zgłoszeniu telefonicznym.",
  },
  {
    q: "Czy holujecie poza Trójmiastem?",
    a: "Tak, działamy na terenie całej Polski. Wycenę dystansu otrzymasz od razu przy zgłoszeniu.",
  },
  {
    q: "Czy obsługujecie motocykle?",
    a: "Tak, mamy dedykowany sprzęt do bezpiecznego transportu jednośladów wszystkich klas.",
  },
  {
    q: "Jak wygląda płatność?",
    a: "Gotówka, karta na miejscu, BLIK, przelew dla firm. Faktura VAT na życzenie.",
  },
];

const stats = [
  { value: "15–30 min", label: "Średni czas dojazdu w Trójmieście" },
  { value: "24 / 7", label: "Dostępność, również święta" },
  { value: "10+", label: "Lat doświadczenia w branży" },
];

const reviews = [
  {
    name: "Marcin K.",
    role: "Kierowca, Gdańsk",
    text: "Awaria w nocy na obwodnicy. Laweta była w 22 minuty, kierowca konkretny i bardzo pomocny. Polecam w ciemno.",
  },
  {
    name: "Anna W.",
    role: "Flota, Gdynia",
    text: "Obsługujemy z nimi naszą flotę 14 aut dostawczych. Faktury, terminy, kontakt — wszystko na poziomie.",
  },
  {
    name: "Tomasz P.",
    role: "Klient indywidualny",
    text: "Przebita opona pod Sopotem. Wymienili na miejscu w 15 minut. Cena uczciwa, robota na plus.",
  },
];

export default function RedesignPage() {
  const [accent, setAccent] = useState("yellow");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("redesign-accent");
    if (saved === "yellow" || saved === "violet") setAccent(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("redesign-accent", accent);
  }, [accent]);

  const accentVars =
    accent === "yellow"
      ? {
          "--accent": "#FFC326",
          "--accent-2": "#FFD45E",
          "--accent-ink": "#1A1100",
          "--accent-glow": "rgba(255, 195, 38, 0.18)",
          "--accent-soft": "rgba(255, 195, 38, 0.08)",
        }
      : {
          "--accent": "#A855F7",
          "--accent-2": "#C084FC",
          "--accent-ink": "#1B0533",
          "--accent-glow": "rgba(168, 85, 247, 0.22)",
          "--accent-soft": "rgba(168, 85, 247, 0.08)",
        };

  return (
    <div
      style={{
        ...accentVars,
        "--bg": "#0B0D11",
        "--surface": "#14171E",
        "--surface-2": "#1B1F28",
        "--border": "#262B36",
        "--text": "#F4F5F7",
        "--text-dim": "#8B92A0",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-body), system-ui, sans-serif",
      }}
      className="min-h-screen antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-ink)]"
    >
      {/* ==================== TOP UTILITY BAR ==================== */}
      <div
        className="border-b text-[13px]"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-5 text-[var(--text-dim)]">
            <span className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Dyspozytor online · 24/7
            </span>
            <span className="hidden sm:inline opacity-50">·</span>
            <span className="hidden sm:inline">Trójmiasto · cała Polska</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="hidden md:flex items-center gap-2 hover:text-[var(--accent)] transition"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              {PHONE}
            </a>
            <ThemeToggle accent={accent} setAccent={setAccent} />
          </div>
        </div>
      </div>

      {/* ==================== NAV ==================== */}
      <nav
        className="sticky top-0 z-40 backdrop-blur-xl border-b"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "rgba(11, 13, 17, 0.78)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg grid place-items-center"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-ink)",
              }}
            >
              <TruckIcon className="w-5 h-5" />
            </div>
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[17px] font-semibold tracking-tight"
            >
              Pomoc<span style={{ color: "var(--accent)" }}>.</span>Drogowa
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[14px] text-[var(--text-dim)]">
            <a href="#uslugi" className="hover:text-white transition">
              Usługi
            </a>
            <a href="#o-nas" className="hover:text-white transition">
              O nas
            </a>
            <a href="#galeria" className="hover:text-white transition">
              Galeria
            </a>
            <a href="#opinie" className="hover:text-white transition">
              Opinie
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </div>

          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-2 px-4 h-10 rounded-full text-[14px] font-medium transition"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-ink)",
            }}
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Zadzwoń teraz</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
          style={{ backgroundColor: "var(--accent-glow)" }}
        />
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-60"
          style={{ backgroundColor: "var(--accent-glow)" }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 px-3 h-8 rounded-full border text-[12px] uppercase tracking-[0.14em]"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text-dim)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Pomoc drogowa · Trójmiasto
            </div>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-6 text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] font-semibold"
            >
              Awaria nie czeka.{" "}
              <span style={{ color: "var(--accent)" }}>My też nie</span> — laweta u Ciebie w 30 minut.
            </h1>

            <p
              className="mt-7 max-w-[560px] text-[17px] leading-[1.6]"
              style={{ color: "var(--text-dim)" }}
            >
              Holowanie 24/7, awaryjne odpalanie, wymiana koła, transport maszyn. Działamy w Trójmieście i na terenie całej Polski. Konkretna wycena przy zgłoszeniu, bez ukrytych kosztów.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 px-6 h-14 rounded-full text-[16px] font-semibold transition hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-ink)",
                  boxShadow: "0 20px 50px -10px var(--accent-glow)",
                }}
              >
                <PhoneIcon className="w-5 h-5" />
                {PHONE}
              </a>
              <a
                href="#uslugi"
                className="inline-flex items-center gap-2 px-6 h-14 rounded-full text-[15px] font-medium border transition hover:bg-[var(--surface)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                Zobacz usługi
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="mt-12 grid grid-cols-3 gap-px rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--border)" }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--accent)",
                    }}
                    className="text-[24px] sm:text-[28px] font-semibold tracking-tight"
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1 text-[12px] leading-snug"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(160deg, var(--surface-2) 0%, var(--bg) 100%)",
              }}
            >
              {/* Big number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--accent)",
                    opacity: 0.08,
                  }}
                  className="text-[420px] font-bold leading-none"
                >
                  24
                </span>
              </div>

              {/* Floating cards */}
              <div className="absolute top-6 left-6 right-6">
                <div
                  className="px-4 py-3 rounded-xl border backdrop-blur-md flex items-center gap-3"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "rgba(20, 23, 30, 0.7)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg grid place-items-center"
                    style={{
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[12px] text-[var(--text-dim)]">
                      Średni czas reakcji
                    </div>
                    <div className="text-[15px] font-semibold">23 minuty</div>
                  </div>
                  <div
                    className="ml-auto text-[11px] px-2 py-1 rounded-md"
                    style={{
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    LIVE
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="px-4 py-3 rounded-xl border backdrop-blur-md"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "rgba(20, 23, 30, 0.7)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] text-[var(--text-dim)]">
                      Zgłoszenia dziś
                    </div>
                    <div className="text-[12px] text-[var(--accent)]">
                      +12% vs średnia
                    </div>
                  </div>
                  <div className="mt-2 flex items-end gap-1.5 h-10">
                    {[40, 60, 35, 80, 55, 90, 70, 95, 60, 75, 85, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            backgroundColor:
                              i === 11 ? "var(--accent)" : "var(--border)",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Side accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl rotate-12 hidden md:block"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-ink)",
              }}
            >
              <div className="h-full w-full grid place-items-center">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-[14px] font-bold tracking-tight text-center leading-tight"
                >
                  ZADZWOŃ<br/>TERAZ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS STRIP ==================== */}
      <section
        className="border-y"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--accent)",
          color: "var(--accent-ink)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6">
          {[
            { icon: ClockIcon, text: "Dojazd w 30 minut" },
            { icon: PhoneIcon, text: "Linia 24/7 — zawsze żywy człowiek" },
            { icon: ShieldIcon, text: "Pełne ubezpieczenie OC/AC" },
            { icon: CheckIcon, text: "Wycena uczciwa, bez kombinacji" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black/10 grid place-items-center">
                <b.icon className="w-4 h-4" />
              </div>
              <span className="text-[15px] font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="o-nas" className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <SectionLabel>O nas</SectionLabel>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-[36px] lg:text-[48px] leading-[1.05] tracking-tight font-semibold"
            >
              Robota wykonana <span style={{ color: "var(--accent)" }}>jak należy</span> — od ponad dekady.
            </h2>
            <p
              className="mt-5 text-[16px] leading-[1.65]"
              style={{ color: "var(--text-dim)" }}
            >
              Zaczynaliśmy od jednej lawety i numeru telefonu, który zawsze ktoś odbierał. Dziś mamy flotę, dyspozytora online 24/7 i obsługujemy zarówno klientów indywidualnych, jak i floty firmowe.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium border-b pb-1 transition hover:gap-3"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              Poznaj zespół
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                k: "Doświadczenie",
                v: "10+ lat",
                desc: "na drodze, w każdych warunkach",
              },
              {
                k: "Flota",
                v: "8 lawet",
                desc: "od osobówek po 25-tonowce",
              },
              {
                k: "Zasięg",
                v: "Cała PL",
                desc: "z bazą w Trójmieście",
              },
              {
                k: "Wycena",
                v: "Od ręki",
                desc: "konkretna kwota przy zgłoszeniu",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-7 rounded-2xl border transition hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div
                  className="text-[12px] uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {card.k}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--accent)",
                  }}
                  className="mt-3 text-[36px] font-semibold tracking-tight leading-none"
                >
                  {card.v}
                </div>
                <div
                  className="mt-2 text-[14px]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section
        id="uslugi"
        className="py-24 lg:py-32 border-y"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <SectionLabel>Nasze usługi</SectionLabel>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="mt-4 text-[36px] lg:text-[48px] leading-[1.05] tracking-tight font-semibold"
              >
                Kompleksowa pomoc drogowa, na którą możesz <span style={{ color: "var(--accent)" }}>liczyć</span>.
              </h2>
            </div>
            <p
              className="text-[15px] max-w-md leading-relaxed"
              style={{ color: "var(--text-dim)" }}
            >
              Sześć kluczowych usług. Jeden numer telefonu. Zero ukrytych kosztów — wycenę otrzymujesz przy zgłoszeniu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border overflow-hidden transition cursor-pointer"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, var(--accent-soft), transparent 60%)",
                  }}
                />

                <div className="relative flex items-start justify-between gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center transition group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <ServiceIcon index={i} className="w-6 h-6" />
                  </div>
                  <span
                    className="text-[11px] px-2.5 py-1 rounded-full border uppercase tracking-wider"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-dim)",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>

                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="relative text-[22px] font-semibold tracking-tight"
                >
                  {s.title}
                </h3>
                <p
                  className="relative mt-2 text-[14px] leading-[1.6]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {s.desc}
                </p>

                <div
                  className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium opacity-0 group-hover:opacity-100 transition"
                  style={{ color: "var(--accent)" }}
                >
                  Dowiedz się więcej
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section id="galeria" className="py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Galeria</SectionLabel>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="mt-4 text-[36px] lg:text-[44px] leading-[1.05] tracking-tight font-semibold"
              >
                Z naszej codziennej roboty.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[14px] font-medium hover:gap-3 transition"
              style={{ color: "var(--accent)" }}
            >
              Zobacz pełną galerię
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border relative overflow-hidden group"
                style={{
                  borderColor: "var(--border)",
                  background: `linear-gradient(${135 + i * 20}deg, var(--surface-2), var(--bg))`,
                }}
              >
                <div
                  className="absolute inset-0 grid place-items-center text-[var(--text-dim)] opacity-30 group-hover:opacity-60 transition"
                >
                  <TruckIcon className="w-10 h-10" />
                </div>
                <div className="absolute bottom-3 left-3 text-[11px] text-[var(--text-dim)] uppercase tracking-wider">
                  #{String(i).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section
        id="opinie"
        className="py-24 lg:py-32 border-y"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel center>Opinie klientów</SectionLabel>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-[36px] lg:text-[48px] leading-[1.05] tracking-tight font-semibold"
            >
              Mówią o nas <span style={{ color: "var(--accent)" }}>krótko</span> i konkretnie.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border flex flex-col"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg)",
                }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon
                      key={s}
                      className="w-4 h-4"
                      style={{ color: "var(--accent)" }}
                    />
                  ))}
                </div>
                <p className="text-[15px] leading-[1.65] flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div
                  className="mt-6 pt-5 border-t flex items-center gap-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full grid place-items-center text-[14px] font-semibold"
                    style={{
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium">{r.name}</div>
                    <div
                      className="text-[12px]"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel center>FAQ</SectionLabel>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-[36px] lg:text-[48px] leading-[1.05] tracking-tight font-semibold"
            >
              Najczęstsze pytania.
            </h2>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="w-full text-left p-6 rounded-2xl border transition"
                  style={{
                    borderColor: open ? "var(--accent)" : "var(--border)",
                    backgroundColor: open
                      ? "var(--accent-soft)"
                      : "var(--surface)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      style={{ fontFamily: "var(--font-display)" }}
                      className="text-[17px] font-medium tracking-tight"
                    >
                      {item.q}
                    </span>
                    <span
                      className="shrink-0 w-7 h-7 rounded-full grid place-items-center transition"
                      style={{
                        backgroundColor: open
                          ? "var(--accent)"
                          : "var(--surface-2)",
                        color: open ? "var(--accent-ink)" : "var(--text)",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <PlusIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-300"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="pt-4 text-[15px] leading-[1.7]"
                        style={{ color: "var(--text-dim)" }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-6 pb-24">
        <div
          className="relative max-w-[1280px] mx-auto rounded-3xl overflow-hidden border p-10 lg:p-16"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(135deg, var(--surface-2) 0%, var(--bg) 100%)",
          }}
        >
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ backgroundColor: "var(--accent-glow)" }}
          />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <SectionLabel>Awaria? Działamy.</SectionLabel>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="mt-4 text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] font-semibold"
              >
                Nie marnuj czasu —{" "}
                <span style={{ color: "var(--accent)" }}>zadzwoń teraz</span>.
              </h2>
              <p
                className="mt-4 text-[16px]"
                style={{ color: "var(--text-dim)" }}
              >
                Jeden telefon, konkretna odpowiedź. Średni czas reakcji w Trójmieście: 23 minuty.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 px-7 h-16 rounded-full text-[18px] font-semibold transition hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-ink)",
                  boxShadow: "0 25px 60px -15px var(--accent-glow)",
                }}
              >
                <PhoneIcon className="w-5 h-5" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer
        className="border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg grid place-items-center"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-ink)",
                }}
              >
                <TruckIcon className="w-5 h-5" />
              </div>
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-[17px] font-semibold tracking-tight"
              >
                Pomoc<span style={{ color: "var(--accent)" }}>.</span>Drogowa
              </span>
            </div>
            <p
              className="mt-5 text-[14px] max-w-sm leading-relaxed"
              style={{ color: "var(--text-dim)" }}
            >
              Pomoc drogowa 24/7 w Trójmieście i na terenie całej Polski. Holowanie, awaryjne odpalanie, transport maszyn.
            </p>
          </div>

          <div>
            <div
              className="text-[12px] uppercase tracking-[0.14em] mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Kontakt
            </div>
            <a
              href={PHONE_HREF}
              style={{ fontFamily: "var(--font-display)" }}
              className="block text-[20px] font-semibold tracking-tight hover:text-[var(--accent)] transition"
            >
              {PHONE}
            </a>
            <a
              href="mailto:kontakt@pomoc-drogowa.pl"
              className="block mt-2 text-[14px] hover:text-[var(--accent)] transition"
              style={{ color: "var(--text-dim)" }}
            >
              kontakt@pomoc-drogowa.pl
            </a>
          </div>

          <div>
            <div
              className="text-[12px] uppercase tracking-[0.14em] mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Nawigacja
            </div>
            <div className="space-y-2 text-[14px]">
              <a
                href="#uslugi"
                className="block hover:text-[var(--accent)] transition"
                style={{ color: "var(--text-dim)" }}
              >
                Usługi
              </a>
              <a
                href="#o-nas"
                className="block hover:text-[var(--accent)] transition"
                style={{ color: "var(--text-dim)" }}
              >
                O nas
              </a>
              <a
                href="#galeria"
                className="block hover:text-[var(--accent)] transition"
                style={{ color: "var(--text-dim)" }}
              >
                Galeria
              </a>
              <a
                href="#faq"
                className="block hover:text-[var(--accent)] transition"
                style={{ color: "var(--text-dim)" }}
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
        <div
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between text-[12px]"
            style={{ color: "var(--text-dim)" }}
          >
            <span>© {new Date().getFullYear()} Pomoc Drogowa. Wszystkie prawa zastrzeżone.</span>
            <span>Mockup · /redesign</span>
          </div>
        </div>
      </footer>

      {/* ==================== FLOATING MOBILE CTA ==================== */}
      <a
        href={PHONE_HREF}
        className="md:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full grid place-items-center"
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--accent-ink)",
          boxShadow: "0 15px 40px -8px var(--accent-glow)",
        }}
        aria-label="Zadzwoń"
      >
        <PhoneIcon className="w-6 h-6" />
      </a>
    </div>
  );
}

/* ==================== HELPERS ==================== */

function SectionLabel({ children, center }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span
        className="w-8 h-px"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <span
        className="text-[12px] uppercase tracking-[0.18em] font-medium"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </span>
    </div>
  );
}

function ThemeToggle({ accent, setAccent }) {
  return (
    <div
      className="flex items-center gap-1 p-1 rounded-full border"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface)",
      }}
    >
      <button
        onClick={() => setAccent("yellow")}
        className="w-6 h-6 rounded-full transition"
        style={{
          backgroundColor: "#FFC326",
          outline: accent === "yellow" ? "2px solid #FFC326" : "none",
          outlineOffset: 2,
          opacity: accent === "yellow" ? 1 : 0.5,
        }}
        aria-label="Akcent żółty"
      />
      <button
        onClick={() => setAccent("violet")}
        className="w-6 h-6 rounded-full transition"
        style={{
          backgroundColor: "#A855F7",
          outline: accent === "violet" ? "2px solid #A855F7" : "none",
          outlineOffset: 2,
          opacity: accent === "violet" ? 1 : 0.5,
        }}
        aria-label="Akcent fioletowy"
      />
    </div>
  );
}

/* ==================== ICONS ==================== */

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function PlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}

function StarIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function TruckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}

function ServiceIcon({ index, className }) {
  const icons = [
    // Holowanie - truck
    <g key="0">
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </g>,
    // Akumulator - zap
    <polyline key="1" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
    // Wymiana koła - circle
    <g key="2">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="3" x2="12" y2="9"/>
      <line x1="12" y1="15" x2="12" y2="21"/>
      <line x1="3" y1="12" x2="9" y2="12"/>
      <line x1="15" y1="12" x2="21" y2="12"/>
    </g>,
    // Maszyny budowlane - construction
    <g key="3">
      <path d="M3 21h18"/>
      <path d="M5 21V8l4-4h6l4 4v13"/>
      <rect x="9" y="14" width="6" height="7"/>
    </g>,
    // Maszyny rolnicze - tractor / leaf
    <g key="4">
      <circle cx="6" cy="17" r="3"/>
      <circle cx="17" cy="17" r="4"/>
      <path d="M9 17h5"/>
      <path d="M6 14V8h6l3 6"/>
    </g>,
    // Przemysłowe - factory
    <g key="5">
      <path d="M3 21V11l5 3V11l5 3V11l5 3v7H3z"/>
      <path d="M3 11V5h2v6"/>
    </g>,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {icons[index % icons.length]}
    </svg>
  );
}
