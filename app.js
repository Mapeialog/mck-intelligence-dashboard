const navigation = [['executivo','⌂','Visao executiva'],['pessoas','◎','Performance individual'],['equipes','◉','Equipes'],['clientes','◇','Clientes'],['crm','△','Comercial / CRM'],['financeiro','$','Financeiro'],['ranking','★','Casos encerrados'],['acoes','✓','Planos de acao'],['alertas','!','Central de alertas']];

const pageData = {
  pessoas: {
    title: 'Desempenho no periodo',
    stats: [
      ['Media geral','87%','+6,2%'],
      ['No prazo','94,1%','+1,8 p.p.'],
      ['Atrasos','12','-3'],
      ['Meta atingida','72%','+5 p.p.']
    ],
    head: ['Profissional','Area','Tarefas','Concluidas','SLA','Evolucao'],
    rows: [
      ['Marina Costa','Civel',51,46,'96%','↑ 12%'],
      ['Rafael Lima','Trabalhista',45,38,'91%','↑ 7%'],
      ['Camila Rocha','Empresarial',42,31,'84%','↓ 18%'],
      ['Lucas Mendes','Tributario',34,29,'97%','↑ 5%']
    ]
  },
  equipes: {
    title: 'Capacidade e entrega',
    stats: [
      ['Civel','92%','286 atividades'],
      ['Empresarial','86%','218 atividades'],
      ['Trabalhista','74%','194 atividades'],
      ['Tributario','61%','132 atividades']
    ],
    head: ['Equipe','Capacidade','SLA','Atrasos','Receita','Tendencia'],
    rows: [
      ['Civel','92%','94%',8,'R$ 172 mil','↑ 9%'],
      ['Empresarial','86%','88%',7,'R$ 138 mil','↓ 4%'],
      ['Trabalhista','74%','96%',2,'R$ 96 mil','↑ 6%'],
      ['Tributario','61%','98%',1,'R$ 80 mil','↑ 3%']
    ]
  },
  clientes: {
    title: 'Saude do relacionamento',
    stats: [
      ['Clientes ativos','184','+7'],
      ['SLA','92%','meta 95%'],
      ['NPS','71','excelente'],
      ['Risco de perda','6','-2']
    ],
    head: ['Cliente','Responsavel','Processos','Ultimo contato','Saude'],
    rows: [
      ['Grupo Horizonte','Marina Costa',4,'ha 2 dias','Saudavel'],
      ['Alfa Participacoes','Rafael Lima',7,'ha 5 dias','Saudavel'],
      ['Norte Logistica','Camila Rocha',3,'ha 21 dias','Atencao'],
      ['Vita Foods','Lucas Mendes',5,'ha 8 dias','Saudavel']
    ]
  },
  crm: {
    title: 'Comercial e pipeline',
    stats: [
      ['Leads em aberto','38','+9'],
      ['Conversao','28%','+4 p.p.'],
      ['Pipeline','R$ 1,2 mi','+18%'],
      ['Tempo medio','3,4 dias','-0,8']
    ],
    head: ['Lead','Origem','Area','Valor','Etapa'],
    rows: [
      ['Fernanda Alves','Indicacao','Empresarial','R$ 48 mil','Contato'],
      ['Nexus Tecnologia','Site','Civel','R$ 92 mil','Proposta'],
      ['Ricardo Gomes','Evento','Trabalhista','R$ 35 mil','Qualificacao'],
      ['Grupo Sol','Parceiro','Tributario','R$ 76 mil','Negociacao']
    ]
  },
  financeiro: {
    title: 'Visao financeira',
    stats: [
      ['Receita no mes','R$ 486 mil','+11,4%'],
      ['Prevista','R$ 628 mil','+8,2%'],
      ['Faturamento liquido','R$ 411 mil','+9,7%'],
      ['Carteira vencida','6,2%','-1,1 p.p.']
    ],
    head: ['Categoria','Valor','Meta','Status'],
    rows: [
      ['Receita mensal','R$ 486 mil','R$ 460 mil','Baixo risco'],
      ['Cobrança ativa','R$ 312 mil','R$ 300 mil','Em dia'],
      ['Despesas','R$ 176 mil','R$ 190 mil','Dentro do plano'],
      ['Indice de inadimplencia','6,2%','5,7%','Melhorando']
    ]
  },
  ranking: {
    title: 'Casos encerrados',
    stats: [
      ['Casos encerrados','124','+14%'],
      ['Media de tempo','16 dias','-2 dias'],
      ['Tempo medio de resolucao','21 dias','-4%'],
      ['Taxa de sucesso','91%','+5 p.p.']
    ],
    head: ['Caso','Area','Responsavel','Tempo','Status'],
    rows: [
      ['Consulta gesto','Civel','Marina Costa','12 dias','Concluido'],
      ['Acordo societario','Empresarial','Rafael Lima','18 dias','Concluido'],
      ['Revisao contratual','Tributario','Lucas Mendes','16 dias','Concluido'],
      ['Acao trabalhista','Trabalhista','Camila Rocha','19 dias','Concluido']
    ]
  },
  acoes: {
    title: 'Planos de acao',
    stats: [
      ['Itens ativos','24','+8%'],
      ['Concluidos','18','+6%'],
      ['Pendencias','6','-2'],
      ['Cobertura','86%','+4 p.p.']
    ],
    head: ['Item','Responsavel','Prazo','Status'],
    rows: [
      ['Plano de revisao','Marina Costa','18/09','Em andamento'],
      ['Auditoria mensal','Rafael Lima','21/09','Programado'],
      ['Follow-up clientes','Camila Rocha','23/09','Atencao'],
      ['Relatorio executivo','Lucas Mendes','30/09','Programado']
    ]
  },
  alertas: {
    title: 'Central de alertas',
    stats: [
      ['Alertas ativos','12','+2'],
      ['Criticos','4','-1'],
      ['Sem resposta','7','+3'],
      ['Ultima revisao','2h','agora']
    ],
    head: ['Alerta','Origem','Prazo','Status'],
    rows: [
      ['Cliente sem atualizacao','Grupo Horizonte','Hoje','Atencao'],
      ['Prazo de pagamento','Sede Financeira','Amanha','Critico'],
      ['Lead sem retorno','Fernanda Alves','48h','Pendente'],
      ['Caso com SLA fora','Nexus Tecnologia','Hoje','Urgente']
    ]
  }
};

