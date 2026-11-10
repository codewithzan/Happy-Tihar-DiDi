/* Tihar surprise — single-file JavaScript bundle. Edit the DATA section below to personalize. */

const { siteData: D } = (function(){
/* ==========================================================================
   data.js — EVERYTHING you may want to edit lives here.
   Change the words, photos, captions, letter and music path below.
   You never need to touch app.js to personalise this gift.

   Tip: the heart emoji (❤️) in any text is drawn as a small glowing heart.
   Every paragraph of the letter and the blessing is its own item in a list,
   so just add, remove or reword items.
   ========================================================================== */

const siteData = {
  /* ---------- General ---------- */
  meta: {
    pageTitle: "A Little Tihar Surprise for Didi",
    sisterName: "Didi",
    brotherSign: "Your Brother",
  },

  /* ---------- Screen 1 · Welcome ---------- */
  welcome: {
    title: "I made something special for you. SISTER!",
    button: "Open Your Surprise",
  },

  /* ---------- Screen 2 · Celebration ---------- */
  celebration: {
    eyebrow: "शुभ तिहार",
    title: "Happy Tihar, My Dear Didi!",
    message:
      "The moments we’ve shared during Tihar will always hold a special place in my heart. I wish we could celebrate together again, sharing the same happiness, laughter and warmth. Hopefully, life will bring us that chance someday. Until then, please know that you’re always missed and loved. ❤️",
    cue: "The moments we shared",
  },

  /* ---------- Screen 3 · Memories ----------
     HOW TO ADD YOUR REAL PHOTOS
       1. Copy your photos into:  public/assets/images/memories/
       2. Point "src" at each file (keep the "assets/..." part).
       3. Write a short caption and a description (alt) for each photo.
     Photos that can't be found show a soft "your photo goes here" frame,
     so nothing breaks while you are still collecting pictures.
     Add or remove items freely — the gallery adapts automatically.
     "rotate" tilts the polaroid (degrees). Set showPlaceholderHint to false
     to hide the "Your photo goes here" text on empty frames.            */
  memories: {
    eyebrow: "memories",
    title: "The Memories We Made",
    intro: "We may not have grown up together, but somehow, you became one of the most special people in my life. You are more than just a sister to me; you are someone I truly cherish. These photographs hold little pieces of happiness, laughter and beautiful memories that I wish I could experience again. I miss your kindness, your smile and simply having you around.",
    showPlaceholderHint: true,
    photos: [
      {
        src: "img/tihar02.jpeg",
        alt: "A photograph of a special moment we shared in Japan",
        caption: "The sister I found",
        category: "Our bond",
        rotate: -4,
      },
      {
        src: "img/fun.png",
        alt: "A funny moment we shared together",
        caption: "The laughter I miss",
        category: "Happy moments",
        rotate: 3,
      },
        {
    src: "img/tihar03.jpeg",
    alt: "A photograph from one of the Tihar celebrations we shared",
    caption: "One of our Tihars together",
    category: "Tihar memories",
    rotate: 4,
  },
      {
        src: "img/allofus.jpeg",
        alt: "A photograph from a day that felt like family",
        caption: "A little piece of home",
        category: "Together",
        rotate: -2,
      },
      {
        src: "img/tihar01.jpeg",
        alt: "A photograph of another special day we spent together",
        caption: "A moment worth keeping",
        category: "Special moments",
        rotate: -3,
      },
      {
        src: "img/smile.png",
        alt: "Another photograph",
        caption: "Tihar memories",
        category: "Our bond",
        rotate: 2,
      },
    ],
  },

  /* ---------- Screen 4 · The Letter ---------- */
  letter: {
    heading: "Something I wanted to tell you…",
    hint: "Tap to open it",
    envelopeLabel: "Open to read the letter",
    salutation: "My Dear Babita Didi,",
    paragraphs: [
      "Happy Tihar!",
      "Sometimes I think about how unexpectedly life brings people into our lives. We may not share the same childhood, but I’m grateful that our paths crossed. What started as a friendship slowly became something much more meaningful. You became the sister I never expected to find here, someone who makes a place far from home feel a little more like home. I’ll always be thankful to have you in my life. ❤️",
      "We have celebrated two Tihars together. They may seem like just two festivals, but to me, those moments mean so much. They gave me a feeling of home while I was far away from it.",
      "This Tihar, I feel your absence more than I can explain. You are the only family I have here in Japan, and I miss having you close. I miss your kindness, your care, your warm smile, your laughter, and the way you make ordinary moments feel special.",
      "I miss the little things too — talking with you, sharing a laugh, spending time together, and simply knowing you are nearby. Maybe I never say it enough, but your presence has made my life in Japan feel less lonely.",
      "I don't know when we will get the chance to celebrate Tihar together again, but I truly hope that day comes. I hope we get to sit together, enjoy the lights, share good food, laugh, and make more memories.",
      "Until then, please take care of yourself. I wish you happiness, good health, peace, and all the beautiful things you deserve.",
      "Thank you for becoming my sister. I am genuinely grateful that our paths crossed.",
    ],
    closing: "With lots of love,",
    signature: "Your Brother ❤️",
    cue: "A Bhai Tika wish",
  },

  /* ---------- Screen 5 · Bhai Tika ---------- */
  bhaiTika: {
    eyebrow: "भाइटीका",
    title: "A Special Bhai Tika Wish for You",
    salutation: "Dear Didi,",
    paragraphs: [
      "May this Tihar bring endless happiness, good health, peace, success, and beautiful moments into your life.",
      "May your smile always shine brighter than the lights of Tihar.",
      "You came into my life after I moved to Japan, but you made this place feel a little more like home.",
      "I hope we get another chance to celebrate Tihar together and create many more beautiful memories.",
    ],
    closing: "Lots of love and warm wishes, Didi!",
    /* One diya is lit for each wish (add or remove freely) */
    wishesIntro: "Light a diya for each wish",
    wishes: ["Happiness", "Good health", "Peace", "Success", "Beautiful moments"],
    lightButton: "Light a diya for Didi",
    lightButtonDone: "Every diya is lit",
    wishesDone: "Every diya is a wish, and every wish is for you.",
    cue: "With love, always",
  },


  /* ---------- Music ----------
     Put your instrumental file at public/assets/audio/tihar-instrumental.mp3
     If the file isn't there, the music controls simply stay hidden.        */
  music: {
    src: "music/Tihar.mp3",
    defaultVolume: 0.45,
  },
};

return {siteData};
})();

