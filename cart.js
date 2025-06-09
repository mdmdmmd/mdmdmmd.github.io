let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const div = document.createElement('div');
    div.innerHTML = 
      <p>${item.title} - ${item.quantity} عدد - ${item.price.toLocaleString()} تومان</p>
      <button onclick="removeItem(${index})">حذف</button>
    ;
    container.appendChild(div);
  });

  document.getElementById('total').innerText = "مجموع: " + total.toLocaleString() + " تومان";
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
