@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack
- Next.js 16 (App Router, `app/`), React 19, TypeScript, Tailwind CSS v4.
- Tailwind v4 is configured only via `@import "tailwindcss";` in `app/globals.css` (PostCSS plugin `@tailwindcss/postcss`). There is no `tailwind.config` file — define theme tokens with `@theme` in the CSS.

## Commands
- `npm run lint` runs ESLint (flat config in `eslint.config.mjs`). There is no test script.

## Notes
- `app/layout.tsx` still loads the Geist fonts, but `globals.css` no longer uses them; wire them via `@theme` before relying on them.

## Perguntas
- Todas as perguntas que você fizer devem ser em português do Brasil.

## Regras de frontend

### Código
- Escreva o código em inglês: nomes de variáveis, funções, componentes, arquivos e comentários.
- Textos exibidos na interface e endereços das páginas ficam em português.

### Estilo
- Use apenas as cores, fontes e espaçamentos do tema. Nunca escreva um valor solto, como #3E56C9 ou 13px, direto no componente.
- Não instale bibliotecas novas sem pedir antes.

### Ícones
- Use os ícones do react-icons em todo o projeto, sem criar SVG na mão.
- Importe apenas os ícones usados em cada arquivo (ex.: `import { FiPlus } from "react-icons/fi"`), nunca o pacote inteiro.

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