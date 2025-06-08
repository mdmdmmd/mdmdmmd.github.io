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