const { spriteSvg, hydrateDecor, diyaSvg, heartSvg } = (function(){
/* decor.js — hand-built SVG decorations (marigolds, diyas, rangoli, thali…) */

const pad = (n) => +n.toFixed(2);

/* Shared gradients and reusable shapes. Injected once into the page. */
function spriteSvg() {
  const ring = (n, d, rx, ry, fill, off = 0) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      s += `<ellipse cx="0" cy="${-d}" rx="${rx}" ry="${ry}" transform="rotate(${pad((360 / n) * i + off)})" fill="${fill}" stroke="rgba(140,55,0,.35)" stroke-width=".6"/>`;
    }
    return s;
  };
  return `
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <defs>
    <g id="marigold">
      ${ring(14, 18, 6.6, 12, "#ef8420")}
      ${ring(12, 13, 5.6, 10, "#f7a325", 15)}
      ${ring(9, 8.5, 4.6, 7.5, "#ffc43a", 8)}
      ${ring(6, 4.2, 3, 4.2, "#ffe07a", 20)}
      <circle r="3" fill="#b9560b"/>
    </g>
    <path id="leaf" d="M0 0C8-9 20-9 32 0C20 9 8 9 0 0Z" fill="#4f7a2c" stroke="#35571d" stroke-width=".8"/>
    <linearGradient id="g-clay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e0822f"/><stop offset="1" stop-color="#8a3a14"/>
    </linearGradient>
    <linearGradient id="g-flame" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#f07d12"/><stop offset=".55" stop-color="#ffb52e"/><stop offset="1" stop-color="#fff0a0"/>
    </linearGradient>
    <radialGradient id="g-glow">
      <stop offset="0" stop-color="#ffd36a" stop-opacity=".85"/>
      <stop offset=".4" stop-color="#ff9a2e" stop-opacity=".35"/>
      <stop offset="1" stop-color="#ff7a14" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="g-brass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f8d98a"/><stop offset=".6" stop-color="#d9a13a"/><stop offset="1" stop-color="#a9741f"/>
    </linearGradient>
    <linearGradient id="g-line-l" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2b632" stop-opacity="0"/><stop offset="1" stop-color="#f2b632"/>
    </linearGradient>
    <linearGradient id="g-line-r" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2b632"/><stop offset="1" stop-color="#f2b632" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="tika-clip"><rect width="154" height="26" rx="13"/></clipPath>
  </defs>
</svg>`;
}

