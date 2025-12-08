---
layout: default
title: "Ob Session"
permalink: /ob-session/
---

# Ob Session

Tutte le sessioni operative documentate di Log_Puck.

---

{% for post in site.ob-session reversed %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.ai.name }} ({{ post.ai.persona }}) · fIGA {{ post.pck.figa }}/100  
{{ post.date | date: "%d %B %Y" }} · {{ post.ct }}

{{ post.excerpt }}

---
{% endfor %}
