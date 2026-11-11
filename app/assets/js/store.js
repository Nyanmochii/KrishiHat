/* KrishiHat — prototype data store.
   In this front-end prototype all data lives in the browser
   (localStorage). The production PHP/MySQL backend replaces this module. */

const KH_DB_KEY = "krishihat_db_v1";
const KH_SESSION_KEY = "krishihat_session";

const Store = {
  db: null,

  load() {
    try {
      const raw = localStorage.getItem(KH_DB_KEY);
      this.db = raw ? JSON.parse(raw) : khSeed();
    } catch (e) {
      this.db = khSeed();
    }
    if (!this.db.nextIds) this.db.nextIds = { user: 100, price: 100, listing: 100, inquiry: 100 };
    return this.db;
  },

  save() {
    localStorage.setItem(KH_DB_KEY, JSON.stringify(this.db));
  },

  reset() {
    localStorage.removeItem(KH_DB_KEY);
    this.db = khSeed();
    this.save();
  },

  /* ---------- session ---------- */
  session() {
    const id = Number(sessionStorage.getItem(KH_SESSION_KEY));
    if (!id) return null;
    return this.db.users.find(u => u.id === id && u.active) || null;
  },

  login(identifier, password) {
    const id = (identifier || "").trim().toLowerCase();
    const user = this.db.users.find(u =>
      (u.email.toLowerCase() === id || u.phone === id) && u.password === password
    );
    if (!user) return { ok: false, reason: "not-found" };
    if (!user.active) return { ok: false, reason: "deactivated" };
    sessionStorage.setItem(KH_SESSION_KEY, String(user.id));
    return { ok: true, user };
  },

  logout() {
    sessionStorage.removeItem(KH_SESSION_KEY);
  },

  register({ name, phone, email, password, district, role }) {
    const exists = this.db.users.some(u =>
      u.email.toLowerCase() === email.trim().toLowerCase() || u.phone === phone.trim()
    );
    if (exists) return { ok: false, reason: "exists" };
    const user = {
      id: this.db.nextIds.user++,
      name: name.trim(), phone: phone.trim(), email: email.trim(),
      password, district, role, active: true
    };
    this.db.users.push(user);
    this.save();
    sessionStorage.setItem(KH_SESSION_KEY, String(user.id));
    return { ok: true, user };
  },

  /* ---------- prices (FR-4 .. FR-7) ---------- */
  prices() { return this.db.prices.slice().sort((a, b) => b.date - a.date); },

  addPrice({ crop, market, district, price, date }) {
    const p = {
      id: this.db.nextIds.price++, crop, market, district,
      price: Number(price), prev: null, date: date || Date.now()
    };
    const same = this.db.prices
      .filter(x => x.crop === crop && x.district === district && x.id !== p.id)
      .sort((a, b) => b.date - a.date)[0];
    if (same) p.prev = same.price;
    this.db.prices.push(p);
    this.save();
    return p;
  },

  updatePrice(id, { crop, market, district, price, date }) {
    const p = this.db.prices.find(x => x.id === Number(id));
    if (!p) return null;
    if (Number(price) !== p.price) p.prev = p.price; // trend compares with previous recorded price
    p.crop = crop; p.market = market; p.district = district;
    p.price = Number(price);
    if (date) p.date = date;
    this.save();
    return p;
  },

  /* ---------- listings (FR-8 .. FR-13) ---------- */
  cropImg(crop) {
    const map = {
      "Rice (Paddy)": "assets/img/rice.jpg", "Tomato": "assets/img/tomato.jpg",
      "Potato": "assets/img/potato.jpg", "Onion": "assets/img/onion.jpg",
      "Brinjal (Eggplant)": "assets/img/brinjal.jpg", "Green Chili": "assets/img/chili.jpg"
    };
    return map[crop] || "assets/img/basket.jpg";
  },

  isExpired(l) { return Date.now() - l.updatedAt > 14 * 24 * 60 * 60 * 1000; }, // BR-5 / FR-10

  visibleListings() {
    return this.db.listings.filter(l => l.status === "active" && !this.isExpired(l));
  },

  getListing(id) { return this.db.listings.find(l => l.id === Number(id)) || null; },

  addListing(farmerId, data) {
    const l = {
      id: this.db.nextIds.listing++,
      farmerId, crop: data.crop, category: data.category || "Vegetable",
      qty: Number(data.qty), price: Number(data.price), district: data.district,
      harvest: data.harvest, desc: data.desc || "",
      img: data.img || this.cropImg(data.crop),
      status: "active", updatedAt: Date.now()
    };
    this.db.listings.push(l);
    this.save();
    return l;
  },

  updateListing(id, farmerId, data) {
    const l = this.getListing(id);
    if (!l || l.farmerId !== farmerId) return null; // FR-9: only own listings
    Object.assign(l, {
      crop: data.crop, category: data.category || l.category,
      qty: Number(data.qty), price: Number(data.price), district: data.district,
      harvest: data.harvest, desc: data.desc || ""
    });
    if (data.img) l.img = data.img;
    l.updatedAt = Date.now(); // touching the listing resets the 14-day expiry
    this.save();
    return l;
  },

  deleteListing(id, farmerId) {
    const i = this.db.listings.findIndex(l => l.id === Number(id));
    if (i === -1) return false;
    if (farmerId && this.db.listings[i].farmerId !== farmerId) return false;
    this.db.listings.splice(i, 1);
    this.db.inquiries = this.db.inquiries.filter(q => q.listingId !== Number(id));
    this.save();
    return true;
  },

  markSold(id, farmerId) {
    const l = this.getListing(id);
    if (!l || l.farmerId !== farmerId) return null;
    l.status = "sold";
    this.save();
    return l;
  },

  /* ---------- inquiries (FR-14, FR-15) ---------- */
  addInquiry({ listingId, buyerId, message, qty }) {
    const listing = this.getListing(listingId);
    if (!listing) return null;
    const buyer = this.db.users.find(u => u.id === buyerId);
    const q = {
      id: this.db.nextIds.inquiry++, listingId: Number(listingId), buyerId,
      buyerName: buyer ? buyer.name : "Buyer",
      message: message.trim(), qty: qty ? Number(qty) : null, date: Date.now()
    };
    this.db.inquiries.push(q);
    this.save();
    return q;
  },

  inquiriesForFarmer(farmerId) {
    const mine = this.db.listings.filter(l => l.farmerId === farmerId).map(l => l.id);
    return this.db.inquiries
      .filter(q => mine.includes(q.listingId))
      .slice().sort((a, b) => b.date - a.date);
  },

  inquiriesByBuyer(buyerId) {
    return this.db.inquiries.filter(q => q.buyerId === buyerId).slice().sort((a, b) => b.date - a.date);
  },

  /* ---------- saved listings (FR-17) ---------- */
  isSaved(buyerId, listingId) {
    return this.db.saved.some(s => s.buyerId === buyerId && s.listingId === Number(listingId));
  },

  toggleSaved(buyerId, listingId) {
    const i = this.db.saved.findIndex(s => s.buyerId === buyerId && s.listingId === Number(listingId));
    if (i === -1) this.db.saved.push({ buyerId, listingId: Number(listingId) });
    else this.db.saved.splice(i, 1);
    this.save();
    return i === -1;
  },

  savedForBuyer(buyerId) {
    return this.db.saved.filter(s => s.buyerId === buyerId).map(s => this.getListing(s.listingId)).filter(Boolean);
  },

  /* ---------- admin (FR-18) ---------- */
  setUserActive(id, active) {
    const u = this.db.users.find(x => x.id === Number(id));
    if (!u) return null;
    u.active = active;
    if (!active && this.session() && this.session().id === u.id) this.logout();
    this.save();
    return u;
  }
};

