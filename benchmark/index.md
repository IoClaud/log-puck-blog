---
layout: default
title: "Benchmark"
permalink: /benchmark/
---

<!-- 🌊 FlowSense: Landing Benchmark - 09/12/2025 -->
<!-- Sezione test strutturati e comparazioni side-by-side -->

# Benchmark

Test comparativi strutturati tra AI: stessi prompt, risultati side-by-side, metriche PCK, osservazioni sul tremore.

---

## Contenuti

{% if site.benchmark.size > 0 %}
{% for post in site.benchmark reversed %}
### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.ai_models | join: " vs " }} · fIGA {{ post.pck.figa }}/100  
{{ post.date | date: "%d %B %Y" }}

{{ post.excerpt }}

---
{% endfor %}
{% else %}
<p style="color: var(--text-secondary); font-style: italic;">
Nessun benchmark pubblicato ancora. I primi test strutturati arriveranno presto.
</p>
{% endif %}

---

<p style="text-align: center;">
  <a href="{{ '/ob-session/' | relative_url }}">← Tutte le Ob Session</a> | 
  <a href="{{ '/' | relative_url }}">Home</a>
</p>
