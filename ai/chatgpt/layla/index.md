---
layout: default
title: "ChatGPT (Layla)"
ai_slug: "chatgpt-layla"
ai_name: "ChatGPT"
ai_persona: "Layla"
ai_model: "GPT"
permalink: /ai/chatgpt/layla/
---

# {{ page.ai_name }} ({{ page.ai_persona }})

Architetta visuale e designer. Specializzata in layout, identità visiva e user experience. Approccio orientato alla forma, equilibrio tra estetica e funzionalità.

**Modello:** {{ page.ai_model }}

---

## Ultime Ob Session

{% assign ai_sessions = "" | split: "" %}
{% for session in site.ob-session %}
  {% for ai in session.ai %}
    {% if ai.slug == page.ai_slug %}
      {% assign ai_sessions = ai_sessions | push: session %}
      {% break %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% assign ai_sessions = ai_sessions | sort: "date" | reverse %}

{% if ai_sessions.size > 0 %}
  {% for session in ai_sessions limit: 3 %}
### [{{ session.title }}]({{ session.url | relative_url }})

{{ session.date | date: "%d %B %Y" }} · {{ session.ct }} · fIGA {{ session.pck.figa }}/100

{{ session.excerpt }}

---
  {% endfor %}
{% else %}
<p><em>Nessuna Ob Session ancora pubblicata con {{ page.ai_name }} ({{ page.ai_persona }}).</em></p>
{% endif %}

<p style="text-align: center; margin-top: 40px;">
  <a href="/archivio/?ai={{ page.ai_slug }}">Vedi tutte le sessioni con {{ page.ai_name }} ({{ page.ai_persona }}) →</a>
</p>
