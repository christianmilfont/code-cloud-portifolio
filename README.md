# Christian Milfont — Portfolio

Currículo online pessoal de **Christian Milfont** — Cloud & AI Developer.

Site moderno, responsivo, com tema dark inspirado em terminal/dev, construído para apresentar minha trajetória, skills, conquistas e contato.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **Tailwind CSS** + **shadcn/ui** (design system)
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## Como rodar localmente

```bash
# instalar dependências
npm install

# rodar em dev
npm run dev

# build de produção
npm run build

# preview do build
npm run preview
```

O dev server sobe em `http://localhost:8080`.

## Estrutura

```
src/
├── assets/         # imagens (foto de perfil, etc.)
├── components/     # Navbar, Hero, About, Skills, Achievements, Contact
│   └── ui/         # componentes do shadcn
├── pages/          # Index e NotFound
├── lib/            # utilitários
└── index.css       # design system (tokens, fontes, animações)
```

## Design System

Todas as cores, gradientes e tokens visuais ficam centralizados em `src/index.css` e `tailwind.config.ts`. Nunca usar classes de cor diretas (`text-white`, `bg-black`) — sempre tokens semânticos (`text-foreground`, `bg-background`, `text-primary`, etc.).

## Licença

Pessoal — uso livre como referência.
