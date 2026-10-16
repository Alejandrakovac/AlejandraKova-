/* ════════════════════════════════════════════════════════════
   CONFIGURACIÓN
   MODO_EDICION: true muestra los espacios pendientes y el selector de modo.
   Antes de publicar el sitio, cambiar a false.
   ════════════════════════════════════════════════════════════ */
const MODO_EDICION = false;

/* MI TIERRA — una entrada por obra. Campos vacíos no se muestran en la versión pública. */
const OBRAS = [
  {
    titulo: "Tajamar",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "145 × 85 cm",
    foto: { src: "img/obra-tajamar.jpg", alt: "Tajamar, obra en fieltro de lana en marrón, gris, crudo y negro, enmarcada" },
    detalles: []
  },
  {
    titulo: "Amanecer en Anjullón",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "147 × 65 cm",
    escala: 0.77,   // la foto está más cerrada: se reduce para que la obra se vea a la misma escala que Tajamar
    foto: { src: "img/obra-amanecer-en-anjullon.jpg", alt: "Amanecer en Anjullón, obra en fieltro con formas en azul, verde, crudo y negro" },
    detalles: []
  },
  {
    titulo: "Sombras del eco",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "100 × 55 cm",
    formato: "horizontal",
    foto: { src: "img/obra-sombras-del-eco.jpg", alt: "Sombras del eco, obra horizontal en fieltro con formas en negro, gris, marrón y crudo" },
    detalles: []
  },
  {
    titulo: "Llama al sol",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "110 × 56 cm",
    escala: 0.72,   // según sus medidas, a la misma escala que las demás obras verticales
    foto: { src: "img/obra-llama-al-sol.jpg", alt: "Llama al sol, obra en fieltro con formas en gris, negro y amarillo mostaza" },
    detalles: []
  },
  {
    titulo: "Cuenca",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "110 × 57 cm",
    formato: "horizontal",
    foto: { src: "img/obra-cuenca.jpg", alt: "Cuenca, obra horizontal en fieltro con formas en negro, grises y crudo" },
    detalles: []
  },
  {
    titulo: "Tarde en la finca",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "150 × 60 cm",
    escala: 0.8,   // según sus medidas, a la misma escala que las demás obras verticales
    foto: { src: "img/obra-tarde-en-la-finca.jpg", alt: "Tarde en la finca, obra vertical en fieltro con formas en negro, crudo, gris y verde agua" },
    detalles: []
  },
  {
    titulo: "Eco de roca",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "105 × 97 cm",
    formato: "horizontal",
    foto: { src: "img/obra-eco-de-roca.jpg", alt: "Eco de roca, obra en fieltro con una forma negra sobre fondo crudo y un detalle marrón" },
    detalles: []
  },
  {
    titulo: "Cuesta de Miranda",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "54 × 95 cm",
    formato: "horizontal",
    foto: { src: "img/obra-cuesta-de-miranda.jpg", alt: "Cuesta de Miranda, obra en fieltro con formas orgánicas en negro, gris y crudo" },
    detalles: []
  },
  {
    titulo: "Talampaya",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "110 × 58 cm",
    formato: "horizontal",
    foto: { src: "img/obra-talampaya.jpg", alt: "Talampaya, obra en fieltro con planos en crudo, gris y negro y un círculo oscuro" },
    detalles: []
  },
  {
    titulo: "Sanagasta",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "107 × 70 cm",
    formato: "horizontal",
    foto: { src: "img/obra-sanagasta.jpg", alt: "Sanagasta, obra en fieltro con formas en crudo, gris, marrón y negro" },
    detalles: []
  },
  {
    titulo: "Cueva",
    tecnica: "Fieltro húmedo",
    materiales: "Lana merino",
    medidas: "95 × 55 cm",
    formato: "horizontal",
    foto: { src: "img/obra-cueva.jpg", alt: "Cueva, obra en fieltro con una forma central en gris, beige y crudo sobre fondo oscuro" },
    detalles: []
  },
  {
    titulo: "Yasper",
    tecnica: "Fieltro húmedo · díptico",
    materiales: "Lana merino",
    medidas: "136 × 75 cm",
    foto: { src: "img/obra-yasper.jpg", alt: "Yasper, díptico en fieltro con formas en marrón, gris, crudo y rosa, en dos marcos" },
    detalles: []
  }
];

/* CUENCOS — piezas tridimensionales en fieltro. Una entrada por foto:
   { titulo: "", medidas: "", foto: { src: "cuenco.jpg", alt: "" } } */
const CUENCOS = [
  { foto: { src: "img/cuenco-1.jpg", alt: "Tres cuencos de fieltro en gris, crudo y marrón con aberturas" } },
  { foto: { src: "img/cuenco-2.jpg", alt: "Cuenco de fieltro marrón apoyado sobre una corteza" } },
  { foto: { src: "img/cuenco-3.jpg", alt: "Cuenco de fieltro con anillos en marrón y gris" } },
  { foto: { src: "img/cuenco-4.jpg", alt: "Cuenco de fieltro en tonos tierra con boca abierta" } },
  { foto: { src: "img/cuenco-5.jpg", alt: "Cuenco de fieltro gris de forma achatada" } },
  { foto: { src: "img/cuenco-6.jpg", alt: "Cuenco de fieltro marrón con una pieza cruda en su interior" } },
  { foto: { src: "img/cuenco-7.jpg", alt: "Cuenco de fieltro crudo con varias aberturas" } }
];
/* Cuencos en ambientes (franja ancha debajo de la grilla) */
const CUENCOS_AMBIENTE = [
  { src: "img/cuenco-8.jpg", alt: "Cuencos de fieltro dentro de una caja de madera sobre un estante, junto a una vasija y una lámpara" },
  { src: "img/cuenco-9.jpg", alt: "Cuencos de fieltro en una caja de madera sobre una mesa baja frente a un sillón" }
];

/* TRAYECTORIA — exposiciones y participaciones, las más recientes primero.
   visible: false oculta la entrada. fotos: [{ src, alt }]. */
const TRAYECTORIA = [
  {
    nombre: "Puro Diseño 2026",
    datos: "9 – 11 oct 2026",
    texto: "Participación en la feria Puro Diseño, que promueve el diseño argentino y la creatividad, reuniendo a artistas y diseñadores de distintas disciplinas. Realizada en La Rural, Buenos Aires.",
    fotos: [
      { src: "img/puro-diseno-obra-enmarcada.jpg", alt: "Obra textil enmarcada con formas tejidas y afieltradas en tonos crudos y grises" },
      { src: "img/puro-diseno-montaje.jpg", alt: "Alejandra Kovač preparando una obra enmarcada" },
      { src: "img/puro-diseno-esferas.jpg", alt: "Piezas en fieltro crudo en Puro Diseño: esferas, paños plegados en vitrinas y una obra en relieve" }
    ],
    espacios: [],
    obra: {
      titulo: "Metamorfosis",
      subtitulo: "Obra creada para Puro Diseño 2026.",
      ficha: [["Técnica", "Fieltro húmedo"], ["Materiales", "Lana merino"], ["Medidas", "60 × 169 cm"]],
      texto: [
        "Concebida a gran escala, Metamorfosis explora las posibilidades del fieltro a través de la superposición de diferentes paños textiles.",
        "Las variaciones de textura, los relieves y el encuentro entre las superficies construyen una composición en la que la materia adquiere profundidad y movimiento.",
        "La obra propone una exploración de la transformación material, donde cada capa participa en la construcción de una totalidad."
      ],
      fotos: [ { src: "img/puro-diseno-metamorfosis.jpg", alt: "Metamorfosis, obra de gran escala en cuatro paños de fieltro: marrón, crudo, gris y marrón" } ]
    },
    estilo: "tierra",
    visible: true
  },
  {
    nombre: "BADA 2026",
    datos: "2026",
    texto: "Participación en BADA, feria internacional de arte contemporáneo con ediciones en distintos países, que promueve el encuentro directo entre artistas y público. Edición Argentina, realizada en La Rural, Buenos Aires.",
    /* Fotos en su proporción original (ar = ancho / alto), sin recorte */
    fotosNatural: true,
    fotos: [
      { src: "img/bada-foto-1.jpg", ar: 900 / 1600, alt: "Alejandra Kovač junto a la obra Costa en BADA 2026" },
      { src: "img/bada-foto-2.jpg", ar: 3 / 4, alt: "Vista del espacio de exhibición en BADA 2026, con obras en fieltro de Alejandra Kovač" },
      { src: "img/bada-foto-3.jpg", ar: 3 / 4, alt: "Obra en fieltro de lana en tonos grises, enmarcada, en BADA 2026" }
    ],
    espacios: [],
    obra: {
      titulo: "Costa",
      subtitulo: "Obra creada para BADA 2026.",
      ficha: [["Técnica", "Fieltro húmedo"], ["Materiales", "Lana merino"], ["Medidas", "78 × 175 cm"]],
      texto: [
        "Costa fue una obra concebida especialmente para esta exposición, inspirada en el mar, la orilla y el movimiento constante de aquello que va y viene.",
        "La propuesta curatorial del espacio buscó generar una experiencia envolvente para el público, donde la escala de la obra, sus texturas y relieves invitaran a acercarse, observar y descubrir los detalles de la composición."
      ],
      fotos: [ { src: "img/bada-costa.jpg", alt: "Costa, obra de gran escala en fieltro crudo con relieves en marrón, gris y ocre, montada en BADA 2026" } ],
      /* Video del proceso: ruta del archivo. Vacío = el botón queda preparado (visible solo en modo edición). */
      video: { src: "video/costa-proceso.mp4", poster: "video/costa-proceso.jpg", titulo: "Proceso de la obra Costa" }
    },
    obras: null, // se completa abajo: Costa + Yasper
    /* Serie de pequeños formatos: carrusel de obras superpuestas */
    serie: {
      titulo: "Pequeños formatos",
      texto: [
        "En esta exposición se presentó una serie de obras textiles de pequeño formato, de 30 × 30 cm y 30 × 25 cm."
      ],
      fotos: [
        { src: "img/bada-pequenos-formatos-7.jpg", alt: "Obra de pequeño formato en fieltro crudo con fruncidos, enmarcada" },
        { src: "img/bada-pequenos-formatos-1.jpg", alt: "Obra de pequeño formato en fieltro marrón con pliegues horizontales, enmarcada" },
        { src: "img/bada-pequenos-formatos-5.jpg", alt: "Obra de pequeño formato en fieltro crudo con anillos y pliegues, enmarcada" },
        { src: "img/bada-pequenos-formatos-2.jpg", alt: "Obra de pequeño formato en fieltro marrón con cuencos de fieltro gris y crudo, enmarcada" },
        { src: "img/bada-pequenos-formatos-8.jpg", alt: "Obra de pequeño formato en fieltro crudo con nudos, enmarcada" },
        { src: "img/bada-pequenos-formatos-6.jpg", alt: "Obra de pequeño formato con franjas superpuestas de fieltro gris y marrón, enmarcada" },
        { src: "img/bada-pequenos-formatos-3.jpg", alt: "Obra de pequeño formato con formas alargadas de fieltro marrón, gris y crudo, enmarcada" },
        { src: "img/bada-pequenos-formatos-4.jpg", alt: "Obra de pequeño formato con un paño de fieltro gris plegado en diagonal, enmarcada" },
        { src: "img/bada-pequenos-formatos-9.jpg", alt: "Obra de pequeño formato con rollos de fieltro marrón y gris con espirales, enmarcada" }
      ]
    },
    estilo: "papel",
    visible: true
  },
  {
    nombre: "Distrito Arenales",
    datos: "", texto: "", fotos: [], espacios: ["Foto 1", "Foto 2", "Foto 3"],
    estilo: "papel",
    visible: false
  }
];

