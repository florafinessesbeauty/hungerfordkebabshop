// Brand interactions: AI chat toggle
// app.js
// AI chat toggle
(function() {
  const fab = document.getElementById('ai-fab');
  const chat = document.getElementById('aiChat');
  if (fab && chat) {
    fab.addEventListener('click', () => {
      chat.classList.toggle('open');
    });
  }
})();

// Menu data from your provided content
const MENU = {
  mealDeals: [
    { name: "Kebab Meal", price: "from £27.00", desc: "Any 2x small kebabs, 2x chips, 2x can of drink." },
    { name: "Burger Meal", price: "from £22.00", desc: "2x 1/4lb beef or cheese burger, 2x chips, 2x cans of drink." },
    { name: "Pizza Meal 1", price: "from £28.50", desc: "Any 2x 9\" pizza, chips, onion rings, 2x can of drink." },
    { name: "Pizza Meal 2", price: "from £33.00", desc: "Any 2x 12\" pizza, 2x chips, onion rings & a bottle of drink." },
    { name: "Combo 1", price: "from £10.50", desc: "1/4 lb cheese burger, chips & drink." },
    { name: "Combo 2", price: "from £12.00", desc: "Chicken sandwich burger, chips & drink." }
  ],
  familyBoxes: [
    { name: "Family Box Meal (NEW)", price: "from £28.90", desc: "Cheesy chips, 4pcs tender strips, chicken shish, nuggets, popcorn chicken, chicken burger, 2x sauces, mixed salad & bottle of drink. Serves 3." },
    { name: "Charcoal Grill Mega Box", price: "from £32.90", desc: "Cheesy chips, chicken shish, doner, kofte, lamb shish, 2x pittas, 2x sauces, mixed salad & bottle. Includes nuggets, onion rings, popcorn chicken. Serves 3." },
    { name: "Meat Feast Box", price: "from £28.90", desc: "Two cheese burgers, doner on cheesy chips, chicken nuggets, onion rings, popcorn chicken, 2x sauces, mixed salad & bottle. Serves 3." },
    { name: "Wrap Feast Box", price: "from £28.90", desc: "Lamb doner wrap, fried chicken wrap, cheesy chips, nuggets, onion rings, popcorn chicken, 2x sauces, mixed salad & bottle. Serves 3." }
  ],
  pizzas: [
    { name: "Margherita", price: "from £8.50", desc: "Tomato base; Cheese.", variants: '9", 12", 14"' },
    { name: "Hawaiian Ham & Pineapple", price: "from £9.50", desc: "Tomato base; Ham, Pineapple.", variants: '9", 12", 14"' },
    { name: "Chicken & Sweetcorn", price: "from £9.50", desc: "Tomato base; Chicken, Sweetcorn.", variants: '9", 12", 14"' },
    { name: "Ham & Mushrooms", price: "from £9.50", desc: "Tomato base; Ham, Mushrooms.", variants: '9", 12", 14"' },
    { name: "Pepperoni", price: "from £9.50", desc: "Tomato base; Double Pepperoni.", variants: '9", 12", 14"' },
    { name: "Doner Pizza", price: "from £10.50", desc: "Tomato base; Doner, Red Onion, Mushrooms.", variants: '9", 12", 14"' },
    { name: "Mexican", price: "from £10.50", desc: "Tomato base; Spicy Beef, Red Onion, Jalapenos.", variants: '9", 12", 14"' },
    { name: "Hot & Spicy", price: "from £10.50", desc: "Tomato base; Fresh Chilli Peppers, Red Onion.", variants: '9", 12", 14"' },
    { name: "Franco", price: "from £10.50", desc: "Tomato base; Chicken, Mushrooms, Sweetcorn.", variants: '9", 12", 14"' },
    { name: "Farmhouse", price: "from £10.50", desc: "Tomato base; Chicken, Red Onion, Mushrooms.", variants: '9", 12", 14"' },
    { name: "Meat Feast", price: "from £10.50", desc: "Tomato base; Ham, Pepperoni, Chicken, Green Pepper.", variants: '9", 12", 14"' },
    { name: "Kiev", price: "from £10.50", desc: "Tomato base; Ham, Mushrooms, Chicken, Garlic.", variants: '9", 12", 14"' },
    { name: "Full House", price: "from £10.50", desc: "Tomato base; Pepperoni, Mushrooms, Onions.", variants: '9", 12", 14"' },
    { name: "Safari", price: "from £10.50", desc: "Tomato base; Ham, Pineapple, Onions.", variants: '9", 12", 14"' },
    { name: "Hot Vegetarian", price: "from £10.50", desc: "Tomato base; Jalapenos, Red Onion, Mushrooms, Sweetcorn, Tomato, Olives.", variants: '9", 12", 14"' },
    { name: "Vegetarian", price: "from £10.50", desc: "Tomato base; Red Onion, Mushrooms, Sweetcorn, Tomato, Olives.", variants: '9", 12", 14"' },
    { name: "Seafood", price: "from £11.50", desc: "Tomato base; Prawns, Tuna, Anchovies, Red Onion.", variants: '9", 12", 14"' },
    { name: "Hungerford Special", price: "from £11.50", desc: "Tomato base; Pepperoni, Green Pepper, Chicken, Onions, Jalapenos, Mushrooms, Tomato.", variants: '9", 12", 14"' },
    { name: "Garlic Bread with Cheese", price: "£7.00", desc: "9\", 12\", 14\" available." }
  ],
  kebabsWraps: [
    { name: "Doner Kebab", price: "from £9.50", desc: "Seasoned lamb on upright spit; sauce & salad.", variants: "MED, LRG, XLRG, Wrap" },
    { name: "Chicken Kebab", price: "from £9.50", desc: "Marinated chicken on charcoal; sauce & salad.", variants: "MED, LRG, Wrap" },
    { name: "Lamb Shish", price: "from £9.50", desc: "Marinated lamb cubes on charcoal; sauce & salad.", variants: "MED, LRG, Wrap" },
    { name: "Kofte Kebab", price: "from £9.50", desc: "Seasoned minced meat with parsley; sauce & salad.", variants: "MED, LRG, Wrap" },
    { name: "Chicken & Doner Kebab", price: "from £12.00", desc: "Chicken shish & doner; sauce & salad.", variants: "MED, LRG, Wrap" },
    { name: "Chips & Cheese Wrap", price: "from £6.00", desc: "Chips & cheese in wrap; sauce & salad." },
    { name: "Hungerford Special Kebab", price: "from £21.00", desc: "1 skewer each of lamb shish, chicken shish, kofte & doner in pitta; sauce & salad." },
    { name: "Doner Meat & Chips", price: "from £9.50", desc: "Doner on chips; sauce & salad." },
    { name: "Chicken Skewer on Chips", price: "from £12.00", desc: "Chicken shish skewer on chips; sauce & salad." }
  ],
  combinationKebabs: [
    { name: "Combination 2 Kebab", price: "from £12.00", desc: "Combine two different kebabs; sauce & salad." }
  ],
  burgers: [
    { name: "Beef Burger", price: "from £5.70", desc: "Served with sauce & salad.", variants: "1/4lb, 1/2lb" },
    { name: "Cheese Burger", price: "from £6.00", desc: "Served with sauce & salad.", variants: "1/4lb, 1/2lb" },
    { name: "Mega Burger", price: "from £9.80", desc: "3x 1/4lb burgers; sauce & salad.", variants: "3/4lb" },
    { name: "Special Burger", price: "from £7.50", desc: "Cheese & doner meat; sauce & salad.", variants: "1/4lb" },
    { name: "Chicken Burger", price: "from £7.00", desc: "Served with sauce & salad." },
    { name: "Veggie Burger", price: "from £6.00", desc: "Served with sauce & salad." },
    { name: "Mushroom Burger", price: "from £7.00", desc: "1/4lb beef with fresh mushrooms; sauce & salad.", variants: "1/4lb" },
    { name: "Hawaiian Burger", price: "from £6.50", desc: "Slice of pineapple & cheese; sauce & salad.", variants: "1/4lb" }
  ],
  meatAndChips: [
    { name: "Doner Meat & Chips", price: "from £9.50", desc: "Lamb doner with chips; sauce & salad." },
    { name: "Doner Meat & Chips with Cheese", price: "from £10.50", desc: "Lamb doner with chips & cheese; sauce & salad." },
    { name: "Chicken Kebab on Chips", price: "from £12.00", desc: "Chicken shish on chips; sauce & salad." },
    { name: "Doner Meat Box", price: "from £5.00", desc: "Doner meat box.", variants: "SML, LRG" }
  ],
  extras: [
    { name: "Chips", price: "from £3.50", variants: "REG, LRG" },
    { name: "Chips & Cheese", price: "from £5.50", variants: "REG, LRG" },
    { name: "Chips & Salad", price: "from £3.00" },
    { name: "Potato Wedges", price: "from £6.50" },
    { name: "Onion Rings (10pcs)", price: "£5.00" },
    { name: "Chilli Cheese Bites (6pcs)", price: "£4.00" },
    { name: "Mozzarella Cheese Fingers", price: "£4.00", variants: "4pcs, 6pcs, 8pcs" },
    { name: "Fried Garlic Mushrooms (10pcs)", price: "£4.00" },
    { name: "Hot Wings & Chips", price: "from £7.00" },
    { name: "Chicken Nuggets & Chips (8pcs)", price: "from £7.00" },
    { name: "Chicken Strips", price: "£3.50", variants: "4pcs, 6pcs" },
    { name: "Scampi & Chips (10pcs)", price: "from £8.00" },
    { name: "Fish Cake & Chips", price: "from £8.00" },
    { name: "Cod & Chips", price: "from £8.00" },
    { name: "Portion Of Salad", price: "from £3.50" },
    { name: "Chips In Pitta", price: "from £4.50" },
    { name: "Box of Chilli Peppers", price: "£2.50" }
  ],
  sauces: [
    { name: "Chilli Sauce", price: "£1.00", desc: "Pot" },
    { name: "Garlic Mayo", price: "£1.00", desc: "Pot" },
    { name: "BBQ Sauce", price: "£1.00", desc: "Pot" },
    { name: "Burger Sauce", price: "£1.00", desc: "Pot" },
    { name: "Mayonnaise", price: "£1.00", desc: "Pot" },
    { name: "Ketchup", price: "£1.00", desc: "Pot" }
  ],
  drinks: [
    { name: "Coca Cola", price: "£1.50", variants: "330ml" },
    { name: "Pepsi", price: "£1.50", variants: "330ml, 1.5L" },
    { name: "Fanta", price: "£1.50", variants: "330ml, 1.5L" },
    { name: "7up", price: "£1.50", variants: "330ml" },
    { name: "Diet Coke", price: "£1.50", variants: "330ml, 1.5L" },
    { name: "Rio", price: "£1.50", variants: "330ml" },
    { name: "Water", price: "£1.00", variants: "500ml" },
    { name: "7Up", price: "£3.00", variants: "1.5L" },
    { name: "Fruit Shoot Blackcurrant", price: "£1.50" }
  ],
  desserts: [
    { name: "Chocolate Fudge Cake (2 Slice)", price: "£5.00" },
    { name: "Ben & Jerry's Chocolate Fudge Brownie", price: "£6.50" }
  ],
  kidsMeal: [
    { name: "Kids Nuggets Meal", price: "from £7.50", desc: "4pcs nuggets, chips & fruit shoot." },
    { name: "Kids Doner Meal", price: "from £7.50", desc: "Doner meat, chips & fruit shoot." }
  ]
};