const alerts = [
  ['7 tarefas atrasadas — Camila Rocha','5 vencidas ha mais de 48 horas'],
  ['Cliente sem atualizacao ha 21 dias','Grupo Horizonte · 4 processos ativos'],
  ['Lead sem contato ha 36 horas','Fernanda Alves · Empresarial']
];
const nav = document.querySelector('#main-nav');
const content = document.querySelector('#page-content');
const title = document.querySelector('#page-title');
const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
const mobileBackdrop = document.querySelector('#mobile-backdrop');
const filterDrawer = document.querySelector('#filter-drawer');
const closeFilterDrawer = document.querySelector('#close-filter-drawer');
const currentFilters = { risk: false, onTime: false, recent: false };
let currentPage = 'executivo';

navigation.forEach(([key, icon, label]) => {
  const button = document.createElement('button');
  button.className = 'nav-item';
  button.dataset.page = key;
  button.innerHTML = `<span class="nav-icon">${icon}</span><span>${label}</span>`;
  button.addEventListener('click', () => {
    render(key);
    setMobileMenuOpen(false);
  });
  nav.append(button);
});

function setMobileMenuOpen(open) {
  document.body.classList.toggle('mobile-nav-open', open);
  mobileMenuToggle.setAttribute('aria-expanded', String(open));
}

function toggleFilterDrawer(force) {
  const shouldOpen = typeof force === 'boolean' ? force : !filterDrawer.classList.contains('open');
  filterDrawer.classList.toggle('open', shouldOpen);
  filterDrawer.setAttribute('aria-hidden', String(!shouldOpen));
  mobileBackdrop.classList.toggle('visible', shouldOpen);
}

