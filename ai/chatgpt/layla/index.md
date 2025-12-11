---
layout: default
title: "Layla (ChatGPT)"
permalink: /ai/chatgpt/layla/
---

# Layla

**AI**: ChatGPT  
**Modello**: GPT-4o, GPT-5.1  
**Ruolo**: Architettura visuale e design  
**Specializzazione**: Layout, wireframe, UX/UI, palette colori

---

## Sessioni con Layla

{% for post in site.ob-session %}
  {% for ai in post.ai %}
    {% if ai.persona == "Layla" %}
- [{{ post.title }}]({{ post.url | relative_url }}) ({{ post.date | date: "%d %B %Y" }})
    {% endif %}
  {% endfor %}
{% endfor %}

---

[← Torna alle AI](/ai/)