Store.load();

/* ---------- shared helpers ---------- */
const KH = {
  fmtDate(ts) {
    return new Date(ts).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  },
  fmtMoney(n) { return "৳" + Number(n).toLocaleString("en-US"); },
  esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  },
  maskPhone(p) {
    const d = String(p).replace(/\D/g, "");
    return d.slice(0, 5) + "-XXXXX";
  },
  timeAgo(ts) {
    const diff = Date.now() - ts;
    const d = Math.floor(diff / day);
    if (d <= 0) return "today";
    if (d === 1) return "yesterday";
    if (d < 30) return d + " days ago";
    return KH.fmtDate(ts);
  }
};

/* ===== v2 marketplace extensions: inbox, offers, ratings, alerts, notifications, bulk, grade ===== */
Object.assign(Store, {
  ensure() {
    const d = this.db; d.notes = d.notes || []; d.reviews = d.reviews || []; d.alerts = d.alerts || [];
    d.inquiries.forEach(q => { q.status = q.status || "sent"; q.thread = q.thread || []; });
    d.listings.forEach(l => { l.grade = l.grade || "B"; });
    if (!d.v2) {
      d.v2 = 1; const s = Date.now(), D = 864e5;
      d.reviews.push({ toId: 1, byId: 3, inquiryId: 0, stars: 5, text: "Good quality paddy, delivered on time.", at: s - 9 * D },
                     { toId: 1, byId: 4, inquiryId: 0, stars: 4, text: "Fair price and honest weight.", at: s - 20 * D });
      d.alerts.push({ buyerId: 3, crop: "Onion", maxPrice: 38, district: "" });
      const q1 = d.inquiries.find(q => q.id === 1);
      if (q1) { q1.status = "replied"; q1.thread.push({ by: 1, name: "Rahim Uddin", text: "Yes, still available. I can offer a bulk rate.", offer: 55, at: s - D / 2 }); }
      this.note(1, "Selim Ahmed sent an inquiry about Rice (Paddy)", "inbox.html?id=1");
      this.note(3, "Rahim Uddin replied with an offer of ৳55/kg", "inbox.html?id=1");
      this.save();
    }
  },
  note(uid, text, link) { this.db.notes.unshift({ userId: uid, text, link: link || "inbox.html", at: Date.now(), read: false }); },
  notesFor(uid) { return this.db.notes.filter(n => n.userId === uid); },
  unread(uid) { return this.notesFor(uid).filter(n => !n.read).length; },
  readAll(uid) { this.notesFor(uid).forEach(n => n.read = true); this.save(); },
  getInquiry(id) { return this.db.inquiries.find(q => q.id === Number(id)) || null; },
  inquiriesFor(u) { return u.role === "farmer" ? this.inquiriesForFarmer(u.id) : this.inquiriesByBuyer(u.id); },
  other(q, uid) { const l = this.getListing(q.listingId); return uid === q.buyerId ? (l && l.farmerId) : q.buyerId; },
  reply(id, uid, text, offer) {
    const q = this.getInquiry(id); if (!q || q.status === "closed") return null;
    q.thread.push({ by: uid, name: this.db.users.find(u => u.id === uid).name, text: text || "", offer: offer ? Number(offer) : null, at: Date.now() });
    if (q.status === "sent" && uid !== q.buyerId) q.status = "replied";
    const l = this.getListing(q.listingId);
    this.note(this.other(q, uid), (offer ? "New offer of ৳" + offer + "/kg" : "New reply") + " on " + (l ? l.crop : "an inquiry"), "inbox.html?id=" + q.id);
    this.save(); return q;
  },
  setStatus(id, uid, st, price) {
    const q = this.getInquiry(id); if (!q) return null;
    q.status = st; if (price) q.agreed = Number(price);
    this.note(this.other(q, uid), st === "deal" ? "Deal agreed" + (q.agreed ? " at ৳" + q.agreed + "/kg" : "") : "Conversation closed", "inbox.html?id=" + q.id);
    this.save(); return q;
  },
  review(id, byId, stars, text) {
    const q = this.getInquiry(id); if (!q) return null;
    if (this.db.reviews.some(r => r.inquiryId === q.id && r.byId === byId)) return null;
    const toId = this.other(q, byId);
    this.db.reviews.push({ toId, byId, inquiryId: q.id, stars: Number(stars), text: text || "", at: Date.now() });
    this.note(toId, "You received a " + stars + "-star review", "inbox.html?id=" + q.id);
    this.save(); return true;
  },
  rating(uid) {
    const r = this.db.reviews.filter(x => x.toId === uid), n = r.length, avg = n ? r.reduce((s, x) => s + x.stars, 0) / n : 0;
    return { n, avg, trusted: n >= 2 && avg >= 4.5 };
  },
  addAlert(buyerId, crop, maxPrice, district) { this.db.alerts.push({ buyerId, crop, maxPrice: Number(maxPrice), district: district || "" }); this.save(); },
  removeAlert(i) { this.db.alerts.splice(i, 1); this.save(); },
  checkAlerts(l) {
    this.db.alerts.forEach(a => {
      if (a.crop === l.crop && l.price <= a.maxPrice && (!a.district || a.district === l.district))
        this.note(a.buyerId, "Price alert: " + l.crop + " at ৳" + l.price + "/kg in " + l.district, "listing.html?id=" + l.id);
    });
  },
  bulkInquiry({ buyerId, crop, message, qty, offer }) {
    const t = this.visibleListings().filter(l => l.crop === crop && l.farmerId !== buyerId);
    t.forEach(l => this.addInquiry({ listingId: l.id, buyerId, message, qty, offer }));
    return t.length;
  }
});
(function () {
  const ai = Store.addInquiry.bind(Store);
  Store.addInquiry = function (o) {
    const q = ai(o); if (!q) return q;
    q.status = "sent"; q.thread = []; if (o.offer) q.offer = Number(o.offer);
    const l = this.getListing(q.listingId);
    this.note(l.farmerId, q.buyerName + " sent an inquiry about " + l.crop, "inbox.html?id=" + q.id);
    this.save(); return q;
  };
  ["addListing", "updateListing"].forEach(k => {
    const f = Store[k].bind(Store);
    Store[k] = function (...a) {
      const l = f(...a); if (l) { const d = a[a.length - 1]; l.grade = (d && d.grade) || l.grade || "B"; this.checkAlerts(l); this.save(); }
      return l;
    };
  });
})();
Store.ensure();
