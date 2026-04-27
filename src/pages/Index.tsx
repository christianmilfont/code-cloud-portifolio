import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section id="sobre">
        <Hero />
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="conquistas">
        <Achievements />
      </section>

      <section id="experiencia">
        <Experience />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </main>
  );
};

export default Index;