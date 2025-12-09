---
layout: default
title: "Ob Session"
permalink: /ob-session/
---

<!-- 🌊 FlowSense: Landing Ob Session - 09/12/2025 -->
<!-- Tutte le sessioni operative documentate cross-section -->

# Ob Session

Sessioni operative documentate di Log_Puck: collaborazioni, esperimenti, validazioni.

Ogni Ob Session è valutata con **fIGA** (Function of Integrated Grid Assessment), che misura la qualità complessiva della registrazione archivistica su scala 0-100.

---

{% if site.ob-session.size > 0 %}
{% for post in site.ob-session reversed %}
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
