/* KrishiHat — shared UI: header, footer, icons, toasts, modals. */

const Icons = {
  logo: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 29V13" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M16 13c0-4 2.5-6.5 6.5-6.5C22.5 10 20 13 16 13Z" fill="currentColor"/><path d="M16 13c0-4-2.5-6.5-6.5-6.5C9.5 10 12 13 16 13Z" fill="currentColor" opacity=".75"/><path d="M16 18c0-4 2.5-6.5 6.5-6.5 0 3.5-2.5 6.5-6.5 6.5Z" fill="currentColor" opacity=".9"/><path d="M16 18c0-4-2.5-6.5-6.5-6.5 0 3.5 2.5 6.5 6.5 6.5Z" fill="currentColor" opacity=".65"/><path d="M16 23c0-4 2.5-6.5 6.5-6.5 0 3.5-2.5 6.5-6.5 6.5Z" fill="currentColor" opacity=".8"/><path d="M16 23c0-4-2.5-6.5-6.5-6.5 0 3.5 2.5 6.5 6.5 6.5Z" fill="currentColor" opacity=".55"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12s3.5-7 10-7c1.8 0 3.4.5 4.8 1.2M22 12s-3.5 7-10 7c-1.8 0-3.4-.5-4.8-1.2M3 3l18 18"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg>`,
  bookmarkFill: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m4 12.5 5 5L20 6.5"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3v18h18M8 17v-6m5 6V7m5 10v-4"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.5Z"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m21 8-9-5-9 5v8l9 5 9-5V8Z"/><path d="m3.3 8.6 8.7 4.9 8.7-4.9M12 22V13.5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 22s8-3.6 8-10V5.5L12 2 4 5.5V12c0 6.4 8 10 8 10Z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M12 11v5"/></svg>`,
  success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5.5-6.5"/></svg>`,
  error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5m0 3h.01"/></svg>`,
  chevDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2.05Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z"/><path d="M4 21c4-4 7-7 12-10"/></svg>`,
  handshake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a2.1 2.1 0 0 0 3-3"/><path d="m14 14 2.5 2.5a2.1 2.1 0 0 0 3-3l-3.9-3.9a6 6 0 0 0-6.6-1.2L3 11.5 6.5 15"/><path d="m3 11.5 6.9-4.6a6 6 0 0 1 6.6 1.2l3.4 3.4M7 15l-2.7 2.7a2.1 2.1 0 0 0 3 3L10 18"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>`,
  trendUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M7 17 17 7M9 7h8v8"/></svg>`,
  trendDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="m7 7 10 10M17 9v8H9"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2H2v10l9.3 9.3a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`
};

/* ---------------- header / footer ---------------- */
function khNavItems(user) {
  if (user) {
    return [
      { href: "index.html", label: "Home", key: "home" },
      { href: "prices.html", label: "Market Prices", key: "prices" },
      { href: "listings.html", label: "Listings", key: "listings" },
      { href: "dashboard.html", label: "Dashboard", key: "dashboard" },
      { href: "inbox.html", label: "Inbox", key: "inbox" }
    ];
  }
  return [
    { href: "index.html", label: "Home", key: "home" },
    { href: "register.html", label: "Register", key: "register" },
    { href: "login.html", label: "Login", key: "login" }
  ];
}

function renderHeader() {
  const user = Store.session();
  const page = document.body.dataset.page || "";
  const host = document.getElementById("site-header");
  if (!host) return;

  const links = khNavItems(user).map(n =>
    `<a href="${n.href}" class="${n.key === page ? "active" : ""}" ${n.key === page ? 'aria-current="page"' : ""}>${n.label}</a>`
  ).join("");

  const chip = user ? `
    <div class="user-chip" id="userChip">
      <button class="user-chip-btn" id="userChipBtn" aria-haspopup="true" aria-expanded="false">
        <span class="avatar">${KH.esc(user.name.trim()[0].toUpperCase())}</span>
        <span class="user-chip-meta"><b>${KH.esc(user.name)}</b><span>${KH.esc(user.role[0].toUpperCase() + user.role.slice(1))}</span></span>
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="dropdown" role="menu">
        <a href="dashboard.html">${Icons.grid} Dashboard</a>
        ${user.role === "farmer" ? `<a href="add-produce.html">${Icons.plus} Add Produce</a>` : ""}
        <button class="danger" id="logoutBtn" type="button">${Icons.logout} Logout</button>
      </div>
    </div>` : "";

  host.innerHTML = `
  <header class="topbar" id="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="index.html" aria-label="KrishiHat home">
        <span style="color:var(--primary)">${Icons.logo}</span> KrishiHat
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">${Icons.menu}</button>
      <nav class="nav" id="mainNav" aria-label="Main">${links}</nav>
      ${khBell(user)}${chip}
    </div>
  </header>`;

  khWireBell(user);
  const toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const bar = document.getElementById("topbar");
      const open = bar.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const chipEl = document.getElementById("userChip");
  if (chipEl) {
    const btn = document.getElementById("userChipBtn");
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const open = chipEl.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", e => {
      if (!chipEl.contains(e.target)) chipEl.classList.remove("open");
    });
    document.getElementById("logoutBtn").addEventListener("click", () => {
      Store.logout();
      toast("You have been logged out.", "success");
      setTimeout(() => location.href = "index.html", 500);
    });
  }
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  host.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html" style="font-size:1.15rem"><span style="color:var(--primary)">${Icons.logo}</span> KrishiHat</a>
          <p>Fair crop prices and direct trade between farmers and buyers across Bangladesh. No middlemen.</p>
        </div>
        <nav aria-label="Footer">
          <a href="index.html">Home</a>
          <a href="prices.html">Market Prices</a>
          <a href="listings.html">Listings</a>
          ${Store.session() ? `<a href="dashboard.html">Dashboard</a>` : `<a href="login.html">Login</a>`}
        </nav>
      </div>
      <p class="fine">KrishiHat — front-end prototype for demonstration. Prices in Bangladeshi Taka (৳) per kg.</p>
    </div>
  </footer>`;
}