function badgeClassForValue(value) {
  const text = String(value).toLowerCase();
  if (text.includes('saudavel') || text.includes('programado') || text.includes('proposta') || text.includes('contato') || text.includes('qualificacao') || text.includes('em andamento') || text.includes('alto') || text.includes('ativo') || text.includes('excelente') || text.includes('concluido') || text.includes('baixo risco') || text.includes('em dia') || text.includes('dentro do plano')) return 'good';
  if (text.includes('atencao') || text.includes('negociacao') || text.includes('pendente') || text.includes('medio') || text.includes('urgente') || text.includes('melhorando')) return 'warn';
  if (text.includes('critico') || text.includes('perda') || text.includes('atras') || text.includes('requer') || text.includes('pendente') || text.includes('urgente')) return 'danger';
  return 'neutral';
}

function metricCards(stats) {
  return `<div class="metric-grid">${stats.map(([label, value, trend]) => {
    const trendClass = /↓|\-|[a-z]/i.test(String(trend)) ? 'down' : 'up';
    return `<article class="metric"><div class="metric-head"><span>${label}</span><span class="trend ${trendClass}">${trend}</span></div><strong>${value}</strong></article>`;
  }).join('')}</div>`;
}

function createMobileRows(data) {
  const statusIndex = data.head.length - 1;
  return `<div class="mobile-row-list">${data.rows.map((row) => {
    const status = row[statusIndex];
    const details = row.slice(1, statusIndex).map((value, index) => `<div><span>${data.head[index + 1]}</span><strong>${value}</strong></div>`).join('');
    return `<article class="mobile-row-item">
      <div class="mobile-row-top">
        <strong>${row[0]}</strong>
        <span class="pill ${badgeClassForValue(status)}">${status}</span>
      </div>
      <div class="mobile-row-meta">${details}</div>
    </article>`;
  }).join('')}</div>`;
}

function tablePage(data) {
  const isMobile = window.innerWidth <= 700;
  return `
    <div class="page-grid">
      ${metricCards(data.stats)}
      <section class="surface">
        <div class="surface-head">
          <div><p class="section-label">ACOMPANHAMENTO</p><h2>${data.title}</h2></div>
          <button class="link-button filter-button" data-open-filters="true">Filtros</button>
        </div>
        ${isMobile ? createMobileRows(data) : `
          <div class="table-wrap">
            <table>
              <thead>
                <tr>${data.head.map(item => `<th>${item}</th>`).join('')}</tr>
              </thead>
              <tbody>${data.rows.map(row => `<tr>${row.map((item, index) => {
                const cell = index === row.length - 1 ? `<span class="pill ${badgeClassForValue(item)}">${item}</span>` : item;
                return `<td>${cell}</td>`;
              }).join('')}</tr>`).join('')}</tbody>
            </table>
          </div>
        `}
      </section>
    </div>
  `;
}

