import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 sm:space-y-7 order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            disponível para novos projetos
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Christian
              <br />
              <span className="text-gradient">Milfont</span>
            </h1>
            <p className="font-mono text-sm sm:text-lg text-primary break-all sm:break-normal">
              &lt;Cloud_&amp;_AI_Developer /&gt;
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Construo soluções escaláveis na intersecção entre{" "}
              <span className="text-foreground font-medium">cloud</span>,{" "}
              <span className="text-foreground font-medium">inteligência artificial</span> e
              desenvolvimento moderno.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition glow-primary"
            >
              ./contato.sh
            </a>
            <a
              href="/christian-milfont-cv.pdf"
              download="Christian-Milfont-CV.pdf"
              className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-md border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="h-4 w-4" /> baixar cv
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
            >
              ver stack <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-5 pt-1">
            {[
              { Icon: Github, href:"https://github.com/christianmilfont", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/christianmilfont", label: "LinkedIn" },
              { Icon: Mail, href: "#contato", label: "E-mail" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative group motion-safe:animate-float">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-primary opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />

            <div className="relative rounded-2xl overflow-hidden glass terminal-shadow w-[260px] sm:w-80">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  christian.profile
                </span>
              </div>

              <div className="relative aspect-square">
                <img
                  src={profileImg}
                  alt="Christian Milfont — Cloud & AI Developer"
                  width={768}
                  height={768}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="px-4 py-3 border-t border-border bg-secondary/30 font-mono text-xs space-y-1">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">name:</span>
                  <span className="text-primary truncate ml-2">"Christian Milfont"</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">role:</span>
                  <span className="text-accent">"Cloud & AI Dev"</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">status:</span>
                  <span className="text-primary flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
                    online
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
