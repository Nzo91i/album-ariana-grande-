/* ==========================================================
   script.js – effets communs à toutes les pages
   ========================================================== */
(() => {
  const root = document.documentElement;
  root.classList.add("js");

  // Charge les feuilles de style supplémentaires automatiquement
  ["extra.css", "extra2.css"].forEach((href) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = href;
    document.head.appendChild(css);
  });

  // Icône de l'onglet et couleur du navigateur
  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.href = "data:image/svg+xml," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎵</text></svg>');
  document.head.appendChild(icon);
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = "#0b0b12";
  document.head.appendChild(meta);

  // Thème clair / sombre (choix mémorisé)
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const applyTheme = (t) => {
    root.dataset.theme = t;
    meta.content = t === "light" ? "#f7f3fb" : "#0b0b12";
  };
  applyTheme(store.get("ag-theme") === "light" ? "light" : "dark");

  // Préférences : moins d'animations / écran tactile
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mouse = matchMedia("(pointer: fine)").matches;

  // Couleurs propres à chaque album
  const THEMES = {
    "yours-truly":      ["#f08fb8", "#b98fd1"],
    "my-everything":    ["#9aa5b1", "#e6e6e6"],
    "dangerous-woman":  ["#ff3b6b", "#b0b0b0"],
    "sweetener":        ["#4fc3f7", "#84fab0"],
    "thank-u-next":     ["#ff6fb1", "#ffd1e8"],
    "positions":        ["#9b6bd6", "#e0a96d"],
    "eternal-sunshine": ["#7fa8ff", "#cfe0ff"],
    "petal":            ["#8fcf9a", "#f2e6c8"]
  };
  const setTheme = (key) => {
    const t = THEMES[key];
    if (!t) return;
    root.style.setProperty("--accent", t[0]);
    root.style.setProperty("--accent2", t[1]);
  };
  const resetTheme = () => {
    root.style.removeProperty("--accent");
    root.style.removeProperty("--accent2");
  };

  // Page d'un album : toute la page prend les couleurs de l'album
  const albumKey = new URLSearchParams(location.search).get("album");
  if (albumKey) setTheme(albumKey);

  // Logo animé dans l'en-tête
  const header = document.querySelector("header");
  if (header && !header.querySelector(".brand")) {
    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = "index.html";
    brand.innerHTML = '<span class="eq"><i></i><i></i><i></i><i></i></span>Ariana';
    header.prepend(brand);
  }

  // Menus complets (haut et bas de page)
  const pages = [
    ["index.html", "Accueil"],
    ["albums.html", "Albums"],
    ["musique.html", "Musique"],
    ["anecdotes.html", "Anecdotes"],
    ["bio.html", "Bio"],
    ["quiz.html", "Quiz"],
    ["favoris.html", "♥ Favoris"],
    ["playlist.html", "Playlist"]
  ];
  const current = location.pathname.split("/").pop() || "index.html";

  function buildMenu(nav, withActive) {
    let ul = nav.querySelector("ul");
    if (!ul) { ul = document.createElement("ul"); nav.appendChild(ul); }
    ul.innerHTML = pages.map(([href, label]) => {
      const active = withActive &&
        (href === current || (current === "tracklist.html" && href === "albums.html"));
      return '<li><a href="' + href + '"' + (active ? ' class="active"' : "") + ">" + label + "</a></li>";
    }).join("");
  }
  document.querySelectorAll("header nav").forEach((n) => buildMenu(n, true));
  const footer = document.querySelector("footer");
  if (footer) {
    let fnav = footer.querySelector("nav");
    if (!fnav) {
      fnav = document.createElement("nav");
      fnav.setAttribute("aria-label", "Navigation du pied de page");
      footer.appendChild(fnav);
    }
    buildMenu(fnav, false);
  }

  // Bouton thème clair / sombre dans l'en-tête
  if (header) {
    const tb = document.createElement("button");
    tb.type = "button";
    tb.className = "themebtn";
    const upd = () => {
      const light = root.dataset.theme === "light";
      tb.textContent = light ? "🌙" : "☀️";
      tb.setAttribute("aria-label", light ? "Passer au thème sombre" : "Passer au thème clair");
    };
    upd();
    tb.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(next); store.set("ag-theme", next); upd();
    });
    header.appendChild(tb);
  }

  // Lien d'accès rapide au contenu
  const mainEl = document.querySelector("main");
  if (mainEl) {
    mainEl.id = "contenu";
    const skip = document.createElement("a");
    skip.className = "skip";
    skip.href = "#contenu";
    skip.textContent = "Aller au contenu";
    document.body.prepend(skip);
  }

  // Barre de progression + bouton retour en haut
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.appendChild(bar);

  const toTop = document.createElement("button");
  toTop.className = "totop";
  toTop.type = "button";
  toTop.setAttribute("aria-label", "Retour en haut");
  toTop.textContent = "↑";
  toTop.onclick = () => window.scrollTo({ top: 0, behavior: calm ? "auto" : "smooth" });
  document.body.appendChild(toTop);

  addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    toTop.classList.toggle("show", scrollY > 500);
    if (header) header.classList.toggle("scrolled", scrollY > 40);
  }, { passive: true });

  // Halo qui suit la souris
  if (mouse && !calm) {
    const glow = document.createElement("div");
    glow.className = "glow";
    document.body.appendChild(glow);
    addEventListener("pointermove", (e) => {
      glow.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
    }, { passive: true });
  }

  // Étincelles au clic
  if (!calm) addEventListener("click", (e) => {
    for (let i = 0; i < 8; i++) {
      const s = document.createElement("span");
      const ang = (Math.PI * 2 * i) / 8 + Math.random() * 0.5;
      const dist = 30 + Math.random() * 40;
      s.className = "spark";
      s.textContent = "✦";
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.setProperty("--dx", Math.cos(ang) * dist + "px");
      s.style.setProperty("--dy", Math.sin(ang) * dist + "px");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 800);
    }
  });

  // Bandeau défilant sur l'accueil
  if (document.querySelector(".hero")) {
    const names = ["Yours Truly", "My Everything", "Dangerous Woman", "Sweetener",
                   "thank u, next", "Positions", "eternal sunshine", "petal"];
    const text = names.join("  ✦  ") + "  ✦  ";
    const band = document.createElement("div");
    band.className = "marquee";
    band.setAttribute("aria-hidden", "true");
    band.innerHTML = "<div>" + text + text + "</div>";
    document.querySelector("main").after(band);
  }

  // Cartes d'albums : effet 3D + couleurs de l'album au survol
  document.querySelectorAll(".album").forEach((c) => {
    const key = (c.getAttribute("href") || "").split("album=")[1];
    c.addEventListener("pointerenter", () => setTheme(key));
    c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 12 + "deg");
      c.style.setProperty("--rx", -((e.clientY - r.top) / r.height - 0.5) * 12 + "deg");
    });
    c.addEventListener("pointerleave", () => {
      c.style.removeProperty("--rx");
      c.style.removeProperty("--ry");
      if (!albumKey) resetTheme();
    });
  });

  // Apparition au défilement
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Chiffres qui comptent jusqu'à leur valeur
  const counter = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = Number(el.dataset.end);
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / 1200, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counter.unobserve(el);
    });
  });
  document.querySelectorAll(".stat strong").forEach((el) => {
    if (/^\d+$/.test(el.textContent.trim())) {
      el.dataset.end = el.textContent.trim();
      el.textContent = "0";
      counter.observe(el);
    }
  });

  // Fondu entre les pages
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || a.target || e.ctrlKey || e.metaKey || e.shiftKey) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin || u.pathname === location.pathname) return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = a.href; }, 250);
  });
  addEventListener("pageshow", () => document.body.classList.remove("leaving"));
})();