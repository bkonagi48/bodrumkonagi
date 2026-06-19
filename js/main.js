/* =============================================================================
   BODRUM KONAĞI — INTERACTIONS
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.SITE_DATA || {};
  var PHONE = "+905330228848";
  var WA = "905330228848";
  var EMAIL = "info@bodrumkonagi.com";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var state = { lang: localStorage.getItem("bk_lang") || "en", filter: "all", review: 0 };

  /* ------------------------------------------------------------------ i18n */
  var I18N = {
    en: {
      "nav.menu": "Menu", "nav.contact": "Contact", "nav.book": "Book",
      "menu.home": "Home", "menu.rooms": "Rooms", "menu.experience": "Experience",
      "menu.reviews": "Reviews", "menu.location": "Location", "menu.contact": "Contact",
      "menu.reserve": "Reservations", "menu.find": "Find us",
      "hero.eyebrow": "Boutique Hotel · Bodrum", "hero.tag": "Happiness starts here.",
      "hero.support": "A fully renovated boutique konak in the heart of the old town — steps from the marina, the bazaar and the Aegean sea.",
      "hero.scroll": "Scroll",
      "book.checkin": "Check-in", "book.checkout": "Check-out", "book.type": "Room type",
      "book.guests": "Guests", "book.cta": "Book on WhatsApp",
      "intro.eyebrow": "The Konak",
      "intro.statement": "In the heart of Bodrum, where the warm spirit of the Aegean meets traditional Bodrum architecture.",
      "intro.p1": "Bodrum Konağı is a small, completely renovated boutique hotel built around a quiet stone courtyard. Whitewashed walls, warm wood and a shaded garden — a calm base in the middle of everything Bodrum has to offer.",
      "intro.p2": "We'll be delighted to welcome you and help you live the real life of Bodrum, from peaceful mornings to authentic Aegean flavours.",
      "stat.google": "Google rating", "stat.reviews": "Guest reviews",
      "stat.marina": "Walk to the marina", "stat.renovated": "Renovated",
      "divider.eyebrow": "Experience", "divider.l1": "Live the", "divider.l2": "Bodrum life",
      "amen.eyebrow": "What we offer", "amen.title": "Everything you need, nothing you don't.",
      "amen.tab.comfort": "Comfort", "amen.tab.cuisine": "Cuisine",
      "amen.tab.explore": "Explore", "amen.tab.around": "Getting around",
      "feat.wifi": "Free Wi-Fi", "feat.breakfast": "Free breakfast", "feat.ac": "Air conditioning",
      "feat.transfer": "Airport transfer", "feat.parking": "Parking", "feat.accessible": "Accessible",
      "feat.safe": "In-room safe", "feat.soundproof": "Sound-proofing",
      "rooms.eyebrow": "Stay", "rooms.title": "Our Rooms",
      "rooms.note": "Seven room types across twelve individually styled rooms — each renovated in true Bodrum character.",
      "rev.eyebrow": "Guest stories", "rev.title": "What our guests say",
      "loc.eyebrow": "Find us", "loc.title": "In the heart of Bodrum",
      "loc.lead": "A quiet street in the centre of the old town — everything worth seeing is a short walk away.",
      "loc.castle": "Bodrum Castle", "loc.bars": "Bars Street", "loc.bazaar": "Bodrum Bazaar",
      "loc.marina": "Marina", "loc.airport": "Milas-Bodrum Airport",
      "loc.min5": "5 min walk", "loc.min8": "8 min walk", "loc.min34": "~34 min drive",
      "loc.directions": "Get directions", "loc.call": "Call us", "loc.openmap": "Open in Google Maps",
      "cta.eyebrow": "Bodrum Konağı", "cta.l1": "More than a stay", "cta.l2": "— an experience.",
      "cta.support": "Plan an unforgettable stay in Bodrum today. Message us and we'll take care of the rest.",
      "cta.whatsapp": "Chat on WhatsApp", "cta.email": "Email us",
      "footer.desc": "A completely renovated boutique konak in the heart of Bodrum city centre. We'll be delighted to welcome you.",
      "footer.explore": "Explore", "footer.contact": "Contact", "footer.follow": "Follow",
      "footer.rights": "All rights reserved.",
      "instagram.follow": "Follow",
      "instagram.posts": "posts",
      "instagram.followers": "followers",
      "instagram.following": "following",
      "ui.all": "All", "ui.from": "from", "ui.perNight": "/ night", "ui.reserve": "Reserve",
      "ui.guest": "Guest", "ui.guests": "Guests", "ui.anyType": "Any room", "ui.rooms": "rooms",
      "ui.guestsCount": "guests · up to"
    },
    tr: {
      "nav.menu": "Menü", "nav.contact": "İletişim", "nav.book": "Rezervasyon",
      "menu.home": "Anasayfa", "menu.rooms": "Odalar", "menu.experience": "Deneyim",
      "menu.reviews": "Yorumlar", "menu.location": "Konum", "menu.contact": "İletişim",
      "menu.reserve": "Rezervasyon", "menu.find": "Bize ulaşın",
      "hero.eyebrow": "Butik Otel · Bodrum", "hero.tag": "Mutluluk burada başlar.",
      "hero.support": "Eski şehrin kalbinde, tamamen yenilenmiş bir butik konak — marinaya, çarşıya ve Ege denizine yürüme mesafesinde.",
      "hero.scroll": "Kaydır",
      "book.checkin": "Giriş", "book.checkout": "Çıkış", "book.type": "Oda tipi",
      "book.guests": "Misafir", "book.cta": "WhatsApp'tan rezervasyon",
      "intro.eyebrow": "Konak",
      "intro.statement": "Bodrum'un kalbinde; Ege'nin sıcak ruhunun geleneksel Bodrum mimarisiyle buluştuğu yer.",
      "intro.p1": "Bodrum Konağı, sessiz bir taş avlu etrafında kurulmuş, tamamen yenilenmiş küçük bir butik oteldir. Bembeyaz duvarlar, sıcak ahşap ve gölgeli bir bahçe — Bodrum'un sunduğu her şeyin tam ortasında huzurlu bir üs.",
      "intro.p2": "Sizi ağırlamaktan ve huzurlu sabahlardan otantik Ege lezzetlerine kadar Bodrum'un gerçek hayatını yaşamanıza yardımcı olmaktan mutluluk duyarız.",
      "stat.google": "Google puanı", "stat.reviews": "Misafir yorumu",
      "stat.marina": "Marinaya yürüyüş", "stat.renovated": "Yenilendi",
      "divider.eyebrow": "Deneyim", "divider.l1": "Bodrum hayatını", "divider.l2": "yaşayın",
      "amen.eyebrow": "Sunduklarımız", "amen.title": "İhtiyacınız olan her şey, fazlası değil.",
      "amen.tab.comfort": "Konfor", "amen.tab.cuisine": "Lezzet",
      "amen.tab.explore": "Keşfet", "amen.tab.around": "Ulaşım",
      "feat.wifi": "Ücretsiz Wi-Fi", "feat.breakfast": "Ücretsiz kahvaltı", "feat.ac": "Klima",
      "feat.transfer": "Havaalanı transferi", "feat.parking": "Otopark", "feat.accessible": "Engelli erişimi",
      "feat.safe": "Oda kasası", "feat.soundproof": "Ses yalıtımı",
      "rooms.eyebrow": "Konaklama", "rooms.title": "Odalarımız",
      "rooms.note": "Yedi oda tipi, on iki ayrı tasarlanmış oda — her biri gerçek Bodrum karakterinde yenilendi.",
      "rev.eyebrow": "Misafir hikâyeleri", "rev.title": "Misafirlerimiz ne diyor",
      "loc.eyebrow": "Bizi bulun", "loc.title": "Bodrum'un tam merkezinde",
      "loc.lead": "Eski şehrin merkezinde sakin bir sokak — görülmeye değer her şey kısa bir yürüyüş mesafesinde.",
      "loc.castle": "Bodrum Kalesi", "loc.bars": "Barlar Sokağı", "loc.bazaar": "Bodrum Çarşı",
      "loc.marina": "Marina", "loc.airport": "Milas-Bodrum Havalimanı",
      "loc.min5": "5 dk yürüme", "loc.min8": "8 dk yürüme", "loc.min34": "~34 dk araç",
      "loc.directions": "Yol tarifi al", "loc.call": "Bizi arayın", "loc.openmap": "Google Haritalar'da aç",
      "cta.eyebrow": "Bodrum Konağı", "cta.l1": "Sadece konaklama değil", "cta.l2": "— bir deneyim.",
      "cta.support": "Bugün Bodrum'da unutulmaz bir konaklama planlayın. Bize yazın, gerisini biz halledelim.",
      "cta.whatsapp": "WhatsApp'tan yazın", "cta.email": "E-posta gönderin",
      "footer.desc": "Bodrum şehir merkezinin kalbinde, tamamen yenilenmiş bir butik konak. Sizi ağırlamaktan mutluluk duyarız.",
      "footer.explore": "Keşfet", "footer.contact": "İletişim", "footer.follow": "Takip et",
      "footer.rights": "Tüm hakları saklıdır.",
      "instagram.follow": "Takip Et",
      "instagram.posts": "gönderi",
      "instagram.followers": "takipçi",
      "instagram.following": "takip",
      "ui.all": "Tümü", "ui.from": "başlangıç", "ui.perNight": "/ gece", "ui.reserve": "Rezervasyon",
      "ui.guest": "Misafir", "ui.guests": "Misafir", "ui.anyType": "Tüm odalar", "ui.rooms": "oda",
      "ui.guestsCount": "misafir · en fazla"
    }
  };
  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || (I18N.en[key]) || key; }
  function L(obj) { return obj ? (obj[state.lang] || obj.en) : ""; }
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* amenity key -> icon symbol */
  var AMEN_ICON = {
    wifi: "i-wifi", breakfast: "i-coffee", ac: "i-wind", safe: "i-lock",
    soundproof: "i-soundproof", nonsmoking: "i-ban", tv: "i-tv", minibar: "i-wine",
    balcony: "i-sun", seaview: "i-waves", familyfriendly: "i-users"
  };
  function icon(id, cls) { return '<svg class="icon ' + (cls || "") + '"><use href="#' + id + '"></use></svg>'; }
  function money(v) {
    try {
      return new Intl.NumberFormat(state.lang === "tr" ? "tr-TR" : "en-US",
        { style: "currency", currency: "TRY", currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 }).format(v);
    } catch (e) { return "₺" + v; }
  }
  function waLink(msg) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg); }

  /* ------------------------------------------------------------- apply i18n */
  function applyI18n() {
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$(".lang__btn").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang); });
    renderBookingOptions();
    renderGallery(currentTab);
    renderRooms();
    renderReviews();
    renderRatings();
    renderInstagram();
    updateActionLinks();
  }

  function setLang(lang) {
    if (lang === state.lang || !I18N[lang]) return;
    state.lang = lang;
    localStorage.setItem("bk_lang", lang);
    applyI18n();
  }

  /* ------------------------------------------------------------ action links */
  function updateActionLinks() {
    var msg = state.lang === "tr"
      ? "Merhaba! Bodrum Konağı'nda müsaitlik ve rezervasyon hakkında bilgi almak istiyorum."
      : "Hello! I'd like to ask about availability and a reservation at Bodrum Konağı.";
    var link = waLink(msg);
    ["navBook", "ctaWhatsapp", "footWhatsapp"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.setAttribute("href", link); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
    });
  }

  /* --------------------------------------------------------- booking options */
  function renderBookingOptions() {
    var type = $("#bk-type"), guests = $("#bk-guests");
    if (type) {
      type.innerHTML = '<option value="">' + t("ui.anyType") + "</option>" +
        (DATA.ROOMS || []).map(function (r) { return '<option value="' + r.id + '">' + L(r.name) + "</option>"; }).join("");
    }
    if (guests) {
      var out = "";
      for (var i = 1; i <= 6; i++) out += '<option value="' + i + '">' + i + " " + (i === 1 ? t("ui.guest") : t("ui.guests")) + "</option>";
      guests.innerHTML = out;
    }
  }

  /* --------------------------------------------------------------- gallery */
  var currentTab = "comfort";
  function renderGallery(tab) {
    currentTab = tab;
    var wrap = $("#amenGallery");
    var items = (DATA.GALLERY && DATA.GALLERY[tab]) || [];
    if (!wrap) return;
    wrap.innerHTML = items.map(function (it) {
      return '<figure class="gallery__item"><img src="' + it.img + '" alt="" loading="lazy"><figcaption>' + L(it.label) + "</figcaption></figure>";
    }).join("");
    // staggered reveal
    $$(".gallery__item", wrap).forEach(function (el, i) {
      el.style.transitionDelay = (i * 80) + "ms";
      requestAnimationFrame(function () { setTimeout(function () { el.classList.add("is-in"); }, 30); });
    });
  }

  /* ----------------------------------------------------------------- rooms */
  function roomTypes() {
    var seen = [], out = [];
    (DATA.ROOMS || []).forEach(function (r) { if (seen.indexOf(r.type) < 0) { seen.push(r.type); out.push(r.type); } });
    return out;
  }
  function renderFilters() {
    var wrap = $("#roomFilters"); if (!wrap) return;
    var types = roomTypes();
    wrap.innerHTML =
      '<button class="filter' + (state.filter === "all" ? " is-active" : "") + '" data-cursor data-filter="all">' + t("ui.all") + "</button>" +
      types.map(function (ty) {
        return '<button class="filter' + (state.filter === ty ? " is-active" : "") + '" data-cursor data-filter="' + ty + '">' + ty + "</button>";
      }).join("");
    $$(".filter", wrap).forEach(function (b) {
      b.addEventListener("click", function () { state.filter = b.getAttribute("data-filter"); renderFilters(); renderRooms(); });
    });
  }
  function renderRooms() {
    var wrap = $("#roomsList"); if (!wrap) return;
    var rooms = (DATA.ROOMS || []).filter(function (r) { return state.filter === "all" || r.type === state.filter; });
    wrap.innerHTML = rooms.map(function (r, i) {
      var n = ("0" + (i + 1)).slice(-2);
      var amen = (r.amenities || []).slice(0, 6).map(function (k) { return AMEN_ICON[k] ? icon(AMEN_ICON[k]) : ""; }).join("");
      var resMsg = (state.lang === "tr"
        ? "Merhaba! Bodrum Konağı'nda \"" + L(r.name) + "\" için müsaitlik öğrenmek istiyorum."
        : "Hello! I'd like to check availability for the \"" + L(r.name) + "\" at Bodrum Konağı.");
      return '' +
        '<article class="room-row reveal">' +
          '<div class="room-row__media"><span class="room-row__num">' + n + '</span>' +
            '<img src="' + (r.images && r.images[0]) + '" alt="' + L(r.name) + '" loading="lazy"></div>' +
          '<div class="room-row__info">' +
            '<span class="room-chip">' + r.type + '</span>' +
            '<h3 class="room-row__name">' + L(r.name) + '</h3>' +
            '<div class="room-row__specs">' +
              '<span>' + icon("i-users") + (r.capacity) + ' ' + (r.capacity === 1 ? t("ui.guest") : t("ui.guests")) + '</span>' +
              '<span>' + icon("i-size") + r.sizeM2 + ' m²</span>' +
              '<span>' + icon("i-bed") + L(r.beds) + '</span>' +
            '</div>' +
            '<p class="room-row__desc">' + L(r.desc) + '</p>' +
            '<div class="room-row__amen">' + amen + '</div>' +
            '<div class="room-row__foot">' +
              '<span class="room-row__price"><small>' + t("ui.from") + '</small><b>' + money(r.priceFrom) + '</b><small>' + t("ui.perNight") + '</small></span>' +
              '<a class="btn btn--outline-light" data-cursor target="_blank" rel="noopener" href="' + waLink(resMsg) + '">' + t("ui.reserve") + icon("i-arrow-right") + '</a>' +
              '<span class="room-row__count">' + r.count + ' ' + t("ui.rooms") + '</span>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join("");
    observeReveals(wrap);
  }

  /* --------------------------------------------------------------- reviews */
  function stars(n) { var s = ""; for (var i = 0; i < n; i++) s += icon("i-star"); return s; }
  function renderReviews() {
    var stage = $("#reviewsStage"), thumbs = $("#reviewsThumbs");
    var R = DATA.REVIEWS || []; if (!stage) return;
    stage.innerHTML = R.map(function (rv, i) {
      return '' +
        '<article class="review' + (i === state.review ? " is-active" : "") + '">' +
          '<div class="review__portrait"><img src="' + rv.avatar + '" alt="' + rv.name + '" loading="lazy"></div>' +
          '<div class="review__body">' +
            '<svg class="review__quote icon"><use href="#i-quote"></use></svg>' +
            '<div class="review__stars">' + stars(rv.rating || 5) + '</div>' +
            '<p class="review__text">' + L(rv.text) + '</p>' +
            '<div><div class="review__name">' + rv.name + '</div><div class="review__meta">' + L(rv.meta) + '</div></div>' +
          '</div>' +
        '</article>';
    }).join("");
    if (thumbs) thumbs.innerHTML = R.map(function (rv, i) {
      return '<button class="review-thumb' + (i === state.review ? " is-active" : "") + '" data-cursor data-idx="' + i + '"><img src="' + rv.avatar + '" alt="' + rv.name + '"></button>';
    }).join("");
    var total = $("#revTotal"); if (total) total.textContent = ("0" + R.length).slice(-2);
    updateReviewUI();
    $$(".review-thumb", thumbs).forEach(function (b) {
      b.addEventListener("click", function () { state.review = +b.getAttribute("data-idx"); updateReviewUI(); });
    });
  }
  function updateReviewUI() {
    var R = DATA.REVIEWS || [];
    $$(".review").forEach(function (el, i) { el.classList.toggle("is-active", i === state.review); });
    $$(".review-thumb").forEach(function (el, i) { el.classList.toggle("is-active", i === state.review); });
    var cur = $("#revCurrent"); if (cur) cur.textContent = ("0" + (state.review + 1)).slice(-2);
  }
  function moveReview(d) {
    var R = DATA.REVIEWS || []; if (!R.length) return;
    state.review = (state.review + d + R.length) % R.length; updateReviewUI();
  }

  /* --------------------------------------------------------------- ratings */
  function renderRatings() {
    var wrap = $("#ratings"); if (!wrap) return;
    wrap.innerHTML = (DATA.RATINGS || []).map(function (r) {
      return '' +
        '<div class="rating">' +
          '<div class="rating__score">' + r.score + '<small>/' + r.scale + '</small></div>' +
          '<div class="rating__meta">' +
            '<span class="rating__src">' + r.source + '</span>' +
            '<span class="rating__stars">' + stars(5) + '</span>' +
            '<span class="rating__count">' + r.count + ' ' + (state.lang === "tr" ? "yorum" : "reviews") + '</span>' +
          '</div>' +
        '</div>';
    }).join("");
  }
  
  /* ------------------------------------------------------------- instagram */
  function renderInstagram() {
    var insta = DATA.INSTAGRAM; if (!insta) return;
    var profile = insta.profile;
    var posts = insta.posts;

    var usernameEl = $(".instagram__username");
    var bioEl = $("#instaBio");
    var postsCountEl = $("#instaPostsCount");
    var followersCountEl = $("#instaFollowersCount");
    var followingCountEl = $("#instaFollowingCount");
    var avatarEl = $(".instagram__avatar img");

    if (usernameEl) usernameEl.textContent = profile.username;
    if (bioEl) bioEl.textContent = L(profile.bio);
    if (postsCountEl) postsCountEl.textContent = profile.postsCount;
    if (followersCountEl) followersCountEl.textContent = profile.followersCount;
    if (followingCountEl) followingCountEl.textContent = profile.followingCount;
    if (avatarEl) avatarEl.setAttribute("src", profile.avatar);

    var grid = $("#instagramGrid");
    if (grid) {
      grid.innerHTML = (posts || []).map(function (post) {
        var captionText = L(post.caption);
        return '' +
          '<a href="' + profile.link + '" target="_blank" rel="noopener" class="instagram__post" data-cursor>' +
            '<div class="instagram__post-media">' +
              '<img src="' + post.img + '" alt="' + captionText + '" loading="lazy">' +
            '</div>' +
            '<div class="instagram__post-overlay">' +
              '<div class="instagram__post-stats">' +
                '<span><svg class="icon icon-heart" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> ' + post.likes + '</span>' +
                '<span><svg class="icon icon-comment" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg> ' + post.comments + '</span>' +
              '</div>' +
              '<p class="instagram__post-caption">' + captionText + '</p>' +
            '</div>' +
          '</a>';
      }).join("");
    }
  }

  /* ----------------------------------------------------------- CTA floats */
  function renderFloats() {
    var wrap = $("#ctaFloats"); if (!wrap) return;
    var imgs = DATA.EXPERIENCE_IMAGES || [];
    var cls = ["f1", "f2", "f3", "f4", "f5"], speeds = [0.06, -0.05, 0.04, -0.07, 0.03];
    wrap.innerHTML = imgs.slice(0, 5).map(function (src, i) {
      return '<div class="cta__float ' + cls[i] + '" data-speed="' + speeds[i] + '"><img src="' + src + '" alt="" loading="lazy"></div>';
    }).join("");
  }

  /* --------------------------------------------------------------- reveals */
  var revealObserver;
  function observeReveals(scope) {
    if (reduceMotion) { $$(".reveal", scope).forEach(function (e) { e.classList.add("is-in"); }); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); revealObserver.unobserve(en.target); }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    }
    $$(".reveal", scope).forEach(function (el) {
      if (el.classList.contains("is-in")) return;
      // gentle stagger among reveal siblings
      var sibs = el.parentElement ? $$(":scope > .reveal", el.parentElement) : [];
      var idx = sibs.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx * 80, 320) + "ms";
      revealObserver.observe(el);
    });
  }

  /* ---------------------------------------------------------- count-up nums */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target.toFixed(dec) + suffix; return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(step); else el.textContent = target.toFixed(dec) + suffix;
    }
    requestAnimationFrame(step);
  }
  function initCounters() {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.6 });
    $$(".stat__num").forEach(function (el) { obs.observe(el); });
  }

  /* --------------------------------------------------------------- cursor */
  function initCursor() {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    document.body.classList.add("has-cursor");
    var cur = $("#cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring");
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate(" + mx + "px," + my + "px)";
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mousedown", function () { cur.classList.add("is-down"); });
    document.addEventListener("mouseup", function () { cur.classList.remove("is-down"); });
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest("a,button,input,select,.tab,.filter,[data-cursor]")) cur.classList.add("is-hover");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest("a,button,input,select,.tab,.filter,[data-cursor]")) cur.classList.remove("is-hover");
    });
  }

  /* --------------------------------------------------------------- header */
  function initHeader() {
    var header = $("#header"), last = 0;
    function onScroll() {
      var y = window.pageYOffset;
      header.classList.toggle("is-solid", y > 60);
      if (y > 640 && y > last) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");
      last = y;
      var tt = $("#toTop"); if (tt) tt.classList.toggle("is-show", y > 800);
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ----------------------------------------------------------------- menu */
  function initMenu() {
    var menu = $("#menu");
    function open() { menu.classList.add("is-open"); menu.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
    function close() { menu.classList.remove("is-open"); menu.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
    $("#menuOpen").addEventListener("click", open);
    $("#menuClose").addEventListener("click", close);
    $$(".menu__link").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ------------------------------------------------------------- parallax */
  function initParallax() {
    if (reduceMotion) return;
    var hero = $("#heroImg"), div = $(".divider__img"), floats = $$(".cta__float");
    function frame() {
      var y = window.pageYOffset;
      if (hero) hero.style.transform = "translate3d(0," + (y * 0.18) + "px,0) scale(1.02)";
      if (div) {
        var r = div.getBoundingClientRect();
        div.style.transform = "translate3d(0," + ((r.top) * -0.08) + "px,0) scale(1.02)";
      }
      var ctaSec = $("#book");
      if (ctaSec) {
        var top = ctaSec.getBoundingClientRect().top;
        floats.forEach(function (f) {
          var sp = parseFloat(f.getAttribute("data-speed")) || 0;
          f.style.transform = "translate3d(0," + (top * sp) + "px,0)";
        });
      }
      ticking = false;
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    }, { passive: true });
    frame();
  }

  /* -------------------------------------------------------------- preloader */
  function runPreloader(done) {
    var pre = $("#preloader"), out = $("#preCount");
    if (reduceMotion) { if (pre) pre.classList.add("is-done"); done(); return; }
    var n = 0;
    var iv = setInterval(function () {
      n += Math.max(1, Math.round((100 - n) * 0.12));
      if (n >= 100) { n = 100; clearInterval(iv); setTimeout(function () { pre.classList.add("is-done"); done(); }, 260); }
      if (out) out.textContent = n;
    }, 40);
  }

  /* --------------------------------------------------------------- booking */
  function initBooking() {
    var form = $("#bookingBar");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ci = $("#bk-in").value, co = $("#bk-out").value;
      var typeSel = $("#bk-type"), g = $("#bk-guests").value;
      var typeTxt = typeSel.options[typeSel.selectedIndex] ? typeSel.options[typeSel.selectedIndex].text : "";
      var msg;
      if (state.lang === "tr") {
        msg = "Merhaba! Bodrum Konağı'nda rezervasyon yapmak istiyorum.";
        if (ci) msg += "\nGiriş: " + ci; if (co) msg += "\nÇıkış: " + co;
        if (typeSel.value) msg += "\nOda tipi: " + typeTxt; if (g) msg += "\nMisafir: " + g;
      } else {
        msg = "Hello! I'd like to make a reservation at Bodrum Konağı.";
        if (ci) msg += "\nCheck-in: " + ci; if (co) msg += "\nCheck-out: " + co;
        if (typeSel.value) msg += "\nRoom type: " + typeTxt; if (g) msg += "\nGuests: " + g;
      }
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* --------------------------------------------------------------- tabs */
  function initTabs() {
    $$(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        $$(".tab").forEach(function (x) { x.classList.remove("is-active"); });
        tab.classList.add("is-active");
        renderGallery(tab.getAttribute("data-tab"));
      });
    });
  }

  /* ---------------------------------------------------------------- init */
  function init() {
    document.getElementById("year").textContent = new Date().getFullYear();
    // language buttons
    $$(".lang__btn").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
    // render dynamic
    renderBookingOptions();
    renderFilters();
    renderRooms();
    renderReviews();
    renderRatings();
    renderInstagram();
    renderFloats();
    renderGallery("comfort");
    applyI18n();

    initCursor(); initHeader(); initMenu(); initTabs(); initBooking(); initCounters(); initParallax();

    $("#revPrev").addEventListener("click", function () { moveReview(-1); });
    $("#revNext").addEventListener("click", function () { moveReview(1); });
    $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

    // reviews autoplay
    if (!reduceMotion) {
      var auto = setInterval(function () { moveReview(1); }, 6500);
      var revSec = $("#reviews");
      revSec.addEventListener("mouseenter", function () { clearInterval(auto); });
    }

    runPreloader(function () { observeReveals(document); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
