import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 sm:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-sm text-primary mb-3">
            <span className="text-primary/60">05.</span> entre em contato
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 sm:mb-6">
            Vamos construir <span className="text-gradient">algo juntos</span>?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
            Tô sempre aberto a novas oportunidades, projetos desafiadores e boas conversas sobre tecnologia.
            Manda um oi 👋
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="mailto:contato@exemplo.com"
              className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition glow-primary break-all"
            >
              <Mail className="h-5 w-5" />
              christian@milfont.org
            </a>
            <a
              href="/christian-milfont-cv.pdf"
              download="Christian-Milfont-CV.pdf"
              className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-4 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
            >
              <Download className="h-5 w-5" />
              baixar currículo
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            {[
              { Icon: Github, label: "GitHub", href: https://github.com/christianmilfont },
              { Icon: Linkedin, label: "LinkedIn", href: https://www.linkedin.com/in/christianmilfont },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="container mt-24 pt-8 border-t border-border">
        <p className="font-mono text-xs text-center text-muted-foreground">
          <span className="text-primary">$</span> built with React + Tailwind &amp; muito ☕
        </p>
      </footer>
    </section>
  );
};

export default Contact;
