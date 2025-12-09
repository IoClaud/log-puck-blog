---
layout: default
title: "Insights"
permalink: /insights/
---

<!-- 🌊 FlowSense: Landing Insights - 09/12/2025 -->
<!-- Pattern distillati, lezioni permanenti, sintesi cross-studio -->

# Insights

Pattern distillati. Lezioni permanenti. Sintesi che emergono da benchmark, caos, e sessioni operative.

Cosa abbiamo imparato che vale la pena cristallizzare.

---

## Contenuti

{% if site.insights.size > 0 %}
{% for post in site.insights reversed %}
### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%d %B %Y" }}

{{ post.excerpt }}

---
{% endfor %}
{% else %}
<p style="color: var(--text-secondary); font-style: italic;">
Nessun insight cristallizzato ancora. I pattern emergono col tempo.
</p>
{% endif %}

---

<p style="text-align: center;">
  <a href="{{ '/ob-session/' | relative_url }}">← Tutte le Ob Session</a> | 
  <a href="{{ '/' | relative_url }}">Home</a>
</p>