/* ---------- Garlands ---------- */
function garlandSvg({ swags = 12, w = 2400, h = 100, flowers = 9, sag = 58, scale = 0.6 } = {}) {
  const sw = w / swags;
  let strings = "";
  let leaves = "";
  let blooms = "";
  for (let s = 0; s < swags; s++) {
    const x0 = s * sw;
    const x1 = x0 + sw;
    strings += `<path d="M${pad(x0)} 12Q${pad(x0 + sw / 2)} ${12 + 2 * sag} ${pad(x1)} 12" fill="none" stroke="#7a4a1a" stroke-width="1.6"/>`;
    for (let i = 0; i < flowers; i++) {
      const t = (i + 0.5) / flowers;
      const x = x0 + t * sw;
      const y = 12 + 4 * sag * t * (1 - t);
      const sc = scale * (0.88 + ((i * 7 + s * 3) % 5) * 0.06);
      const rot = (i * 37 + s * 13) % 360;
      leaves += `<use href="#leaf" transform="translate(${pad(x)} ${pad(y)}) rotate(${i % 2 ? 60 : 120}) scale(1.35)"/>`;
      blooms += `<use href="#marigold" transform="translate(${pad(x)} ${pad(y)}) rotate(${rot}) scale(${pad(sc)})"/>`;
    }
    blooms += `<use href="#marigold" transform="translate(${pad(x0)} 12) scale(${pad(scale * 1.05)})"/>`;
    blooms += `<circle cx="${pad(x0)}" cy="12" r="3.2" fill="#f2b632" stroke="#8a5a14" stroke-width=".8"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">${strings}${leaves}${blooms}</svg>`;
}

function strandSvg(len = 300) {
  const count = Math.floor((len - 20) / 21);
  let body = `<line x1="20" y1="0" x2="20" y2="${len}" stroke="#7a4a1a" stroke-width="1.6"/>`;
  for (let i = 0; i < count; i++) {
    const y = 18 + i * 21;
    body += `<use href="#leaf" transform="translate(20 ${y}) rotate(${i % 2 ? 20 : 160}) scale(1)"/>`;
  }
  for (let i = 0; i < count; i++) {
    const y = 18 + i * 21;
    body += `<use href="#marigold" transform="translate(20 ${y}) rotate(${(i * 41) % 360}) scale(.4)"/>`;
  }
  body += `<use href="#marigold" transform="translate(20 ${len - 10}) scale(.5)"/>`;
  return `<svg viewBox="0 0 40 ${len}" aria-hidden="true" focusable="false">${body}</svg>`;
}

/* ---------- Diya ---------- */
function diyaSvg({ lit = true } = {}) {
  const fd = (Math.random() * 3).toFixed(2);
  return `<svg class="diya${lit ? " is-lit" : ""}" viewBox="0 0 120 110" style="--fd:${fd}" aria-hidden="true" focusable="false">
  <circle class="diya__glow" cx="60" cy="38" r="62" fill="url(#g-glow)"/>
  <g class="diya__flame"><g class="diya__flick">
    <path d="M60 6C73 23 77 34 60 49C43 34 47 23 60 6Z" fill="url(#g-flame)"/>
    <path d="M60 26C67 34 68 41 60 48C52 41 53 34 60 26Z" fill="#fff4c8"/>
  </g></g>
  <rect x="58" y="45" width="4" height="9" rx="2" fill="#2b1810"/>
  <path d="M8 56C12 90 35 102 60 102C85 102 108 90 112 56C93 65 27 65 8 56Z" fill="url(#g-clay)"/>
  <ellipse cx="60" cy="56" rx="52" ry="10" fill="#7a3315"/>
  <ellipse class="diya__oil" cx="60" cy="57" rx="44" ry="7" fill="#f6b53a"/>
  <path d="M26 74C44 86 76 86 94 74" fill="none" stroke="#ffd97a" stroke-width="1.6" opacity=".7"/>
  <circle cx="34" cy="80" r="2.6" fill="#ffd97a"/><circle cx="60" cy="88" r="2.6" fill="#ffd97a"/><circle cx="86" cy="80" r="2.6" fill="#ffd97a"/>
</svg>`;
}

/* ---------- Rangoli ---------- */
function rangoliSvg() {
  const rot = (n, fn) => {
    let s = "";
    for (let i = 0; i < n; i++) s += `<g transform="rotate(${pad((360 / n) * i)})">${fn(i)}</g>`;
    return s;
  };
  const star = [];
  for (let i = 0; i < 16; i++) {
    const r = i % 2 ? 17 : 30;
    const a = (Math.PI * 2 * i) / 16 - Math.PI / 2;
    star.push(`${pad(Math.cos(a) * r)},${pad(Math.sin(a) * r)}`);
  }
  return `<svg viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
  <circle r="97" fill="none" stroke="#f2b632" stroke-width="1" stroke-dasharray="1 4.2" stroke-linecap="round"/>
  ${rot(36, () => `<circle cy="-91" r="2" fill="#fbf0dc"/>`)}
  ${rot(24, (i) => `<path d="M0-80C5-84 5-90 0-95C-5-90-5-84 0-80Z" fill="${i % 2 ? "#f08a24" : "#f2b632"}"/>`)}
  ${rot(16, () => `<path d="M0-44C13-56 14-74 0-84C-14-74-13-56 0-44Z" fill="#b3174f" stroke="#f2b632" stroke-width="1"/><path d="M0-54C5-60 5-69 0-75C-5-69-5-60 0-54Z" fill="#f08a24"/>`)}
  <circle r="46" fill="none" stroke="#f2b632" stroke-width="1.2"/>
  ${rot(16, () => `<circle cy="-40" r="2.2" fill="#fbf0dc"/>`)}
  ${rot(8, () => `<path d="M0-18C9-26 9-36 0-42C-9-36-9-26 0-18Z" fill="#f2b632" stroke="#7a1a2a" stroke-width=".8"/>`)}
  <polygon points="${star.join(" ")}" fill="#7a1a2a" stroke="#f2b632" stroke-width="1"/>
  <circle r="9" fill="#fbf0dc"/><circle r="5" fill="#f08a24"/><circle r="2" fill="#7a1a2a"/>
</svg>`;
}

/* ---------- Bhai Tika plate (thali) ---------- */
function thaliSvg() {
  const colors = ["#d62839", "#f5c518", "#3aa655", "#2d6fd6", "#8e3fb8", "#f58220", "#fff1e0"];
  let mounds = "";
  colors.forEach((c, i) => {
    const x = 84 + i * 32;
    const y = 112 + Math.sin((i / 6) * Math.PI) * 8;
    mounds += `<g transform="translate(${x} ${pad(y)})">
      <ellipse cy="7" rx="15" ry="5" fill="${c}" opacity=".55"/>
      <path d="M-14 6Q-12-15 0-17Q12-15 14 6Z" fill="${c}"/>
      <path d="M-7 -2Q-5-11 0-12" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>
    </g>`;
  });
  let ringFlowers = "";
  const n = 12;
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n;
    const x = 180 + Math.cos(a) * 127;
    const y = 150 + Math.sin(a) * 61;
    ringFlowers += `<use href="#marigold" transform="translate(${pad(x)} ${pad(y)}) rotate(${i * 30}) scale(.36)"/>`;
  }
  const walnut = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${(x * 7) % 40})">
    <circle r="${r}" fill="#8b5a2b" stroke="#5a3513" stroke-width="1.2"/>
    <path d="M0 ${-r}C-3 -3 3 3 0 ${r}" fill="none" stroke="#5a3513" stroke-width="1.2"/>
    <path d="M${-r * 0.6} ${-r * 0.3}Q${-r * 0.2} ${-r * 0.7} ${r * 0.2} ${-r * 0.6}" fill="none" stroke="#c99a62" stroke-width="1.4" stroke-linecap="round"/></g>`;
  const diya = diyaSvg({ lit: true }).replace("<svg ", '<svg x="141" y="150" width="78" height="72" ');
  return `<svg viewBox="0 0 360 250" aria-hidden="true" focusable="false">
  <ellipse cx="180" cy="224" rx="156" ry="18" fill="rgba(0,0,0,.28)"/>
  <ellipse cx="180" cy="150" rx="168" ry="88" fill="url(#g-brass)" stroke="#8a5a14" stroke-width="2"/>
  <ellipse cx="180" cy="152" rx="146" ry="72" fill="#7a1a2a" stroke="#f2b632" stroke-width="1.5"/>
  <ellipse cx="180" cy="152" rx="130" ry="63" fill="none" stroke="#f2b632" stroke-width="1" stroke-dasharray="2 5" stroke-linecap="round"/>
  ${ringFlowers}
  ${mounds}
  ${walnut(104, 172, 11)}${walnut(124, 184, 10)}${walnut(92, 190, 9)}
  <use href="#marigold" transform="translate(250 178) rotate(10) scale(.62)"/>
  <use href="#marigold" transform="translate(274 164) rotate(40) scale(.5)"/>
  <use href="#leaf" transform="translate(234 186) rotate(150) scale(.9)"/>
  ${diya}
</svg>`;
}

function ornamentSvg() {
  return `<svg viewBox="0 0 260 28" aria-hidden="true" focusable="false">
  <rect x="0" y="13" width="104" height="1.6" fill="url(#g-line-l)"/>
  <rect x="156" y="13" width="104" height="1.6" fill="url(#g-line-r)"/>
  <path d="M112 14l4-4 4 4-4 4z M140 14l4-4 4 4-4 4z" fill="#f2b632"/>
  <use href="#marigold" transform="translate(130 14) scale(.4)"/>
</svg>`;
}

function tikaBandSvg() {
  const colors = ["#d62839", "#f58220", "#f5c518", "#3aa655", "#2d6fd6", "#8e3fb8", "#fff1e0"];
  const bands = colors.map((c, i) => `<rect x="${i * 22}" width="22" height="26" fill="${c}"/>`).join("");
  return `<svg viewBox="0 0 154 26" aria-hidden="true" focusable="false"><g clip-path="url(#tika-clip)">${bands}</g><rect x=".75" y=".75" width="152.5" height="24.5" rx="12.25" fill="none" stroke="#b8862b" stroke-width="1.5"/></svg>`;
}

function cornerSvg() {
  return `<svg viewBox="0 0 80 80" aria-hidden="true" focusable="false">
  <path d="M6 76C6 32 32 6 76 6" fill="none" stroke="#b8862b" stroke-width="1.6"/>
  <path d="M14 76C14 40 40 14 76 14" fill="none" stroke="#b8862b" stroke-width=".8" opacity=".7"/>
  <use href="#leaf" transform="translate(30 30) rotate(-135) scale(.8)"/>
  <use href="#marigold" transform="translate(20 20) scale(.5)"/>
  <use href="#marigold" transform="translate(52 12) scale(.26)"/>
  <use href="#marigold" transform="translate(12 52) scale(.26)"/>
</svg>`;
}

function heartSvg(cls = "heart") {
  return `<svg class="${cls}" viewBox="0 0 24 24" role="img" aria-label="love"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2 0 3.6 1.1 5.4 3.2 1.8-2.1 3.4-3.2 5.4-3.2 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z"/></svg>`;
}

function diyaRow() {
  const sizes = [0.72, 0.95, 1.2, 0.95, 0.72];
  return sizes
    .map((s) => `<span class="diya-row__item" style="--sz:${s}">${diyaSvg({ lit: true })}</span>`)
    .join("");
}

function bokehHtml() {
  let s = "";
  for (let i = 0; i < 11; i++) {
    const size = 60 + ((i * 53) % 140);
    const x = (i * 29 + 7) % 100;
    const y = (i * 47 + 11) % 100;
    const dur = 16 + ((i * 7) % 12);
    const hue = i % 3 === 0 ? "255,200,90" : i % 3 === 1 ? "255,140,50" : "255,170,70";
    s += `<span style="--x:${x}%;--y:${y}%;--s:${size}px;--dur:${dur}s;--del:${-i * 2.3}s;--c:${hue}"></span>`;
  }
  return s;
}

const BUILDERS = {
  garland: () => garlandSvg(),
  "garland-short": () => garlandSvg({ swags: 4, w: 800, flowers: 8 }),
  strand: (el) => strandSvg(Number(el.dataset.len) || 300),
  rangoli: rangoliSvg,
  thali: thaliSvg,
  ornament: ornamentSvg,
  "tika-band": tikaBandSvg,
  corner: cornerSvg,
  diya: (el) => diyaSvg({ lit: el.dataset.lit !== "false" }),
  "diya-row": diyaRow,
  bokeh: bokehHtml,
};

function hydrateDecor(root = document) {
  root.querySelectorAll("[data-decor]").forEach((el) => {
    const build = BUILDERS[el.dataset.decor];
    if (build && !el.dataset.ready) {
      el.innerHTML = build(el);
      el.dataset.ready = "1";
    }
  });
}

return {spriteSvg, hydrateDecor, diyaSvg, heartSvg};
})();

