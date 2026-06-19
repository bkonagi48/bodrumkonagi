(function () {
  "use strict";

  var DEFAULT_PASS = "bodrum48";
  var REPO_PATH = "bkonagi48/bodrumkonagi";
  var FILE_PATH = "js/data.js";

  var state = {
    rooms: [],
    currentRoomId: null,
    tempImages: []
  };

  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  /* ------------------------------------------------------------- Auth check */
  function checkAuth() {
    var savedPass = localStorage.getItem("bk_admin_password");

    if (savedPass === DEFAULT_PASS) {
      $("#loginOverlay").classList.add("is-hidden");
      initDashboard();
    }
  }

  function handleLogin() {
    var passwordInput = $("#adminPass").value.trim();

    if (passwordInput !== DEFAULT_PASS) {
      alert("Hatalı Panel Şifresi! / Incorrect Panel Password!");
      return;
    }

    localStorage.setItem("bk_admin_password", passwordInput);

    $("#loginOverlay").classList.add("is-hidden");
    initDashboard();
  }

  function handleLogout() {
    localStorage.removeItem("bk_admin_password");
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

    // Copy current images
    state.tempImages = room.images ? JSON.parse(JSON.stringify(room.images)) : [];

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

    // Render image manager
    renderImageManager();

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

    // Check if any images are still in uploading state
    var isUploading = state.tempImages.some(function (img) {
      return typeof img === "object" && img.uploading;
    });
    if (isUploading) {
      alert("Lütfen tüm görsellerin yüklenmesini bekleyin! / Please wait for all images to finish uploading!");
      return;
    }

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

    // Save images list
    state.rooms[idx].images = state.tempImages;

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

    var body = {
      password: localStorage.getItem("bk_admin_password") || DEFAULT_PASS,
      data: window.SITE_DATA
    };

    fetch("/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) {
            throw new Error(data.error || "Publish update failed.");
          }
          return data;
        });
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

  }

  /* ------------------------------------------------------------- Image Manager */
  function renderImageManager() {
    var grid = $("#imageGrid");
    if (!grid) return;

    grid.innerHTML = state.tempImages.map(function (img, idx) {
      if (typeof img === "object" && img.uploading) {
        return '' +
          '<div class="image-thumb-wrapper">' +
            '<div class="image-thumb-loading">' +
              '<span>' + img.progressText + '</span>' +
            '</div>' +
          '</div>';
      }
      return '' +
        '<div class="image-thumb-wrapper">' +
          '<img src="' + img + '" alt="" onerror="this.src=\'assets/images/room-1.jpg\'">' +
          '<div class="image-thumb-actions">' +
            (idx > 0 ? '<button type="button" class="image-action-btn move-left" data-idx="' + idx + '">←</button>' : '') +
            (idx < state.tempImages.length - 1 ? '<button type="button" class="image-action-btn move-right" data-idx="' + idx + '">→</button>' : '') +
            '<button type="button" class="image-action-btn image-action-btn--delete" data-idx="' + idx + '">×</button>' +
          '</div>' +
        '</div>';
    }).join("");

    // Bind action events
    $$(".move-left", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-idx"), 10);
        swapImages(idx, idx - 1);
      });
    });
    $$(".move-right", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-idx"), 10);
        swapImages(idx, idx + 1);
      });
    });
    $$(".image-action-btn--delete", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-idx"), 10);
        deleteImage(idx);
      });
    });
  }

  function swapImages(i, j) {
    var temp = state.tempImages[i];
    state.tempImages[i] = state.tempImages[j];
    state.tempImages[j] = temp;
    renderImageManager();
  }

  function deleteImage(idx) {
    if (confirm("Bu fotoğrafı kaldırmak istediğinizden emin misiniz?\nAre you sure you want to remove this photo?")) {
      state.tempImages.splice(idx, 1);
      renderImageManager();
    }
  }

  function handleFiles(files) {
    if (!files || !files.length) return;
    Array.prototype.slice.call(files).forEach(function (file) {
      if (!file.type.startsWith("image/")) return;

      var ext = file.name ? file.name.split(".").pop().toLowerCase() : "jpg";
      if (!file.name && file.type) {
        ext = file.type.split("/")[1] || "jpg";
      }
      var timestamp = Date.now() + "_" + Math.floor(Math.random() * 1000);
      var fileName = "room_" + state.currentRoomId + "_" + timestamp + "." + ext;

      var placeholder = { uploading: true, progressText: "Uploading..." };
      state.tempImages.push(placeholder);
      renderImageManager();

      var reader = new FileReader();
      reader.onload = function (e) {
        var base64Data = e.target.result.split(",")[1];
        uploadFileToGitHub(base64Data, fileName, placeholder);
      };
      reader.readAsDataURL(file);
    });
  }

  function uploadFileToGitHub(base64Data, fileName, placeholderObj) {
    var body = {
      password: localStorage.getItem("bk_admin_password") || DEFAULT_PASS,
      base64Data: base64Data,
      fileName: fileName
    };

    fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) throw new Error(data.error || "Upload failed");
          return data;
        });
      })
      .then(function (data) {
        var idx = state.tempImages.indexOf(placeholderObj);
        if (idx !== -1) {
          state.tempImages[idx] = data.path;
        }
        renderImageManager();
      })
      .catch(function (err) {
        alert("Görsel yüklenemedi! / Image upload failed: " + err.message);
        var idx = state.tempImages.indexOf(placeholderObj);
        if (idx !== -1) {
          state.tempImages.splice(idx, 1);
        }
        renderImageManager();
      });
  }

  function handlePaste(e) {
    if (!state.currentRoomId) return; // Only listen inside modal
    var items = (e.clipboardData || e.originalEvent.clipboardData).items;
    var files = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        var blob = items[i].getAsFile();
        if (blob) files.push(blob);
      }
    }
    if (files.length > 0) {
      e.preventDefault();
      handleFiles(files);
    }
  }

  function initDragAndDrop() {
    var zone = $("#imageDropzone");
    if (!zone) return;

    window.addEventListener("dragover", function (e) { e.preventDefault(); }, false);
    window.addEventListener("drop", function (e) { e.preventDefault(); }, false);

    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
      zone.classList.add("dragover");
    });

    zone.addEventListener("dragleave", function () {
      zone.classList.remove("dragover");
    });

    zone.addEventListener("drop", function (e) {
      e.preventDefault();
      zone.classList.remove("dragover");
      if (e.dataTransfer && e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files);
      }
    });

    var fileInput = $("#imageInput");
    if (fileInput) {
      fileInput.addEventListener("change", function () {
        handleFiles(fileInput.files);
      });
    }
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

    // Paste handler
    window.addEventListener("paste", handlePaste);

    // Drag and Drop
    initDragAndDrop();
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