// Render helpers
function createCard(item) {
  const div = document.createElement('article');
  div.className = 'menu-item';

  const header = document.createElement('div');
  header.className = 'item-header';
  header.innerHTML = `<span>${item.name}</span><span class="price">${item.price || ''}</span>`;
  div.appendChild(header);

  if (item.desc) {
    const desc = document.createElement('p');
    desc.className = 'desc';
    desc.textContent = item.desc;
    div.appendChild(desc);
  }

  if (item.variants) {
    const variants = document.createElement('p');
    variants.className = 'variants';
    variants.textContent = `Available: ${item.variants}`;
    div.appendChild(variants);
  }

  const btn = document.createElement('button');
  btn.className = 'btn menu-add-btn';
  btn.textContent = 'Add';
  btn.addEventListener('click', () => {
    addToCart(item);
    recommend(item);
  });

  div.appendChild(btn);
  return div;
}

// AI recommendation logic
function recommend(item) {
  const chat = document.getElementById('aiChat');
  chat.classList.add('open');

  // Clear previous recommendation
  const oldMsg = chat.querySelector('.recommend-msg');
  if (oldMsg) oldMsg.remove();

  const message = document.createElement('p');
  message.className = 'recommend-msg';
  message.innerHTML = `<strong>Recommended with:</strong> ${pairWith(item)}`;
  chat.appendChild(message);
}

