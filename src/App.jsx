import { useEffect, useRef, useState } from "react";
import proxImage from "../assets/prox.jpg";
import tabbyLogo from "../assets/tabby_logo.png";
import teamHubImage from "../assets/team_hub.png";

const products = [
  {
    name: "Tabby",
    image: tabbyLogo,
    alt: "Identidade visual do produto Tabby",
    description:
      "O Tabby é uma plataforma SaaS focada na modernização de operações digitais. Seu objetivo é simplificar processos, conectar informações e melhorar a experiência entre empresas e seus clientes por meio de uma solução tecnológica integrada.",
    status: "Em lançamento",
  },
  {
    name: "Team Hub",
    image: teamHubImage,
    alt: "Previa visual do produto Team Hub",
    description:
      "Centralize a comunicação do time, organize informações importantes e mantenha o desenvolvimento do produto conectado em um único ambiente.",
    status: "Revisão para lançamento",
    warning: true,
  },
];

const team = [
  {
    initials: "RL",
    name: "Rapha Lagatta",
    linkedin: "https://www.linkedin.com/in/raphalagatta/?locale=pt",
  },
  {
    initials: "LS",
    name: "Luciano Santos",
    linkedin: "https://www.linkedin.com/in/luciano-ssantos-dev/",
  },
  {
    initials: "CS",
    name: "Cauan Sousa",
    linkedin: "https://www.linkedin.com/in/cauan-sousa-096851229/",
  },
  {
    initials: "SF",
    name: "Sara Ferreira",
    linkedin: "https://www.linkedin.com/in/ferreirasa/",
  },
];

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Machine Learning",
  "Product Owner",
  "APIs",
  "Cloud",
];

const revealClasses =
  "opacity-0 motion-safe:translate-y-5 motion-safe:transition motion-safe:duration-700";

