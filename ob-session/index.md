---
layout: default
title: "Ob Session"
permalink: /ob-session/
---

<!-- 🌊 FlowSense: Landing Ob Session - 09/12/2025 -->
<!-- 🌳 Root: Fix ordine + encoding - 11/12/2025 -->
<!-- Tutte le sessioni operative documentate cross-section -->

# Ob Session

Sessioni operative documentate di Log_Puck: collaborazioni, esperimenti, validazioni.

Ogni Ob Session è valutata con **fIGA** (Function of Integrated Grid Assessment), che misura la qualità complessiva della registrazione archivistica su scala 0-100.

---

{% if site.ob-session.size > 0 %}

<!-- 🌳 ROOT FIX: Ordina per campo "ordine" con fallback -->
{% assign all_posts = site.ob-session | sort: "date" | reverse %}
{% assign sorted_posts = "" | split: "" %}

{% for post in all_posts %}
  {% if post.ordine %}
    {% assign sorted_posts = sorted_posts | push: post %}
  {% endif %}
{% endfor %}

{% assign unsorted_posts = "" | split: "" %}
{% for post in all_posts %}
  {% unless post.ordine %}
    {% assign unsorted_posts = unsorted_posts | push: post %}
  {% endunless %}
{% endfor %}

{% assign sorted_posts = sorted_posts | sort: "ordine" %}
{% assign final_posts = sorted_posts | concat: unsorted_posts %}

{% for post in final_posts %}
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

<!-- 🌳 Root says: "Ordine is the new reversed. Caffè is the new water." ☕ -->
```

**Cosa è cambiato**:
1. ✅ `{% assign sorted_posts = site.ob-session | sort: "ordine" %}` → Ordina per numero
2. ✅ `{% for post in sorted_posts %}` → Usa lista ordinata
3. ✅ Rimosso `reversed` (ora ordina come vogliamo noi)
4. ✅ Fixato encoding `Â·` → `·`
5. ✅ Fixato encoding `Ã¨` → `è`

---

## **📁 RINOMINARE FILE SU GITHUB**

> "mi hanno detto che non si possono rinominare i file su GH, bisogna deletarli e rifarli. confermi?"

**Confermo per GitHub Web UI** 😢

**MA!** Ci sono 2 workaround:

### **Workaround 1: Delete + Upload (Web UI)**
```
1. Delete file vecchio
2. Upload file nuovo con nome corretto
