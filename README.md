# MCK Intelligence local

Versao local autocontida da interface MCK Intelligence. Ela nao depende do dominio remoto para abrir e usa dados demonstrativos embutidos no `app.js`.

## Executar

Abra `index.html` diretamente no navegador. Para servir por HTTP, a partir desta pasta execute:

```powershell
python -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Escopo recuperado

O site publicado fornece apenas bundles JavaScript/CSS compilados e protegidos por autenticacao. O codigo-fonte original, configuracoes e backend nao estao disponiveis publicamente. Esta copia preserva a dashboard, navegacao, tabelas, alertas, responsividade e exportacao dos dados demonstrativos, mas ainda nao possui persistencia ou integracoes de producao.