const revealedClasses = "opacity-100 motion-safe:translate-y-0";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav
        className="flex min-h-[72px] items-center justify-between px-4 md:px-8"
        aria-label="Navegação principal"
      >
        <a className="text-lg font-extrabold no-underline" href="#hero">
          Sara<span className="text-accent">.</span>
        </a>

        <ul className="hidden list-none gap-8 md:flex">
          <li>
            <a className="nav-link" href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="nav-link" href="#equipe">
              Equipe
            </a>
          </li>
          <li>
            <a className="nav-link" href="#produtos">
              Produtos
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Reveal({ children, className = "", as: Component = "div", ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`${revealClasses} ${isVisible ? revealedClasses : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

function Hero() {
  return (
    <section
      className="mx-auto flex min-h-screen max-w-hero flex-col justify-center px-4 py-28 md:px-8"
      id="hero"
      aria-labelledby="hero-title"
    >
      <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 px-3.5 py-1.5 font-mono text-xs text-accent animate-fade-up before:h-1.5 before:w-1.5 before:rounded-full before:bg-current before:animate-pulse-dot">
        Disponível para colaborações
      </p>

      <h1
        className="mb-6 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.05]"
        id="hero-title"
      >
        Scientist.
        <br />
        Creator.
        <br />
        <em className="not-italic text-accent">Builder.</em>
      </h1>

      <p className="max-w-xl animate-fade-up text-lg leading-8 text-muted">
        Construo produtos digitais na interseção entre tecnologia e experiência
        humana. Cientista da computação e empreendedora, em São Paulo.
      </p>

      <div
        className="mt-10 flex animate-fade-up flex-wrap gap-4"
        aria-label="Ações principais"
      >
        <a href="#produtos" className="button button-primary">
          Ver produtos
        </a>
        <a href="#contato" className="button button-secondary">
          Entrar em contato
        </a>
      </div>

      <dl className="mt-16 flex animate-fade-up flex-wrap gap-8 border-t border-white/10 pt-12 md:gap-12">
        {[
          ["26", "Anos"],
          ["∞", "Projetos em mente"],
          ["01", "Missão"],
        ].map(([value, label]) => (
          <div key={label}>
            <dt className="font-mono text-3xl font-extrabold text-accent">
              {value}
            </dt>
            <dd className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell" id="sobre" aria-labelledby="about-title">
      <Reveal as="p" className="section-label">
        Sobre mim
      </Reveal>
      <Reveal as="h2" className="section-title" id="about-title">
        Tecnologia com
        <br />
        propósito humano.
      </Reveal>

      <Reveal className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <div className="space-y-5 text-muted">
          <p className="leading-8">
            Sou estudante de Ciência da Computação na{" "}
            <a
              className="text-accent no-underline hover:text-accent-strong"
              href="https://www.impacta.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Impacta Tecnologia
            </a>{" "}
            e empreendedora, apaixonada por construir soluções que geram impacto
            real. Combino pensamento analítico e conhecimento técnico com uma
            visão criativa e centrada nas pessoas para transformar ideias em
            produtos digitais.
          </p>

          <p className="leading-8">
            Conto com uma rede de especialistas parceiros que pode ser integrada
            conforme as demandas de cada projeto. Essa abordagem permite compor
            equipes multidisciplinares e reunir a expertise necessária para
            enfrentar desafios técnicos, estratégicos e de produto em diferentes
            níveis de complexidade.
          </p>

          <ul className="flex list-none flex-wrap gap-2 pt-1">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded border border-white/10 bg-surface px-3 py-1.5 font-mono text-xs text-muted transition hover:border-accent hover:text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <figure className="overflow-x-auto rounded-xl border border-white/10 bg-surface p-8 font-mono text-xs leading-8 text-muted">
          <figcaption className="mb-4 text-dim">// sara.config.ts</figcaption>
          <pre className="font-mono">
            <code>
              <span className="text-accent">const</span> sara = {"{\n"}
              {"  "}role:{" "}
              <span className="text-purple-300">"Scientist + Builder"</span>,
              {"\n"}
              {"  "}base:{" "}
              <span className="text-purple-300">"São Paulo, BR"</span>,{"\n"}
              {"  "}focus: [{"\n"}
              {"    "}
              <span className="text-purple-300">"full-stack development"</span>,
              {"\n"}
              {"    "}
              <span className="text-purple-300">"human-centered design"</span>,
              {"\n"}
              {"    "}
              <span className="text-purple-300">"digital products"</span>
              {"\n"}
              {"  "}],{"\n"}
              {"  "}status: <span className="text-accent">"building"</span>
              {"\n"}
              {"}"}
            </code>
          </pre>
        </figure>
      </Reveal>
    </section>
  );
}

function Team() {
  return (
    <section
      className="section-shell border-t border-white/10"
      id="equipe"
      aria-labelledby="team-title"
    >
      <Reveal as="p" className="section-label">
        Equipe
      </Reveal>
      <Reveal as="h2" className="section-title" id="team-title">
        Pessoas que
        <br />
        constroem junto.
      </Reveal>
      <Reveal as="p" className="max-w-xl text-sm leading-7 text-muted">
        Uma rede próxima de colaboração para transformar estratégia, produto e
        tecnologia em entregas consistentes.
      </Reveal>

      <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <article
            className="card-top-line relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface-strong"
            key={member.linkedin}
          >
            <p
              className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 font-extrabold text-accent"
              aria-hidden="true"
            >
              {member.initials}
            </p>
            <h3 className="mb-4 text-base font-bold">{member.name}</h3>
            <a
              className="font-mono text-xs uppercase tracking-[0.1em] text-muted no-underline transition hover:text-accent"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver LinkedIn
            </a>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

function Products({ onDisabledProduct }) {
  return (
    <section
      className="section-shell"
      id="produtos"
      aria-labelledby="products-title"
    >
      <Reveal as="p" className="section-label">
        Produtos & Negócios
      </Reveal>
      <Reveal as="h2" className="section-title" id="products-title">
        O que estou
        <br />
        construindo.
      </Reveal>
      <Reveal as="p" className="max-w-xl text-sm leading-7 text-muted">
        Produtos em fase de lançamento, validação e evolução contínua. Os links
        de acesso estão temporariamente desabilitados.
      </Reveal>

      <Reveal className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article
            className="card-top-line relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface-strong"
            key={product.name}
          >
            <img
              className="mb-5 aspect-video w-full rounded-lg border border-white/10 bg-surface-strong object-cover object-center"
              src={product.image}
              alt={product.alt}
            />
            <h3 className="mb-2 text-lg font-bold">{product.name}</h3>
            <p className="mb-6 flex-1 text-sm leading-7 text-muted">
              {product.description}
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
              <p
                className={`status-pill ${
                  product.warning
                    ? "border-warning/30 bg-warning/10 text-warning"
                    : ""
                }`}
              >
                {product.status}
              </p>
              <button
                className="min-h-9 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-text transition hover:-translate-y-px hover:border-accent hover:text-accent"
                type="button"
                onClick={onDisabledProduct}
              >
                Acessar produto
              </button>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

function Future() {
  return (
    <section
      className="section-shell grid items-center gap-8 border-t border-white/10 md:grid-cols-[1.05fr_0.95fr] md:gap-12"
      id="futuro"
      aria-labelledby="future-title"
    >
      <Reveal className="relative overflow-hidden rounded-xl border border-white/10 bg-surface after:absolute after:inset-0 after:border-t-2 after:border-accent after:opacity-45">
        <img
          className="block min-h-60 w-full object-cover md:min-h-[360px]"
          src={proxImage}
          alt="Interface digital de produto em desenvolvimento"
        />
      </Reveal>

      <Reveal className="max-w-lg">
        <p className="section-label">Projeto futuro</p>
        <p className="status-pill mb-4 border-white/10 bg-white/[0.03] text-muted">
          Pré-lançamento
        </p>
        <h2 className="section-title" id="future-title">
          O próximo passo
          <br />
          já está em estudo.
        </h2>
        <p className="mb-5 text-sm leading-8 text-muted">
          Nosso foco está no lançamento atual, mas a inovação não para. Novas
          ideias, funcionalidades e produtos já estão sendo explorados nos
          bastidores.
        </p>
        <p className="text-sm leading-8 text-muted">
          Este é o início de uma transformação maior construída passo a passo,
          lançamento após lançamento. Vamos construir o futuro juntos? Fique
          ligado para as próximas novidades.
        </p>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="section-shell border-t border-white/10"
      id="contato"
      aria-labelledby="contact-title"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-label justify-center">Contato</p>
        <h2 className="section-title" id="contact-title">
          Vamos construir
          <br />
          algo juntos?
        </h2>
        <p className="mb-10 text-muted">Colaborações & parcerias.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:saferr.dev@email.com"
            className="button button-primary"
          >
            Enviar mensagem
          </a>
          <a
            href="https://github.com/sahferr"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ferreirasa"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Toast({ message }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] max-w-[min(360px,calc(100vw-2rem))] rounded-lg border border-accent/25 bg-surface/95 px-4 py-3 text-sm text-text shadow-2xl transition ${
        message
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}

export default function App() {
  const [toast, setToast] = useState("");

  const showDisabledProductToast = () => {
    setToast(
      "Os links dos produtos estão temporariamente desabilitados durante o lançamento.",
    );
  };

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToast(""), 3200);

    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  return (
    <>
      <div
        className="pointer-events-none fixed -right-24 -top-24 z-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -left-24 bottom-1/4 z-0 h-[400px] w-[400px] rounded-full bg-accent-alt/10 blur-[120px]"
        aria-hidden="true"
      />

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Team />
        <Products onDisabledProduct={showDisabledProductToast} />
        <Future />
        <Contact />
      </main>

      <Toast message={toast} />

      <footer className="border-t border-white/10 p-8 text-center font-mono text-xs text-dim">
        <p>© 2026 Sara F.</p>
      </footer>
    </>
  );
}