/* ---------------- toast ---------------- */
function toast(message, type = "success") {
  let zone = document.querySelector(".toast-zone");
  if (!zone) {
    zone = document.createElement("div");
    zone.className = "toast-zone";
    zone.setAttribute("aria-live", "polite");
    document.body.appendChild(zone);
  }
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `${type === "error" ? Icons.error : Icons.success}<span>${KH.esc(message)}</span>`;
  zone.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity .3s ease";
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 320);
  }, 3400);
}

/* ---------------- modal ---------------- */
function openModal({ title, body, wide = false, onOpen = null }) {
  let overlay = document.querySelector(".modal-overlay");
  if (overlay) overlay.remove();
  overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal ${wide ? "wide" : ""}" role="dialog" aria-modal="true" aria-label="${KH.esc(title)}">
      <div class="modal-head">
        <h3>${KH.esc(title)}</h3>
        <button class="modal-close" type="button" aria-label="Close dialog">${Icons.close}</button>
      </div>
      <div class="modal-body">${body}</div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const close = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
  };
  const onKey = e => { if (e.key === "Escape") close(); };
  overlay.querySelector(".modal-close").addEventListener("click", close);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", onKey);
  overlay.classList.add("open");
  const first = overlay.querySelector("input, select, textarea, button.modal-close");
  if (first) first.focus();
  if (onOpen) onOpen(overlay, close);
  return { overlay, close };
}

/* ---------------- small helpers for pages ---------------- */
function listingCardHTML(l, user) {
  const farmer = Store.db.users.find(u => u.id === l.farmerId);
  const saved = user && user.role === "buyer" && Store.isSaved(user.id, l.id);
  return `
  <article class="card listing-card">
    <div class="thumb">
      <img src="${l.img}" alt="${KH.esc(l.crop)}" loading="lazy">
      ${user && user.role === "buyer" ? `
      <button class="save-btn ${saved ? "saved" : ""}" data-save="${l.id}" aria-label="${saved ? "Remove from saved" : "Save listing"}">${saved ? Icons.bookmarkFill : Icons.bookmark}</button>` : ""}
    </div>
    <div class="body">
      <h3>${KH.esc(l.crop)} <span class="badge active">Grade ${l.grade || "B"}</span></h3>
      <div class="price">${KH.fmtMoney(l.price)}/kg</div>
      <p class="meta">Quantity: <b>${l.qty.toLocaleString()} kg</b></p>
      <p class="meta">Farmer: <b>${KH.esc(farmer ? farmer.name : "—")}</b></p>
      <p class="meta">${khSellerBadge(l.farmerId)}</p>
      <p class="meta">District: <b>${KH.esc(l.district)}</b></p>
      <a class="btn btn-primary btn-sm btn-block" href="listing.html?id=${l.id}">View Details</a>
    </div>
  </article>`;
}

