/* Catálogo dos applets. Para adicionar um novo, copie um bloco e ajuste.
   - pasta:        nome da pasta dentro de applets/
   - disciplina:   precisa existir em DISCIPLINAS (abaixo)
   - topico:       agrupa os applets dentro da disciplina
   - nivel:        1 = Básico, 2 = Intermediário, 3 = Avançado
   - tipo:         Explorador | Treino | Simulador | Jogo | Linha do tempo ...
   - data:         AAAA-MM (usada para ordenar "mais recentes")              */

window.DISCIPLINAS = {
  matematica: { nome: 'Matemática', cor: 'blue' },
  quimica:    { nome: 'Química',    cor: 'green' },
  fisica:     { nome: 'Física',     cor: 'orange' },
  ciencias:   { nome: 'Ciências',   cor: 'teal' },
  historia:   { nome: 'História',   cor: 'violet' }
};

window.APPLETS = [
  {
    pasta: 'funcoes-quadraticas-explorador',
    titulo: 'Explorador de funções quadráticas',
    descricao: 'Construa o gráfico em 3 passos, estude o sinal, descubra a lei de formação a partir de pontos e veja trajetórias e o foco da parábola.',
    icone: '📈', disciplina: 'matematica', topico: 'Funções quadráticas',
    serie: '9º ano', nivel: 2, tipo: 'Explorador', data: '2026-10',
    tags: ['parábola', 'vértice', 'zeros', 'Δ', 'estudo do sinal']
  },
  {
    pasta: 'funcoes-quadraticas-treino',
    titulo: 'Treino de funções quadráticas',
    descricao: 'Questões sorteadas para cada lista do guia: gráfico, sinal, lei de formação e problemas. Aceita frações e decimais com vírgula.',
    icone: '✏️', disciplina: 'matematica', topico: 'Funções quadráticas',
    serie: '9º ano', nivel: 2, tipo: 'Treino', data: '2026-10',
    tags: ['exercícios', 'vértice', 'zeros']
  },
  {
    pasta: 'juros-quanto-vai-valer',
    titulo: 'Quanto o meu dinheiro vai valer?',
    descricao: 'Juros compostos mês a mês no Tesouro Selic, CDB, poupança ou cofrinho, com Imposto de Renda e inflação. Compare opções e planeje uma meta de compra.',
    icone: '🪙', disciplina: 'matematica', topico: 'Juros e educação financeira',
    serie: '9º ano', nivel: 3, tipo: 'Simulador', data: '2026-10',
    tags: ['juros compostos', 'Selic', 'inflação', 'ganho real']
  },
  {
    pasta: 'juros-simulador-emprestimo',
    titulo: 'Simulador de empréstimo',
    descricao: 'Tabela Price com parcela fixa: veja quanto de cada parcela é juros e quanto amortiza a dívida, com carência e amortização extra.',
    icone: '💰', disciplina: 'matematica', topico: 'Juros e educação financeira',
    serie: '', nivel: 3, tipo: 'Simulador', data: '2026-10',
    tags: ['juros compostos', 'Tabela Price', 'amortização']
  },
  {
    pasta: 'quimica-laboratorio-reacoes',
    titulo: 'Laboratório de reações',
    descricao: 'Moléculas, tipos de reação, balanceamento de equações e a balança de Lavoisier e Proust (capítulos 9 e 10).',
    icone: '⚗️', disciplina: 'quimica', topico: 'Reações químicas',
    serie: '9º ano', nivel: 1, tipo: 'Explorador', data: '2026-11',
    tags: ['coeficiente', 'índice', 'balanceamento', 'Lavoisier', 'Proust']
  },
  {
    pasta: 'quimica-modelos-atomicos',
    titulo: 'Modelos atômicos: Rutherford e Bohr',
    descricao: 'O experimento da folha de ouro, por que o átomo planetário não se sustenta e as órbitas quantizadas de Bohr no hidrogênio.',
    icone: '⚛️', disciplina: 'quimica', topico: 'Modelos atômicos',
    serie: '9º ano', nivel: 2, tipo: 'Explorador', data: '2026-10',
    tags: ['Thomson', 'Rutherford', 'Bohr', 'núcleo', 'espectro']
  },
  {
    pasta: 'historia-viagem-cidadania',
    titulo: 'Viagem no tempo da cidadania',
    descricao: 'De Atenas e Roma à ONU: Revolução Francesa, Haiti, abolição no Brasil, Revolta da Chibata e a luta contra a segregação.',
    icone: '⏳', disciplina: 'historia', topico: 'Cidadania e direitos humanos',
    serie: '9º ano', nivel: 1, tipo: 'Linha do tempo', data: '2026-10',
    tags: ['direitos humanos', 'cidadania']
  },
  {
    pasta: 'ciencias-aventura-alimentos',
    titulo: 'Aventura dos Alimentos',
    descricao: 'Nutrientes, energia dos alimentos, conservação e embalagens, com jogos e um quiz final.',
    icone: '🍎', disciplina: 'ciencias', topico: 'Alimentos e nutrição',
    serie: '5º ano', nivel: 1, tipo: 'Jogo', data: '2026-10',
    tags: ['nutrientes', 'kcal', 'conservação']
  }
];