const { createAmbient } = (function(){
/* effects.js — one lightweight canvas for golden lights, falling petals and sparks */

const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);

const MODES = {
  off: { dots: 0, petals: 0 },
  welcome: { dots: 34, petals: 0 },
  soft: { dots: 24, petals: 7 },
  celebrate: { dots: 34, petals: 22 },
};
const PETAL_COLORS = ["#f4a21c", "#f08a24", "#ffc83d", "#e8741a", "#ffb347"];

function createAmbient(canvas, { isReduced }) {
  const ctx = canvas.getContext("2d");
  let w = 0;
  let h = 0;
  let scale = 1;
  let dots = [];
  let petals = [];
  let sparks = [];
  let mode = "welcome";
  let raf = 0;
  let last = 0;
  let time = 0;

  const glow = (() => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,238,170,1)");
    gr.addColorStop(0.25, "rgba(255,200,80,.6)");
    gr.addColorStop(1, "rgba(255,170,40,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
    return c;
  })();

  const newDot = (initial) => ({
    x: rnd(0, w),
    y: initial ? rnd(0, h) : h + rnd(10, 60),
    r: rnd(5, 14),
    vy: rnd(8, 22),
    ph: rnd(0, TAU),
    sp: rnd(0.5, 1.4),
    a: rnd(0.35, 0.9),
  });
  const newPetal = (initial) => ({
    x: rnd(0, w),
    y: initial ? rnd(-h * 0.2, h) : rnd(-60, -10),
    s: rnd(7, 13),
    vy: rnd(28, 60),
    sway: rnd(15, 40),
    ph: rnd(0, TAU),
    sp: rnd(0.6, 1.4),
    rot: rnd(0, TAU),
    vr: rnd(-1.5, 1.5),
    flip: rnd(0, TAU),
    c: PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0],
  });

  function resize() {
    const nw = window.innerWidth;
    const nh = window.innerHeight;
    if (nw === w && Math.abs(nh - h) < 140) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = nw;
    h = nh;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scale = Math.min(1, Math.max(0.45, w / 1100));
    if (isReduced()) draw();
  }

  function counts() {
    const m = MODES[mode];
    return { d: Math.round(m.dots * scale), p: Math.round(m.petals * scale) };
  }

  function update(dt) {
    const { d, p } = counts();
    for (let i = dots.length - 1; i >= 0; i--) {
      const o = dots[i];
      o.y -= o.vy * dt;
      o.x += Math.sin(time * 0.5 + o.ph) * 8 * dt;
      if (o.y < -30) {
        if (dots.length > d) dots.splice(i, 1);
        else dots[i] = newDot(false);
      }
    }
    for (let i = petals.length - 1; i >= 0; i--) {
      const o = petals[i];
      o.y += o.vy * dt;
      o.x += Math.sin(time * o.sp + o.ph) * o.sway * dt;
      o.rot += o.vr * dt;
      o.flip += dt * 2;
      if (o.y > h + 30) {
        if (petals.length > p) petals.splice(i, 1);
        else petals[i] = newPetal(false);
      }
    }
    for (let i = sparks.length - 1; i >= 0; i--) {
      const o = sparks[i];
      o.life -= dt;
      if (o.life <= 0) {
        sparks.splice(i, 1);
        continue;
      }
      o.vx *= 0.985;
      o.vy = o.vy * 0.985 + 150 * dt;
      o.x += o.vx * dt;
      o.y += o.vy * dt;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const o of dots) {
      ctx.globalAlpha = o.a * (0.6 + 0.4 * Math.sin(time * o.sp + o.ph));
      ctx.drawImage(glow, o.x - o.r, o.y - o.r, o.r * 2, o.r * 2);
    }
    for (const o of petals) {
      ctx.save();
      ctx.translate(o.x, o.y);
      ctx.rotate(o.rot);
      ctx.scale(1, 0.35 + 0.65 * Math.abs(Math.cos(o.flip)));
      ctx.globalAlpha = 0.82;
      ctx.fillStyle = o.c;
      ctx.beginPath();
      ctx.ellipse(0, 0, o.s * 0.5, o.s, 0, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
    for (const o of sparks) {
      const k = o.life / o.max;
      ctx.globalAlpha = Math.min(1, k * 1.6);
      const r = o.r * (0.5 + k);
      ctx.drawImage(glow, o.x - r, o.y - r, r * 2, r * 2);
    }
    ctx.globalAlpha = 1;
  }

  function tick(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt;
    update(dt);
    draw();
    raf = requestAnimationFrame(tick);
  }

  function start() {
    if (isReduced() || raf || document.hidden) return;
    last = performance.now();
    raf = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  function setMode(name) {
    if (!MODES[name]) return;
    mode = name;
    const { d, p } = counts();
    const firstPetals = petals.length === 0;
    while (dots.length < d) dots.push(newDot(true));
    while (petals.length < p) petals.push(newPetal(firstPetals));
    if (isReduced()) draw();
    else start();
  }

  /* Burst of golden sparks, e.g. when the gift opens */
  function burst(x, y, { count = 70, power = 1 } = {}) {
    if (isReduced()) return;
    const n = Math.round(count * Math.max(0.55, scale));
    for (let i = 0; i < n; i++) {
      const a = rnd(0, TAU);
      const sp = rnd(80, 380) * power;
      sparks.push({
        x,
        y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 120 * power,
        life: rnd(1.4, 2.6),
        max: 2.6,
        r: rnd(5, 13),
      });
    }
    start();
  }

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener?.("change", () => {
    if (mq.matches) {
      stop();
      sparks = [];
      draw();
    } else start();
  });

  resize();
  setMode("welcome");

  return { setMode, burst };
}

return {createAmbient};
})();

