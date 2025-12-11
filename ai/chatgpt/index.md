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

{% assign chatgpt_sessions = site.ob-session | where_exp: "post", "post.ai contains 'chatgpt'" %}

{% if chatgpt_sessions.size > 0 %}
<ul>
{% for post in chatgpt_sessions %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> ({{ post.date | date: "%d %B %Y" }})</li>
{% endfor %}
</ul>
{% else %}
<p>Nessuna sessione ancora.</p>
{% endif %}

---

[← Torna alle AI](/ai/)