function wireSaveButtons(container, user, after) {
  container.querySelectorAll("[data-save]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (!user) { location.href = "login.html"; return; }
      const nowSaved = Store.toggleSaved(user.id, Number(btn.dataset.save));
      toast(nowSaved ? "Listing saved to your dashboard." : "Listing removed from saved.", "success");
      if (after) after();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});

/* ===== v2: notifications bell, seller rating badge, status labels, price alerts ===== */
const khStatus = s => ({ sent: "New", replied: "Replied", deal: "Deal agreed", closed: "Closed" })[s] || "New";
function khBell(u) {
  if (!u) return "";
  const n = Store.unread(u.id);
  return `<div class="bell-wrap"><button class="bell-btn" id="bellBtn" type="button" aria-label="Notifications">🔔${n ? `<span class="bell-n">${n}</span>` : ""}</button><div class="bell-pop" id="bellPop" hidden></div></div>`;
}
function khWireBell(u) {
  const b = document.getElementById("bellBtn"); if (!b) return;
  const p = document.getElementById("bellPop");
  b.addEventListener("click", e => {
    e.stopPropagation();
    if (p.hidden) {
      const ns = Store.notesFor(u.id).slice(0, 8);
      p.innerHTML = ns.length ? ns.map(n => `<a href="${n.link}" class="${n.read ? "" : "unread"}">${KH.esc(n.text)}<small>${KH.timeAgo(n.at)}</small></a>`).join("") : `<p class="bell-empty">No notifications yet.</p>`;
      p.hidden = false; Store.readAll(u.id);
      const c = b.querySelector(".bell-n"); if (c) c.remove();
    } else p.hidden = true;
  });
  document.addEventListener("click", e => { if (!p.contains(e.target)) p.hidden = true; });
}
function khSellerBadge(uid) {
  const r = Store.rating(uid);
  return r.n ? `<span class="seller-rate">★ ${r.avg.toFixed(1)} (${r.n})</span>${r.trusted ? ` <span class="badge active">Trusted seller</span>` : ""}` : `<span class="seller-rate">No reviews yet</span>`;
}
function khRenderAlerts(user, host) {
  if (!host) return;
  const draw = () => {
    const mine = Store.db.alerts.map((a, i) => ({ a, i })).filter(x => x.a.buyerId === user.id);
    host.innerHTML = `<h3 style="margin:22px 0 6px">Price alerts</h3><p class="meta">You get a notification when a listing matches your price.</p>
    <form id="alForm" class="filter-bar" style="gap:8px"><select class="input" id="alCrop">${KH_CROPS.map(c => `<option>${c}</option>`).join("")}</select>
    <input class="input" id="alMax" type="number" min="1" placeholder="Max ৳/kg"><select class="input" id="alDist"><option value="">Any district</option>${KH_DISTRICTS.map(c => `<option>${c}</option>`).join("")}</select>
    <button class="btn btn-primary btn-sm" type="submit">Add alert</button></form>
    ${mine.map(({ a, i }) => `<div class="inquiry-item"><div class="top"><b>${KH.esc(a.crop)} under ${KH.fmtMoney(a.maxPrice)}/kg</b><button class="btn btn-danger-soft btn-sm" data-rm="${i}" type="button">Remove</button></div><p>${a.district ? KH.esc(a.district) : "Any district"}</p></div>`).join("")}`;
    host.querySelector("#alForm").onsubmit = e => {
      e.preventDefault(); const m = Number(host.querySelector("#alMax").value);
      if (!m) { toast("Enter a maximum price.", "error"); return; }
      Store.addAlert(user.id, host.querySelector("#alCrop").value, m, host.querySelector("#alDist").value);
      toast("Alert created.", "success"); draw();
    };
    host.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => { Store.removeAlert(+b.dataset.rm); draw(); });
  };
  draw();
}
