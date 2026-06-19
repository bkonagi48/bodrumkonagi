(function () {
  "use strict";

  var DEFAULT_PASS = "bodrum48";
  var REPO_PATH = "bkonagi48/bodrumkonagi";
  var FILE_PATH = "js/data.js";

  var state = {
    rooms: [],
    currentToken: "",
    currentRoomId: null
  };

  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  /* ------------------------------------------------------------- Auth check */
  function checkAuth() {
    var savedPass = localStorage.getItem("bk_admin_password");
    var savedToken = localStorage.getItem("bk_github_token");

    if (savedPass === DEFAULT_PASS && savedToken) {
      state.currentToken = savedToken;
      $("#loginOverlay").classList.add("is-hidden");
      initDashboard();
    }
  }

  function handleLogin() {
    var passwordInput = $("#adminPass").value.trim();
    var tokenInput = $("#ghToken").value.trim();

    if (passwordInput !== DEFAULT_PASS) {
      alert("Hatalı Panel Şifresi! / Incorrect Panel Password!");
      return;
    }

    if (!tokenInput.startsWith("ghp_") && !tokenInput.startsWith("github_pat_")) {
      alert("Lütfen geçerli bir GitHub Token girin! / Please enter a valid GitHub Token!");
      return;
    }

    localStorage.setItem("bk_admin_password", passwordInput);
    localStorage.setItem("bk_github_token", tokenInput);
    state.currentToken = tokenInput;

    $("#loginOverlay").classList.add("is-hidden");
    initDashboard();
  }

  function handleLogout() {
    localStorage.removeItem("bk_admin_password");
    localStorage.removeItem("bk_github_token");
    location.reload();
  }

  /* ------------------------------------------------------------- Dashboard */
  function initDashboard() {
    // Copy current SITE_DATA rooms into our state
    if (window.SITE_DATA && window.SITE_DATA.ROOMS) {
      state.rooms = JSON.parse(JSON.stringify(window.SITE_DATA.ROOMS));
    }
    renderRoomsGrid();
  }

  function renderRoomsGrid() {
    var grid = $("#roomsGrid");
    if (!grid) return;

    if (state.rooms.length === 0) {
      grid.innerHTML = "<p>Oda verisi yüklenemedi. / Failed to load room data.</p>";
      return;
    }

    grid.innerHTML = state.rooms.map(function (room) {
      var name = room.name.tr || room.name.en || room.id;
      var price = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(room.priceFrom);
      var image = room.images && room.images[0] ? room.images[0] : "assets/images/room-1.jpg";

      return '' +
        '<div class="room-card">' +
          '<img src="' + image + '" alt="' + name + '" class="room-card__img" onerror="this.src=\'assets/images/room-1.jpg\'">' +
          '<div class="room-card__content">' +
            '<h3 class="room-card__title">' + name + '</h3>' +
            '<div class="room-card__price">' + price + ' <span style="font-size: 13px; font-weight: 300; color: var(--ink-soft);">/ gece</span></div>' +
            '<div class="room-card__meta">' +
              '<span>Capacity: ' + room.capacity + ' guests</span> | ' +
              '<span>Size: ' + room.sizeM2 + ' m²</span> | ' +
              '<span>Count: ' + room.count + ' rooms</span>' +
            '</div>' +
            '<button class="btn btn--outline room-card__btn" data-room-id="' + room.id + '">Edit Room</button>' +
          '</div>' +
        '</div>';
    }).join("");

    // Bind edit buttons
    $$(".room-card__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openEditModal(btn.getAttribute("data-room-id"));
      });
    });
  }

  /* ------------------------------------------------------------- Edit Modal */
  function openEditModal(roomId) {
    var room = state.rooms.find(function (r) { return r.id === roomId; });
    if (!room) return;

    state.currentRoomId = roomId;
    $("#editRoomId").value = roomId;

    // Fill form fields
    $("#roomNameTr").value = room.name.tr || "";
    $("#roomNameEn").value = room.name.en || "";
    $("#roomViewTr").value = (room.view && room.view.tr) || "";
    $("#roomViewEn").value = (room.view && room.view.en) || "";
    $("#roomFloorTr").value = (room.floor && room.floor.tr) || "";
    $("#roomFloorEn").value = (room.floor && room.floor.en) || "";
    $("#roomDescTr").value = room.desc.tr || "";
    $("#roomDescEn").value = room.desc.en || "";
    $("#roomBedsTr").value = (room.beds && room.beds.tr) || "";
    $("#roomBedsEn").value = (room.beds && room.beds.en) || "";

    $("#roomPrice").value = room.priceFrom;
    $("#roomCapacity").value = room.capacity;
    $("#roomSize").value = room.sizeM2;
    $("#roomCount").value = room.count;

    $("#modalTitle").textContent = "Edit: " + (room.name.tr || room.name.en);
    $("#editModal").classList.add("is-open");

    // Reset lang tabs
    switchLangTab("tr");
  }

  function closeEditModal() {
    $("#editModal").classList.remove("is-open");
    state.currentRoomId = null;
  }

  function switchLangTab(lang) {
    $$(".tab-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-tab") === lang);
    });
    $$(".lang-section").forEach(function (sec) {
      sec.classList.toggle("is-active", sec.getAttribute("id") === "lang-" + lang);
    });
  }

  function handleSaveRoom(e) {
    e.preventDefault();
    var roomId = $("#editRoomId").value;
    var idx = state.rooms.findIndex(function (r) { return r.id === roomId; });
    if (idx === -1) return;

    // Update state object
    state.rooms[idx].name.tr = $("#roomNameTr").value.trim();
    state.rooms[idx].name.en = $("#roomNameEn").value.trim();

    state.rooms[idx].view = {
      tr: $("#roomViewTr").value.trim(),
      en: $("#roomViewEn").value.trim()
    };
    state.rooms[idx].floor = {
      tr: $("#roomFloorTr").value.trim(),
      en: $("#roomFloorEn").value.trim()
    };
    state.rooms[idx].desc.tr = $("#roomDescTr").value.trim();
    state.rooms[idx].desc.en = $("#roomDescEn").value.trim();

    state.rooms[idx].beds = {
      tr: $("#roomBedsTr").value.trim(),
      en: $("#roomBedsEn").value.trim()
    };

    state.rooms[idx].priceFrom = parseInt($("#roomPrice").value, 10);
    state.rooms[idx].capacity = parseInt($("#roomCapacity").value, 10);
    state.rooms[idx].sizeM2 = parseInt($("#roomSize").value, 10);
    state.rooms[idx].count = parseInt($("#roomCount").value, 10);

    // Save back to window.SITE_DATA to sync
    window.SITE_DATA.ROOMS = state.rooms;

    renderRoomsGrid();
    closeEditModal();
  }

  /* ------------------------------------------------------------- GitHub API Publish */
  // Handles unicode characters correctly for Base64 encoding
  function utob(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  function publishChanges() {
    var publishBtn = $("#publishBtn");
    var originalText = publishBtn.textContent;
    publishBtn.disabled = true;
    publishBtn.textContent = "Publishing...";

    var url = "https://api.github.com/repos/" + REPO_PATH + "/contents/" + FILE_PATH;
    var headers = {
      "Authorization": "token " + state.currentToken,
      "Accept": "application/vnd.github+json"
    };

    // 1. Get current file data (specifically to get the latest SHA)
    fetch(url, { headers: headers })
      .then(function (res) {
        if (!res.ok) {
          throw new Error("GitHub repository or token check failed. (Status: " + res.status + ")");
        }
        return res.json();
      })
      .then(function (fileData) {
        var currentSha = fileData.sha;

        // 2. Format new javascript file content
        var jsContent = "/* ============================================================================\n" +
          "   BODRUM KONAĞI — CONTENT DATA\n" +
          "   Generated automatically by Admin Panel.\n" +
          "   ========================================================================== */\n\n" +
          "window.SITE_DATA = " + JSON.stringify(window.SITE_DATA, null, 2) + ";\n";

        var body = {
          message: "chore: update rooms data via admin dashboard",
          content: utob(jsContent),
          sha: currentSha
        };

        // 3. PUT request to update the file
        return fetch(url, {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(body)
        });
      })
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Publish update failed. (Status: " + res.status + ")");
        }
        return res.json();
      })
      .then(function () {
        alert("Başarılı! Değişiklikler kaydedildi. Siteniz 1 dakika içinde güncellenecektir.\n\nSuccess! Changes published. Your site will be updated in ~1 minute.");
      })
      .catch(function (err) {
        alert("Hata oluştu! / Error occurred:\n" + err.message);
      })
      .finally(function () {
        publishBtn.disabled = false;
        publishBtn.textContent = originalText;
      });
  }

  /* ------------------------------------------------------------- Events Binding */
  function initEvents() {
    $("#loginBtn").addEventListener("click", handleLogin);
    $("#logoutBtn").addEventListener("click", handleLogout);
    $("#publishBtn").addEventListener("click", publishChanges);
    $("#modalClose").addEventListener("click", closeEditModal);
    $("#modalCancelBtn").addEventListener("click", closeEditModal);
    $("#editForm").addEventListener("submit", handleSaveRoom);

    // Lang tabs in modal
    $$("[data-lang-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchLangTab(btn.getAttribute("data-lang-tab"));
      });
    });

    // Handle escape key to close modal
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeEditModal();
    });
  }

  // Check storage on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initEvents();
      checkAuth();
    });
  } else {
    initEvents();
    checkAuth();
  }

})();