const { initMusic } = (function(){
/* music.js — optional background music. Never autoplays; hides itself if the file is missing. */

function initMusic(cfg = {}) {
  const root = document.getElementById("music");
  const playBtn = document.getElementById("music-play");
  const muteBtn = document.getElementById("music-mute");
  const vol = document.getElementById("music-volume");
  if (!root || !playBtn || !muteBtn || !vol || !cfg.src) {
    root?.setAttribute("hidden", "");
    return { startFromGesture() {}, available: false };
  }

  const audio = new Audio();
  audio.loop = true;
  audio.preload = "metadata";
  audio.volume = cfg.defaultVolume ?? 0.45;
  vol.value = String(Math.round(audio.volume * 100));

  let available = true;
  let userPaused = false;

  function ui() {
    const playing = !audio.paused;
    playBtn.setAttribute("aria-pressed", String(playing));
    playBtn.setAttribute("aria-label", playing ? "Pause music" : "Play music");
    playBtn.classList.toggle("is-playing", playing);
    const silent = audio.muted || audio.volume === 0;
    muteBtn.setAttribute("aria-pressed", String(audio.muted));
    muteBtn.setAttribute("aria-label", audio.muted ? "Unmute music" : "Mute music");
    muteBtn.classList.toggle("is-muted", silent);
  }

  function show() {
    if (available) root.removeAttribute("hidden");
  }

  function disable() {
    if (!available) return;
    available = false;
    root.setAttribute("hidden", "");
    audio.pause();
    console.info(
      `[Tihar surprise] No music found at "${cfg.src}". Add an mp3 there to enable the music controls.`,
    );
  }

  function play() {
    if (!available) return;
    const p = audio.play();
    if (p && typeof p.then === "function") {
      p.then(ui).catch((err) => {
        if (err && err.name === "NotSupportedError") disable();
        ui();
      });
    }
    ui();
  }

  audio.addEventListener("error", disable);
  audio.addEventListener("loadedmetadata", show);
  audio.addEventListener("canplay", show);
  audio.addEventListener("play", ui);
  audio.addEventListener("pause", ui);
  audio.src = cfg.src;

  /* Some phones defer loading until the first tap: show controls unless it clearly failed */
  setTimeout(() => {
    if (available && !audio.error && audio.networkState !== HTMLMediaElement.NETWORK_NO_SOURCE) show();
  }, 2000);

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      userPaused = false;
      play();
    } else {
      userPaused = true;
      audio.pause();
    }
  });

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    ui();
  });

  vol.addEventListener("input", () => {
    audio.volume = Number(vol.value) / 100;
    if (audio.volume > 0 && audio.muted) audio.muted = false;
    ui();
  });

  ui();

  return {
    /* Called right after the user taps "Open Your Surprise" (a real user gesture) */
    startFromGesture() {
      if (available && !userPaused && audio.paused) {
        show();
        play();
      }
    },
    get available() {
      return available;
    },
  };
}

