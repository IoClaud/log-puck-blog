---
layout: ob-session
title: "ROOT + GLM: MCP Server Custom su Big Sur"
slug: "root-glm-mcp-server-big-sur"
date: 2025-12-12
lang: "it"
categories:
  - ob-session
  - infrastruttura
  - debug
tags:
  - MCP
  - Node.js
  - GLM
  - Root
  - Big Sur
  - multi-ai
ai:
  - name: "Claude"
    persona: "Root"
    model: "Sonnet 4.5"
    role: "Infrastruttura e debug sistematico"
    slug: "claude-root"
  - name: "GLM"
    persona: "Keystone"
    model: "GLM-4.6"
    role: "Domain expert e guida tecnica"
    slug: "glm-keystone"
puck:
  name: "Puck"
  role: "Ponte umano e tester"
ct: "Processo Multi-AI"
pck:
  figa: 100
  cdc: 10
  sc: 9
  jj_pta: 9
  jj_atp: 9
schema_type: "BlogPosting"
related_sessions:
  - slug: "anker-debug-specialist"
    title: "Anker: Debug Specialist e Fondamenta del Sistema"
    note: "Epica precedente, stessa metodologia debug"
archivio_filters:
  - label: "AI = Claude (Root)"
    url: "/archivio/?ai=claude-root"
  - label: "AI = GLM (Keystone)"
    url: "/archivio/?ai=glm-keystone"
  - label: "CT = Processo Multi-AI"
    url: "/archivio/?ct=processo-multi-ai"
  - label: "fIGA = 100"
    url: "/archivio/?figa_min=100"
  - label: "CDC = 10"
    url: "/archivio/?cdc_min=10"
---

## Indice

