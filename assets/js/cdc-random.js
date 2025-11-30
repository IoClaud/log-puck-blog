document.addEventListener("DOMContentLoaded", () => {
  const hub = document.querySelector('[data-type="cdc-random-hub"]');
  if (!hub) return;

  const pool = [
    { url: "/rami/diario-ricerca/", label: "Diario di ricerca" },
    { url: "/rami/vocabolario-vivo/", label: "Vocabolario vivo" },
    { url: "/rami/casi-studio/", label: "Casi studio" },
    { url: "/flusso-dna/", label: "Flusso del DNA cognitivo" },
    { url: "/archivio-mu/", label: "Archivio Mū / Negativo" }
  ];

  const shuffled = pool.sort(() => 0.5 - Math.random());
  const chosen = shuffled.slice(0, 3);

  const list = hub.querySelector("ul");
  if (!list) return;
  list.innerHTML = "";

  chosen.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.label;
    li.appendChild(a);
    list.appendChild(li);
  });
});
