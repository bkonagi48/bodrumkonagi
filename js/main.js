/* =============================================================================
   BODRUM KONAĞI — INTERACTIONS
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.SITE_DATA || {};
  var PHONE = "+905330228848";
  var WA = "905330228848";
  var EMAIL = "bodrumkonagi@gmail.com";
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
      "hero.support": "A fully renovated boutique konak in the heart of the old town, just steps from the marina, the bazaar, and the Aegean sea.",
      "hero.scroll": "Scroll",
      "book.checkin": "Check-in", "book.checkout": "Check-out", "book.type": "Room type",
      "book.guests": "Guests", "book.cta": "Book on WhatsApp",
      "intro.eyebrow": "The Konak",
      "intro.statement": "In the heart of Bodrum, where the warm spirit of the Aegean meets traditional Bodrum architecture.",
      "intro.p1": "Bodrum Konağı is a small, completely renovated boutique hotel built around a quiet stone courtyard. With its whitewashed walls, warm wood, and shaded garden, it offers a peaceful retreat in the heart of Bodrum.",
      "intro.p2": "We'll be delighted to welcome you and help you live the real life of Bodrum, from peaceful mornings to the warm atmosphere of the Aegean.",
      "stat.google": "Google rating", "stat.reviews": "Guest reviews",
      "stat.marina": "Walk to the marina", "stat.renovated": "Renovated",
      "divider.eyebrow": "Experience", "divider.l1": "Live the", "divider.l2": "Bodrum life",
      "amen.eyebrow": "What we offer", "amen.title": "Everything you need, nothing you don't.",
      "amen.tab.comfort": "Comfort", "amen.tab.cuisine": "Cuisine",
      "amen.tab.explore": "Explore", "amen.tab.around": "Getting around",
      "feat.wifi": "Free Wi-Fi", "feat.breakfast": "Bed & Breakfast or Room Only", "feat.ac": "Air conditioning",
      "feat.transfer": "Airport transfer", "feat.transfer.note": "Extra charge · Ask via WhatsApp",
      "feat.parking": "Partner parking", "feat.parking.note": "Discounted rate · Ask via WhatsApp",
      "feat.accessible": "Accessible",
      "feat.safe": "In-room safe", "feat.soundproof": "Sound-proofing",
      "rooms.eyebrow": "Stay", "rooms.title": "Our Rooms",
      "rooms.note": "Eight room types across twelve individually styled rooms, each renovated to reflect true Bodrum character.",
      "rev.eyebrow": "Guest stories", "rev.title": "What our guests say",
      "loc.eyebrow": "Find us", "loc.title": "In the heart of Bodrum",
      "loc.lead": "Located on a quiet street in the center of the old town, where everything worth seeing is just a short walk away.",
      "loc.castle": "Bodrum Castle", "loc.bars": "Bars Street", "loc.bazaar": "Bodrum Bazaar",
      "loc.marina": "Marina", "loc.airport": "Milas-Bodrum Airport",
      "loc.min5": "5 min walk", "loc.min8": "8 min walk", "loc.min34": "~34 min drive",
      "loc.directions": "Get directions", "loc.call": "Call us", "loc.openmap": "Open in Google Maps",
      "cta.eyebrow": "Bodrum Konağı", "cta.l1": "More than a stay,", "cta.l2": "it's an experience.",
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
      "ui.guestsCount": "guests · up to",
      "sister.eyebrow": "Sister Property",
      "sister.title": "A Peaceful Garden Escape",
      "sister.desc": "Nestled among the lush citrus gardens of Bitez, Dolce Vita Luxury Bungalows offers a tranquil retreat with premium stone and wood cabins, an outdoor pool, and authentic Bodrum serenity.",
      "sister.cta": "Explore Dolce Vita"
    },
    tr: {
      "nav.menu": "Menü", "nav.contact": "İletişim", "nav.book": "Rezervasyon",
      "menu.home": "Anasayfa", "menu.rooms": "Odalar", "menu.experience": "Deneyim",
      "menu.reviews": "Yorumlar", "menu.location": "Konum", "menu.contact": "İletişim",
      "menu.reserve": "Rezervasyon", "menu.find": "Bize ulaşın",
      "hero.eyebrow": "Butik Otel · Bodrum", "hero.tag": "Mutluluk burada başlar.",
      "hero.support": "Eski şehrin kalbinde, tamamen yenilenmiş bir butik konak; marinaya, çarşıya ve Ege denizine sadece birkaç adım mesafede.",
      "hero.scroll": "Kaydır",
      "book.checkin": "Giriş", "book.checkout": "Çıkış", "book.type": "Oda tipi",
      "book.guests": "Misafir", "book.cta": "WhatsApp'tan rezervasyon",
      "intro.eyebrow": "Konak",
      "intro.statement": "Bodrum'un kalbinde; Ege'nin sıcak ruhunun geleneksel Bodrum mimarisiyle buluştuğu yer.",
      "intro.p1": "Bodrum Konağı, sessiz bir taş avlu etrafında kurulmuş, tamamen yenilenmiş küçük bir butik oteldir. Bembeyaz duvarları, sıcak ahşap detayları ve gölgeli bahçesiyle, Bodrum'un sunduğu her şeyin tam ortasında huzurlu bir dinlenme alanıdır.",
      "intro.p2": "Sizi ağırlamaktan ve huzurlu sabahlardan Ege'nin samimi atmosferine kadar Bodrum'un gerçek hayatını yaşamanıza yardımcı olmaktan mutluluk duyarız.",
      "stat.google": "Google puanı", "stat.reviews": "Misafir yorumu",
      "stat.marina": "Marinaya yürüyüş", "stat.renovated": "Yenilendi",
      "divider.eyebrow": "Deneyim", "divider.l1": "Bodrum hayatını", "divider.l2": "yaşayın",
      "amen.eyebrow": "Sunduklarımız", "amen.title": "İhtiyacınız olan her şey, fazlası değil.",
      "amen.tab.comfort": "Konfor", "amen.tab.cuisine": "Lezzet",
      "amen.tab.explore": "Keşfet", "amen.tab.around": "Ulaşım",
      "feat.wifi": "Ücretsiz Wi-Fi", "feat.breakfast": "Oda Kahvaltı veya Sadece Oda", "feat.ac": "Klima",
      "feat.transfer": "Havaalanı transferi", "feat.transfer.note": "Ek ücretli · WhatsApp'tan sorun",
      "feat.parking": "Anlaşmalı otopark", "feat.parking.note": "İndirimli fiyat · WhatsApp'tan sorun",
      "feat.accessible": "Engelli erişimi",
      "feat.safe": "Oda kasası", "feat.soundproof": "Ses yalıtımı",
      "rooms.eyebrow": "Konaklama", "rooms.title": "Odalarımız",
      "rooms.note": "Sekiz oda tipi ve on iki ayrı tasarlanmış odasıyla, her bir oda gerçek Bodrum karakterini yansıtacak şekilde yenilenmiştir.",
      "rev.eyebrow": "Misafir hikâyeleri", "rev.title": "Misafirlerimiz ne diyor",
      "loc.eyebrow": "Bizi bulun", "loc.title": "Bodrum'un tam merkezinde",
      "loc.lead": "Eski şehrin merkezinde sakin bir sokakta yer alan konağımızdan, görülmeye değer her yere yürüyerek kolayca ulaşabilirsiniz.",
      "loc.castle": "Bodrum Kalesi", "loc.bars": "Barlar Sokağı", "loc.bazaar": "Bodrum Çarşı",
      "loc.marina": "Marina", "loc.airport": "Milas-Bodrum Havalimanı",
      "loc.min5": "5 dk yürüme", "loc.min8": "8 dk yürüme", "loc.min34": "~34 dk araç",
      "loc.directions": "Yol tarifi al", "loc.call": "Bizi arayın", "loc.openmap": "Google Haritalar'da aç",
      "cta.eyebrow": "Bodrum Konağı", "cta.l1": "Sadece bir konaklama değil,", "cta.l2": "gerçek bir deneyim.",
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
      "ui.guestsCount": "misafir · en fazla",
      "sister.eyebrow": "Kardeş Tesisimiz",
      "sister.title": "Huzurlu Bir Bahçe Kaçamağı",
      "sister.desc": "Bitez'in narenciye bahçeleri arasında yer alan Dolce Vita Luxury Bungalows, şık taş ve ahşap kulübeleri, açık yüzme havuzu ve doğayla iç içe sakin ortamıyla huzurlu bir Ege deneyimi sunuyor.",
      "sister.cta": "Dolce Vita'yı Keşfedin"
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
    document.dispatchEvent(new CustomEvent("langChange", { detail: { lang: lang } }));
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

    var transferMsg = state.lang === "tr"
      ? "Merhaba! Bodrum Konağı'na havaalanı transferi hakkında bilgi ve fiyat almak istiyorum."
      : "Hello! I'd like to ask about airport transfer service and pricing at Bodrum Konağı.";
    var parkingMsg = state.lang === "tr"
      ? "Merhaba! Bodrum Konağı anlaşmalı otopark hakkında bilgi ve fiyat almak istiyorum."
      : "Hello! I'd like to ask about partner parking availability and pricing at Bodrum Konağı.";
    var tEl = document.getElementById("amenTransfer");
    if (tEl) { tEl.setAttribute("href", waLink(transferMsg)); }
    var pEl = document.getElementById("amenParking");
    if (pEl) { pEl.setAttribute("href", waLink(parkingMsg)); }
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

      var sliderHTML = "";
      if (r.images && r.images.length > 1) {
        sliderHTML =
          '<button class="room-slider__btn room-slider__btn--prev" data-dir="-1" aria-label="Previous Image">' + icon("i-arrow-left") + '</button>' +
          '<button class="room-slider__btn room-slider__btn--next" data-dir="1" aria-label="Next Image">' + icon("i-arrow-right") + '</button>' +
          '<div class="room-slider__counter">1 / ' + r.images.length + '</div>';
      }

      var nightsOptions = "";
      for (var nt = 1; nt <= 14; nt++) {
        var ntLabel = nt + " " + (state.lang === "tr" ? "Gece" : (nt === 1 ? "Night" : "Nights"));
        nightsOptions += '<option value="' + nt + '">' + ntLabel + '</option>';
      }

      var guestsOptions = "";
      for (var gst = 1; gst <= r.capacity; gst++) {
        var gstLabel = gst + " " + (gst === 1 ? t("ui.guest") : t("ui.guests"));
        guestsOptions += '<option value="' + gst + '">' + gstLabel + '</option>';
      }

      return '' +
        '<article class="room-row reveal">' +
          '<div class="room-row__media" data-room-id="' + r.id + '" data-current-idx="0">' +
            '<span class="room-row__num">' + n + '</span>' +
            '<img src="' + (r.images && r.images[0]) + '" alt="' + L(r.name) + '" loading="lazy">' +
            sliderHTML +
          '</div>' +
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
            '<form class="room-booking glass" data-room-id="' + r.id + '">' +
              '<div class="room-booking__field">' +
                '<label for="room-in-' + r.id + '">' + t("book.checkin") + '</label>' +
                '<input type="date" id="room-in-' + r.id + '" class="room-booking__in" name="checkin" data-cursor required>' +
              '</div>' +
              '<div class="room-booking__field">' +
                '<label for="room-nights-' + r.id + '">' + (state.lang === "tr" ? "Gece" : "Nights") + '</label>' +
                '<div class="select">' +
                  '<select id="room-nights-' + r.id + '" class="room-booking__nights" name="nights" data-cursor>' +
                    nightsOptions +
                  '</select>' +
                  '<svg class="icon"><use href="#i-chevron-down"></use></svg>' +
                '</div>' +
              '</div>' +
              '<div class="room-booking__field">' +
                '<label for="room-guests-' + r.id + '">' + t("book.guests") + '</label>' +
                '<div class="select">' +
                  '<select id="room-guests-' + r.id + '" class="room-booking__guests" name="guests" data-cursor>' +
                    guestsOptions +
                  '</select>' +
                  '<svg class="icon"><use href="#i-chevron-down"></use></svg>' +
                '</div>' +
              '</div>' +
              '<button type="submit" class="room-booking__btn" data-cursor>' +
                '<span>' + t("book.cta") + '</span>' +
                icon("i-arrow-right") +
              '</button>' +
            '</form>' +
            '<div class="room-row__foot">' +
              '<span class="room-row__count">' + r.count + ' ' + t("ui.rooms") + '</span>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join("");
    observeReveals(wrap);
    initRoomBookingForms();
  }

  function initRoomBookingForms() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var todayStr = yyyy + '-' + mm + '-' + dd;

    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tomYyyy = tomorrow.getFullYear();
    var tomMm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    var tomDd = String(tomorrow.getDate()).padStart(2, '0');
    var tomorrowStr = tomYyyy + '-' + tomMm + '-' + tomDd;

    $$(".room-booking").forEach(function (form) {
      var dateInput = form.querySelector(".room-booking__in");
      if (dateInput) {
        dateInput.setAttribute("min", todayStr);
        dateInput.value = tomorrowStr;
        convertToCustomDatePicker(dateInput);
      }

      var nightsSel = form.querySelector(".room-booking__nights");
      if (nightsSel) {
        convertToCustomSelect(nightsSel);
      }

      var guestsSel = form.querySelector(".room-booking__guests");
      if (guestsSel) {
        convertToCustomSelect(guestsSel);
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var roomId = form.getAttribute("data-room-id");
        var room = (DATA.ROOMS || []).find(function (rm) { return rm.id === roomId; });
        if (!room) return;

        var ci = dateInput ? dateInput.value : "";
        var nights = form.querySelector(".room-booking__nights").value;
        var guests = form.querySelector(".room-booking__guests").value;

        var co = "";
        if (ci) {
          var ciDate = new Date(ci);
          ciDate.setDate(ciDate.getDate() + parseInt(nights, 10));
          var coYyyy = ciDate.getFullYear();
          var coMm = String(ciDate.getMonth() + 1).padStart(2, '0');
          var coDd = String(ciDate.getDate()).padStart(2, '0');
          co = coYyyy + '-' + coMm + '-' + coDd;
        }

        var msg;
        var roomName = L(room.name);
        if (state.lang === "tr") {
          msg = "Merhaba! Bodrum Konağı'nda \"" + roomName + "\" odası için rezervasyon talebinde bulunmak istiyorum.";
          if (ci) msg += "\nGiriş Tarihi: " + ci;
          if (nights) msg += "\nKonaklama Süresi: " + nights + " Gece";
          if (co) msg += "\nÇıkış Tarihi: " + co;
          if (guests) msg += "\nMisafir Sayısı: " + guests;
        } else {
          msg = "Hello! I'd like to request a reservation for the \"" + roomName + "\" room at Bodrum Konağı.";
          if (ci) msg += "\nCheck-in: " + ci;
          if (nights) msg += "\nDuration: " + nights + " Nights";
          if (co) msg += "\nCheck-out: " + co;
          if (guests) msg += "\nGuests: " + guests;
        }

        window.open(waLink(msg), "_blank", "noopener");
      });
    });
  }

  /* --------------------------------------------------------------- reviews */
  function stars(n) { var s = ""; for (var i = 0; i < n; i++) s += icon("i-star"); return s; }
  function renderReviews() {
    var stage = $("#reviewsStage"), thumbs = $("#reviewsThumbs");
    var R = DATA.REVIEWS || []; if (!stage) return;
    stage.innerHTML = R.map(function (rv, i) {
      return '' +
        '<article class="review' + (i === state.review ? " is-active" : "") + '">' +
          '<div class="review__body">' +
            '<svg class="review__quote icon"><use href="#i-quote"></use></svg>' +
            '<div class="review__stars">' + stars(rv.rating || 5) + '</div>' +
            '<p class="review__text">' + L(rv.text) + '</p>' +
            '<div><div class="review__name">' + rv.name + '</div><div class="review__meta">' + L(rv.meta) + '</div></div>' +
          '</div>' +
        '</article>';
    }).join("");
    if (thumbs) thumbs.innerHTML = R.map(function (rv, i) {
      return '<button class="review-thumb' + (i === state.review ? " is-active" : "") + '" data-cursor data-idx="' + i + '" aria-label="Go to slide ' + (i + 1) + '"></button>';
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
  function convertToCustomSelect(selectEl) {
    if (!selectEl || selectEl.nextElementSibling && selectEl.nextElementSibling.classList.contains("custom-select-wrap")) return;

    var wrap = document.createElement("div");
    wrap.className = "custom-select-wrap";

    var trigger = document.createElement("div");
    trigger.className = "custom-select-trigger";
    trigger.setAttribute("data-cursor", "");

    var label = document.createElement("span");
    label.textContent = selectEl.options[selectEl.selectedIndex] ? selectEl.options[selectEl.selectedIndex].text : "";

    var arrow = document.createElement("span");
    arrow.className = "custom-select-arrow";
    arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';

    trigger.appendChild(label);
    trigger.appendChild(arrow);
    wrap.appendChild(trigger);

    var dropdown = document.createElement("div");
    dropdown.className = "custom-select-dropdown";

    function populateOptions() {
      dropdown.innerHTML = Array.prototype.map.call(selectEl.options, function (opt) {
        var activeClass = opt.value === selectEl.value ? " is-active" : "";
        return '<div class="custom-select-option' + activeClass + '" data-value="' + opt.value + '" data-cursor>' + opt.text + '</div>';
      }).join("");
    }
    populateOptions();
    wrap.appendChild(dropdown);

    if (selectEl.parentNode.classList.contains("select")) {
      selectEl.parentNode.parentNode.insertBefore(wrap, selectEl.parentNode.nextSibling);
      selectEl.parentNode.style.display = "none";
    } else {
      selectEl.parentNode.insertBefore(wrap, selectEl.nextSibling);
      selectEl.style.display = "none";
    }

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".custom-select-wrap.is-open, .custom-datepicker-wrap.is-open").forEach(function (el) {
        if (el !== wrap) el.classList.remove("is-open");
      });
      wrap.classList.toggle("is-open");
    });

    dropdown.addEventListener("click", function (e) {
      var opt = e.target.closest(".custom-select-option");
      if (!opt) return;
      e.stopPropagation();

      var val = opt.getAttribute("data-value");
      selectEl.value = val;
      selectEl.dispatchEvent(new Event("change"));

      label.textContent = opt.textContent;
      wrap.classList.remove("is-open");

      dropdown.querySelectorAll(".custom-select-option").forEach(function (el) {
        el.classList.remove("is-active");
      });
      opt.classList.add("is-active");
    });

    selectEl.addEventListener("change", function () {
      label.textContent = selectEl.options[selectEl.selectedIndex] ? selectEl.options[selectEl.selectedIndex].text : "";
      dropdown.querySelectorAll(".custom-select-option").forEach(function (el) {
        if (el.getAttribute("data-value") === selectEl.value) {
          el.classList.add("is-active");
        } else {
          el.classList.remove("is-active");
        }
      });
    });

    function onLangChange() {
      if (!document.contains(wrap)) {
        document.removeEventListener("langChange", onLangChange);
        return;
      }
      label.textContent = selectEl.options[selectEl.selectedIndex] ? selectEl.options[selectEl.selectedIndex].text : "";
      populateOptions();
    }
    document.addEventListener("langChange", onLangChange);

    var observer = new MutationObserver(function () {
      populateOptions();
      label.textContent = selectEl.options[selectEl.selectedIndex] ? selectEl.options[selectEl.selectedIndex].text : "";
    });
    observer.observe(selectEl, { childList: true });
  }

  function convertToCustomDatePicker(dateInputEl) {
    if (!dateInputEl || dateInputEl.nextElementSibling && dateInputEl.nextElementSibling.classList.contains("custom-datepicker-wrap")) return;

    var wrap = document.createElement("div");
    wrap.className = "custom-datepicker-wrap";

    var trigger = document.createElement("div");
    trigger.className = "custom-datepicker-trigger";
    trigger.setAttribute("data-cursor", "");

    var label = document.createElement("span");

    var iconSvg = document.createElement("span");
    iconSvg.className = "custom-datepicker-icon";
    iconSvg.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';

    trigger.appendChild(label);
    trigger.appendChild(iconSvg);
    wrap.appendChild(trigger);

    var calendar = document.createElement("div");
    calendar.className = "custom-datepicker-calendar";
    wrap.appendChild(calendar);

    var curDate = dateInputEl.value ? new Date(dateInputEl.value) : new Date();
    var viewDate = new Date(curDate);

    function formatDateDisplay(dateStr) {
      if (!dateStr) return state.lang === "tr" ? "Tarih Seçin" : "Select Date";
      var d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      var monthsEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var monthsTR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
      var list = state.lang === "tr" ? monthsTR : monthsEN;
      return d.getDate() + " " + list[d.getMonth()] + " " + d.getFullYear();
    }

    function updateTriggerLabel() {
      label.textContent = formatDateDisplay(dateInputEl.value);
    }

    updateTriggerLabel();

    function renderCalendarGrid() {
      var year = viewDate.getFullYear();
      var month = viewDate.getMonth();

      var monthsEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthsTR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
      var monthName = state.lang === "tr" ? monthsTR[month] : monthsEN[month];

      var html = '<div class="calendar-header">' +
        '<button class="calendar-nav prev" type="button" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>' +
        '<span class="calendar-title">' + monthName + ' ' + year + '</span>' +
        '<button class="calendar-nav next" type="button" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>' +
      '</div>';

      var weekdaysEN = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
      var weekdaysTR = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];
      var daysList = state.lang === "tr" ? weekdaysTR : weekdaysEN;

      html += '<div class="calendar-weekdays">';
      daysList.forEach(function (day) {
        html += '<span>' + day + '</span>';
      });
      html += '</div>';

      html += '<div class="calendar-days">';

      var firstDayOfMonth = new Date(year, month, 1);
      var dayOfWeek = firstDayOfMonth.getDay();
      var startOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

      var prevMonthLast = new Date(year, month, 0).getDate();
      for (var i = startOffset - 1; i >= 0; i--) {
        var dVal = prevMonthLast - i;
        html += '<span class="day sibling-month">' + dVal + '</span>';
      }

      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var minDateStr = dateInputEl.getAttribute("min");
      var minDateTime = minDateStr ? new Date(minDateStr + "T00:00:00").getTime() : 0;

      var selectedTime = dateInputEl.value ? new Date(dateInputEl.value + "T00:00:00").getTime() : 0;
      var todayTime = new Date().setHours(0, 0, 0, 0);

      for (var d = 1; d <= daysInMonth; d++) {
        var thisDate = new Date(year, month, d);
        var thisTime = thisDate.getTime();

        var classes = "day current-month";
        if (thisTime === selectedTime) classes += " is-selected";
        if (thisTime === todayTime) classes += " is-today";

        var disabled = false;
        if (minDateTime && thisTime < minDateTime) {
          classes += " is-disabled";
          disabled = true;
        }

        html += '<span class="' + classes + '" data-day="' + d + '" ' + (disabled ? 'style="pointer-events:none"' : 'data-cursor') + '>' + d + '</span>';
      }

      var totalCells = startOffset + daysInMonth;
      var nextMonthDays = (7 - (totalCells % 7)) % 7;
      for (var n = 1; n <= nextMonthDays; n++) {
        html += '<span class="day sibling-month">' + n + '</span>';
      }

      html += '</div>';

      calendar.innerHTML = html;

      calendar.querySelector(".calendar-nav.prev").addEventListener("click", function (e) {
        e.stopPropagation();
        viewDate.setMonth(viewDate.getMonth() - 1);
        renderCalendarGrid();
      });
      calendar.querySelector(".calendar-nav.next").addEventListener("click", function (e) {
        e.stopPropagation();
        viewDate.setMonth(viewDate.getMonth() + 1);
        renderCalendarGrid();
      });

      calendar.querySelectorAll(".day.current-month:not(.is-disabled)").forEach(function (dayEl) {
        dayEl.addEventListener("click", function (e) {
          e.stopPropagation();
          var dayVal = dayEl.getAttribute("data-day");
          var mm = String(month + 1).padStart(2, '0');
          var dd = String(dayVal).padStart(2, '0');
          var dateStr = year + '-' + mm + '-' + dd;

          dateInputEl.value = dateStr;
          dateInputEl.dispatchEvent(new Event('change'));
          updateTriggerLabel();
          wrap.classList.remove("is-open");
        });
      });
    }

    renderCalendarGrid();

    if (dateInputEl.parentNode.classList.contains("select")) {
      dateInputEl.parentNode.parentNode.insertBefore(wrap, dateInputEl.parentNode.nextSibling);
      dateInputEl.parentNode.style.display = "none";
    } else {
      dateInputEl.parentNode.insertBefore(wrap, dateInputEl.nextSibling);
      dateInputEl.style.display = "none";
    }

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".custom-select-wrap.is-open, .custom-datepicker-wrap.is-open").forEach(function (el) {
        if (el !== wrap) el.classList.remove("is-open");
      });
      if (dateInputEl.value) {
        viewDate = new Date(dateInputEl.value);
      } else {
        viewDate = new Date();
      }
      renderCalendarGrid();
      wrap.classList.toggle("is-open");
    });

    dateInputEl.addEventListener("change", function () {
      updateTriggerLabel();
      if (dateInputEl.value) {
        viewDate = new Date(dateInputEl.value);
      }
    });

    function onLangChange() {
      if (!document.contains(wrap)) {
        document.removeEventListener("langChange", onLangChange);
        return;
      }
      updateTriggerLabel();
      renderCalendarGrid();
    }
    document.addEventListener("langChange", onLangChange);
  }

  // Close dropdowns globally when clicking outside
  document.addEventListener("click", function () {
    document.querySelectorAll(".custom-select-wrap.is-open, .custom-datepicker-wrap.is-open").forEach(function (el) {
      el.classList.remove("is-open");
    });
  });

  function initBooking() {
    var form = $("#bookingBar");
    if (!form) return;

    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var todayStr = yyyy + '-' + mm + '-' + dd;

    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tomYyyy = tomorrow.getFullYear();
    var tomMm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    var tomDd = String(tomorrow.getDate()).padStart(2, '0');
    var tomorrowStr = tomYyyy + '-' + tomMm + '-' + tomDd;

    var bkIn = $("#bk-in");
    var bkOut = $("#bk-out");
    if (bkIn) {
      bkIn.setAttribute("min", todayStr);
      bkIn.value = todayStr;
    }
    if (bkOut) {
      bkOut.setAttribute("min", tomorrowStr);
      bkOut.value = tomorrowStr;
    }

    if (bkIn && bkOut) {
      bkIn.addEventListener("change", function () {
        if (!bkIn.value) return;
        var inDate = new Date(bkIn.value);
        var minOutDate = new Date(inDate);
        minOutDate.setDate(minOutDate.getDate() + 1);
        var outYyyy = minOutDate.getFullYear();
        var outMm = String(minOutDate.getMonth() + 1).padStart(2, '0');
        var outDd = String(minOutDate.getDate()).padStart(2, '0');
        var minOutStr = outYyyy + '-' + outMm + '-' + outDd;

        bkOut.setAttribute("min", minOutStr);
        if (bkOut.value && bkOut.value <= bkIn.value) {
          bkOut.value = minOutStr;
          bkOut.dispatchEvent(new Event("change"));
        }
      });
    }

    // Convert to custom styled components
    if (bkIn) convertToCustomDatePicker(bkIn);
    if (bkOut) convertToCustomDatePicker(bkOut);

    var typeSel = $("#bk-type");
    if (typeSel) convertToCustomSelect(typeSel);

    var guestsSel = $("#bk-guests");
    if (guestsSel) convertToCustomSelect(guestsSel);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ci = bkIn.value, co = bkOut.value;
      var currentTypeSel = $("#bk-type");
      var g = $("#bk-guests").value;
      var typeTxt = currentTypeSel.options[currentTypeSel.selectedIndex] ? currentTypeSel.options[currentTypeSel.selectedIndex].text : "";
      var msg;
      if (state.lang === "tr") {
        msg = "Merhaba! Bodrum Konağı'nda rezervasyon yapmak istiyorum.";
        if (ci) msg += "\nGiriş: " + ci; if (co) msg += "\nÇıkış: " + co;
        if (currentTypeSel.value) msg += "\nOda tipi: " + typeTxt; if (g) msg += "\nMisafir: " + g;
      } else {
        msg = "Hello! I'd like to make a reservation at Bodrum Konağı.";
        if (ci) msg += "\nCheck-in: " + ci; if (co) msg += "\nCheck-out: " + co;
        if (currentTypeSel.value) msg += "\nRoom type: " + typeTxt; if (g) msg += "\nGuests: " + g;
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

  /* --------------------------------------------------------- room sliders */
  function initRoomSliders() {
    var wrap = $("#roomsList");
    if (!wrap) return;
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".room-slider__btn");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();

      var dir = parseInt(btn.getAttribute("data-dir"), 10);
      var media = btn.closest(".room-row__media");
      var roomId = media.getAttribute("data-room-id");

      var room = (DATA.ROOMS || []).find(function (r) { return r.id === roomId; });
      if (!room || !room.images || room.images.length <= 1) return;

      var currentIdx = parseInt(media.getAttribute("data-current-idx") || "0", 10);
      var nextIdx = (currentIdx + dir + room.images.length) % room.images.length;

      media.setAttribute("data-current-idx", nextIdx);

      var img = media.querySelector("img");
      if (img) {
        img.src = room.images[nextIdx];
      }

      var counter = media.querySelector(".room-slider__counter");
      if (counter) {
        counter.textContent = (nextIdx + 1) + " / " + room.images.length;
      }
    });
  }

  /* --------------------------------------------------------- section nav */
  function initSecNav() {
    var nav = document.getElementById("secNav");
    if (!nav) return;

    var items = Array.prototype.slice.call(nav.querySelectorAll(".secnav__item"));
    var sectionIds = items.map(function (it) { return it.getAttribute("data-section"); });
    var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

    // All page sections/elements for background detection (order matters)
    var allSections = Array.prototype.slice.call(
      document.querySelectorAll("#home, #intro, #divider, #amenities, #rooms, #reviews, #location, #instagram, #book, #sister-hotel, #contact")
    );
    // Which sections have dark backgrounds
    var darkIds = ["home", "divider", "amenities", "rooms", "reviews", "book", "contact"];

    function isDarkSection(id) {
      return darkIds.indexOf(id) >= 0;
    }

    // Show/hide based on scroll depth
    function checkVisibility() {
      var y = window.pageYOffset;
      nav.classList.toggle("is-visible", y > 300);
    }

    // Detect which section is behind the nav (at viewport vertical center)
    var lastBg = "";
    function detectBackground() {
      var vpCenter = window.innerHeight / 2;
      var found = null;
      for (var i = allSections.length - 1; i >= 0; i--) {
        var rect = allSections[i].getBoundingClientRect();
        if (rect.top <= vpCenter && rect.bottom > vpCenter) {
          found = allSections[i];
          break;
        }
      }
      var bg = found ? (isDarkSection(found.id) ? "dark" : "light") : "light";
      if (bg !== lastBg) {
        lastBg = bg;
        nav.classList.toggle("secnav--on-dark", bg === "dark");
        nav.classList.toggle("secnav--on-light", bg === "light");
      }
    }

    // Track active section with IntersectionObserver
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && en.intersectionRatio >= 0.15) {
          items.forEach(function (it) {
            it.classList.toggle("is-active", it.getAttribute("data-section") === en.target.id);
          });
        }
      });
    }, { threshold: [0.15, 0.5], rootMargin: "-20% 0px -20% 0px" });

    sections.forEach(function (sec) { observer.observe(sec); });

    var scrollTicking = false;
    function onScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(function () {
          checkVisibility();
          detectBackground();
          scrollTicking = false;
        });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    checkVisibility();
    detectBackground();

    // Mobile touch support: tap to open, tap again or tap outside to close
    var isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      nav.addEventListener("click", function (e) {
        var link = e.target.closest(".secnav__item");
        if (!nav.classList.contains("is-touch-open")) {
          e.preventDefault();
          nav.classList.add("is-touch-open");
        } else if (link) {
          nav.classList.remove("is-touch-open");
        }
      });
      document.addEventListener("click", function (e) {
        if (!nav.contains(e.target)) {
          nav.classList.remove("is-touch-open");
        }
      });
    }
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

    initCursor(); initHeader(); initMenu(); initTabs(); initBooking(); initRoomSliders(); initCounters(); initParallax(); initSecNav();

    $("#revPrev").addEventListener("click", function () { moveReview(-1); });
    $("#revNext").addEventListener("click", function () { moveReview(1); });
    $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

    // reviews autoplay
    if (!reduceMotion) {
      var autoTimer = setInterval(function () { moveReview(1); }, 6500);
      var revSec = $("#reviews");
      if (revSec) {
        revSec.addEventListener("mouseenter", function () { clearInterval(autoTimer); });
        revSec.addEventListener("mouseleave", function () {
          clearInterval(autoTimer);
          autoTimer = setInterval(function () { moveReview(1); }, 6500);
        });
      }
    }

    runPreloader(function () { observeReveals(document); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
