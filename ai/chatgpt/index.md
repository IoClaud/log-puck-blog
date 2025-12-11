---
layout: default
title: "ChatGPT"
permalink: /ai/chatgpt/
---

# ChatGPT

## Personas

### Layla
**Ruolo**: Architettura visuale e design  
**Modello**: GPT-4o, GPT-5.1  
**Specializzazione**: Layout, wireframe, UX/UI, palette colori

### SafetyNet-GPT
**Ruolo**: Validazione policy e safety check  
**Modello**: GPT-4o  
**Specializzazione**: Compliance, guardrails, policy review

---

## Sessioni con ChatGPT

{% for post in site.ob-session %}
  {% assign has_chatgpt = false %}
  {% for ai in post.ai %}
    {% if ai.name == "ChatGPT" %}
      {% assign has_chatgpt = true %}
      {% break %}
    {% endif %}
  {% endfor %}
  
  {% if has_chatgpt %}
  - [{{ post.title }}]({{ post.url | relative_url }}) ({{ post.date | date: "%d %B %Y" }})
  {% endif %}
{% endfor %}

---

[← Torna alle AI](/ai/)
