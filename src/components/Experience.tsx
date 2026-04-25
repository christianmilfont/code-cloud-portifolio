import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Coordenador de Projetos Digitais",
    company: "Produto Reativo",
    location: "SP / PE / CE · Remoto",
    period: "Jan 2023 — Jul 2024",
    duration: "1 ano e 7 meses",
    description:
      "Atuação como agilista e coordenador de projetos em 3 contratos da Produto Reativo, com clientes nos estados de CE, PE e SP. Responsável pela gestão de squads, alinhamento com stakeholders e entrega de produtos digitais.",
  },
  {
    role: "Agilista Aprendiz",
    company: "Produto Reativo",
    location: "SP · Remoto",
    period: "Jan 2021 — Dez 2022",
    duration: "2 anos",
    description:
      "Atuação como agilista e analista de requisitos no desenvolvimento de uma plataforma de Marketing Digital na área de Games para a Startup DX — investida pelo fundo We Ventures e administrada pela Bertha em conjunto com a Microsoft.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 sm:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">
            <span className="text-primary/60">04.</span> experiência
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 sm:mb-5">
            Trajetória <span className="text-gradient">profissional</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Onde apliquei tudo que aprendi — entregando projetos reais com times de verdade.
          </p>
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Linha do tempo vertical */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Marker */}
                <div className="absolute left-0 top-2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-background border border-primary/40 text-primary">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div className="glass rounded-xl p-5 sm:p-6 hover:border-primary/40 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm">
                    <span className="font-medium text-foreground/90">{exp.company}</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      · {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
