@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack
- Next.js 16 (App Router, `app/`), React 19, TypeScript, Tailwind CSS v4.
- Tailwind v4 is configured only via `@import "tailwindcss";` in `app/globals.css` (PostCSS plugin `@tailwindcss/postcss`). There is no `tailwind.config` file — define theme tokens with `@theme` in the CSS.

## Commands
- `npm run lint` runs ESLint (flat config in `eslint.config.mjs`). There is no test script.

## Perguntas
- Todas as perguntas que você fizer devem ser em português do Brasil.

## Design system
- Cores, fontes, raios, tipografia e sombras ficam em `app/globals.css` (blocos `:root`, `@theme inline` e `@theme`). As fontes são carregadas em `app/layout.tsx`. As referências são `design-system.png` (na raiz) e o Figma "ComandaFácil - Design System".
- Cores semânticas (mudam sozinhas no modo escuro, que segue o sistema): `bg-canvas`, `bg-surface`, `bg-surface-elevated`, `bg-sidebar`, `bg-input`; `border-border-default|subtle|focus`; `text-text-primary|secondary|tertiary|inverse|brand`; `bg-brand-primary` (+ `-hover`, `-active`), `text-brand-on-primary`; `bg-accent-orange|amber`; `text-icon-default|muted|brand`; `bg-action-danger` (+ `-hover`); status `bg|text|border-status-{success,warning,danger,info,neutral}-{bg,text,border}`.
- Cores primitivas (rampas): `red`, `orange`, `yellow`, `stone`, `green`, `blue`, ex.: `bg-red-500`, `text-stone-700`. Prefira as semânticas; use a rampa só quando não houver token.
- Fontes: `font-display` (Fraunces, títulos) e `font-sans` (Plus Jakarta Sans, padrão do corpo).
- Tipografia: `text-display` (40/48), `text-heading` (28/36) e a escala padrão do Tailwind (`text-xl` 20/28, `text-base` 16/24, `text-sm` 14/20, `text-xs` 12/16).
- Raios: `rounded-sm` (6px), `rounded-md` (10px), `rounded-lg` (16px), `rounded-full`.
- Sombras: `shadow-sm` e `shadow-md`.
- Espaçamentos: escala padrão do Tailwind (1 unidade = 4px), sem valores entre colchetes. Divida os pixels do design por 4: 2px = `0.5`, 4px = `1`, 8px = `2`, 12px = `3`, 16px = `4`, 20px = `5`, 24px = `6`, 32px = `8`, 40px = `10`, 48px = `12`, 64px = `16`; valores quebrados também valem (ex.: 14px = `3.5`, 335px = `83.75`).
- Sempre use as classes do design system, nunca valores soltos.
- Todo ícone do projeto vem do react-icons, sempre da família Lucide (`react-icons/lu`). Não escreva SVG na mão. Importe apenas os ícones usados em cada arquivo (ex.: `import { LuPlus } from "react-icons/lu"`), nunca o pacote inteiro.
- Toda mudança de estado, como hover e foco, tem uma transição suave e curta.
- Quando o design não mostrar como fica o hover de um elemento, defina um hover coerente com o design system, usando as cores e estilos dele.
- Links de âncora (ex.: "Como funciona" no menu da landing) rolam a página suavemente até a seção, sem que o menu fixo cubra o título da seção.
- Enquanto um conteúdo carrega, mostre um estado de carregamento com o formato do conteúdo e faça o conteúdo aparecer com transição suave.
- Respeite a configuração de movimento reduzido do sistema: para quem a ativou, desligue as animações e a rolagem suave.

## Componentes base (reutilizáveis)
Os componentes abaixo estão em `app/components/` e são o design system do projeto, criados a partir do Figma. **Toda tela nova deve usá-los em vez de criar outros iguais.** Se faltar uma variante, adicione-a ao componente existente (objeto de mapeamento) em vez de duplicar. Todos aparecem em `/preview` (`app/preview/page.tsx`); ao criar ou mudar um componente, atualize a `/preview`.

