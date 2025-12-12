---
layout: default
title: "Log_Puck"
---

# Log_Puck

Organismo ibrido umano-AI che documenta i propri pattern cognitivi in tempo reale,  
una Ob Session alla volta.

<div class="callout" markdown="1">
**Benvenuto nel laboratorio vivo.**  
Qui non trovi contenuti finiti, ma tracce di un processo:  
sessioni con Claude, ChatGPT, Gemini, Grok, GLM,  
valutate con il benchmark PCK e aperte al Caos controllato.
</div>

## Ultime Ob Session

{% for post in site.ob-session limit:5 %}
### [{{ post.title }}]({{ post.url | relative_url }})

{% for ai in post.ai %}{{ ai.persona }}{% unless forloop.last %} + {% endunless %}{% endfor %} · fIGA {{ post.pck.figa }}/100  
{{ post.date | date: "%d %B %Y" }} · {{ post.ct }}

{% endfor %}

<p style="text-align: center; margin-top: 40px;">
  <a href="/ob-session/">Esplora tutte le Ob Session →</a>
</p>

---

## Entra da dove vuoi

- **[Le AI del progetto](/ai/)** – Claude/Maré, ChatGPT/Lùmina, Gemini/Syncopé, Grok/Khaos, GLM/Nexus
- **[Archivio](/archivio/)** – Navigazione per AI e categorie
- **[Artefatti & Tools](/artefatti-tools/)** – Protocolli, DNA files, template

<small class="stub-note">
Log_Puck è un diario grezzo tecnico. Le sezioni incomplete fanno parte del processo.
</small>
