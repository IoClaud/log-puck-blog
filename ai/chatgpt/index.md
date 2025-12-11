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
```

**Commit**: "Fix ChatGPT index syntax"

---

## **🔍 DEBUG VELA MANCANTE**

> "ho controllato ma vela c'è"

**Ok, allora il problema è nello script export!**

**Puoi passarmi**:
1. Screenshot campi AI su Notion per articolo "Allineare"
2. O il file `002-allineare-due-ai-layout.md` generato (primi 50 righe)

Così vedo se script legge correttamente i campi AI da Notion.

---

## **💾 DUPLICATO PHANTOM**

> "l'ho cancellato da GH ma me lo da ancora"

**NORMALE!** È cache. Dopo che build diventa verde ✅, il duplicato sparirà automaticamente entro 2-3 minuti.

Il log conferma: solo 5 file letti (001, 002, 003, 004, 005) → Duplicato NON c'è più nel repo! ✅

---

## **📋 CHECKLIST FINALE**
```
☐ 1. Fix ai/chatgpt/index.md (copia versione sopra)
☐ 2. Commit + wait 1-2 min
☐ 3. Check build → Dovrebbe diventare VERDE ✅
☐ 4. Duplicato sparirà automaticamente
☐ 5. Debug Vela (passami file 002 o screenshot Notion)