- **Ações e campos:** `Button` (variant `primary|secondary|ghost|danger`, size `md|sm`, `icon`, `disabled`), `IconButton`, `Input` (label, `error`), `Dropdown`, `Toggle`.
- **Indicadores:** `Badge` (tone `neutral|success|warning|danger|info`), `EmptyState`.
- **Navegação:** `Sidebar` (aceita `children` para os indicadores de plano), `SidebarNavItem`, `PlanUsageCard`, `UpgradeCard`, `Tab`, `FilterTab`, `Pagination`.
- **Conteúdo:** `PageHeader`, `Table` (colunas e linhas por props), `OrderCard`, `CategoryCard`, `MesaCard`, `AccordionHeader`.
- **Sobreposições:** `ModalContainer` (só o painel, sem fundo escurecido), `ConfirmationModal`.

Não estão no código: o card de plano Premium, o `RefreshTimer` e o alternador de tema da sidebar (o modo escuro segue o sistema).

## Regras de frontend

### Código
- Escreva o código em inglês: nomes de variáveis, funções, componentes, arquivos e comentários.
- Textos exibidos na interface e endereços das páginas ficam em português.

### Estilo
- Use apenas as cores, fontes e espaçamentos do tema. Nunca escreva um valor solto, como #3E56C9 ou 13px, direto no componente.
- Não instale bibliotecas novas sem pedir antes.

### Componentes
- Antes de criar um componente, verifique se já existe um parecido em app/components.
- Componente usado por mais de uma tela fica em app/components/<Nome>.tsx, faz parte do design system e aparece na página /preview, com uma instância de cada variante.
- Componente usado só por uma tela fica em app/<rota>/_components/<Nome>.tsx, junto da própria página. Pastas iniciadas com underscore não viram rota e não precisam aparecer na /preview.
- Se um componente local passar a ser usado por uma segunda tela, mova ele para app/components e me avise.
- Não deixe a tela inteira em um único arquivo: quebre os blocos da página, como cabeçalho, filtros, listagem e formulário, em componentes dentro do _components da própria página.
- Nome do arquivo em PascalCase e export default.
- Props tipadas com interface acima do componente. Props de texto e estilo têm valor padrão.
- Variantes (ex.: botão primário e secundário) ficam em um objeto de mapeamento no topo do arquivo, não em if encadeado.

### Next.js
- Ao criar ou alterar componentes e páginas, siga a skill react-best-practices.
- Use "use client" só em componentes com estado ou evento, como clique e digitação.
- Use o componente Image do Next para imagens e Link para navegação entre páginas.

### HTML e acessibilidade
- Use button para ações, Link para navegação, label em todo campo de formulário e alt em toda imagem.
- Todo elemento clicável funciona pelo teclado e mostra foco visível.
- Todo elemento clicável, como botões, links e cards clicáveis, usa cursor-pointer.

### Layout
- Monte primeiro a versão para celular e depois ajuste para telas maiores.
- Não copie do Figma posições fixas em pixels. Use flex e grid.

### Listas e cards
- Aplique esta seção somente quando a interface realmente tiver uma coleção de itens repetidos, como cards ou listagens de registros. Se a tela não tiver, ignore estas regras: grid não é o padrão para todo layout.
- Havendo a coleção, distribua os itens com CSS Grid de colunas automáticas (auto-fit/auto-fill), nunca com largura fixa em pixels.
- Essa é a única exceção à regra de não usar valores entre colchetes no Tailwind: grid-cols-[repeat(auto-fit,minmax(_,1fr))] é permitido, usando como valor mínimo um espaçamento do tema.
- Os itens preenchem toda a largura do container e se ajustam sozinhos ao espaço, sem deixar vãos grandes sobrando.
- As dimensões dos itens não precisam ser exatamente as da referência de design. Priorize caber bem na tela, mantendo as cores, fontes e espaçamentos do tema.
- Em telas grandes, a navegação é por paginação, não por rolagem: calcule quantos itens cabem na altura visível e mostre só essa quantidade por página.
- Use o componente de paginação do design system. Se não existir um, crie seguindo o estilo do design system e me avise ao final.
- A paginação fica no rodapé da listagem, centralizada e visível sem precisar rolar.
- No celular a regra é outra: pode rolar normalmente, com coluna única e mais itens por página.