function pairWith(item) {
  const name = item.name.toLowerCase();
  if (name.includes('doner')) return 'Chips & Cheese + Garlic Mayo (⭐ popular in reviews)';
  if (name.includes('chicken')) return 'Hot Wings & Chips + BBQ Sauce (🔥 recommended by locals)';
  if (name.includes('pizza')) return 'Garlic Bread with Cheese + Pepsi (🍕 top combo)';
  if (name.includes('burger')) return 'Onion Rings + Coke (🍔 classic combo)';
  if (name.includes('wrap')) return 'Mozzarella Fingers + Fanta (🥤 refreshing)';
  if (name.includes('box')) return 'Fruit Shoot for kids + extra sauces (👨‍👩‍👧 family favorite)';
  return 'Chips In Pitta + choice of sauce (🥙 simple & tasty)';
}

// --- Cart state & helpers ---
let cart = [];

// Extract numeric price from strings like "from £9.50" or "£7.00"
function parsePrice(str) {
  if (!str) return 0;
  const matches = str.match(/\d+(\.\d{1,2})?/g);
  if (!matches || matches.length === 0) return 0;
  return Number.parseFloat(matches[matches.length - 1]);
}

function addToCart(item) {
  const existing = cart.find(p => p.name === item.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: item.name, price: parsePrice(item.price), qty: 1 });
  }
  updateCart();
}

function emptyCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const cartTable = document.getElementById('carttable');
  if (!cartTable) return;

  cartTable.innerHTML = '';
  let total = 0;
  let qty = 0;

  cart.forEach(product => {
    const row = document.createElement('tr');
    const subtotal = product.price * product.qty;

    row.innerHTML = `
      <td>${product.name} x${product.qty}</td>
      <td>£${subtotal.toFixed(2)}</td>
    `;
    cartTable.appendChild(row);

    total += subtotal;
    qty += product.qty;
  });

  const qtyEl = document.getElementById('itemsquantity');
  const totalEl = document.getElementById('total');
  if (qtyEl) qtyEl.textContent = qty;
  if (totalEl) totalEl.textContent = total.toFixed(2);
}

// --- Hook up empty cart button after DOM ready ---
document.addEventListener('DOMContentLoaded', () => {
  const emptyBtn = document.getElementById('emptycart');
  if (emptyBtn) {
    emptyBtn.addEventListener('click', emptyCart);
  }
});

// Mount categories
function mountCategory(categoryKey) {
  const container = document.querySelector(`.menu-grid[data-category="${categoryKey}"]`);
  if (!container || !MENU[categoryKey]) return;
  MENU[categoryKey].forEach(item => container.appendChild(createCard(item)));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }

  // Render menu
  Object.keys(MENU).forEach(mountCategory);

  // Toggle cart open/close
document.addEventListener('DOMContentLoaded', () => {
  const cartPanel = document.querySelector('.cart-container');
  const fab = document.getElementById('ai-fab'); // reuse or add a cart button

  if (fab && cartPanel) {
    fab.addEventListener('click', () => {
      cartPanel.classList.toggle('open');
    });
  }
}); // ✅ this closes the DOMContentLoaded block

})
