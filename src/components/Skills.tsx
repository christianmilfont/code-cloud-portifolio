import { motion } from "framer-motion";
import { Cloud, Brain, Server, Layout, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "text-primary",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: Wrench,
    title: "DevOps",
    color: "text-accent",
    items: ["Git", "Linux", "VS Code", "Postman", "Figma", "Notion"],
  },
  {
    icon: Brain,
    title: "IA & Machine Learning",
    color: "text-accent",
    items: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "RAG"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "text-primary",
    items: ["Node.js", "Python", "FastAPI", "Express", "REST", "GraphQL"],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "text-accent",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "Vite", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Dados & Storage",
    color: "text-primary",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "S3", "BigQuery"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    color: "text-accent",
    items: ["Git", "Linux", "VS Code", "Postman", "Figma", "Notion"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">
            <span className="text-primary/60">02.</span> stack &amp; skills
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 sm:mb-5">
            Ferramentas que <span className="text-gradient">domino</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Tecnologias que uso no dia a dia para construir produtos sólidos, escaláveis e inteligentes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ${cat.color}`}>
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
