# Applets de estudo

Applets interativos (HTML autocontido) feitos para acompanhar guias de estudo do ensino fundamental: matemática, química, física, ciências e história.

**Site:** https://gwiederhecker.github.io/applets-estudos/

## Estrutura

```
index.html            página inicial: busca, filtros por disciplina e nível, agrupamento
applets.js            catálogo (a única coisa a editar quando entra um applet novo)
assets/voltar.js      botão flutuante "← Todos os applets", incluído em cada applet
applets/<pasta>/      um applet por pasta, cada um com seu index.html
_modelo/index.html    esqueleto para começar um applet novo
```

## Adicionar um applet

1. Crie `applets/<nome-da-pasta>/index.html` (copie `_modelo/` se for começar do zero).
2. Garanta que o arquivo tem, antes de `</body>`:
   ```html
   <script src="../../assets/voltar.js" defer></script>
   ```
3. Acrescente um bloco em `applets.js`:
   ```js
   {
     pasta: 'nome-da-pasta',
     titulo: 'Título que aparece no cartão',
     descricao: 'Uma ou duas frases sobre o que se explora.',
     icone: '📐', disciplina: 'matematica', topico: 'Geometria',
     serie: '9º ano', nivel: 2, tipo: 'Explorador', data: '2026-11',
     tags: ['palavras', 'para', 'a busca']
   }
   ```
   - `disciplina` precisa existir em `DISCIPLINAS`, no topo do mesmo arquivo (dá para criar novas).
   - `nivel`: 1 = Básico, 2 = Intermediário, 3 = Avançado.
   - `topico` agrupa os cartões dentro de cada disciplina.
4. `git add . && git commit -m "Novo applet: ..." && git push`. O GitHub Pages atualiza em cerca de um minuto.

## Testar localmente

Abrir `index.html` direto no navegador funciona (o catálogo é um `.js`, não um `.json`, justamente para não precisar de servidor).

## Filtros compartilháveis

O estado dos filtros fica na URL, por exemplo `…/#d=quimica&n=1` abre só os applets básicos de Química.
