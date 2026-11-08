let cart = [];

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

function addToCart(title, price) {
    cart.push({ title, price });
    updateCartUI();
    toggleCart();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = `<p class="empty-cart-text">w koszyku pusto, wybierz produkt z asortymentu</p>`;
        document.getElementById('cart-total-price').innerText = "0 zl";
        return;
    }

    let total = 0;
    itemsContainer.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item-row">
                <div>
                    <div style="font-weight: 600; font-size: 14px;">${item.title}</div>
                    <div style="color: #8b949e; font-size: 12px;">${item.price.toLocaleString()} zł</div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#f85149; cursor:pointer; font-size:16px;">x</button>
            </div>
        `;
    }).join('');

    document.getElementById('cart-total-price').innerText = total.toLocaleString() + ' zl';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) {
        alert("Koszyk jest pusty!");
        return;
    }
    alert("Zamowienie sio udaoo!");
    cart = [];
    updateCartUI();
    toggleCart();
}