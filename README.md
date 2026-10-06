# George Harrison | Landing Page em React

Parte 2 (individual) do trabalho da disciplina **Desenvolvimento Frontend II**, da Universidade Veiga de Almeida (Turma 4169ADSN2A1, Prof. Caio Silva Azeredo).

Landing Page sobre George Harrison e os Beatles, feita em React com Vite e Bootstrap. As páginas do site do grupo (index, biografia e legado) foram reunidas em uma única página de rolagem, com menu único, rodapé único e um só título principal (H1).

## Autor

Jaderson Sousa Andrade

## Origem

- Repositório do grupo (Parte 1): https://github.com/wnsogabriel/thebeatles-front2
- Páginas que fiz na Parte 1: `george-harrison.html` e `legado.html`
- Autor do `index.html` original: Enzo (líder do grupo)

## Site publicado

https://spa-georgeharrison-jaderson.netlify.app

## Como executar

```bash
npm install
npm run dev
```

Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## Tecnologias

- React e Vite
- Bootstrap 5 (o mesmo framework de CSS do site do grupo)
- CSS próprio, com variáveis de cor e as fontes do site original (Bebas Neue, Playfair Display e Inter)

## Seções da Landing Page

A ordem segue a sugerida no PDF: Hero, conteúdo, chamada final e rodapé.

| Seção | Arquivo | Origem |
|---|---|---|
| Hero (título, texto e botão) | `sections/Hero.jsx` | `index.html` (Enzo) |
| Números da carreira | `sections/Numeros.jsx` | `index.html` (Enzo) |
| Galeria de fotos | `sections/Galeria.jsx` | `index.html` (Enzo) |
| Timeline "Os anos em comum" | `sections/Timeline.jsx` | `index.html` (Enzo) |
| Biografia | `sections/Biografia.jsx` | `george-harrison.html` (minha página) |
| Legado | `sections/Legado.jsx` | `legado.html` (minha página) |
| Chamada final | `sections/ChamadaFinal.jsx` | Nova seção, repete o botão de ação do Hero |

## Decisões de fusão

| Decisão | Resultado |
|---|---|
| Menus das três páginas | Fundidos em uma única `Navbar`, com âncoras (`#home`, `#george`, `#legado`) e destaque do link da seção visível |
| Rodapés das três páginas | Fundidos em um único `Footer`, no fim da página |
| Títulos principais (H1) | Só o título do Hero é H1. Biografia e Legado viraram H2, e os títulos dos blocos viraram H3 |
| Links para arquivos `.html` | Trocados por âncoras para as seções |
| Botão de ação | O "Ler biografia" do Hero é repetido na chamada final, antes do rodapé |
| Conteúdo repetido | Vem de arrays percorridos com `map()` (números, fotos, timeline, blocos, carrossel, vídeos e links do menu) |

## Estrutura do projeto

```
referencia-html/        páginas originais da Parte 1, para comparação
src/
├── assets/
│   ├── css/style.css
│   ├── fonts/
│   └── img/
├── components/         Navbar, Footer e Divisor
├── data/               links do menu (links.js)
├── sections/           Hero, Numeros, Galeria, Timeline, Biografia, Legado e ChamadaFinal
├── pages/              LandingPage (junta as seções na ordem)
├── App.jsx
└── main.jsx
```

## Histórico do desenvolvimento

A primeira versão em React, com a migração das páginas e a landing funcionando, foi feita de forma livre, sem uma estrutura definida. Só depois de ler com atenção o PDF do professor reorganizei o projeto para seguir o padrão pedido (`components/`, `sections/` e `pages/LandingPage`), aplicando as boas práticas de Landing Page e limpando o CSS e o JSX. Essa etapa está registrada nos commits de `refactor`, `style` e `chore` do histórico.

## Diferenciais

- Além do index, migrei as duas páginas que fiz na Parte 1 (Biografia e Legado).
- Uso de `useState`, `useEffect` e `useRef` na Navbar: o link ativo acompanha a seção visível e o menu do celular fecha sozinho ao clicar em um link.
