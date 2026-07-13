/* Shawarma Friends — site behavior */
(function () {
  "use strict";

  /* ---------- Menu rendering ---------- */
  function formatPrice(value) {
    return Number.isInteger(value) ? "$" + value : "$" + value.toFixed(2);
  }

  function renderMenu() {
    var tabList = document.getElementById("menu-tabs");
    var panelHost = document.getElementById("menu-panels");
    if (!tabList || !panelHost || typeof MENU === "undefined") return;

    MENU.forEach(function (category, index) {
      var tab = document.createElement("button");
      tab.className = "menu-tab";
      tab.id = "tab-" + category.id;
      tab.type = "button";
      tab.textContent = category.label;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
      tab.setAttribute("aria-controls", "panel-" + category.id);
      tab.tabIndex = index === 0 ? 0 : -1;
      tabList.appendChild(tab);

      var panel = document.createElement("div");
      panel.className = "menu-panel";
      panel.id = "panel-" + category.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", "tab-" + category.id);
      panel.hidden = index !== 0;

      category.groups.forEach(function (group) {
        var section = document.createElement("section");
        section.className = "menu-group";

        var head = document.createElement("div");
        head.className = "menu-group-head";
        var title = document.createElement("h3");
        title.textContent = group.title;
        head.appendChild(title);
        section.appendChild(head);

        if (group.note) {
          var note = document.createElement("p");
          note.className = "menu-group-note";
          note.textContent = group.note;
          section.appendChild(note);
        }

        var list = document.createElement("ul");
        list.className = "menu-items";
        group.items.forEach(function (item) {
          var li = document.createElement("li");
          li.className = "menu-item";

          var row = document.createElement("div");
          row.className = "menu-item-row";
          var name = document.createElement("span");
          name.className = "menu-item-name";
          name.textContent = item.name;
          var price = document.createElement("span");
          price.className = "menu-item-price";
          price.textContent = formatPrice(item.price);
          row.appendChild(name);
          row.appendChild(price);
          li.appendChild(row);

          if (item.desc) {
            var desc = document.createElement("p");
            desc.className = "menu-item-desc";
            desc.textContent = item.desc;
            li.appendChild(desc);
          }
          list.appendChild(li);
        });
        section.appendChild(list);
        panel.appendChild(section);
      });

      panelHost.appendChild(panel);
    });

    initTabs(tabList, panelHost);
  }

  /* ---------- Tabs (click + arrow-key navigation) ---------- */
  function initTabs(tabList, panelHost) {
    var tabs = Array.prototype.slice.call(tabList.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(panelHost.querySelectorAll('[role="tabpanel"]'));

    function activate(tab, focus) {
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", selected ? "true" : "false");
        t.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (p) {
        p.hidden = p.id !== tab.getAttribute("aria-controls");
      });
      if (focus) tab.focus();
    }

    tabList.addEventListener("click", function (event) {
      var tab = event.target.closest('[role="tab"]');
      if (tab) activate(tab, false);
    });

    tabList.addEventListener("keydown", function (event) {
      var current = tabs.indexOf(document.activeElement);
      if (current === -1) return;
      var next = null;
      if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      if (next !== null) {
        event.preventDefault();
        activate(tabs[next], true);
      }
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Open / closed status ---------- */
  /* Tue–Sun 10:00–22:00, Monday closed */
  function initHours() {
    var badge = document.getElementById("open-status");
    var table = document.getElementById("hours-table");
    if (!badge || !table) return;

    var now = new Date();
    var day = now.getDay(); /* 0 = Sunday, 1 = Monday */
    var hour = now.getHours() + now.getMinutes() / 60;

    var todayRow = table.querySelector('tr[data-day="' + day + '"]');
    if (todayRow) todayRow.classList.add("is-today");

    var openToday = day !== 1;
    var openNow = openToday && hour >= 10 && hour < 22;

    badge.hidden = false;
    if (openNow) {
      badge.textContent = "Open now · until 10 pm";
      badge.classList.add("is-open");
    } else if (openToday && hour < 10) {
      badge.textContent = "Opens today at 10 am";
      badge.classList.add("is-closed");
    } else if (day === 1 || (day === 0 && hour >= 22)) {
      badge.textContent = "Closed · reopens Tuesday 10 am";
      badge.classList.add("is-closed");
    } else {
      badge.textContent = "Closed · reopens tomorrow 10 am";
      badge.classList.add("is-closed");
    }
  }

  /* ---------- Images: fade in on load, branded fallback on error ---------- */
  function initImages() {
    document.querySelectorAll(".photo img").forEach(function (img) {
      var markLoaded = function () { img.classList.add("is-loaded"); };
      var markMissing = function () {
        var frame = img.closest(".photo");
        if (frame) frame.classList.add("is-missing");
      };
      if (img.complete) {
        if (img.naturalWidth > 0) markLoaded();
        else markMissing();
      } else {
        img.addEventListener("load", markLoaded);
        img.addEventListener("error", markMissing);
      }
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  renderMenu();
  initNav();
  initHeader();
  initHours();
  initImages();
  initYear();
})();