/* BADA 2026 también exhibió el díptico Yasper */
(function () {
  const bada = TRAYECTORIA.find(e => e.nombre === "BADA 2026");
  const yasper = OBRAS.find(o => o.titulo === "Yasper");
  if (bada && yasper) bada.obras = [bada.obra, {
    titulo: "Yasper",
    subtitulo: "Díptico exhibido en BADA 2026.",
    ficha: [["Técnica", "Fieltro húmedo · díptico"], ["Materiales", yasper.materiales], ["Medidas", yasper.medidas]],
    fotos: [yasper.foto]
  }];
})();

/* CONTACTO — completar con los datos reales. Vacíos no se muestran en la versión pública. */
const CONTACTO = { correo: "kovac.studio@gmail.com", instagram: "alekovac" /* usuario, sin @ */ };

/* ───────────────────────────────────────────── */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const slot = (foto, ref, cls = "") => foto && foto.src
  ? `<figure class="slot ${cls}" data-ref="${esc(ref)}"><img src="${esc(foto.src)}" alt="${esc(foto.alt)}" data-ampliar></figure>`
  : `<figure class="slot ${cls}" data-ref="${esc(ref)}"></figure>`;

const OBRAS_VISIBLES = 4; // obras visibles antes de "Ver más obras"
function renderObras() {
  const cont = document.getElementById("galeria-obras");
  const lista = OBRAS.length ? OBRAS : [{ ejemplo: true }];
  const campos = [["tecnica", "Técnica"], ["materiales", "Materiales"], ["medidas", "Medidas"]];
  const extra = Math.max(0, lista.length - OBRAS_VISIBLES);
  cont.innerHTML = `<div class="obras-lista ${extra ? "plegada" : ""}" id="obras-lista">` + lista.map((o, i) => {
      const d = o.detalles || [];
      const filas = campos.map(([k, label]) => {
        const v = o[k];
        return `<div class="${v ? "" : "sin-dato"}"><dt>${label}</dt><dd class="${v ? "" : "vacio-dato"}">${v ? esc(v) : "pendiente"}</dd></div>`;
      }).join("");
      const foto = o.foto && o.foto.src
        ? `<figure class="obra-foto"><img src="${esc(o.foto.src)}" alt="${esc(o.foto.alt)}" style="--escala:${o.escala || 1}" data-ampliar></figure>`
        : slot(null, "Obra completa", "vacia-obra");
      return `<article class="obra revelar ${o.formato === "horizontal" ? "obra-horizontal" : ""} ${o.ejemplo ? "solo-edicion" : ""} ${i >= OBRAS_VISIBLES ? "obra-extra" : ""}">
        ${foto}
        <div class="obra-info">
          <h3 class="obra-titulo ${o.titulo ? "" : "ref-edicion"}">${o.titulo ? esc(o.titulo) : "Título pendiente"}</h3>
          <dl class="ficha">${filas}</dl>
          ${d.length ? `<div class="media obra-detalles">${d.map(x => slot(x, "Detalle de textura")).join("")}</div>` : ""}
        </div>
      </article>`;
    }).join("") + `</div>` + (extra ? `<p class="obras-mas"><button type="button" class="boton boton-claro" id="obras-mas" aria-expanded="false" aria-controls="obras-lista" >Ver más obras</button></p>` : "");
}

function renderCuencos() {
  const cont = document.getElementById("galeria-cuencos");
  const lista = CUENCOS.length ? CUENCOS : [{}, {}, {}];
  cont.innerHTML = `<div class="cuencos">` + lista.map((c, i) => {
    const foto = c.foto && c.foto.src
      ? `<figure class="cuenco-foto"><img src="${esc(c.foto.src)}" alt="${esc(c.foto.alt)}" data-ampliar></figure>`
      : slot(null, "Cuenco " + (i + 1), "cuenco-foto");
    return `<article class="cuenco ${c.foto ? "" : "solo-edicion"}">${foto}
      ${c.titulo ? `<p class="cuenco-titulo">${esc(c.titulo)}</p>` : ""}${c.medidas ? `<p class="cuenco-dato">${esc(c.medidas)}</p>` : ""}</article>`;
  }).join("") + `</div>` + (CUENCOS_AMBIENTE.length ? `<div class="cuencos-ambiente">
      <p class="etiqueta">En el espacio</p>
      <div class="cuencos-ambiente-fotos">${CUENCOS_AMBIENTE.map(f => `<figure class="foto"><img src="${esc(f.src)}" alt="${esc(f.alt)}" data-ampliar></figure>`).join("")}</div>
    </div>` : "");
  // sin cuencos cargados, la versión pública no muestra las pestañas
  document.getElementById("obras-tabs").classList.toggle("solo-edicion", !CUENCOS.length);
}

