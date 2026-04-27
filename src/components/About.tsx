import { motion } from "framer-motion";
import { Sparkles, Rocket, Code2 } from "lucide-react";

const milestones = [
  {
    icon: Sparkles,
    year: "O início",
    title: "A primeira linha de código",
    text: "Tudo começou com curiosidade — ver como aplicativos funcionavam por dentro. O primeiro 'Hello, World' virou obsessão por entender sistemas.",
  },
  {
    icon: Code2,
    year: "A jornada",
    title: "Aprendizado constante",
    text: "Mergulhei em desenvolvimento web, depois em backend e bancos de dados. Cada projeto, um problema novo para resolver — e foi aí que percebi que além do código, eu precisaria estabelcer uma conduta de controle, utilizando meus conhecimentos de Observabilidade e Segurança da Informação, em pról de garantir um produto que agregue valor.",
  },
  {
    icon: Rocket,
    year: "Hoje",
    title: "Cloud, IA & escala",
    text: "Hoje me dedico a desenvolver soluções em nuvem, integrando inteligência artificial e desenhando arquiteturas com análise e observabilidade para que meus projetos  aguentem crescer. O foco é entregar valor real.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 sm:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">
            <span className="text-primary/60">01.</span> sobre mim
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 sm:mb-5">
            Olá, eu sou o <span className="text-gradient">Christian</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Não é sobre framework da moda — é sobre resolver problemas. Comecei essa jornada movido por
            curiosidade e hoje transformo isso em produtos que rodam em produção.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <m.icon className="h-5 w-5" />
              </div>
              <p className="font-mono text-xs text-primary mb-2">{m.year}</p>
              <h3 className="text-xl font-semibold mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
