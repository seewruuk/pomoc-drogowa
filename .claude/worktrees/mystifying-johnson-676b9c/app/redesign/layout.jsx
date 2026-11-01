import { Space_Grotesk, Inter } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Redesign — Pomoc Drogowa",
};

export default function RedesignLayout({ children }) {
  return (
    <div className={`${display.variable} ${body.variable} redesign-root`}>
      <style>{`
        .redesign-root h1,
        .redesign-root h2,
        .redesign-root h3,
        .redesign-root h4,
        .redesign-root p {
          all: revert;
          margin: 0;
          color: inherit;
          font-weight: inherit;
          font-size: inherit;
          line-height: inherit;
          font-family: inherit;
        }
        .redesign-root * { scroll-behavior: smooth; }
        .redesign-root button { background: none; border: 0; cursor: pointer; color: inherit; font: inherit; padding: 0; }
      `}</style>
      {children}
    </div>
  );
}
