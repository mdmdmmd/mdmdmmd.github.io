// مقدار اولیه سبد
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// بروزرسانی نمایش تعداد کالا
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').innerText = count;
}

// افزودن کالا به سبد
function addToCart(title, price) {
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ title, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

updateCartCount(); // اجرا در بارگذاری
function openModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user.length < 3 || pass.length < 4) {
    alert("اطلاعات وارد شده معتبر نیست!");
    return;
  }

  localStorage.setItem("user", user);
  alert("خوش آمدید " + user + "!");
  closeModal();
}
function filterCategory(cat) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const category = card.getAttribute("data-category");
    if (!cat || category === cat) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
