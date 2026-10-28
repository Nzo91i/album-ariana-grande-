/* ==========================================================
   data.js – TOUTES les données du site + petits outils partagés
   Pour ajouter un titre / une image / une anecdote : modifie uniquement ce fichier.
   ========================================================== */
window.AG = (() => {

  // "img" = nom de fichier conseillé (sans espaces) ; "old" = ancien nom, utilisé si le nouveau n'existe pas encore.
  // "ids" = IDs Spotify des titres, dans l'ordre de "tracks" (les liens en trop sont ignorés).
  const albums = [
    {
      key: "yours-truly", title: "Yours Truly", year: "2013",
      img: "yours-truly.jpg", old: "yours truly.jpg",
      bg: "linear-gradient(135deg, #f4c6d8, #b98fd1)", spotify: "6czdbbMtGbAkZ6ud2OMTcg",
      tracks: ["Honeymoon Avenue","Baby I","Right There (feat. Big Sean)","Tattooed Heart","Lovin' It","Piano","Daydreamin'","The Way (feat. Mac Miller)","You'll Never Know","Almost Is Never Enough (with Nathan Sykes)"],
      ids: "5SmXEPnevlRjBPWBG7oKIi 6NmCCgnQcxKHPOAKgd9Nth 47rzxY9wSpomHE1gT94jIT 7JmIjOsRish3vYBSLTytEC 0CN72fWya38TPEQzrsr27w 1FSfCzJd8aSQ0nqTSbN4PO 2CcQDI2IDhHbmBIFup58JE 0S4RKPbRDA72tvKwVdXQqe 6d8XhbAw4IoKPnVD07Sb9b 442j8VxaB60dWf9cBFuX5w",
      facts: [
        "Sorti en 2013, l’album entre directement à la 1re place du Billboard 200.",
        "« The Way » (avec Mac Miller) lance sa carrière solo.",
        "Le style s’inspire du R&B et de la pop des années 90.",
        "Avant l’album, elle était déjà connue grâce à Broadway et à la série Victorious."
      ]
    },
    {
      key: "my-everything", title: "My Everything", year: "2014",
      img: "my-everything.jpg", old: "my evrything.jpg",
      bg: "linear-gradient(135deg, #2b2b2b, #8a8a8a)", spotify: "6dYDqMHA4COCFC0TfCiUCj",
      tracks: ["Intro","Problem (feat. Iggy Azalea)","One Last Time","Why Try","Break Free (feat. Zedd)","Best Mistake (feat. Big Sean)","Be My Baby (feat. Cashmere Cat)","Break Your Heart Right Back (feat. Childish Gambino)","Love Me Harder (with The Weeknd)","Just a Little Bit of Your Heart","Hands on Me (feat. A$AP Ferg)","My Everything"],
      ids: "1DfZFyeOTqcrveRLJD2psY 5w048fMWMdqxT2UAyXXB1Z 50rGbTr2wrWnlIelPQxi87 30RyEhFRhQwdU9uz9GpsIW 3rWbIR3rJIT0Rpu3iR9ZXg 4YABCZrigzsmAazCkbnsmE 2Gl4i222fTI6qG8DQiAh9E 0ZrOMGpPyxmQDknWbfxPms 3RknjKzaZkjBqIGEN1Q871 25K9ZaVkBxqs3mIgqBfCyJ 4jiJGgI9CcpHNbynBRvZtC 0GSEYyijZUvmHtl8jdZO50",
      facts: [
        "« Problem » (avec Iggy Azalea) atteint la 2e place du Hot 100.",
        "Un album plein de collaborations : Zedd, The Weeknd, Big Sean, Childish Gambino, A$AP Ferg…",
        "Zedd produit « Break Free » et apparaît sur le titre.",
        "Il entre lui aussi à la 1re place du Billboard 200."
      ]
    },
    {
      key: "dangerous-woman", title: "Dangerous Woman", year: "2016",
      img: "dangerous-woman.jpg", old: "dangerous woman.jpg",
      bg: "linear-gradient(135deg, #111111, #6b6b6b)", spotify: "1QRP5lutJodPixU2EWfnD7",
      tracks: ["Moonlight","Dangerous Woman","Be Alright","Into You","Side to Side (feat. Nicki Minaj)","Let Me Love You (feat. Lil Wayne)","Greedy","Leave Me Lonely (feat. Macy Gray)","Everyday (feat. Future)","Sometimes","I Don't Care","Bad Decisions","Touch It","Knew Better / Forever Boy","Thinking Bout You"],
      ids: "5A7CwBNDUhvLWuSU5oJEh3 3nef5W8jTkXrOKgCu4kmq7 6TOfPHF57Qhlbfm5lhZ9k1 76FZM38RC8XaAjJ77CVTNe 44ONERBHALxftQNWq6dmyd 59NC8SuXPiSaiYL69XQ4dt 7aLT0tLcS40Penaplqu2cZ 27PTd8bvvSpk9qXtNwxbe7 30TmLgK0ja5O8q9l4BShIX 3j6Vua6G9chRUJ9dTiOh7k 1QGiDkpRQGqvBdDOnbDimF 4qtXU0epoC3zEmolXdBcu8 6WikCGNUbXFmXoLre7vjeW 212ecIiQ47VqrOLRTwXaMB 1UujO43qVZnWObydH4MLT5",
      facts: [
        "Troisième album : un virage plus mature et plus audacieux.",
        "« Into You » et « Side to Side » (avec Nicki Minaj) sont ses singles les plus connus.",
        "Il débute à la 2e place du Billboard 200.",
        "Il est nommé aux Grammy dans la catégorie du meilleur album pop vocal."
      ]
    },
    {
      key: "sweetener", title: "Sweetener", year: "2018",
      img: "sweetener.jpg", old: "sweetener.jpg",
      bg: "linear-gradient(135deg, #8fd3f4, #84fab0)", spotify: "3tx8gQqWbGwqIGZHqDNrGe",
      tracks: ["raindrops (an angel cried)","blazed (feat. Pharrell Williams)","the light is coming (feat. Nicki Minaj)","R.E.M","God is a woman","sweetener","successful","everytime","breathin","no tears left to cry","borderline (feat. Missy Elliott)","better off","goodnight n go","pete davidson","get well soon"],
      ids: "0v2LUO8oTHnkjQ8MmKuXyk 4mLkiFppf8Xvem6BSY34qw 0sdbFOyfgAhAhWq8DpzkaW 1xWH8zYtDeS9mW1JJG23VZ 5OCJzvD7sykQEKHH7qAC3C 70khXICDeTTxgYtw3EysKH 5YeHLHDdQ4nKHk81XFWhCU 0WdR2AyLW1Drd3OUdwezM0 4OafepJy2teCjYJbvFE60J 2qT1uLXPVPzGgFOx4jtEuo 4b7mLZQWsy0rLnrMtPA9fQ 3NbTQ8ZbHU6MSEVUFAVCJ9 14kYOiFVPb7E7NfFbqhdln 0XOnMqLQDO89iAg7dWWwnG 7u6DMPznGbpziuEgCE0JGQ",
      facts: [
        "Il remporte le Grammy du meilleur album pop vocal en 2019.",
        "Pharrell Williams produit une grande partie de l’album.",
        "« no tears left to cry » ouvre l’ère, « God is a woman » suit.",
        "Il sort en août 2018."
      ]
    },
    {
      key: "thank-u-next", title: "thank u, next", year: "2019",
      img: "thank-u-next.jpg", old: "thank u next.jpg",
      bg: "linear-gradient(135deg, #ff9ecb, #ffd1e8)", spotify: "2fYhqwDWXjbpjaIJPEfKFw",
      tracks: ["imagine","needy","NASA","bloodline","fake smile","bad idea","make up","ghostin","in my head","7 rings","thank u, next","break up with your girlfriend, i'm bored"],
      ids: "39LmTF9RgyakzSYX8txrow 1TEL6MlSSVLSdhOSddidlJ 4uTvPEr01pjTbZgl7jcKBD 2hloaUoRonYssMuqLCBLTX 3wFLWP0FcIqHK1wb1CPthQ 5Il6Oe7lr5XM7A0cWbVQtr 27356GVuMPFWiJSZCragoM 2vdBo4ALPYbHRUPKgtE5iC 4T652DlATVHe0jdLKaN3Bw 6ocbgoVGwYJhOv1GgI9NsF 3e9HZxeyfWwjeyPAMmWSSQ 4kV4N9D1iKVxx1KLvtTpjS",
      facts: [
        "Sorti le 8 février 2019, moins de six mois après Sweetener.",
        "« thank u, next » est son premier n°1 au Hot 100.",
        "En 2019, elle occupe les 3 premières places du Hot 100, une première depuis les Beatles en 1964.",
        "Le clip de « thank u, next » rend hommage à Mean Girls, Legally Blonde, Bring It On et 13 Going on 30."
      ]
    },
    {
      key: "positions", title: "Positions", year: "2020",
      img: "positions.jpg", old: "position.jpg",
      bg: "linear-gradient(135deg, #7a4fb0, #e0a96d)", spotify: "3euz4vS7ezKGnNSwgyvKcd",
      tracks: ["shut up","34+35","motive (with Doja Cat)","just like magic","off the table (with The Weeknd)","six thirty","safety net (feat. Ty Dolla $ign)","my hair","nasty","west side","love language","positions","obvious","pov"],
      ids: "12sliObzVzbLbAlDb8eChf 1hG4V53eR16jg7jVTNLOiX 5VipERQ1ofCowecoFg2MVU 1N9hFgcgWYbGINUKjhvcK6 1qKdid2S9fZdSrzLaCcjcF 4rJWTThj9EWR6UqD1eVyge 53Z8fbdVNus9Kiu7tWIBEC 5Ds3yH73nMHgkmJxcxqPrr 7wcl0YJBQ0ygTUUaXLRM1g 7cFYqReKEigTxTm0bNE6YA 4iIrJ94pkIEnGZWv1MhIRC 3DFnLXa69NVlOjbhTbXXNn 65OEcDb4M3mAvEpSdXi6Lv 3RP1eXaK8f4rwqY9fRKVRF",
      facts: [
        "Sorti le 30 octobre 2020.",
        "Le single « positions » débute directement en tête du Hot 100.",
        "L’album débute à la 1re place du Billboard 200.",
        "Des duos avec Doja Cat (« motive ») et The Weeknd (« off the table »)."
      ]
    },
    {
      key: "eternal-sunshine", title: "eternal sunshine", year: "2024",
      img: "eternal-sunshine.jpg", old: "eternel sunshine.jpg",
      bg: "linear-gradient(135deg, #dfe9f3, #a8c0ff)", spotify: "5EYKrEDnKhhcNxGedaRQeK",
      tracks: ["intro (end of the world)","bye","don't wanna break up again","Saturn returns interlude","eternal sunshine","supernatural","twilight zone","true story","the boy is mine","yes, and?","we can't be friends (wait for your love)","i wish i hated you","imperfect for you"],
      ids: "2o1pb13quMReXZqE7jWsgq 1Rweq7vNjK4kZBbGrmxQsl 0o3ua5ufFK7nfRzbDUNoGA 13jRSCLoWbCoU1XEdJRbgn 3RwWW7KeVhHGayYJgUL5eZ 142PiXzA84lmEw2RstFHFa 14kyXBpg91RVq8bNRDS1q2 0Lmbke3KNVFXtoH2mMSHCw 5D34wRmbFS29AjtTOP2QJe 51ZQ1vr10ffzbwIjDCwqm4 5cQX9BexkPIEESTZijJhXg 6XXKB32Om6WuXg3uEWwTob 4mHM5d2fK3n8xgymjf92w2",
      facts: [
        "Sorti le 8 mars 2024.",
        "« yes, and? » entre directement en tête du Hot 100.",
        "« we can’t be friends (wait for your love) » débute elle aussi à la 1re place.",
        "Le titre de l’album fait écho au film Eternal Sunshine of the Spotless Mind."
      ]
    },
    {
      key: "petal", title: "petal", year: "2026",
      img: "petal.jpg", old: "petal.jpg",
      bg: "linear-gradient(135deg, #c9d6c3, #f2efe6)", spotify: "2k4FmEtXR0WiDW0Ac2QArT",
      tracks: ["kiss me","hate that i made you love me","petal","stay","oh well","big feelings","freak","(warning signs)","like i do","never get over me","bad thing (bunny hop)","nowhere, nobody"],
      ids: "6LCdnJUf1pKPIoL85MJDug 3pY25LQJWfvvxdHhSg8ucj 060LysflCUxQKLKGLe9zJW 6Xt3JKzC5CkcknBijK1K2V 0FLRCJFiboTgk2odosWZ7Q 4ZsclWOmHZDaya8YP4gmaG 02C56lfhzK1exA84pqz3IS 3kNfuadU73RhKcSkG35ITt 2Od0kIdHcKBSZFdrrireX1 2TqiTFx3V7AjfWg3WZCVTg 1W4WHb8U2rkX9o4Qfo59aC 3Q9ZTz6tHhrUnzyhyqelwn",
      facts: [
        "Huitième album studio, le plus récent de sa discographie. Ajoute ici tes anecdotes préférées !"
      ]
    }
  ];
  albums.forEach(a => { a.ids = a.ids.split(" ").slice(0, a.tracks.length); });

  const general = [
    "Ariana Grande est née en 1993 à Boca Raton, en Floride.",
    "Elle a débuté à Broadway dans la comédie musicale « 13 ».",
    "Elle joue Cat Valentine dans Victorious, puis dans le spin-off Sam & Cat.",
    "Dans le film Wicked, elle incarne Glinda, un rôle qui lui a valu une nomination à l’Oscar de la meilleure actrice dans un second rôle.",
    "En 2019, elle occupe en même temps les 3 premières places du Hot 100, comme les Beatles en 1964."
  ];

  /* ---------- Stockage (favoris, playlist) ---------- */
  const load = k => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch (e) { return []; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  const AG = { albums, general };

  AG.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  AG.get = key => albums.find(a => a.key === key);

  // Un titre = "cle-album:numero" (ex. "sweetener:5")
  AG.allTracks = () => albums.flatMap(al => al.tracks.map((title, i) => ({ id: al.key + ":" + (i + 1), al, n: i + 1, title, sid: al.ids[i] })));
  AG.find = id => {
    const [k, n] = String(id).split(":"); const al = AG.get(k); const i = Number(n) - 1;
    return al && al.tracks[i] ? { id, al, n: i + 1, title: al.tracks[i], sid: al.ids[i] } : null;
  };
  AG.feat = title => { const m = title.match(/\((?:feat\.|with)\s+([^)]+)\)/i); return m ? m[1] : null; };
  AG.clean = title => title.replace(/\s*\((?:feat\.|with)[^)]*\)/i, "");

  const list = key => ({
    get: () => load(key),
    has: id => load(key).includes(id),
    add: id => { const l = load(key); if (l.includes(id)) return false; l.push(id); save(key, l); return true; },
    remove: id => save(key, load(key).filter(x => x !== id)),
    set: l => save(key, l),
    toggle: id => { const l = load(key); const i = l.indexOf(id); if (i >= 0) l.splice(i, 1); else l.push(id); save(key, l); return i < 0; }
  });
  AG.favs = list("ag-favs");
  AG.pl = list("ag-playlist");

  /* ---------- Petits outils d'interface ---------- */
  AG.toast = msg => {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 1800);
  };

  // Image avec repli : essaie le nouveau nom, puis l'ancien, puis disparaît (sauf keep)
  AG.setImg = (img, al, keep) => {
    const srcs = [al.img, al.old].filter((s, i, a) => s && a.indexOf(s) === i);
    let step = 0;
    img.alt = "Pochette de " + al.title;
    img.onerror = () => { if (++step < srcs.length) img.src = srcs[step]; else if (!keep) img.remove(); };
    img.src = srcs[0];
  };

  AG.albumCard = (al, sub) => {
    const a = document.createElement("a");
    a.className = "album"; a.href = "tracklist.html?album=" + al.key;
    a.innerHTML = '<div class="cover"></div><h2></h2><p></p>';
    const c = a.querySelector(".cover");
    c.style.background = al.bg; c.append(al.year);
    const img = document.createElement("img"); AG.setImg(img, al); c.appendChild(img);
    a.querySelector("h2").textContent = al.title;
    a.querySelector("p").textContent = sub;
    return a;
  };

  AG.heart = id => {
    const b = document.createElement("button"); b.type = "button"; b.className = "heart";
    const sync = () => {
      const on = AG.favs.has(id);
      b.classList.toggle("on", on); b.textContent = on ? "♥" : "♡";
      b.setAttribute("aria-pressed", on); b.setAttribute("aria-label", on ? "Retirer des favoris" : "Ajouter aux favoris");
    };
    sync();
    b.addEventListener("click", e => {
      e.preventDefault(); e.stopPropagation();
      AG.favs.toggle(id); sync(); document.dispatchEvent(new Event("ag-favs"));
    });
    return b;
  };

  AG.plus = id => {
    const b = document.createElement("button"); b.type = "button"; b.className = "plus";
    b.textContent = "＋"; b.title = "Ajouter à ma playlist"; b.setAttribute("aria-label", "Ajouter à ma playlist");
    b.addEventListener("click", e => {
      e.preventDefault(); e.stopPropagation();
      AG.toast(AG.pl.add(id) ? "Ajouté à ta playlist ✓" : "Déjà dans ta playlist");
    });
    return b;
  };

  // Charge l'API Spotify une seule fois
  let apiP = null;
  AG.spotify = cb => {
    if (!apiP) apiP = new Promise(res => {
      window.onSpotifyIframeApiReady = api => res(api);
      const s = document.createElement("script");
      s.src = "https://open.spotify.com/embed/iframe-api/v1"; s.async = true;
      document.body.appendChild(s);
    });
    apiP.then(cb);
  };

  return AG;
})();