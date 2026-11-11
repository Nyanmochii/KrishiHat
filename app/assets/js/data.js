/* KrishiHat — seed data (prototype)
   In the real system this comes from the MySQL database via PHP.
   Dates are generated relative to "today" so expiry/trends always demo well. */

const KH_DISTRICTS = [
  "Bogura", "Chapai Nawabganj", "Comilla", "Dhaka", "Dinajpur", "Faridpur",
  "Jashore", "Khulna", "Mymensingh", "Natore", "Pabna", "Rajshahi",
  "Rangpur", "Sylhet", "Tangail"
];

const KH_CROPS = [
  "Rice (Paddy)", "Wheat", "Maize", "Potato", "Tomato", "Onion", "Brinjal (Eggplant)",
  "Green Chili", "Cabbage", "Cauliflower", "Carrot", "Cucumber", "Pumpkin",
  "Lentil", "Chickpea", "Banana", "Mango", "Papaya"
];

const day = 24 * 60 * 60 * 1000;
const KH_TODAY = Date.now();

function khSeed() {
  const users = [
    { id: 1, name: "Rahim Uddin",  phone: "01712-345678", email: "rahim@example.com",  password: "demo123", district: "Rajshahi",  role: "farmer", active: true },
    { id: 2, name: "Karim Mia",    phone: "01711-223344", email: "karim@example.com",  password: "demo123", district: "Bogura",    role: "farmer", active: true },
    { id: 3, name: "Selim Ahmed",  phone: "01812-987654", email: "selim@example.com",  password: "demo123", district: "Dhaka",     role: "buyer",  active: true },
    { id: 4, name: "Nasrin Akter", phone: "01913-456789", email: "nasrin@example.com", password: "demo123", district: "Khulna",    role: "buyer",  active: true },
    { id: 5, name: "Admin",        phone: "01700-000000", email: "admin@krishihat.com", password: "admin123", district: "Dhaka",    role: "admin",  active: true }
  ];

  // FR-7: each price carries the previously recorded price so a trend can be shown.
  const prices = [
    { id: 1,  crop: "Rice (Paddy)",     market: "Shaheb Bazar",    district: "Rajshahi",  price: 58, prev: 55, date: KH_TODAY - 0 * day },
    { id: 2,  crop: "Tomato",           market: "Bogura Hat",      district: "Bogura",    price: 45, prev: 48, date: KH_TODAY - 0 * day },
    { id: 3,  crop: "Potato",           market: "Mawa Bazar",      district: "Munshiganj",price: 30, prev: 30, date: KH_TODAY - 1 * day },
    { id: 4,  crop: "Brinjal (Eggplant)",market: "Faridpur Bazar", district: "Faridpur",  price: 40, prev: 37, date: KH_TODAY - 1 * day },
    { id: 5,  crop: "Brinjal (Eggplant)",market: "Jessore Hat",    district: "Jashore",   price: 35, prev: 36, date: KH_TODAY - 2 * day },
    { id: 6,  crop: "Green Chili",      market: "Comilla Bazar",   district: "Comilla",   price: 55, prev: 50, date: KH_TODAY - 0 * day },
    { id: 7,  crop: "Onion",            market: "Pabna Bazar",     district: "Pabna",     price: 62, prev: 64, date: KH_TODAY - 1 * day },
    { id: 8,  crop: "Wheat",            market: "Dinajpur Hat",    district: "Dinajpur",  price: 44, prev: 42, date: KH_TODAY - 3 * day },
    { id: 9,  crop: "Maize",            market: "Natore Bazar",    district: "Natore",    price: 38, prev: 38, date: KH_TODAY - 2 * day },
    { id: 10, crop: "Cauliflower",      market: "Sylhet Bazar",    district: "Sylhet",    price: 42, prev: 39, date: KH_TODAY - 0 * day },
    { id: 11, crop: "Cabbage",          market: "Tangail Hat",     district: "Tangail",   price: 28, prev: 30, date: KH_TODAY - 4 * day },
    { id: 12, crop: "Banana",           market: "Chapai Bazar",    district: "Chapai Nawabganj", price: 65, prev: 61, date: KH_TODAY - 1 * day },
    { id: 13, crop: "Lentil",           market: "Mymensingh Bazar",district: "Mymensingh",price: 118, prev: 115, date: KH_TODAY - 2 * day },
    { id: 14, crop: "Carrot",           market: "Khulna Bazar",    district: "Khulna",    price: 52, prev: 55, date: KH_TODAY - 5 * day }
  ];

  const listings = [
    { id: 1, farmerId: 1, crop: "Rice (Paddy)", category: "Paddy Rice", qty: 1000, price: 58, district: "Rajshahi",  harvest: KH_TODAY - 6 * day,  desc: "Fine aromatic paddy, sun-dried and cleaned. Harvested this week from our own field in Rajshahi. Bulk buyers welcome.", img: "assets/img/rice.jpg",   status: "active", updatedAt: KH_TODAY - 1 * day },
    { id: 2, farmerId: 2, crop: "Tomato",       category: "Vegetable",  qty: 500,  price: 45, district: "Bogura",    harvest: KH_TODAY - 3 * day,  desc: "Fresh round tomatoes, picked daily. Ideal for retailers and restaurants.", img: "assets/img/tomato.jpg", status: "active", updatedAt: KH_TODAY - 2 * day },
    { id: 3, farmerId: 1, crop: "Potato",       category: "Vegetable",  qty: 800,  price: 30, district: "Munshiganj",harvest: KH_TODAY - 10 * day, desc: "Diamond variety potatoes, good size, stored in a cool ventilated shed.", img: "assets/img/potato.jpg", status: "active", updatedAt: KH_TODAY - 3 * day },
    { id: 4, farmerId: 2, crop: "Onion",        category: "Vegetable",  qty: 600,  price: 40, district: "Pabna",     harvest: KH_TODAY - 8 * day,  desc: "Red onions, well cured and dry. Available in 50 kg sacks.", img: "assets/img/onion.jpg",  status: "active", updatedAt: KH_TODAY - 0 * day },
    { id: 5, farmerId: 1, crop: "Brinjal (Eggplant)", category: "Vegetable", qty: 400, price: 35, district: "Natore", harvest: KH_TODAY - 4 * day, desc: "Long purple brinjals, tender and fresh. Picked in the morning, ready for same-day collection.", img: "assets/img/brinjal.jpg", status: "active", updatedAt: KH_TODAY - 2 * day },
    { id: 6, farmerId: 2, crop: "Green Chili",  category: "Vegetable",  qty: 200,  price: 70, district: "Jashore",   harvest: KH_TODAY - 2 * day,  desc: "Hot green chilies, bright color, no chemicals. Small lots available for local restaurants.", img: "assets/img/chili.jpg",  status: "active", updatedAt: KH_TODAY - 1 * day },
    // FR-10 demo: this one has not been updated for 16 days — it renders as Expired and is hidden from search.
    { id: 7, farmerId: 2, crop: "Cabbage",      category: "Vegetable",  qty: 350,  price: 28, district: "Rangpur",   harvest: KH_TODAY - 24 * day, desc: "Compact green cabbages.", img: "assets/img/basket.jpg", status: "active", updatedAt: KH_TODAY - 16 * day },
    { id: 8, farmerId: 1, crop: "Rice (Paddy)", category: "Paddy Rice", qty: 300,  price: 60, district: "Rajshahi",  harvest: KH_TODAY - 40 * day, desc: "Old season stock, fully dried.", img: "assets/img/paddy-hero.jpg", status: "sold", updatedAt: KH_TODAY - 9 * day }
  ];

  const inquiries = [
    { id: 1, listingId: 1, buyerId: 3, buyerName: "Selim Ahmed",  message: "Assalamu alaikum, is the paddy still available? I need it for my rice mill.", qty: 500, date: KH_TODAY - 1 * day },
    { id: 2, listingId: 3, buyerId: 4, buyerName: "Nasrin Akter", message: "What is the minimum quantity you would sell? I run a small shop in Khulna.", qty: 100, date: KH_TODAY - 2 * day },
    { id: 3, listingId: 5, buyerId: 3, buyerName: "Selim Ahmed",  message: "Can you deliver 200 kg to Natore town? We can collect from the bus stand.", qty: 200, date: KH_TODAY - 0 * day }
  ];

  return {
    users, prices, listings, inquiries,
    saved: [{ buyerId: 3, listingId: 4 }],
    nextIds: { user: 100, price: 100, listing: 100, inquiry: 100 }
  };
}