return {initMusic};
})();

const { renderGallery } = (function(){
/* gallery.js — scrapbook polaroids, missing-photo fallbacks and the lightbox viewer */

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const FRAME_ICON = `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><rect x="8" y="12" width="48" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="23" cy="26" r="5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M10 48l15-14 10 9 8-7 11 10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

function placeholderHtml(photo, showHint) {
  return `<span class="photo-placeholder" role="img" aria-label="${esc(photo.alt)} (photo not added yet)">
    ${FRAME_ICON}
    ${showHint ? `<span class="photo-placeholder__text">Your photo goes here</span><small>${esc(photo.src)}</small>` : ""}
  </span>`;
}

function renderGallery(listEl, cfg, lightbox) {
  const photos = cfg.photos || [];
  const showHint = cfg.showPlaceholderHint !== false;
  const missing = new Array(photos.length).fill(false);

  listEl.innerHTML = photos
    .map(
      (p, i) => `
    <li class="polaroid" style="--rot:${Number(p.rotate) || 0}deg;--d:${(i % 3) * 0.14}s">
      <span class="polaroid__tape">${esc(p.category || "")}</span>
      <figure class="polaroid__frame">
        <button type="button" class="polaroid__photo" data-open="${i}" aria-label="View larger: ${esc(p.caption)}">
          <img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" decoding="async" width="600" height="600">
        </button>
        <figcaption class="polaroid__caption">${esc(p.caption)}</figcaption>
      </figure>
    </li>`,
    )
    .join("");

  listEl.querySelectorAll(".polaroid").forEach((li, i) => {
    const img = li.querySelector("img");
    const markMissing = () => {
      if (missing[i]) return;
      missing[i] = true;
      const btn = li.querySelector(".polaroid__photo");
      btn.classList.add("is-missing");
      img.replaceWith(Object.assign(document.createElement("span"), { innerHTML: placeholderHtml(photos[i], showHint) }).firstElementChild);
    };
    img.addEventListener("error", markMissing, { once: true });
    img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
    if (img.complete) {
      if (img.naturalWidth === 0) markMissing();
      else img.classList.add("is-loaded");
    }
  });

  /* ---------- Lightbox ---------- */
  const dlg = lightbox.dialog;
  let current = 0;
  let opener = null;

  function show(i) {
    current = (i + photos.length) % photos.length;
    const p = photos[current];
    lightbox.media.innerHTML = missing[current]
      ? placeholderHtml(p, showHint)
      : `<img src="${esc(p.src)}" alt="${esc(p.alt)}" decoding="async">`;
    const img = lightbox.media.querySelector("img");
    img?.addEventListener(
      "error",
      () => {
        missing[current] = true;
        lightbox.media.innerHTML = placeholderHtml(p, showHint);
      },
      { once: true },
    );
    lightbox.caption.textContent = p.caption;
    lightbox.tag.textContent = p.category || "";
    lightbox.count.textContent = `${current + 1} / ${photos.length}`;
  }

  function open(i, trigger) {
    opener = trigger;
    show(i);
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
    document.documentElement.classList.add("no-scroll");
  }

  function close() {
    if (dlg.open) dlg.close();
  }

  dlg.addEventListener("close", () => {
    document.documentElement.classList.remove("no-scroll");
    opener?.focus?.({ preventScroll: true });
  });

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) open(Number(btn.dataset.open), btn);
  });
  lightbox.prev.addEventListener("click", () => show(current - 1));
  lightbox.next.addEventListener("click", () => show(current + 1));
  lightbox.close.addEventListener("click", close);
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) close();
  });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  let startX = 0;
  dlg.addEventListener("touchstart", (e) => (startX = e.changedTouches[0].clientX), { passive: true });
  dlg.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 60) show(current + (dx < 0 ? 1 : -1));
    },
    { passive: true },
  );
}

return {renderGallery};
})();

(function(){
/* app.js — wires everything together: gift, transitions, envelope, gallery, music, scroll effects.
   All wording and photos come from data.js. */






/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
const isReduced = () => reducedMq.matches;
const sleep = (ms) => new Promise((r) => setTimeout(r, isReduced() ? Math.min(ms, 40) : ms));
const get = (obj, path) => path.split(".").reduce((a, k) => (a == null ? a : a[k]), obj);
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
/* Escape text, then turn any heart emoji into a drawn SVG heart */
const rich = (s = "") => esc(s).replace(/\u2764\uFE0F?/g, heartSvg());

function scrollToEl(el) {
  el?.scrollIntoView({ behavior: isReduced() ? "auto" : "smooth", block: "start" });
}

/* ---------- elements ---------- */
const body = document.body;
const welcome = $("#welcome");
const main = $("#experience");
const gift = $("#gift");
const openBtn = $("#open-gift");

/* ---------- setup: text, decorations, dynamic sections ---------- */
document.title = D.meta.pageTitle;
document.body.insertAdjacentHTML("afterbegin", spriteSvg());

$$("[data-text]").forEach((el) => {
  const v = get(D, el.dataset.text);
  if (typeof v === "string") el.textContent = v;
});

function renderLetter() {
  const L = D.letter;
  const paras = L.paragraphs.map((p, i) => `<p class="letter__line" style="--i:${i + 1}">${rich(p)}</p>`).join("");
  $("#letter-paper").innerHTML = `
    <p class="letter__salutation letter__line" style="--i:0">${rich(L.salutation)}</p>
    ${paras}
    <p class="letter__closing letter__line" style="--i:${L.paragraphs.length + 1}">${rich(L.closing)}</p>
    <p class="letter__signature letter__line" style="--i:${L.paragraphs.length + 2}">${rich(L.signature)}</p>`;
  $("#envelope").setAttribute("aria-label", L.envelopeLabel);
}

function renderBlessing() {
  const B = D.bhaiTika;
  $("#blessing-text").innerHTML = `
    <p class="blessing__salutation">${rich(B.salutation)}</p>
    ${B.paragraphs.map((p) => `<p>${rich(p)}</p>`).join("")}
    <p class="blessing__closing">${rich(B.closing)}</p>`;
}

function renderWishes() {
  $("#wishes").innerHTML = D.bhaiTika.wishes
    .map(
      (w) => `<li><button class="wish" type="button" aria-pressed="false">
        <span class="wish__diya">${diyaSvg({ lit: false })}</span>
        <span class="wish__label">${esc(w)}</span>
      </button></li>`,
    )
    .join("");
}

renderLetter();
renderBlessing();
renderWishes();
hydrateDecor();

renderGallery($("#gallery"), D.memories, {
  dialog: $("#lightbox"),
  media: $("#lb-media"),
  caption: $("#lb-caption"),
  tag: $("#lb-tag"),
  count: $("#lb-count"),
  prev: $("#lb-prev"),
  next: $("#lb-next"),
  close: $("#lb-close"),
});

/* ---------- ambient canvas + music ---------- */
const ambient = createAmbient($("#ambient"), { isReduced });
const music = initMusic(D.music);

/* ---------- SCREEN 1: gift opening ---------- */
let giftOpened = false;

async function openGift() {
  if (giftOpened) return;
  giftOpened = true;
  openBtn.disabled = true;
  welcome.classList.add("is-opening");
  music.startFromGesture(); // a real tap, so audio is allowed

  // 1. the ribbon dances and unties
  gift.classList.add("is-untie");
  await sleep(1300);

  // 2. the box opens and golden light escapes
  gift.classList.add("is-open");
  let r = gift.getBoundingClientRect();
  ambient.burst(r.left + r.width / 2, r.top + r.height * 0.35, { count: 90 });
  await sleep(1700);

  // 3. cinematic bloom
  r = gift.getBoundingClientRect();
  ambient.burst(r.left + r.width / 2, r.top + r.height * 0.3, { count: 130, power: 1.4 });
  welcome.classList.add("is-leaving");
  await sleep(1100);

  // 4. reveal the celebration underneath, fade the welcome away
  revealMain();
  welcome.classList.add("is-gone");
  await sleep(1600);
  welcome.hidden = true;
}

function revealMain() {
  main.hidden = false;
  main.inert = false;
  body.classList.remove("is-locked");
  window.scrollTo({ top: 0, behavior: "instant" });
  ambient.setMode("celebrate");
  $("#celebrate-title")?.focus({ preventScroll: true });
}

openBtn.addEventListener("click", openGift);

/* ---------- scroll cues ---------- */
$$("[data-scroll-to]").forEach((btn) =>
  btn.addEventListener("click", () => scrollToEl($(btn.dataset.scrollTo))),
);

/* ---------- reveal on scroll ---------- */
const revealIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        revealIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
);
$$(".reveal, .polaroid, .letter-stage, .wishes").forEach((el) => revealIO.observe(el));

/* ---------- subtle pointer depth for desktop photo cards ----------
   Touch screens and reduced-motion users keep the simple, stable layout. */
if (!isReduced() && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  $$(".polaroid").forEach((card) => {
    const frame = $(".polaroid__frame", card);
    if (!frame) return;
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => {
      frame.style.transform = "";
    });
  });
}

/* ---------- ambient mood follows the section in view ---------- */
const moodIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !main.hidden) ambient.setMode(e.target.dataset.ambient);
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
);
$$("[data-ambient]").forEach((s) => moodIO.observe(s));

/* ---------- scroll progress + gentle parallax ---------- */
const bar = $("#progress-bar");
const parallaxEls = $$("[data-parallax]");
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    if (!isReduced()) {
      parallaxEls.forEach((el) => {
        const rect = el.parentElement.getBoundingClientRect();
        if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
          el.style.setProperty("--py", `${(-rect.top * Number(el.dataset.parallax)).toFixed(1)}px`);
        }
      });
    }
    ticking = false;
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- SCREEN 4: envelope ---------- */
const envelope = $("#envelope");
const envelopeWrap = $("#envelope-wrap");
const paper = $("#letter-paper");
let letterOpened = false;

async function openLetter() {
  if (letterOpened) return;
  letterOpened = true;
  envelope.setAttribute("aria-expanded", "true");
  envelope.classList.add("is-open");
  envelopeWrap.classList.add("is-opening");
  $("#envelope-hint").classList.add("is-hidden");
  await sleep(2100);
  envelopeWrap.classList.add("is-gone");
  await sleep(650);
  envelopeWrap.hidden = true;
  paper.hidden = false;
  requestAnimationFrame(() => {
    paper.classList.add("is-written");
    paper.focus({ preventScroll: true });
    paper.scrollIntoView({ behavior: isReduced() ? "auto" : "smooth", block: "start" });
  });
  const r = paper.getBoundingClientRect();
  ambient.burst(r.left + r.width / 2, Math.max(120, r.top + 80), { count: 40, power: 0.8 });
}
envelope.addEventListener("click", openLetter);

/* ---------- SCREEN 5: light a diya for each wish ---------- */
const wishBtns = $$(".wish");
const lightBtn = $("#light-diya");
const wishesDone = $("#wishes-done");

function lightWish(btn) {
  if (btn.getAttribute("aria-pressed") === "true") return;
  btn.setAttribute("aria-pressed", "true");
  $(".diya", btn).classList.add("is-lit");
  const r = btn.getBoundingClientRect();
  ambient.burst(r.left + r.width / 2, r.top + r.height * 0.25, { count: 22, power: 0.55 });
  if (wishBtns.every((b) => b.getAttribute("aria-pressed") === "true")) {
    lightBtn.disabled = true;
    $("span", lightBtn).textContent = D.bhaiTika.lightButtonDone;
    wishesDone.textContent = D.bhaiTika.wishesDone;
    wishesDone.classList.add("is-in");
  }
}
wishBtns.forEach((b) => b.addEventListener("click", () => lightWish(b)));
lightBtn.addEventListener("click", () => {
  const next = wishBtns.find((b) => b.getAttribute("aria-pressed") !== "true");
  if (next) lightWish(next);
});

/* ---------- keyboard nicety: Escape never traps focus; nothing else needed ---------- */
console.info("[Tihar surprise] Edit the DATA section at the top of app.js to change photos, letter and messages. ❤");

})();
