/* ============================================================================
   BODRUM KONAĞI — CONTENT DATA
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update rooms, prices, reviews and
   gallery images. No HTML/CSS knowledge required.

   • ROOMS  — your room catalogue. Scales to your 12 rooms / 7 types.
              Copy a block, change the fields, point `images` to your photos.
   • REVIEWS — guest reviews shown in the carousel.
   • RATINGS — score badges (Google, Tripadvisor, …).
   • GALLERY — the tabbed "What We Offer" image sets.
   • EXPERIENCE_IMAGES — the floating photos in the closing section.

   Prices below are PLACEHOLDERS — replace `priceFrom` with your real rates.
   ========================================================================== */

window.SITE_DATA = {

  /* --- ROOMS: 7 types, 12 physical rooms (count adds up to 12) ------------- */
  ROOMS: [
    {
      id: "deluxe-oda",
      type: "Deluxe",
      name: { en: "Deluxe Room", tr: "Deluxe Oda" },
      view: { en: "Garden View", tr: "Bahçe Manzaralı" },
      desc: {
        en: "A beautiful deluxe room overlooking our lush gardens.",
        tr: "Yemyeşil bahçelerimize bakan güzel bir deluxe oda."
      },
      sizeM2: 24, capacity: 2,
      beds: { en: "1 double bed", tr: "1 çift kişilik yatak" },
      priceFrom: 4800, currency: "TRY", count: 1,
      images: ["assets/images/room-3.jpg", "assets/images/room-bath.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "minibar", "tv", "soundproof", "nonsmoking"]
    },
    {
      id: "twin-deluxe",
      type: "Twin Deluxe",
      name: { en: "Twin Deluxe Room", tr: "Twin Deluxe Oda" },
      view: { en: "Garden View", tr: "Bahçe Manzaralı" },
      floor: { en: "Garden Floor", tr: "Bahçe Katı" },
      desc: {
        en: "Comfortable twin room with direct access to the garden floor.",
        tr: "Bahçe katına doğrudan erişimi olan konforlu iki yataklı oda."
      },
      sizeM2: 26, capacity: 2,
      beds: { en: "2 single beds", tr: "2 tek kişilik yatak" },
      priceFrom: 4800, currency: "TRY", count: 1,
      images: ["assets/images/room-2.jpg", "assets/images/room-bath.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "tv", "nonsmoking"]
    },
    {
      id: "junior-deluxe",
      type: "Junior Deluxe",
      name: { en: "Junior Deluxe", tr: "Junior Deluxe" },
      view: { en: "Courtyard View", tr: "Avlu Manzaralı" },
      floor: { en: "2nd Floor", tr: "2. Kat" },
      desc: {
        en: "Peaceful room located on the second floor with lovely courtyard views.",
        tr: "İkinci katta yer alan, sevimli avlu manzaralı huzurlu oda."
      },
      sizeM2: 22, capacity: 2,
      beds: { en: "1 double bed", tr: "1 çift kişilik yatak" },
      priceFrom: 4500, currency: "TRY", count: 1,
      images: ["assets/images/room-1.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "tv", "nonsmoking"]
    },
    {
      id: "triple",
      type: "Triple",
      name: { en: "Triple Room", tr: "Triple Oda" },
      view: { en: "Garden View", tr: "Bahçe Manzaralı" },
      desc: {
        en: "Spacious room suitable for up to three guests with garden views.",
        tr: "Bahçe manzaralı, üç misafire kadar konaklamaya uygun ferah oda."
      },
      sizeM2: 28, capacity: 3,
      beds: { en: "1 double bed + 1 single bed", tr: "1 çift kişilik yatak + 1 tek kişilik yatak" },
      priceFrom: 5500, currency: "TRY", count: 1,
      images: ["assets/images/room-3.jpg", "assets/images/room-lounge.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "tv", "nonsmoking"]
    },
    {
      id: "family-bunk",
      type: "Family",
      name: { en: "Family Room with Bunk Bed", tr: "Ranzalı Aile Odası" },
      desc: {
        en: "Perfect for families with children, featuring a bunk bed in a comfortable layout.",
        tr: "Çocuklu aileler için mükemmel, konforlu bir düzende ranza içeren aile odası."
      },
      sizeM2: 30, capacity: 4,
      beds: { en: "1 double bed + 1 bunk bed", tr: "1 çift kişilik yatak + 1 ranza" },
      priceFrom: 6000, currency: "TRY", count: 1,
      images: ["assets/images/room-2.jpg", "assets/images/room-bath.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "tv", "familyfriendly", "nonsmoking"]
    },
    {
      id: "senior-suite",
      type: "Senior Suite",
      name: { en: "Senior Suite", tr: "Senior Suite" },
      view: { en: "Garden View", tr: "Bahçe Manzaralı" },
      floor: { en: "Garden Floor", tr: "Bahçe Katı" },
      desc: {
        en: "Our spacious senior suite with elegant decor and direct garden access.",
        tr: "Zarif dekorasyona ve doğrudan bahçe erişimine sahip geniş senior suitimiz."
      },
      sizeM2: 40, capacity: 3,
      beds: { en: "1 king-size bed + lounge", tr: "1 king-size yatak + oturma alanı" },
      priceFrom: 8000, currency: "TRY", count: 1,
      images: ["assets/images/room-4.jpg", "assets/images/room-lounge.jpg", "assets/images/room-bath.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "minibar", "tv", "soundproof", "nonsmoking"]
    },
    {
      id: "family-suite",
      type: "Family Suite",
      name: { en: "Family Suite", tr: "Aile Suiti" },
      view: { en: "Garden View", tr: "Bahçe Manzaralı" },
      floor: { en: "Ground Floor", tr: "Giriş Katı" },
      desc: {
        en: "Large suite designed for families, located on the ground floor with garden views.",
        tr: "Aileler için tasarlanmış, giriş katında yer alan bahçe manzaralı geniş suit."
      },
      sizeM2: 45, capacity: 5,
      beds: { en: "1 king-size bed + 2 sofa beds", tr: "1 king-size yatak + 2 çekyat" },
      priceFrom: 8500, currency: "TRY", count: 1,
      images: ["assets/images/room-4.jpg", "assets/images/room-lounge.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "minibar", "tv", "familyfriendly", "nonsmoking"]
    },
    {
      id: "junior-triple",
      type: "Junior Triple",
      name: { en: "Junior Triple", tr: "Junior Triple" },
      view: { en: "Courtyard View", tr: "Avlu Manzaralı" },
      desc: {
        en: "Cozy triple room overlooking the quiet courtyard.",
        tr: "Sessiz avluya bakan rahat triple oda."
      },
      sizeM2: 26, capacity: 3,
      beds: { en: "3 single beds", tr: "3 tek kişilik yatak" },
      priceFrom: 5000, currency: "TRY", count: 1,
      images: ["assets/images/room-1.jpg", "assets/images/room-bath.jpg"],
      amenities: ["wifi", "breakfast", "ac", "safe", "tv", "nonsmoking"]
    }
  ],

  /* --- REVIEWS (real guest reviews) --------------------------------------- */
  REVIEWS: [
    {
      name: "Kerem Gencebay",
      source: "Google", rating: 5,
      meta: { en: "Google · 3 months ago", tr: "Google · 3 ay önce" },
      avatar: "assets/images/guest-1.jpg",
      text: {
        en: "We stayed here with my wife in early March and it truly became one of those places where we said \"so glad we chose it.\" Right in the centre of Bodrum — walking distance to the bazaar, the marina and the bars street. The rooms were spotless, the breakfast generous and delicious, and the host genuinely attentive. We'll definitely be back.",
        tr: "Mart ayının başında eşimle konakladığımız bu otel, gerçekten \"iyi ki tercih etmişiz\" dediğimiz yerlerden biri oldu. Konumu Bodrum'un tam merkezinde; çarşıya, marinaya ve barlar sokağına yürüme mesafesinde. Odalar tertemiz, kahvaltı bol ve lezzetliydi, işletmeci çok ilgiliydi. Kesinlikle tekrar geleceğiz."
      }
    },
    {
      name: "Eşrefhan Kadıoğlu",
      source: "Google", rating: 5,
      meta: { en: "Google · 1 month ago", tr: "Google · bir ay önce" },
      avatar: "assets/images/guest-2.jpg",
      text: {
        en: "We spent three nights here with my wife. The rooms are relatively small, but that is exactly the concept promised — it was no problem for us. The location is perfect, the staff warm and the breakfast a real pleasure. Recommended for anyone looking for a peaceful stay.",
        tr: "Bodrum Konağı'nda eşimle 3 gece konakladık. Odalar nispeten küçük ama zaten vaat edilen konsept buydu, bizim için sorun olmadı. Konum mükemmel, personel güler yüzlü, kahvaltı çok keyifliydi. Huzurlu bir tatil arayanlara tavsiye ederim."
      }
    },
    {
      name: "adildenizk",
      source: "Tripadvisor", rating: 5,
      meta: { en: "Tripadvisor · 10 months ago", tr: "Tripadvisor · 10 ay önce" },
      avatar: "assets/images/guest-3.jpg",
      text: {
        en: "Five minutes' walk to the marina and the bars street, right in the heart of central Bodrum — a quiet place to rest. The breakfast is a proper Aegean spread! The rooms are designed in wood, very stylish and clean. We'll come again.",
        tr: "Marina ve barlar sokağına 5 dk yürüme mesafesinde. Bodrum merkezin kalbinde, sessiz bir dinlenme oteli. Kahvaltısı tam kahvaltı! Odalar ahşap dizayn edilmiş, çok şık ve temiz. Tekrar geleceğiz."
      }
    },
    {
      name: "Hotels.com Guest",
      source: "Hotels.com", rating: 5,
      meta: { en: "Hotels.com · verified stay", tr: "Hotels.com · doğrulanmış konaklama" },
      avatar: "assets/images/guest-4.jpg",
      text: {
        en: "Very clean, beautifully designed and centrally located, with a smiling owner and friendly staff. A sweet little boutique hotel you can recommend with complete peace of mind.",
        tr: "Çok temiz, şık dizayn edilmiş, merkezi konumda, güler yüzlü işletmecisi ve çalışanı olan tatlı bir butik otel. Gönül rahatlığıyla tavsiye edebilirsiniz."
      }
    }
  ],

  /* --- RATINGS (score badges) -------------------------------------------- */
  RATINGS: [
    { source: "Google",      score: "4.7", scale: "5",  count: 312 },
    { source: "Tripadvisor", score: "4.8", scale: "5",  count: 16  },
    { source: "Hotels.com",  score: "9.0", scale: "10", count: 50  },
    { source: "ZenHotels",   score: "9.6", scale: "10", count: 8   },
    { source: "Enuygun",     score: "9.9", scale: "10", count: 7   }
  ],

  /* --- GALLERY: the tabbed "What We Offer" image sets --------------------- */
  GALLERY: {
    comfort: [
      { img: "assets/images/room-1.jpg",     label: { en: "Renovated rooms",     tr: "Yenilenmiş odalar" } },
      { img: "assets/images/room-lounge.jpg", label: { en: "Calm interiors",      tr: "Huzurlu iç mekânlar" } },
      { img: "assets/images/room-bath.jpg",   label: { en: "Spa-style bathrooms", tr: "Spa tarzı banyolar" } },
      { img: "assets/images/act-pool.jpg",    label: { en: "Sun & shade",         tr: "Güneş & gölge" } }
    ],
    cuisine: [
      { img: "assets/images/act-breakfast.jpg", label: { en: "Generous breakfast", tr: "Bol kahvaltı" } },
      { img: "assets/images/act-dining.jpg",    label: { en: "Aegean flavours",    tr: "Ege lezzetleri" } },
      { img: "assets/images/exp-3.jpg",         label: { en: "Fresh & local",      tr: "Taze & yerel" } }
    ],
    explore: [
      { img: "assets/images/act-oldtown.jpg", label: { en: "The old town",     tr: "Eski şehir" } },
      { img: "assets/images/act-beach.jpg",   label: { en: "Turquoise coves",  tr: "Turkuaz koylar" } },
      { img: "assets/images/act-marina.jpg",  label: { en: "The marina",       tr: "Marina" } },
      { img: "assets/images/act-diving.jpg",  label: { en: "On the water",     tr: "Suyun üstünde" } }
    ],
    around: [
      { img: "assets/images/act-marina.jpg",   label: { en: "Walk everywhere", tr: "Her yere yürüyün" } },
      { img: "assets/images/act-nightlife.jpg", label: { en: "Bars street",     tr: "Barlar sokağı" } },
      { img: "assets/images/location.jpg",     label: { en: "Airport transfer", tr: "Havaalanı transferi" } }
    ]
  },

  /* --- EXPERIENCE_IMAGES: floating photos in the closing section ---------- */
  EXPERIENCE_IMAGES: [
    "assets/images/exp-1.jpg",
    "assets/images/exp-2.jpg",
    "assets/images/exp-4.jpg",
    "assets/images/exp-5.jpg",
    "assets/images/act-beach.jpg"
  ],

  /* --- INSTAGRAM: profile preview & feed content --------------------------- */
  INSTAGRAM: {
    profile: {
      username: "bodrumkonagi",
      fullName: "Bodrum Konağı",
      link: "https://instagram.com/bodrumkonagi",
      avatar: "assets/logo-mark.svg",
      postsCount: 124,
      followersCount: "3.8K",
      followingCount: 142,
      bio: {
        en: "Boutique Hotel in the heart of Bodrum Old Town. Whitewashed walls, quiet courtyard, steps from the marina. 🌿✨",
        tr: "Bodrum Eski Şehir'in kalbinde Butik Otel. Bembeyaz duvarlar, sessiz avlu, marinaya birkaç adım. 🌿✨"
      }
    },
    posts: [
      {
        img: "assets/images/exp-1.jpg",
        likes: 142,
        comments: 12,
        caption: {
          en: "Peaceful mornings in our quiet stone courtyard. ☕️🌸 #bodrumkonagi #boutiquehotel",
          tr: "Sessiz taş avlumuzda huzurlu sabahlar. ☕️🌸 #bodrumkonagi #butikotel"
        }
      },
      {
        img: "assets/images/act-breakfast.jpg",
        likes: 218,
        comments: 18,
        caption: {
          en: "A proper Aegean spread to start your day. Everything fresh and local. 🍇🧀",
          tr: "Güne başlamak için gerçek bir Ege kahvaltısı. Her şey taze ve yerel. 🍇🧀"
        }
      },
      {
        img: "assets/images/act-beach.jpg",
        likes: 189,
        comments: 15,
        caption: {
          en: "Under the Aegean sun, just minutes away from our door. ☀️🌊",
          tr: "Ege güneşinin altında, kapımızdan sadece dakikalar uzaklıkta. ☀️🌊"
        }
      }
    ]
  }
};
