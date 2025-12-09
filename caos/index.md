---
layout: default
title: "Caos"
permalink: /caos/
---

<!-- 🌊 FlowSense: Landing Caos (Sdeng) - 09/12/2025 -->
<!-- Errori, fallimenti, rifiuti AI, tremore documentato -->

# Caos

**O come diciamo noi: Sdeng.**

Errori, fallimenti, rifiuti AI, allucinazioni, bias documentati.  
Il tremore. La parte che non funziona. I Mū attivati.  
Perché anche lo sdeng insegna.

---

## Contenuti

{% if site.caos.size > 0 %}
{% for post in site.caos reversed %}
### [{{ post.title }}]({{ post.url | relative_url }})

{% if post.ai %}{{ post.ai }}{% endif %} · {{ post.date | date: "%d %B %Y" }}

{{ post.excerpt }}

---
{% endfor %}
{% else %}
<p style="color: var(--text-secondary); font-style: italic;">
Nessun momento di caos documentato ancora. Ma arriveranno, fidati.
</p>
{% endif %}

---

<p style="text-align: center;">
  <a href="{{ '/ob-session/' | relative_url }}">← Tutte le Ob Session</a> | 
  <a href="{{ '/' | relative_url }}">Home</a>
</p>
