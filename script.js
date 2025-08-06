let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li>${item.name} - ${item.price} FCFA 
      <button onclick="removeFromCart(${index})">X</button></li>`;
  });

  cartTotal.innerText = `Total: ${total} FCFA`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const message = cart.map(item => `• ${item.name} - ${item.price} FCFA`).join('\n');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const fullMessage = `Hello! I would like to order:\n\n${message}\n\nTotal: ${total} FCFA`;

  const whatsappNumber = "237677449120"; // Replace with your real number
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

  window.open(url, '_blank');
}



// Product Image Carousel Logic
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.product-images').forEach(container => {
    const images = container.querySelectorAll('img');
    let current = 0;

    if (images.length > 1) {
      setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
      }, 3000); // Change image every 3 seconds
    }
  });
});

// WhatsApp Message Sender
function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showFormAlert("Please fill in all fields before sending via WhatsApp.", true);
    return;
  }

  const phone = "237677449120";
  const text = `Hello Gold Trim Salon,%0A%0AMy name is ${name}.%0AEmail: ${email}%0A%0A${message}`;
  const url = 
  `https://wa.me/${phone}?text=${text}`;
  window.open(url, '_blank');
}


// Email Sender via Formspree
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const alertBox = document.getElementById("form-alert");

  fetch("https://formspree.io/f/mzzvgvww", {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      showFormAlert("Message sent via email successfully! ✅");
      form.reset();
    } else {
      showFormAlert("Failed to send email. Try again later.", true);
    }
  })
  .catch(() => {
    showFormAlert("Something went wrong. Please check your internet connection.", true);
  });
});

function showFormAlert(message, isError = false) {
  const alertBox = document.getElementById("form-alert");
  alertBox.textContent = message;
  alertBox.style.color = isError ? "red" : "green";
}

// === FAQ Toggle ===
document.querySelectorAll('.faq-item h3').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('open');
  });
});

// === Newsletter Form ===
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value;
  if (email && email.includes('@')) {
    alert("Thanks for subscribing!");
    emailInput.value = '';
  } else {
    alert("Please enter a valid email address.");
  }
});

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Handle dropdown on mobile
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = link.parentElement;
      dropdown.classList.toggle("open");
    }
  });
});

function bookNow(service) {
  const url = `https://wa.me/237677449120?text=${encodeURIComponent("Hello! I want to book a " + service + " at the salon.")}`;
  window.open(url, '_blank');
}

function bookHome(service) {
  const url = `https://wa.me/237677449120?text=${encodeURIComponent("Hello! I want to book a home service for " + service + ".")}`;
  window.open (url, '_blank');
}