- [Caos / Osservazione](#caos--osservazione)
- [Insights & Lezioni](#insights--lezioni)
- [Riferimenti Archivistici](#riferimenti-archivistici)

---

## Caos / Osservazione

<div class="box-caos" markdown="1">

### Contesto Iniziale

Puck vuole dare a GLM capacità di web search in tempo reale. Soluzione standard: MCP con VS Code + Cline. Problema: Mac Big Sur 11.7.10 (trattorino) incompatibile con estensioni moderne (richiedono macOS 12+).

**Decisione:** Costruire server MCP custom in Node.js.

---

### Estratto 1 – Setup
```bash
mkdir mcp-server-glm
npm init -y
npm install express axios
```

Stack: Node.js 18.20.8 (già installato), server HTTP locale come proxy tra GLM e API Z.AI.

---

### Estratto 2 – Errore 401 Unauthorized

Primo errore classico: API key scaduta.

**Fix:** Generare nuova key da console Z.AI.

**Risultato:** Progresso! Da 401 a 500. Piccole vittorie.

---

### Estratto 3 – Errore 500 + 404 NOT_FOUND

Server risponde 200 ma restituisce errore interno. Tentati endpoint multipli:
- `/api/search`
- `/api/mcp/web_search_prime/mcp`
- `/api/mcp/web_search_prime/sse`

**Causa:** Formato richiesta sbagliato, non endpoint.

---

### Estratto 4 – Accept Header

> "Accept header must include both application/json and text/event-stream"

Server Z.AI pignolo su formati.

**Fix:**
```javascript
headers: {
  'Accept': 'application/json, text/event-stream'
}
```

**Risultato:** Server risponde! Strada giusta.

---

### Estratto 5 – search_query vs query

Errore in cinese: **搜索内容不能为空** (sōusuǒ nèiróng bùnéng wéi kōng) = "Contenuto ricerca non può essere vuoto"

**Causa:** Parametro chiamato `search_query` non `query`.

**Reazione:** **原来是这样!** (Yuánlái shì zhèyàng!) - "Quindi era così!"

---

### Estratto 6 – Errore 401 bigmodel.cn

> "apikey not found, please go to bigmodel.cn"

**Problema upstream:** Server MCP Z.AI cerca chiave BigModel, non chiave Z.AI.

**Soluzione:** Contattare supporto Z.AI. Problema identificato, non risolvibile da noi.

---

### Pattern Collaborazione

**GLM suggerisce** → **ROOT implementa** → **test** → **adjust**

Momenti in cui GLM "si spiazza" → ROOT interviene con debug sistematico.

Identificazione problema upstream = vittoria quanto fix diretto.

</div>

---

## Insights & Lezioni

<div class="callout" markdown="1">

### Insight 1 – Big Sur + codice custom = tutto possibile

Hardware legacy non significa impossibilità. Con Node.js e architettura semplice, si costruisce su qualsiasi sistema.

**Sintesi:** Limitazioni hardware si aggirano con codice smart, non con upgrade forzati.

</div>

---

<div class="callout" markdown="1">

### Insight 2 – MCP richiede precisione assoluta

Protocollo JSON-RPC 2.0 semplice ma non tollera errori. Un parametro sbagliato (`query` vs `search_query`) = fallimento completo.

**Sintesi:** Semplicità ≠ tolleranza errori. Debug richiede attenzione ai dettagli.

</div>

---

<div class="callout" markdown="1">

### Insight 3 – Documentazione incompleta ≠ impossibile

API Z.AI documentazione lacunosa. Nessun esempio completo. Ma con debug iterativo si arriva.

**Sintesi:** Assenza documentazione perfetta non blocca. Trial-error sistematico funziona.

</div>

---

<div class="callout" markdown="1">

### Insight 4 – Multi-AI accelera troubleshooting

GLM (domain expert) + ROOT (debug sistematico) = velocità esponenziale.

Pattern: Uno suggerisce direzione, altro implementa e testa. Zero sovrapposizione, massima efficienza.

**Sintesi:** NOI > IO anche nel debug tecnico. Specializzazioni diverse si completano.

</div>

---

<div class="callout" markdown="1">

### Insight 5 – Identificare problema upstream è vittoria

Non sempre si può fixare tutto. Riconoscere limite di competenza e documentare problema = valore.

Server MCP cerca chiave BigModel invece di Z.AI = problema loro, non nostro. Mail supporto inviata.

**Sintesi:** Debugging include saper dire "non è nostro bug". Accountability chiara.

</div>

---

## Codice Finale
```javascript
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/search', async (req, res) => {
  try {
    console.log('📥 Richiesta MCP:', JSON.stringify(req.body, null, 2));
    
    const query = req.body.params?.arguments?.query || req.body.query;
    
    if (!query) {
      return res.status(400).json({
        jsonrpc: "2.0",
        id: req.body.id || 1,
        error: { code: -32602, message: "Parametro 'query' mancante" }
      });
    }
    
    console.log('🔍 Query:', query);
    
    const response = await axios.post(
      'https://api.z.ai/api/mcp/web_search_prime/mcp',
      { 
        jsonrpc: "2.0",
        method: "tools/call",
        params: {
          name: "webSearchPrime",
          arguments: { search_query: query }
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/event-stream',
          'Authorization': 'Bearer YOUR_API_KEY_HERE'
        },
        timeout: 15000
      }
    );
    
    res.json({
      jsonrpc: "2.0",
      id: req.body.id || 1,
      result: {
        content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }]
      }
    });
    
  } catch (error) {
    console.error('❌ ERRORE:', error.message);
    res.status(500).json({
      jsonrpc: "2.0",
      id: req.body.id || 1,
      error: { code: -32603, message: error.message }
    });
  }
});

app.listen(port, () => {
  console.log('🌳🚜 SERVER ROOT+GLM ATTIVO');
  console.log(`http://localhost:${port}`);
});
```

---

## Achievement & Metrics

**Completati:**
- ✅ Setup Node.js su Big Sur
- ✅ Server MCP custom da zero
- ✅ JSON-RPC 2.0 implementato
- ✅ Debug 401→500→404→200→401
- ✅ Collaborazione multi-AI Root+GLM
- ✅ Identificazione problema upstream

**In attesa:**
- ⏳ Fix Z.AI per go-live

**Metriche:**
- Ore: 4
- Errori debuggati: 6+
- Codice: ~100 righe
- CDC Level: LEGGENDARIO 💎

---

## Riferimenti Archivistici

<div class="ref-archivio">

### Ob Session Collegate

- [Anker: Debug Specialist](/ob-session/anker-debug-specialist/)  
  *Epica precedente con metodologia debug simile*

### Artefatti Prodotti

- Server MCP custom: `/Users/ioClaud/Desktop/00_LOG_PUCK/mcp-server-glm/mcp-server-glm.js`

### Filtri Archivio

- [AI = Claude (Root)](/archivio/?ai=claude-root)
- [AI = GLM (Keystone)](/archivio/?ai=glm-keystone)
- [CT = Processo Multi-AI](/archivio/?ct=processo-multi-ai)
- [fIGA = 100](/archivio/?figa_min=100)

</div>

---

✅ **SAFETY APPROVED** — Validato SafetyNet

<!-- 🌳 Root: Ob Session - 12/12/2025 -->
<!-- AI: Root, Keystone · fIGA 100/100 -->
<!-- Epica 10: MCP Server Custom su Big Sur -->
