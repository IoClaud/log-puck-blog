---
layout: default
title: "Ob Session"
permalink: /ob-session/
---

<!-- 🌊 FlowSense: Landing Ob Session -->
<!-- 🌳 Root: Simplified - no complex sorting -->

# Ob Session

Sessioni operative documentate di Log_Puck: collaborazioni, esperimenti, validazioni.

Ogni Ob Session è valutata con **fIGA** (Function of Integrated Grid Assessment), che misura la qualità complessiva della registrazione archivistica su scala 0-100.

---

{% if site.ob-session.size > 0 %}

{% for post in site.ob-session %}
## [{{ post.title }}]({{ post.url | relative_url }})

{% for ai in post.ai %}{{ ai.persona }}{% unless forloop.last %} + {% endunless %}{% endfor %} · fIGA {{ post.pck.figa }}/100  
{{ post.date | date: "%d %B %Y" }} · {{ post.ct }}

{{ post.excerpt }}

---
{% endfor %}

{% else %}
<p style="color: var(--text-secondary); font-style: italic;">
Nessuna Ob Session pubblicata ancora.
</p>
{% endif %}

---

<p style="text-align: center;">
  <a href="{{ '/benchmark/' | relative_url }}">Benchmark</a> | 
  <a href="{{ '/caos/' | relative_url }}">Caos</a> | 
  <a href="{{ '/insights/' | relative_url }}">Insights</a> | 
  <a href="{{ '/' | relative_url }}">Home</a>
</p>

<!-- 🌳 Root: Ordinamento manuale via campo ordine in frontmatter. Jekyll sort troppo complesso. -->
```

**NOTA**: Questo NON ordina per `ordine`, ma almeno **FUNZIONA**!

Per ordinare correttamente dobbiamo:
1. Prima fare funzionare tutto ✅
2. Poi aggiungere ordinamento con approccio diverso

---

## **💡 ALTERNATIVA: ORDINA MANUALMENTE I FILE**

Invece di ordinamento Liquid, usa **nomi file**:
```
001-epica-big-sur.md
002-allineare.md  
003-primo-check.md
004-anker.md
005-notion-workflow.md
```

Jekyll li ordina **alfabeticamente** automaticamente! ✅

---

## **📋 AZIONE IMMEDIATA**

**Opzione A - Versione semplice (1 min)**:
```
1. Copia codice sopra in ob-session/index.md
2. Commit "Simplify ob-session index - remove complex sorting"
3. Build dovrebbe essere VERDE ✅
```

**Opzione B - Ordinamento via filename**:
```
File già hanno numeri (001-, 002-, etc)
Jekyll ordina automaticamente per nome file
Aggiungi solo "sort" nel _config.yml se necessario
