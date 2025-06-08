const products = [];
const cart = [];

function renderProducts() {
  const list = document.getElementById('product-list');
  const search = document.getElementById('search').value.toLowerCase();
  const category = document.getElementById('category-filter').value;
  list.innerHTML = '';

  products
    .filter(p => 
      (p.name.toLowerCase().includes(search)) &&
      (category === 'all' || p.category === category)
    )
    .forEach((product, index) => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = 
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>قیمت: ${product.price} تومان</p>
        <button onclick="addToCart(${index})">خرید</button>
      ;
      list.appendChild(div);
    });
}

function addToCart(index) {
  cart.push(products[index]);
  document.getElementById('cart-count').textContent = cart.length;
  renderCart();
}

function renderCart() {
  const items = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  items.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - ${item.price} تومان;
    items.appendChild(li);
    sum += parseInt(item.price);
  });
  total.textContent = مجموع: ${sum.toLocaleString()} تومان;
}

document.getElementById('product-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('product-name').value;
  const price = document.getElementById('product-price').value;
  const category = document.getElementById('product-category').value;
  const description = document.getElementById('product-description').value;
  const imageInput = document.getElementById('product-image');
  const reader = new FileReader();

  reader.onload = function() {
    const imageUrl = reader.result;
    products.push({ name, price, category, description, image: imageUrl });
    renderProducts();
    this.reset();
  }.bind(this);

  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  }
});

document.getElementById('search').addEventListener('input', renderProducts);
document.getElementById('category-filter').addEventListener('change', renderProducts);
