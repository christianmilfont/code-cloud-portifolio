import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "py-3 backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
          aria-label="Christian Milfont — Início"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60 group-hover:border-primary/60 transition-colors">
            <span className="font-mono text-[13px] font-bold text-foreground group-hover:text-primary transition-colors">
              CM
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Christian Milfont
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Cloud · AI · Dev
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-px bg-primary transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Entrar em contato
        </a>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground hover:text-primary hover:border-primary/60 transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container mt-4 pb-4">
          <ul className="flex flex-col gap-0.5 border-t border-border pt-4">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-foreground bg-secondary/60"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                    }`}
                  >
                    <span>{l.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </a>
                </li>
              );
            })}
            <li className="pt-3">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="block text-center text-sm font-medium px-4 py-3 rounded-md bg-foreground text-background"
              >
                Entrar em contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