function overview() {
  const insights = [
    ['SLA geral', '94,1%'],
    ['Receita do mes', 'R$ 486 mil'],
    ['Risco de atrasos', '12 itens']
  ];

  return `${metricCards([['Produtividade','87%','+6,2%'],['Prazos no SLA','94,1%','+1,8%'],['Casos encerrados','124','+14%'],['Leads em aberto','38','+9'],['Receita no mes','R$ 486 mil','+11,4%']])}<section class="exec-banner"><div class="exec-banner-copy"><p class="section-label">RESUMO EXECUTIVO</p><h2>Operacao com desempenho estável e margem em expansão.</h2></div><div class="exec-banner-metric"><span>Performance</span><strong>+18,4%</strong></div></section><div class="insight-row">${insights.map(([label, value]) => `<div class="insight-pill"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div><section class="focus-panel"><div class="focus-header"><span>FOCO DO DIA</span><button class="link-button" onclick="render('acoes')">Acompanhar →</button></div><div class="focus-grid"><div class="focus-card"><strong>4</strong><span>iniciativas</span></div><div class="focus-card"><strong>2</strong><span>prioridades críticas</span></div><div class="focus-card"><strong>86%</strong><span>conclusão esperada</span></div></div></section><section class="score-strip"><div class="score-item"><span>Retencao</span><strong>92%</strong></div><div class="score-item"><span>Conversao</span><strong>28%</strong></div><div class="score-item"><span>Cash flow</span><strong>R$ 1,3 mi</strong></div></section><section class="highlight-stack"><article class="highlight-card warm"><span>Monitoração</span><strong>+11,2%</strong><small>crescimento no trimestre</small></article><article class="highlight-card cool"><span>Oportunidades</span><strong>17</strong><small>novos leads qualificáveis</small></article></section><section class="operational-pulse"><div class="pulse-header"><div><p class="section-label">PULSE OPERACIONAL</p><h2>Indicadores-chave em movimento</h2></div><button class="link-button" onclick="render('equipes')">Ver painel →</button></div><div class="pulse-grid"><article class="pulse-item"><span class="pulse-tag success">+7,6%</span><strong>Retorno por cliente</strong><small>+R$ 45 mil em margem líquida</small></article><article class="pulse-item"><span class="pulse-tag warning">-2,3%</span><strong>Prazos críticos</strong><small>4 processos com revisão urgente</small></article><article class="pulse-item"><span class="pulse-tag neutral">+14%</span><strong>Novos leads</strong><small>17 oportunidades qualificadas</small></article></div></section><section class="performance-compare"><div class="compare-header"><div><p class="section-label">COMPARATIVO</p><h2>Desempenho por unidade</h2></div><span class="compare-badge">+18,4%</span></div><div class="compare-grid"><article class="compare-panel"><div class="compare-label-row"><span>Tributario</span><strong>92%</strong></div><div class="compare-track"><span style="width:92%"></span></div><small>Receita acumulada</small></article><article class="compare-panel"><div class="compare-label-row"><span>Trabalhista</span><strong>88%</strong></div><div class="compare-track"><span style="width:88%"></span></div><small>Fechamento em prazo</small></article><article class="compare-panel"><div class="compare-label-row"><span>Civel</span><strong>95%</strong></div><div class="compare-track"><span style="width:95%"></span></div><small>Produtividade média</small></article></div></section><section class="priority-board"><div class="priority-header"><div><p class="section-label">PRIORIDADES</p><h2>Plano de ação</h2></div><button class="link-button" onclick="render('acoes')">Abrir plano →</button></div><div class="priority-grid"><article class="priority-card danger"><span class="priority-tag">Atenção</span><strong>Corporate Review</strong><small>Revisar termos de cobrança e SLA</small></article><article class="priority-card warning"><span class="priority-tag">Em curso</span><strong>Novos contratos</strong><small>Quatro propostas em garantia</small></article><article class="priority-card good"><span class="priority-tag">Baixo risco</span><strong>Clientes ativos</strong><small>Retenção acima da meta</small></article></div></section><section class="operational-pulse"><div class="pulse-header"><div><p class="section-label">ALERTAS</p><h2>Itens que exigem atenção</h2></div><button class="link-button" onclick="render('alertas')">Ver central →</button></div>${alerts.map(([title, detail]) => `<button class="alert"><strong>${title}</strong><span>${detail}</span></button>`).join('')}</section></div>`;
}

function matchesFilters(rowText) {
  const query = document.querySelector('#global-search')?.value.trim().toLowerCase() || '';
  const labelText = rowText.toLowerCase();
  if (query && !labelText.includes(query)) return false;
  if (currentFilters.risk && !/atencao|perda|atras|critico|riesgo|pendente|requer|urgente/.test(labelText)) return false;
  if (currentFilters.onTime && !/saudavel|programado|proposta|contato|qualificacao|em andamento|ativo|excelente|prazo|concluido|em dia|dentro do plano/.test(labelText)) return false;
  if (currentFilters.recent && !/ha 2 dias|ha 5 dias|ha 8 dias|hoje|recent|novo|atual|agora/.test(labelText)) return false;
  return true;
}

function filterVisibleRows(query) {
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach((row) => {
    const matches = matchesFilters(row.textContent);
    row.hidden = !matches || !!(query && !row.textContent.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  });
}

function render(page) {
  currentPage = page;
  const item = navigation.find(([key]) => key === page);
  title.textContent = item[2];
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.page === page));
  content.innerHTML = page === 'executivo' ? overview() : pageData[page] ? tablePage(pageData[page]) : tablePage({title:item[2],stats:[['Itens ativos','24','+8%'],['Concluidos','18','+6%'],['Pendencias','6','-2'],['Cobertura','86%','+4 p.p.']],head:['Item','Responsavel','Prazo','Status'],rows:[['Plano de revisao','Marina Costa','18/09','Em andamento'],['Auditoria mensal','Rafael Lima','21/09','Programado'],['Follow-up clientes','Camila Rocha','23/09','Atencao'],['Relatorio executivo','Lucas Mendes','30/09','Programado']]});
  bindFilterControls();
}

function bindFilterControls() {
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => toggleFilterDrawer(true));
  });
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2600);
}

document.querySelector('#global-search').addEventListener('input', event => {
  const query = event.target.value.trim();
  if (window.innerWidth <= 700) {
    const activeRows = document.querySelectorAll('.mobile-row-item');
    activeRows.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.hidden = !!query && !text.includes(query.toLowerCase());
    });
    return;
  }
  filterVisibleRows(query);
});

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    document.querySelector('#global-search').focus();
  }
});

document.querySelector('#refresh-button').addEventListener('click', event => {
  event.currentTarget.classList.add('spinning');
  document.querySelector('#last-sync').textContent = 'Atualizado agora';
  showToast('Dados demonstrativos atualizados');
  setTimeout(() => event.currentTarget.classList.remove('spinning'), 450);
});

document.querySelector('#export-button').addEventListener('click', () => {
  const payload = { projeto: 'MCK Intelligence', geradoEm: new Date().toISOString(), dados: pageData };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mck-dados.json';
  link.click();
  URL.revokeObjectURL(url);
  showToast('Exportacao JSON iniciada');
});

const themeButton = document.querySelector('#theme-button');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeButton.textContent = isDark ? '☀' : '☼';
  themeButton.title = isDark ? 'Ativar modo claro' : 'Alternar tema';
  showToast(isDark ? 'Modo escuro ativado' : 'Modo claro ativado');
});

mobileMenuToggle.addEventListener('click', () => {
  setMobileMenuOpen(!document.body.classList.contains('mobile-nav-open'));
});

mobileBackdrop.addEventListener('click', () => {
  setMobileMenuOpen(false);
  toggleFilterDrawer(false);
});

closeFilterDrawer.addEventListener('click', () => toggleFilterDrawer(false));

document.querySelectorAll('input[data-filter]').forEach((input) => {
  input.addEventListener('change', (event) => {
    const key = event.target.dataset.filter;
    currentFilters[key] = event.target.checked;
    showToast(currentFilters[key] ? 'Filtro aplicado' : 'Filtro removido');
    const query = document.querySelector('#global-search')?.value.trim() || '';
    if (window.innerWidth <= 700) {
      document.querySelectorAll('.mobile-row-item').forEach((item) => {
        const text = item.textContent.toLowerCase();
        const matches = !query || text.includes(query.toLowerCase());
        const riskMatch = !currentFilters.risk || /atencao|perda|atras|critico|riesgo|pendente|requer|urgente/.test(text);
        const onTimeMatch = !currentFilters.onTime || /saudavel|programado|proposta|contato|qualificacao|em andamento|ativo|excelente|prazo|concluido|em dia|dentro do plano/.test(text);
        const recentMatch = !currentFilters.recent || /ha 2 dias|ha 5 dias|ha 8 dias|hoje|recent|novo|atual|agora/.test(text);
        item.hidden = !(matches && riskMatch && onTimeMatch && recentMatch);
      });
      return;
    }
    filterVisibleRows(query);
  });
});

document.querySelector('#clear-filters').addEventListener('click', () => {
  currentFilters.risk = false;
  currentFilters.onTime = false;
  currentFilters.recent = false;
  document.querySelectorAll('input[data-filter]').forEach((input) => { input.checked = false; });
  toggleFilterDrawer(false);
  showToast('Filtros limpos');
  const query = document.querySelector('#global-search')?.value.trim() || '';
  if (window.innerWidth <= 700) {
    document.querySelectorAll('.mobile-row-item').forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.hidden = !!query && !text.includes(query.toLowerCase());
    });
    return;
  }
  filterVisibleRows(query);
});

window.addEventListener('resize', () => {
  if (content.innerHTML) render(currentPage);
  if (window.innerWidth > 900) setMobileMenuOpen(false);
});

render('executivo');
