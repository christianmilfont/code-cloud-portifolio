import { motion } from "framer-motion";
import { Award, GraduationCap, Cloud, Code2, Globe, FileCode, Database, Layers, GitBranch } from "lucide-react";
import premiacaoImg from "@/assets/foto-premio.jpeg";
import ImageModal from "@/components/ImageModal";
import { useState } from "react";

const certifications = [
  // AWS
  {
    icon: Cloud,
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    category: "Cloud",
  },

  // FIAP - 2025
  {
    icon: Code2,
    title: "Desenvolvimento de Aplicações Móveis",
    issuer: "FIAP — 2TDSPM",
    year: "2025",
    category: "Bronze",
  },
  {
    icon: Layers,
    title: "Estratégia e Inovação Tecnológica (IA & IoT)",
    issuer: "FIAP — 2TDSPM",
    year: "2025",
    category: "Prata",
  },

  // FIAP - 2024
  {
    icon: Globe,
    title: "Desenvolvimento e Design Web 2.0",
    issuer: "FIAP — 1TDSPK",
    year: "2024",
    category: "Bronze",
  },
  {
    icon: FileCode,
    title: "Análise de Sistemas e Prototipação Web",
    issuer: "FIAP — 1TDSPK",
    year: "2024",
    category: "Bronze",
  },

  // Certificações gerais
  {
    icon: Database,
    title: "Blockchain",
    issuer: "Certificação Profissional",
    year: "2024",
    category: "Tech",
  },
  {
    icon: Cloud,
    title: "Cloud Fundamentals, Administration & Solution Architect",
    issuer: "Certificação Profissional",
    year: "2024",
    category: "Cloud",
  },
  {
    icon: Layers,
    title: "Design Thinking - Process",
    issuer: "Certificação Profissional",
    year: "2024",
    category: "Process",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    issuer: "Certificação Profissional",
    year: "2024",
    category: "DevOps",
  },
  {
    icon: Globe,
    title: "Formação Social e Sustentabilidade",
    issuer: "Certificação Profissional",
    year: "2024",
    category: "Social",
  },

  // Alura (mantidos)
  {
    icon: Code2,
    title: "Performance Web I: otimizando o front-end",
    issuer: "Alura",
    year: "Jun 2024",
    category: "Front-end",
  },
  {
    icon: Globe,
    title: "HTTP: Entendendo a web por baixo dos panos",
    issuer: "Alura",
    year: "Mai 2020",
    category: "Web",
  },
  {
    icon: Database,
    title: "IndexedDB",
    issuer: "Alura",
    year: "Ago 2020",
    category: "JavaScript",
  },
  {
    icon: FileCode,
    title: "Projeto JavaScript",
    issuer: "Alura",
    year: "Jul 2020",
    category: "JavaScript",
  },
  {
    icon: FileCode,
    title: "JavaScript Web",
    issuer: "Alura",
    year: "Jun 2020",
    category: "JavaScript",
  },
  {
    icon: Layers,
    title: "HTML & CSS Avançado",
    issuer: "Alura",
    year: "2023",
    category: "Front-end",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    issuer: "Alura",
    year: "Ago 2023",
    category: "Ferramentas",
  },
];

const education = {
  icon: GraduationCap,
  institution: "FIAP",
  course: "Graduação — Análise e Desenvolvimento de Sistemas",
  period: "Desde fev 2024",
  details: "Atividades: Full Stack, Apps & IA (Artificial Intelligence)",
};

const Achievements = () => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <section id="conquistas" className="py-20 sm:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">
            <span className="text-primary/60">03.</span> conquistas &amp; certificações
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 sm:mb-5">
            Provas de <span className="text-gradient">evolução</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cada certificado e formação marca um passo nessa jornada de aprendizado contínuo.
          </p>
        </motion.div>

        {/* Formação acadêmica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary mb-4 uppercase tracking-wider">
            // formação acadêmica
          </p>
          <div className="glass rounded-xl p-6 sm:p-7 border-l-2 border-l-primary/70 hover:border-l-primary transition-all duration-300">
  <div className="grid md:grid-cols-2 gap-6 items-center">
    
    {/* TEXTO */}
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
        <education.icon className="h-5 w-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-semibold">
            {education.institution}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {education.period}
          </span>
        </div>

        <p className="text-sm sm:text-base text-foreground/90 mb-2">
          {education.course}
        </p>

        <p className="text-sm text-muted-foreground">
          {education.details}
        </p>
      </div>
    </div>

    {/* IMAGEM */}
   <div
  className="relative group cursor-zoom-in"
  onClick={() => setOpenImage(true)}
>

  <img
    src={premiacaoImg}
    alt="Premiação acadêmica"
    className="relative max-h-64 w-auto object-contain rounded-lg border border-border shadow-lg"
  />
</div>

  </div>
</div>
        </motion.div>

        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-baseline justify-between mb-4">
            <p className="font-mono text-xs text-primary uppercase tracking-wider">
              // certificações
            </p>
            <span className="font-mono text-xs text-muted-foreground">
              {certifications.length} emitidas
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.4) }}
                className="group relative glass rounded-xl p-5 sm:p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">{item.year}</span>
                </div>
                <p
                      className={`font-mono text-[10px] mb-2 uppercase tracking-wider ${
                      item.category === "Prata"
                        ? "text-gray-300"
                        : item.category === "Bronze"
                        ? "text-amber-500"
                        : "text-primary"
                    }`}
                  >
                    {item.category}
              </p>
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <ImageModal
  open={openImage}
  onClose={() => setOpenImage(false)}
  src={premiacaoImg}
/>
    </section>
    
  );

  
};

export default Achievements;