function renderTrayectoria() {
  const cont = document.getElementById("expos");
  cont.innerHTML = TRAYECTORIA.filter(e => e.visible).map(e => {
    const fotos = e.fotos.length
      ? e.fotos.map(f => slot(f, f.alt || e.nombre)).join("")
      : e.espacios.map(t => slot(null, `${e.nombre}: ${t}`)).join("");
    const lista = e.obras || (e.obra ? [e.obra] : []);
    const obra = lista.map(o => `<div class="obra-feria">
        <figure>${o.fotos.map(f => `<img src="${esc(f.src)}" alt="${esc(f.alt)}" data-ampliar>`).join("")}</figure>
        <div>
          <div class="obra-feria-cab">
            <p class="etiqueta">Obra</p>
            <h5 class="subtitulo">${esc(o.titulo)}</h5>
            <p class="expo-sub">${esc(o.subtitulo)}</p>
          </div>
          ${o.texto ? `<div class="prosa">${o.texto.map(p => `<p>${esc(p)}</p>`).join("")}</div>` : ""}
          ${o.ficha ? `<dl class="ficha">${o.ficha.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
          ${o.video ? `<p class="obra-video${o.video.src ? "" : " slot vacio"}"><button type="button" class="boton boton-claro abrir-video" data-video="${esc(o.video.src || "")}" data-poster="${esc(o.video.poster || "")}" data-titulo="${esc(o.video.titulo || o.titulo)}" aria-haspopup="dialog">Conocé el proceso de la obra <span aria-hidden="true">▸</span></button></p>` : ""}
        </div>
      </div>`).join("");
    const caja = e.estilo === "tierra" ? "bloque-tierra" : "tarjeta";
    return `<article class="${caja} expo revelar">
        <div class="expo-texto">
          <p>${e.datos ? `<span class="pastilla">${esc(e.datos)}</span>` : `<span class="ref-edicion">Fecha y lugar pendientes</span>`}</p>
          <h4 class="expo-nombre">${esc(e.nombre)}</h4>
          ${e.subtitulo ? `<p class="expo-sub">${esc(e.subtitulo)}</p>` : ""}
          ${e.texto ? `<div class="prosa expo-desc"><p>${esc(e.texto)}</p></div>` : `<p class="ref-edicion">Descripción pendiente</p>`}
        </div>
        ${e.fotosNatural && e.fotos.length
          ? `<div class="fotos-natural">${e.fotos.map(f => `<figure style="flex-grow:${f.ar}"><img src="${esc(f.src)}" alt="${esc(f.alt)}" data-ampliar></figure>`).join("")}</div>`
          : `<div class="media">${fotos}</div>`}
        ${obra}
        ${e.serie ? `<div class="serie">
          <div class="serie-cab">
            <p class="etiqueta">Serie</p>
            <h5 class="subtitulo">${esc(e.serie.titulo)}</h5>
            <div class="prosa">${e.serie.texto.map(p => `<p>${esc(p)}</p>`).join("")}</div>
          </div>
          <div class="serie-marco">
            <div class="serie-pista" tabindex="-1">
              ${e.serie.fotos.map((f, i) => `<figure class="serie-obra" style="--z:${i + 1};--dy:${[0, 14, -8, 10, -12, 6, -6, 12, -4][i % 9]}px"><img src="${esc(f.src)}" alt="${esc(f.alt)}" data-ampliar draggable="false"></figure>`).join("")}
            </div>
          </div>
          <div class="serie-ctrl">
            <button type="button" class="serie-flecha" data-dir="-1" aria-label="Ver obras anteriores">←</button>
            <button type="button" class="serie-flecha" data-dir="1" aria-label="Ver más obras">→</button>
          </div>
        </div>` : ""}
      </article>`;
  }).join("");
}

function renderContacto() {
  const dl = document.getElementById("canales");
  const ig = CONTACTO.instagram.replace(/^@/, "");
  const filas = [
    ["Correo", CONTACTO.correo, CONTACTO.correo ? `<span class="copiable" id="correo-texto">${esc(CONTACTO.correo)}</span> <button type="button" class="copiar" id="copiar-correo">copiar</button>` : ""],
    ["Instagram", ig, ig ? `<a href="https://www.instagram.com/${esc(ig)}/" target="_blank" rel="noopener">@${esc(ig)}</a>` : ""]
  ];
  dl.innerHTML = filas.map(([label, v, html]) =>
    `<div class="canal ${v ? "" : "sin-dato"}"><dt>${label}</dt><dd class="${v ? "" : "vacio-dato"}">${v ? html : "pendiente"}</dd></div>`).join("");
  if (!CONTACTO.correo && !ig) dl.classList.add("vacios");
  const b = document.getElementById("copiar-correo");
  if (b) b.addEventListener("click", () => {
    const ok = () => { b.textContent = "copiado"; setTimeout(() => b.textContent = "copiar", 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(CONTACTO.correo).then(ok).catch(() => seleccionar());
    else seleccionar();
    function seleccionar() { const r = document.createRange(); r.selectNodeContents(document.getElementById("correo-texto")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  });
}

/* marca espacios vacíos y contenedores sin fotos, para que la versión pública se recomponga */
function marcarVacios() {
  const publico = document.documentElement.classList.contains("publico");
  document.querySelectorAll(".slot").forEach(s => s.classList.toggle("vacio", !s.querySelector("img")));
  document.querySelectorAll(".media").forEach(m => {
    const vacia = !m.querySelector(".slot:not(.vacio)");
    m.classList.toggle("vacia", vacia);
    const padre = m.closest(".panel, .expo, .espacios-ambiente");
    if (padre) padre.classList.toggle("sin-media", vacia && publico);
  });
}

function aplicarModo(publico) {
  document.documentElement.classList.toggle("publico", publico);
  document.getElementById("modo-texto").textContent = publico ? "Versión pública" : "Modo edición";
  document.getElementById("modo-boton").textContent = publico ? "Volver a edición" : "Ver versión pública";
  // sin cuencos cargados, la versión pública muestra directamente las obras textiles
  if (publico && !CUENCOS.length) { document.getElementById("panel-textiles").hidden = false; document.getElementById("panel-cuencos").hidden = true; const tt = document.getElementById("tab-textiles"), tc = document.getElementById("tab-cuencos"); tt.setAttribute("aria-selected", "true"); tc.setAttribute("aria-selected", "false"); }
  marcarVacios();
}

renderObras();
renderCuencos();
renderTrayectoria();
renderContacto();

if (MODO_EDICION) {
  document.getElementById("modo").hidden = false;
  let publico = false;
  try { publico = sessionStorage.getItem("ak-publico") === "1"; } catch (e) {}
  aplicarModo(publico);
  document.getElementById("modo-boton").addEventListener("click", () => {
    publico = !publico;
    try { sessionStorage.setItem("ak-publico", publico ? "1" : "0"); } catch (e) {}
    aplicarModo(publico);
  });
} else {
  aplicarModo(true);
  document.getElementById("modo").remove();
}

/* ════════ NAVEGACIÓN ════════ */
(function () {
  const enlaces = document.getElementById("enlaces"), boton = document.getElementById("menu-boton");
  const cerrar = () => { enlaces.classList.remove("abierto"); boton.setAttribute("aria-expanded", "false"); boton.textContent = "menú"; };
  boton.addEventListener("click", () => {
    const abierto = enlaces.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto)); boton.textContent = abierto ? "cerrar" : "menú";
  });
  enlaces.addEventListener("click", e => { if (e.target.closest("a")) cerrar(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
  const links = [...enlaces.querySelectorAll("a")];
  const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.remove("activo"));
      const a = map.get(en.target.id);
      if (a) a.classList.add("activo");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => io.observe(s));
})();

/* ════════ PESTAÑAS (proceso y obras) ════════ */
document.querySelectorAll('[role="tablist"]').forEach(lista => {
  const tabs = [...lista.querySelectorAll('[role="tab"]')];
  function activar(tab, foco) {
    tabs.forEach(t => {
      const sel = t === tab;
      t.setAttribute("aria-selected", String(sel));
      t.tabIndex = sel ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !sel;
      if (sel) { panel.classList.remove("entrando"); void panel.offsetWidth; panel.classList.add("entrando"); }
    });
    if (foco) tab.focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => activar(t));
    t.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { e.preventDefault(); activar(tabs[(i + 1) % tabs.length], true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); activar(tabs[(i - 1 + tabs.length) % tabs.length], true); }
    });
  });
});

/* ════════ APARICIÓN AL DESPLAZARSE ════════
   Solo se animan los bloques que al cargar están fuera de la pantalla;
   lo que ya se ve queda quieto, así la página está completa desde el primer momento. */
(function () {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const alto = window.innerHeight;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("revelar-ok"); en.target.classList.remove("revelar-pre");
      io.unobserve(en.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".revelar").forEach(el => {
    if (el.getBoundingClientRect().top > alto) { el.classList.add("revelar-pre"); io.observe(el); }
  });
})();

/* ════════ VISOR CON ZOOM ════════
   Se aplica a las fotos de obras: galería de Mi Tierra, detalles, Metamorfosis,
   Puro Diseño, texturas del proceso y obras en ambientes. */
(function () {
  const SELECTOR = "img[data-ampliar]";
  const visor = document.getElementById("visor");
  const escena = document.getElementById("visor-escena");
  const img = document.getElementById("visor-img");
  const ayuda = document.getElementById("visor-ayuda");
  let s = 1, x = 0, y = 0, maxS = 4, origen = null, cerrarTimer = null;
  const punteros = new Map();
  let pinchInicio = null, arrastre = null, movido = false;

  function aplicar(animar) {
    escena.classList.toggle("sin-transicion", !animar);
    img.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    escena.classList.toggle("ampliado", s > 1.01);
  }
  function limitar() {
    const w = img.offsetWidth * s, h = img.offsetHeight * s;
    const mx = Math.max(0, (w - escena.clientWidth) / 2), my = Math.max(0, (h - escena.clientHeight) / 2);
    x = Math.min(mx, Math.max(-mx, x)); y = Math.min(my, Math.max(-my, y));
  }
  function zoomEn(nuevo, px, py, animar) {
    nuevo = Math.min(maxS, Math.max(1, nuevo));
    const r = escena.getBoundingClientRect();
    const cx = px - r.left - r.width / 2, cy = py - r.top - r.height / 2;
    const ux = (cx - x) / s, uy = (cy - y) / s;
    s = nuevo; x = cx - s * ux; y = cy - s * uy;
    if (s === 1) { x = 0; y = 0; }
    limitar(); aplicar(animar);
  }
  function centro() { const r = escena.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }

  function abrir(fuente) {
    clearTimeout(cerrarTimer);
    origen = fuente;
    img.src = fuente.currentSrc || fuente.src;
    img.alt = fuente.alt || "";
    s = 1; x = 0; y = 0; aplicar(false);
    visor.hidden = false; visor.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    const listo = () => {
      // ampliación máxima: hasta ver la foto a su resolución real, con un mínimo de 3x
      maxS = Math.max(3, Math.min(6, (img.naturalWidth / Math.max(1, img.offsetWidth)) * 1.5));
    };
    img.complete ? listo() : img.addEventListener("load", listo, { once: true });
    requestAnimationFrame(() => requestAnimationFrame(() => visor.classList.add("abierto")));
    document.getElementById("visor-cerrar").focus({ preventScroll: true });
  }
  function cerrar() {
    visor.classList.remove("abierto");
    document.documentElement.style.overflow = "";
    cerrarTimer = setTimeout(() => { visor.hidden = true; visor.setAttribute("aria-hidden", "true"); img.removeAttribute("src"); }, 280);
    if (origen) origen.focus({ preventScroll: true });
  }

  function preparar() {
    document.querySelectorAll(SELECTOR).forEach(el => {
      if (el.dataset.zoom) return;
      el.dataset.zoom = "1";
      el.classList.add("zoomable");
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", "Ampliar: " + (el.alt || "obra"));
    });
  }
  document.addEventListener("click", e => {
    const el = e.target.closest && e.target.closest("img.zoomable");
    if (el) abrir(el);
  });
  document.addEventListener("keydown", e => {
    if (!visor.hidden) {
      if (e.key === "Escape") cerrar();
      if (e.key === "+" || e.key === "=") zoomEn(s * 1.5, ...centro(), true);
      if (e.key === "-") zoomEn(s / 1.5, ...centro(), true);
      return;
    }
    const el = document.activeElement;
    if ((e.key === "Enter" || e.key === " ") && el && el.classList && el.classList.contains("zoomable")) { e.preventDefault(); abrir(el); }
  });

  document.getElementById("visor-cerrar").addEventListener("click", cerrar);
  document.getElementById("visor-mas").addEventListener("click", () => zoomEn(s * 1.5, ...centro(), true));
  document.getElementById("visor-menos").addEventListener("click", () => zoomEn(s / 1.5, ...centro(), true));

  escena.addEventListener("wheel", e => {
    e.preventDefault();
    zoomEn(s * Math.exp(-e.deltaY * 0.0022), e.clientX, e.clientY, false);
  }, { passive: false });

  escena.addEventListener("dblclick", e => {
    zoomEn(s > 1.01 ? 1 : Math.min(maxS, 2.5), e.clientX, e.clientY, true);
  });

  escena.addEventListener("pointerdown", e => {
    escena.setPointerCapture(e.pointerId);
    punteros.set(e.pointerId, [e.clientX, e.clientY]);
    movido = false;
    if (punteros.size === 2) {
      const [a, b] = [...punteros.values()];
      pinchInicio = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), s };
      arrastre = null;
    } else {
      arrastre = { px: e.clientX, py: e.clientY, x, y };
    }
  });
  escena.addEventListener("pointermove", e => {
    if (!punteros.has(e.pointerId)) return;
    punteros.set(e.pointerId, [e.clientX, e.clientY]);
    if (punteros.size === 2 && pinchInicio) {
      const [a, b] = [...punteros.values()];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      zoomEn(pinchInicio.s * d / pinchInicio.d, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, false);
      movido = true;
    } else if (arrastre && s > 1.01) {
      const dx = e.clientX - arrastre.px, dy = e.clientY - arrastre.py;
      if (Math.abs(dx) + Math.abs(dy) > 3) { movido = true; escena.classList.add("arrastrando"); }
      x = arrastre.x + dx; y = arrastre.y + dy; limitar(); aplicar(false);
    } else if (arrastre) {
      if (Math.abs(e.clientX - arrastre.px) + Math.abs(e.clientY - arrastre.py) > 6) movido = true;
    }
  });
  let ultimoToque = 0;
  function soltar(e) {
    if (!punteros.has(e.pointerId)) return;
    punteros.delete(e.pointerId);
    escena.classList.remove("arrastrando");
    if (punteros.size < 2) pinchInicio = null;
    if (punteros.size === 1) { const [p] = [...punteros.values()]; arrastre = { px: p[0], py: p[1], x, y }; return; }
    arrastre = null;
    if (e.type === "pointercancel" || movido) return;
    // toque simple: doble toque amplía en celular; un toque fuera de la foto sin zoom cierra
    if (e.pointerType === "touch") {
      const ahora = Date.now();
      if (ahora - ultimoToque < 300) { zoomEn(s > 1.01 ? 1 : Math.min(maxS, 2.5), e.clientX, e.clientY, true); ultimoToque = 0; return; }
      ultimoToque = ahora;
    }
    if (s <= 1.01 && e.target === escena) cerrar();
  }
  escena.addEventListener("pointerup", soltar);
  escena.addEventListener("pointercancel", soltar);
  window.addEventListener("resize", () => { if (!visor.hidden) { limitar(); aplicar(false); } });

  preparar();
  if (window.matchMedia("(pointer: coarse)").matches) ayuda.textContent = "Pellizcá o tocá dos veces para ampliar";
})();


/* ════════ DE LA LANA AL FIELTRO ════════
   Composición de fibras dibujada en canvas. La etapa (0 a 4) cambia de forma continua:
   fibras sueltas → humedecidas → jabón → amasado (giro) → superficie compacta. */
(function () {
  const canvas = document.getElementById("lana-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const ETAPAS = [
    ["Lana natural", "La materia prima. Fibras sueltas que dan origen al proceso."],
    ["Agua", "La lana se humedece para comenzar su transformación."],
    ["Jabón", "Facilita el movimiento y la fricción entre las fibras."],
    ["Amasado", "Mediante la presión y el movimiento de las manos, las fibras comienzan a entrelazarse."],
    ["Fieltro", "Las fibras se unen y forman una superficie textil resistente, flexible y con textura propia."]
  ];
  const palabra = document.getElementById("lana-palabra"), frase = document.getElementById("lana-frase");
  const cuenta = document.getElementById("lana-cuenta");
  const botones = [...document.querySelectorAll("#lana-etapas button")];
  const ant = document.getElementById("lana-ant"), sig = document.getElementById("lana-sig");
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // azar con semilla, para que la composición sea siempre la misma
  let semilla = 7;
  const rnd = () => { semilla |= 0; semilla = semilla + 0x6D2B79F5 | 0; let x = Math.imul(semilla ^ semilla >>> 15, 1 | semilla); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; };
  const LANAS = [[250,246,238],[240,232,218],[226,214,196],[205,190,168],[178,160,138],[140,122,104],[98,82,68]];
  const PESOS = [2.4, 3.4, 4, 3.4, 2.4, 1.6, .9];
  const elegir = () => { let s = PESOS.reduce((a, b) => a + b), r = rnd() * s; for (let i = 0; i < PESOS.length; i++) { r -= PESOS[i]; if (r <= 0) return LANAS[i]; } return LANAS[0]; };
  const N = 680;
  const fibras = Array.from({ length: N }, () => ({
    r: Math.sqrt(rnd()), th: rnd() * Math.PI * 2, largo: .55 + rnd() * .9, rizo: rnd() * 2 - 1,
    fase: rnd() * Math.PI * 2, col: elegir(), ancho: .8 + rnd() * 1.5, azar: rnd() * Math.PI * 2
  }));
  const gotas = Array.from({ length: 46 }, () => ({ r: Math.sqrt(rnd()) * .92, th: rnd() * Math.PI * 2, s: .5 + rnd(), f: rnd() * 6 }));
  const burbujas = Array.from({ length: 38 }, () => ({ r: Math.sqrt(rnd()) * .9, th: rnd() * Math.PI * 2, s: .3 + rnd(), f: rnd() * 6 }));
  const bordesF = [rnd() * 6, rnd() * 6, rnd() * 6];
  const bordes = Array.from({ length: 96 }, (_, i) => { const a = i / 96 * Math.PI * 2; return .985 + .022 * Math.sin(a * 2 + bordesF[0]) + .014 * Math.sin(a * 3 + bordesF[1]) + .008 * Math.sin(a * 5 + bordesF[2]); });
  const estela = []; let ultimaGota = 0, ultimaPos = null;
  const caidas = Array.from({ length: 12 }, () => ({ r: Math.sqrt(rnd()) * .7, th: rnd() * Math.PI * 2, off: rnd() * 3, per: 1.9 + rnd() * 1.4 }));

  const ss = (a, b, x) => { const k = Math.min(1, Math.max(0, (x - a) / (b - a))); return k * k * (3 - 2 * k); };
  const campana = (x, c, w) => Math.max(0, 1 - Math.abs(x - c) / w) ** 1.6;
  const lerp = (a, b, k) => a + (b - a) * k;

  let W = 0, H = 0, dpr = 1, textura = null;
  function medir() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // textura de fieltro: punteado fino de fibras cortas
    textura = document.createElement("canvas");
    textura.width = canvas.width; textura.height = canvas.height;
    const tx = textura.getContext("2d"); tx.setTransform(dpr, 0, 0, dpr, 0, 0);
    let s0 = semilla; semilla = 99;
    const esc = Math.min(W, H) / 480;
    for (let i = 0; i < 5200; i++) {
      const x = rnd() * W, y = rnd() * H, a = rnd() * Math.PI * 2, l = (1.6 + rnd() * 3.2) * esc, c = elegir();
      const curva = (rnd() < .5 ? 1 : -1) * (1.2 + rnd() * 1.4);
      tx.strokeStyle = `rgba(${c[0] * .9 | 0},${c[1] * .9 | 0},${c[2] * .9 | 0},${.28 + rnd() * .3})`; tx.lineWidth = (.6 + rnd() * .5) * esc;
      tx.beginPath(); tx.moveTo(x, y);
      tx.quadraticCurveTo(x + Math.cos(a + curva) * l, y + Math.sin(a + curva) * l, x + Math.cos(a) * l * 1.5, y + Math.sin(a) * l * 1.5);
      tx.stroke();
    }
    semilla = s0;
    hacerPieza();
  }

  // Fieltro terminado: forma de borde ondulado suave, color tostado cálido con manchas
  // de pigmento (como pastel o acuarela), borde de pincel seco y contorno a lápiz.
  let pieza = null;
  function hacerPieza() {
    pieza = document.createElement("canvas");
    pieza.width = canvas.width; pieza.height = canvas.height;
    const g = pieza.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * .4;
    const s0 = semilla; semilla = 314;
    const f1 = rnd() * 6, f2 = rnd() * 6, f3 = rnd() * 6;
    const borde = a => R * .82 * (1 + .022 * Math.sin(a * 11 + f1) + .016 * Math.sin(a * 3 + f2) + .01 * Math.sin(a * 5 + f3));
    const forma = new Path2D();
    for (let i = 0; i <= 240; i++) {
      const a = i / 240 * Math.PI * 2, r = borde(a);
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      i ? forma.lineTo(x, y) : forma.moveTo(x, y);
    }
    forma.closePath();
    // halo de pincel seco por fuera del borde
    g.lineCap = "round";
    for (let i = 0; i < 2600; i++) {
      const a = rnd() * Math.PI * 2, r0 = borde(a) - R * .02 * rnd(), l = R * (.008 + rnd() * .026);
      const da = (rnd() - .5) * .5;
      g.strokeStyle = `rgba(200,168,122,${.05 + rnd() * .13})`; g.lineWidth = (.6 + rnd() * 1.2) * (R / 220);
      g.beginPath(); g.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      g.lineTo(cx + Math.cos(a + da * .02) * (r0 + l), cy + Math.sin(a + da * .02) * (r0 + l)); g.stroke();
    }
    g.save(); g.clip(forma);
    g.fillStyle = "rgb(214,186,144)"; g.fillRect(0, 0, W, H);
    // manchas de pigmento claras y oscuras
    for (let i = 0; i < 150; i++) {
      const x = cx + (rnd() - .5) * R * 1.8, y = cy + (rnd() - .5) * R * 1.8, rr = R * (.06 + rnd() * .24);
      const clara = rnd() < .55;
      const col = clara ? "236,214,176" : (rnd() < .5 ? "190,156,108" : "200,170,126");
      const m = g.createRadialGradient(x, y, 0, x, y, rr);
      m.addColorStop(0, `rgba(${col},${.22 + rnd() * .2})`); m.addColorStop(1, `rgba(${col},0)`);
      g.fillStyle = m; g.beginPath(); g.arc(x, y, rr, 0, Math.PI * 2); g.fill();
    }
    // luz suave arriba a la izquierda y sombra abajo
    const lz = g.createRadialGradient(cx - R * .3, cy - R * .35, R * .05, cx, cy, R);
    lz.addColorStop(0, "rgba(246,232,206,.38)"); lz.addColorStop(.6, "rgba(246,232,206,0)"); lz.addColorStop(1, "rgba(150,118,78,.22)");
    g.fillStyle = lz; g.fillRect(0, 0, W, H);
    // grano fino de pastel
    for (let i = 0; i < 4200; i++) {
      const x = cx + (rnd() - .5) * R * 1.8, y = cy + (rnd() - .5) * R * 1.8;
      g.fillStyle = rnd() < .5 ? `rgba(250,238,214,${.1 + rnd() * .12})` : `rgba(160,128,86,${.06 + rnd() * .1})`;
      g.fillRect(x, y, (.6 + rnd()) * (R / 260), (.6 + rnd()) * (R / 260));
    }
    // borde interior más saturado, como el pigmento que se acumula
    g.lineWidth = R * .035; g.strokeStyle = "rgba(186,150,102,.18)"; g.stroke(forma);
    g.restore();
    // contorno a lápiz, doble y apenas desplazado
    g.lineCap = "round"; g.lineJoin = "round";
    g.strokeStyle = "rgba(150,118,80,.6)"; g.lineWidth = 1.3 * (R / 220); g.stroke(forma);
    g.save(); g.translate(.8, -.6); g.strokeStyle = "rgba(150,118,80,.22)"; g.lineWidth = 1 * (R / 220); g.stroke(forma); g.restore();
    semilla = s0;
  }

  let p = 0, meta = 0, giro = 0, ultimo = 0, raton = null, arrastre = null, visible = false, pedido = 0;

  function dibujar(t) {
    const dt = Math.min(50, t - (ultimo || t)); ultimo = t;
    if (!arrastre) p += (meta - p) * (quieto ? 1 : Math.min(1, dt * 0.0045));
    if (Math.abs(meta - p) < 0.001) p = meta;
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.4;
    const fieltro = ss(2.7, 4, p), humedo = ss(.5, 1.2, p) * (1 - .7 * ss(3.3, 4, p));
    const flujo = 1 - ss(.8, 2.6, p), remolino = campana(p, 3, 1.25), desorden = ss(3, 4, p);
    giro += quieto ? 0 : dt * 0.00042 * remolino;
    const largo = R * lerp(.44, .075, ss(.2, 4, p));
    const rizo = .04 + .55 * ss(2.2, 4, p);
    const liso = ss(3.2, 3.95, p);
    const extension = 1.02 - .13 * ss(0, 1, p) - .09 * ss(1, 4, p), achate = lerp(.6, 1, ss(0, 1.8, p));
    const fluido = campana(p, 2, 1.1);
    const tt = quieto ? 0 : t;

    ctx.clearRect(0, 0, W, H);
    // nido: sombra suave que contiene el pequeño universo
    const g = ctx.createRadialGradient(cx, cy, R * .2, cx, cy, R * 1.12);
    g.addColorStop(0, "rgba(120,100,78,0.10)"); g.addColorStop(1, "rgba(120,100,78,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.12, 0, Math.PI * 2); ctx.fill();

    // pieza de fieltro terminada: forma pintada (se prepara una vez en medir)
    if (fieltro > 0.001 && pieza) {
      ctx.save();
      ctx.globalAlpha = fieltro;
      const e = .94 + .06 * fieltro; // la forma se asienta mientras aparece
      ctx.translate(cx, cy); ctx.scale(e, e); ctx.translate(-cx, -cy);
      ctx.drawImage(pieza, 0, 0, W, H);
      ctx.restore(); ctx.globalAlpha = 1;
    }

    // cuerpo de lana: volumen suave debajo de las fibras (se desvanece al volverse fieltro)
    const cuerpo = 1 - fieltro;
    if (cuerpo > .01) {
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(-.35 * (1 - ss(0, 2, p))); ctx.scale(1, achate);
      const gc = ctx.createRadialGradient(0, 0, 0, 0, 0, R * extension * 1.05);
      const h = humedo * .12;
      gc.addColorStop(0, `rgba(${250 - h * 300 | 0},${246 - h * 280 | 0},${238 - h * 240 | 0},${.75 * cuerpo})`);
      gc.addColorStop(.7, `rgba(${240 - h * 300 | 0},${232 - h * 280 | 0},${218 - h * 240 | 0},${.45 * cuerpo})`);
      gc.addColorStop(1, "rgba(240,232,218,0)");
      ctx.fillStyle = gc; ctx.beginPath(); ctx.arc(0, 0, R * extension * 1.05, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    // fibras
    const pasos = 8;
    for (const f of fibras) {
      const a = f.th + giro * (1.2 - f.r * .6);
      const rr = f.r * R * extension;
      let ax = Math.cos(a) * rr, ay = Math.sin(a) * rr * achate;
      // la nube de lana suelta está levemente inclinada
      const inc = -.35 * (1 - ss(0, 2, p));
      let x0 = cx + ax * Math.cos(inc) - ay * Math.sin(inc), y0 = cy + ax * Math.sin(inc) + ay * Math.cos(inc);
      // lana suelta: deriva liviana · jabón: ondulación fluida
      x0 += Math.sin(tt * .0004 + f.fase) * R * .012 * (flujo + fluido);
      y0 += Math.cos(tt * .00035 + f.fase * 1.3) * R * .01 * (flujo + fluido);
      if (raton) {
        const dx = x0 - raton.x, dy = y0 - raton.y, d = Math.hypot(dx, dy) || 1, alcance = R * .38;
        if (d < alcance) { const k = (1 - d / alcance) ** 2 * R * .13 * (1 - .8 * fieltro); x0 += dx / d * k; y0 += dy / d * k; }
      }
      const dFlujo = -.35 + .28 * Math.sin(f.th * 3 + tt * .0005), dRem = a + Math.PI / 2, dAz = f.azar;
      let vx = flujo * Math.cos(dFlujo) + remolino * Math.cos(dRem) + desorden * Math.cos(dAz) + 1e-3;
      let vy = flujo * Math.sin(dFlujo) + remolino * Math.sin(dRem) + desorden * Math.sin(dAz);
      let dir = Math.atan2(vy, vx);
      const seg = largo * f.largo / pasos;
      let x = x0 - Math.cos(dir) * seg * pasos / 2, y = y0 - Math.sin(dir) * seg * pasos / 2;
      const c = f.col, osc = 1 - humedo * .28;
      ctx.strokeStyle = `rgba(${c[0] * osc | 0},${c[1] * osc | 0},${c[2] * (osc + humedo * .06) | 0},${.82 * (1 - ss(3.2, 3.95, p))})`;
      ctx.lineWidth = f.ancho * (1 + .35 * fieltro);
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let i = 0; i < pasos; i++) {
        dir += f.rizo * rizo + Math.sin(f.fase + i * .9 + tt * .0011 * (remolino + fluido + .25)) * (.11 * (flujo + remolino) + .14 * fluido);
        x += Math.cos(dir) * seg; y += Math.sin(dir) * seg;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // agua: película húmeda, gotas que caen y ondas al tocar la lana
    const va = campana(p, 1, .95);
    if (va > .01) {
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(-.35 * (1 - ss(0, 2, p))); ctx.scale(1, achate);
      const gw = ctx.createRadialGradient(0, 0, R * .1, 0, 0, R * extension);
      gw.addColorStop(0, `rgba(150,172,182,${.2 * va})`); gw.addColorStop(1, "rgba(150,172,182,0)");
      ctx.fillStyle = gw; ctx.beginPath(); ctx.arc(0, 0, R * extension, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      const seg = tt * .001;
      for (const c of caidas) {
        const u = ((seg + c.off) % c.per) / c.per;
        const lx = cx + Math.cos(c.th) * c.r * R, ly = cy + Math.sin(c.th) * c.r * R * achate;
        if (u < .32) {
          const k = (u / .32) ** 2, y = lerp(cy - R * 1.2, ly, k);
          ctx.fillStyle = `rgba(104,132,146,${.85 * va})`;
          ctx.beginPath(); ctx.ellipse(lx, y, R * .012, R * .03, 0, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = `rgba(255,255,255,${.7 * va})`;
          ctx.beginPath(); ctx.ellipse(lx - R * .004, y - R * .01, R * .003, R * .008, 0, 0, Math.PI * 2); ctx.fill();
        } else {
          const k = (u - .32) / .68;
          ctx.fillStyle = `rgba(150,172,182,${(1 - k) * .28 * va})`;
          ctx.beginPath(); ctx.ellipse(lx, ly, R * (.04 + k * .14), R * (.04 + k * .14) * .42, 0, 0, Math.PI * 2); ctx.fill();
          for (const [ret, esc] of [[0, 1], [.15, .7], [.3, .45]]) {
            const kk = Math.max(0, k - ret) / (1 - ret);
            if (kk <= 0) continue;
            const rr = R * (.02 + kk * .24) * esc + R * .01;
            ctx.strokeStyle = `rgba(84,112,126,${(1 - kk) * .85 * va})`; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.ellipse(lx, ly, rr, rr * .42, 0, 0, Math.PI * 2); ctx.stroke();
          }
        }
      }
    }
    // gotas que nacen del cursor en la etapa Agua
    if (raton && va > .15 && !quieto) {
      const movio = !ultimaPos || Math.hypot(raton.x - ultimaPos.x, raton.y - ultimaPos.y) > 7;
      if ((movio && t - ultimaGota > 45) || t - ultimaGota > 260) {
        estela.push({ x: raton.x + (Math.random() - .5) * R * .06, y: raton.y + (Math.random() - .5) * R * .04, t0: t, s: .7 + Math.random() * .6 });
        ultimaGota = t; ultimaPos = { x: raton.x, y: raton.y };
        if (estela.length > 70) estela.shift();
      }
    }
    for (let i = estela.length - 1; i >= 0; i--) {
      const g = estela[i], edad = (t - g.t0) / 1000;
      if (edad > 1.3) { estela.splice(i, 1); continue; }
      const vis = Math.max(va, .25);
      if (edad < .32) {
        const k = edad / .32, y = g.y + R * .07 * k * k;
        ctx.fillStyle = `rgba(104,132,146,${.85 * vis})`;
        ctx.beginPath(); ctx.ellipse(g.x, y, R * .01 * g.s, R * .025 * g.s, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,${.7 * vis})`;
        ctx.beginPath(); ctx.ellipse(g.x - R * .003, y - R * .008, R * .0025, R * .007, 0, 0, Math.PI * 2); ctx.fill();
      } else {
        const k = (edad - .32) / .98, y = g.y + R * .07;
        ctx.fillStyle = `rgba(150,172,182,${(1 - k) * .25 * vis})`;
        ctx.beginPath(); ctx.ellipse(g.x, y, R * (.02 + k * .1) * g.s, R * (.02 + k * .1) * g.s * .42, 0, 0, Math.PI * 2); ctx.fill();
        for (const [ret, esc] of [[0, 1], [.2, .6]]) {
          const kk = Math.max(0, k - ret) / (1 - ret);
          if (kk <= 0) continue;
          const rr = R * (.015 + kk * .14) * esc * g.s;
          ctx.strokeStyle = `rgba(84,112,126,${(1 - kk) * .8 * vis})`; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.ellipse(g.x, y, rr, rr * .42, 0, 0, Math.PI * 2); ctx.stroke();
        }
      }
    }
    // gotas de agua
    const vg = campana(p, 1, .8);
    if (vg > .01) for (const d of gotas) {
      const x = cx + Math.cos(d.th) * d.r * R * extension, y = cy + Math.sin(d.th) * d.r * R * extension + Math.sin(tt * .002 + d.f) * 1.5;
      const rad = R * .024 * d.s * (.6 + .4 * vg);
      ctx.fillStyle = `rgba(200,216,224,${.55 * vg})`; ctx.strokeStyle = `rgba(96,118,130,${.7 * vg})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = `rgba(255,255,255,${.85 * vg})`; ctx.beginPath(); ctx.arc(x - rad * .35, y - rad * .35, rad * .28, 0, Math.PI * 2); ctx.fill();
    }
    // burbujas de jabón
    const vb = campana(p, 2, .85);
    if (vb > .01) for (const b of burbujas) {
      const ang = b.th + Math.sin(tt * .0004 + b.f) * .05;
      const x = cx + Math.cos(ang) * b.r * R, y = cy + Math.sin(ang) * b.r * R - Math.sin(tt * .0012 + b.f) * 2;
      const rad = (2 + b.s * 8) * (R / 220) * (.5 + .5 * vb);
      ctx.fillStyle = `rgba(255,255,255,${.2 * vb})`; ctx.strokeStyle = `rgba(150,138,120,${.32 * vb})`; ctx.lineWidth = .7;
      ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = `rgba(255,255,255,${.7 * vb})`; ctx.lineWidth = .8;
      ctx.beginPath(); ctx.arc(x, y, rad * .7, Math.PI * 1.1, Math.PI * 1.45); ctx.stroke();
    }

    actualizarTexto(Math.round(p));
    if (raton) {
      flot.x += (raton.x + 18 - flot.x) * (quieto ? 1 : .14);
      flot.y += (raton.y - 26 - flot.y) * (quieto ? 1 : .14);
      flotante.style.transform = `translate(${flot.x}px, ${flot.y}px)`;
    }
    if (visible && (!quieto || Math.abs(meta - p) > .001 || arrastre || estela.length)) pedido = requestAnimationFrame(dibujar);
    else pedido = 0;
  }
  function animar() { if (!pedido && visible) { ultimo = 0; pedido = requestAnimationFrame(dibujar); } }

  const flotante = document.getElementById("lana-flotante"), final = document.getElementById("lana-final"), pregunta = document.getElementById("lana-pregunta"), pista = document.getElementById("lana-pista");
  if (window.matchMedia("(pointer: coarse)").matches) document.getElementById("lana-pista-texto").textContent = "Tocá para ver el proceso";
  const flot = { x: 0, y: 0 };
  let mostrada = -1;
  function actualizarTexto(i) {
    if (i === mostrada) return;
    const primera = mostrada === -1; mostrada = i;
    const poner = () => {
      palabra.textContent = ETAPAS[i][0]; frase.textContent = ETAPAS[i][1];
      palabra.classList.remove("cambiando"); frase.classList.remove("cambiando");
    };
    flotante.textContent = ETAPAS[i][0];
    pregunta.classList.toggle("visible", i === 4);
    if (i > 0) pista.classList.add("oculta");
    if (primera || quieto) poner();
    else { palabra.classList.add("cambiando"); frase.classList.add("cambiando"); setTimeout(poner, 180); }
    cuenta.textContent = "0" + (i + 1) + " / 05";
    botones.forEach((b, k) => { k === i ? b.setAttribute("aria-current", "step") : b.removeAttribute("aria-current"); b.classList.toggle("hecho", k < i); });
    ant.disabled = i === 0; sig.disabled = i === 4;
  }
  function ir(i) { meta = Math.max(0, Math.min(4, i)); animar(); }

  botones.forEach((b, k) => b.addEventListener("click", () => ir(k)));
  ant.addEventListener("click", () => ir(Math.round(meta) - 1));
  sig.addEventListener("click", () => ir(Math.round(meta) + 1));
  canvas.tabIndex = 0;
  canvas.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); ir(Math.round(meta) + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); ir(Math.round(meta) - 1); }
  });

  const local = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  canvas.addEventListener("pointermove", e => {
    if (e.pointerType === "mouse") {
      if (!raton) { const l = local(e); flot.x = l.x + 18; flot.y = l.y - 26; }
      raton = local(e); flotante.classList.add("visible"); animar();
    }
    if (arrastre) {
      const dx = e.clientX - arrastre.x, dy = e.clientY - arrastre.y;
      if (!arrastre.mueve && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { arrastre.mueve = true; canvas.setPointerCapture(e.pointerId); }
      if (arrastre.mueve) { p = meta = Math.max(0, Math.min(4, arrastre.p - dx / (W * .45))); animar(); }
    }
  });
  canvas.addEventListener("pointerleave", () => { raton = null; flotante.classList.remove("visible"); animar(); });
  canvas.addEventListener("pointerdown", e => { arrastre = { x: e.clientX, y: e.clientY, p, mueve: false }; if (e.pointerType !== "mouse") { raton = local(e); animar(); } });
  function soltar() {
    if (!arrastre) return;
    const fue = arrastre.mueve; arrastre = null;
    if (fue) ir(Math.round(p));
    else ir(Math.round(meta) >= 4 ? 0 : Math.round(meta) + 1);
  }
  canvas.addEventListener("pointerup", e => { soltar(); if (e.pointerType !== "mouse") raton = null; });
  canvas.addEventListener("pointercancel", () => { arrastre = null; raton = null; ir(Math.round(p)); });

  medir();
  window.addEventListener("resize", () => { medir(); if (pedido) animar(); else { ultimo = 0; dibujar(performance.now()); } });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) animar(); }).observe(canvas);
  } else { visible = true; animar(); }
  visible = true; ultimo = 0; dibujar(performance.now()); // primer cuadro siempre dibujado
  visible = false;
})();


/* ════════ TRANSICIÓN: LA FRASE SE TEJE ════════
   Al desplazarse, cada palabra pasa de tenue a plena y un hilo se dibuja detrás.
   Al pasar el cursor (o tocar) "paisaje", "memoria" o "expresión", la palabra toma la caligrafía. */
(function () {
  const caja = document.getElementById("transicion"), frase = document.getElementById("transicion-frase");
  const camino = document.getElementById("hilo-camino");
  if (!caja || !frase) return;
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // envolver cada palabra
  const envolver = nodo => {
    [...nodo.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p));
          else { const s = document.createElement("span"); s.className = "w"; s.textContent = p; frag.appendChild(s); }
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.classList.contains("t-palabra")) { n.classList.add("w"); }
    });
  };
  envolver(frase);
  const palabras = [...frase.querySelectorAll(".w")];
  const largo = camino.getTotalLength();
  camino.style.strokeDasharray = largo; camino.style.strokeDashoffset = largo;
  function actualizar() {
    const r = frase.getBoundingClientRect(), h = window.innerHeight;
    // 0 cuando la frase entra por abajo, 1 cuando llega a un tercio de la pantalla
    let k = (h * .92 - r.top) / (h * .92 - h * .34);
    k = quieto ? 1 : Math.max(0, Math.min(1, k));
    const n = palabras.length;
    palabras.forEach((w, i) => {
      const local = Math.max(0, Math.min(1, k * (n + 3) - i));
      w.style.setProperty("--o", (.22 + .78 * local).toFixed(3));
    });
    camino.style.strokeDashoffset = (largo * (1 - k)).toFixed(1);
  }
  let pendiente = false;
  window.addEventListener("scroll", () => { if (!pendiente) { pendiente = true; requestAnimationFrame(() => { pendiente = false; actualizar(); }); } }, { passive: true });
  window.addEventListener("resize", actualizar);
  actualizar();
})();

/* ════════ FOTOS GIRATORIAS EN EL PROCESO ════════
   Cada grupo de fotos de un panel pasa solo, con fundido; se puede avanzar con flechas, puntos o deslizando. */
(function () {
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".panel .media").forEach(m => {
    const fotos = [...m.querySelectorAll(".slot")].filter(s => s.querySelector("img"));
    if (fotos.length < 2) return;
    m.classList.add("giratorio");
    let i = 0, timer = null;
    const puntos = document.createElement("div"); puntos.className = "giro-puntos";
    fotos.forEach((_, k) => { const b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", "Foto " + (k + 1)); b.addEventListener("click", () => { ir(k); reiniciar(); }); puntos.appendChild(b); });
    const ant = document.createElement("button"), sig = document.createElement("button");
    ant.className = "giro-flecha ant"; ant.type = "button"; ant.textContent = "←"; ant.setAttribute("aria-label", "Foto anterior");
    sig.className = "giro-flecha sig"; sig.type = "button"; sig.textContent = "→"; sig.setAttribute("aria-label", "Foto siguiente");
    ant.addEventListener("click", () => { ir(i - 1); reiniciar(); }); sig.addEventListener("click", () => { ir(i + 1); reiniciar(); });
    m.append(ant, sig, puntos);
    function ir(k) {
      i = (k + fotos.length) % fotos.length;
      fotos.forEach((f, n) => f.classList.toggle("activa", n === i));
      [...puntos.children].forEach((b, n) => b.setAttribute("aria-current", String(n === i)));
    }
    function reiniciar() { clearInterval(timer); if (!quieto) timer = setInterval(() => { if (!m.closest(".panel").hidden && !m.matches(":hover")) ir(i + 1); }, 4200); }
    let x0 = null;
    m.addEventListener("pointerdown", e => { x0 = e.clientX; });
    m.addEventListener("pointerup", e => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) { ir(i + (dx < 0 ? 1 : -1)); reiniciar(); } });
    ir(0); reiniciar();
  });
})();

/* ════════ HISTORIA DEL FIELTRO: RECORRIDO ════════ */
(function () {
  const caja = document.getElementById("hist"); if (!caja) return;
  const pasos = [...caja.querySelectorAll(".hist-paso")], caps = [...caja.querySelectorAll(".hist-cap")];
  const relleno = document.getElementById("hist-relleno"), cuenta = document.getElementById("hist-cuenta");
  const ant = document.getElementById("hist-ant"), sig = document.getElementById("hist-sig");
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, visto = false;
  function dibujar(cap) {
    cap.querySelectorAll(".trazo path").forEach((p, k) => {
      const L = p.getTotalLength();
      p.style.transition = "none"; p.style.strokeDasharray = L; p.style.strokeDashoffset = quieto ? 0 : L;
      p.getBoundingClientRect();
      if (!quieto) { p.style.transition = `stroke-dashoffset ${1.1 + L / 700}s cubic-bezier(.45,0,.2,1) ${k * .18}s`; p.style.strokeDashoffset = 0; }
    });
  }
  function ir(n) {
    i = Math.max(0, Math.min(caps.length - 1, n));
    caps.forEach((c, k) => { c.hidden = k !== i; c.classList.remove("entra"); });
    void caps[i].offsetWidth; caps[i].classList.add("entra");
    pasos.forEach((p, k) => { p.classList.toggle("activo", k === i); p.classList.toggle("hecho", k < i); p.setAttribute("aria-current", k === i ? "step" : "false"); });
    relleno.style.width = (i / (caps.length - 1) * 100) + "%";
    cuenta.textContent = "0" + (i + 1) + " / 0" + caps.length;
    ant.disabled = i === 0; sig.disabled = i === caps.length - 1;
    dibujar(caps[i]);
  }
  pasos.forEach((p, k) => p.addEventListener("click", () => ir(k)));
  ant.addEventListener("click", () => ir(i - 1)); sig.addEventListener("click", () => ir(i + 1));
  caja.addEventListener("keydown", e => { if (e.key === "ArrowRight") ir(i + 1); if (e.key === "ArrowLeft") ir(i - 1); });
  let x0 = null;
  caja.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  caja.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 45) ir(i + (dx < 0 ? 1 : -1)); });
  ir(0);
  // el primer dibujo se traza recién cuando el recorrido entra en pantalla
  if ("IntersectionObserver" in window && !quieto) {
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting && !visto) { visto = true; dibujar(caps[i]); o.disconnect(); } }, { threshold: .35 }).observe(caja);
  }
})();

/* Video del proceso (ventana emergente) */
(function () {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("video-proceso");
  const pendiente = document.getElementById("video-pendiente");
  const titulo = document.getElementById("video-modal-titulo");
  const cerrarBtn = modal.querySelector(".video-cerrar");
  let origen = null;
  function abrir(btn) {
    origen = btn;
    const src = btn.dataset.video;
    titulo.textContent = btn.dataset.titulo || "Proceso de la obra";
    if (src) {
      pendiente.hidden = true; video.hidden = false;
      if (video.getAttribute("src") !== src) { video.src = src; if (btn.dataset.poster) video.poster = btn.dataset.poster; }
    } else { video.hidden = true; pendiente.hidden = false; }
    modal.hidden = false; modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("video-activo");
    requestAnimationFrame(() => modal.classList.add("abierto"));
    cerrarBtn.focus({ preventScroll: true });
    if (src) { const p = video.play(); if (p && p.catch) p.catch(() => {}); }
  }
  function cerrar() {
    if (modal.hidden) return;
    video.pause();
    modal.classList.remove("abierto");
    document.body.classList.remove("video-activo");
    setTimeout(() => { modal.hidden = true; modal.setAttribute("aria-hidden", "true"); }, 280);
    if (origen) origen.focus({ preventScroll: true });
  }
  document.addEventListener("click", e => {
    const b = e.target.closest(".abrir-video");
    if (b) { abrir(b); return; }
    if (e.target.closest("[data-cerrar-video]")) cerrar();
  });
  document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (e.key === "Escape") { e.stopPropagation(); cerrar(); }
    if (e.key === "Tab") {
      const f = [...modal.querySelectorAll("button, video[controls]:not([hidden])")];
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  }, true);
})();


/* Cita de la artista: se escribe de a poco al entrar en pantalla */
(function () {
  const cita = document.getElementById("cita-artista");
  if (!cita || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const texto = cita.textContent.trim();
  cita.setAttribute("aria-label", texto);
  cita.textContent = "";
  cita.classList.add("escribiendo");
  const chars = [];
  const cont = document.createElement("span"); cont.setAttribute("aria-hidden", "true");
  texto.split(" ").forEach((w, i, arr) => {
    const pal = document.createElement("span"); pal.className = "pal";
    for (const c of w) { const s = document.createElement("span"); s.className = "ch"; s.textContent = c; pal.appendChild(s); chars.push(s); }
    cont.appendChild(pal);
    if (i < arr.length - 1) { const sp = document.createElement("span"); sp.className = "ch"; sp.textContent = " "; cont.appendChild(sp); chars.push(sp); }
  });
  const cursor = document.createElement("span"); cursor.className = "cursor-cita"; cursor.setAttribute("aria-hidden", "true");
  cita.appendChild(cont);
  let i = 0, empezado = false;
  function paso() {
    if (i >= chars.length) { setTimeout(() => cursor.remove(), 1600); return; }
    const c = chars[i++]; c.classList.add("on"); c.after(cursor);
    const ch = c.textContent;
    const pausa = /[.,;:]/.test(ch) ? 320 : ch === " " ? 30 : 22 + Math.random() * 20;
    setTimeout(paso, pausa);
  }
  const io = new IntersectionObserver(es => {
    if (empezado || !es.some(e => e.isIntersecting)) return;
    empezado = true; io.disconnect();
    cita.insertBefore(cursor, cont);
    setTimeout(paso, 450);
  }, { threshold: 0.6 });
  io.observe(cita);
})();

/* Servicios y montaje */
(function () {
  const lista = document.querySelector(".servicios-lista");
  if (lista) {
    if (!("IntersectionObserver" in window)) lista.classList.add("vista");
    else { const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { lista.classList.add("vista"); io.disconnect(); } }, { threshold: .3 }); io.observe(lista); }
  }
  const dibujo = document.querySelector(".montaje-dibujo"), nota = document.getElementById("montaje-nota");
  if (!dibujo) return;
  const NOTAS = {
    sola: "La obra se presenta suelta, colgada directamente sobre el muro.",
    marco: "La obra se monta dentro de un marco.",
    contramarco: "La obra se monta con contramarco, que la separa del marco y le da aire alrededor."
  };
  const botones = [...document.querySelectorAll("[data-montaje]")];
  function elegir(b) {
    botones.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    dibujo.dataset.modo = b.dataset.montaje;
    nota.textContent = NOTAS[b.dataset.montaje];
  }
  botones.forEach((b, i) => {
    b.addEventListener("click", () => elegir(b));
    b.addEventListener("keydown", e => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); const n = botones[(i + (e.key === "ArrowRight" ? 1 : botones.length - 1)) % botones.length]; n.focus(); elegir(n); }
    });
  });
})();

/* Consultar por un proyecto: elegir cómo escribir */
(function () {
  const btn = document.getElementById("escribir-btn"), menu = document.getElementById("escribir-menu"), copiar = document.getElementById("escribir-copiar");
  if (!btn) return;
  const correo = "kovac.studio@gmail.com";
  function abrir(si) { menu.hidden = !si; btn.setAttribute("aria-expanded", si); }
  btn.addEventListener("click", e => { e.stopPropagation(); abrir(menu.hidden); });
  document.addEventListener("click", e => { if (!menu.hidden && !e.target.closest("#escribir")) abrir(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) { abrir(false); btn.focus(); } });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => abrir(false)));
  copiar.addEventListener("click", async () => {
    let ok = false;
    try { await navigator.clipboard.writeText(correo); ok = true; } catch (e) {}
    if (!ok) { const ta = document.createElement("textarea"); ta.value = correo; document.body.appendChild(ta); ta.select(); try { ok = document.execCommand("copy"); } catch (e) {} ta.remove(); }
    copiar.textContent = ok ? "Dirección copiada ✓" : correo;
    setTimeout(() => { copiar.textContent = "Copiar la dirección"; }, 2200);
  });
})();

/* Servicios: acordeón */
(function () {
  const botones = [...document.querySelectorAll(".srv-boton")];
  botones.forEach((b, i) => {
    const li = b.closest("li"), panel = document.getElementById(b.getAttribute("aria-controls"));
    let t = null;
    b.addEventListener("click", () => {
      const abrir = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", abrir);
      clearTimeout(t);
      if (abrir) { panel.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => li.classList.add("abierto"))); }
      else { li.classList.remove("abierto"); t = setTimeout(() => { panel.hidden = true; }, 560); }
    });
    b.addEventListener("keydown", e => {
      let n = null;
      if (e.key === "ArrowDown") n = botones[(i + 1) % botones.length];
      if (e.key === "ArrowUp") n = botones[(i - 1 + botones.length) % botones.length];
      if (e.key === "Home") n = botones[0];
      if (e.key === "End") n = botones[botones.length - 1];
      if (n) { e.preventDefault(); n.focus(); }
    });
  });
})();

/* Serie de pequeños formatos: flechas y arrastre */
(function () {
  document.querySelectorAll(".serie").forEach(s => {
    const pista = s.querySelector(".serie-pista");
    const [ant, sig] = s.querySelectorAll(".serie-flecha");
    function estado() {
      const max = pista.scrollWidth - pista.clientWidth - 2;
      ant.disabled = pista.scrollLeft <= 2; sig.disabled = pista.scrollLeft >= max;
    }
    s.querySelectorAll(".serie-flecha").forEach(b => b.addEventListener("click", () => {
      pista.scrollBy({ left: Number(b.dataset.dir) * pista.clientWidth * 0.6, behavior: "smooth" });
    }));
    pista.addEventListener("scroll", estado, { passive: true });
    window.addEventListener("resize", estado);
    pista.querySelectorAll("img").forEach(im => { if (!im.complete) im.addEventListener("load", estado); });
    window.addEventListener("load", estado);
    requestAnimationFrame(estado);
    estado();
    // arrastrar con el mouse (en táctil se usa el deslizamiento nativo)
    let x0 = 0, s0 = 0, activo = false, movido = false;
    pista.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      activo = true; movido = false; x0 = e.clientX; s0 = pista.scrollLeft;
    });
    window.addEventListener("pointermove", e => {
      if (!activo) return;
      const dx = e.clientX - x0;
      if (!movido && Math.abs(dx) > 6) { movido = true; pista.classList.add("arrastrando"); }
      if (movido) pista.scrollLeft = s0 - dx;
    });
    window.addEventListener("pointerup", () => { if (!activo) return; activo = false; pista.classList.remove("arrastrando"); });
    pista.addEventListener("click", e => { if (movido) { e.stopPropagation(); e.preventDefault(); movido = false; } }, true);
  });
})();

/* Obras: ver más / ver menos */
(function () {
  const btn = document.getElementById("obras-mas"), lista = document.getElementById("obras-lista");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const abrir = lista.classList.contains("plegada");
    if (abrir) {
      lista.classList.remove("plegada");
      lista.querySelectorAll(".obra-extra").forEach(o => { o.classList.remove("revelar-pre"); o.classList.add("aparece", "revelar-ok"); });
      btn.textContent = "Ver menos";
      const primera = lista.querySelector(".obra-extra");
      if (primera) { const f = primera.querySelector("img"); if (f) f.focus({ preventScroll: true }); }
    } else {
      lista.classList.add("plegada");
      lista.querySelectorAll(".obra-extra").forEach(o => o.classList.remove("aparece"));
      btn.textContent = "Ver más obras";
      document.getElementById("obras").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    btn.setAttribute("aria-expanded", abrir);
  });
})();
