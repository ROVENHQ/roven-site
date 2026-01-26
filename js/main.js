// Mobile menu toggle
document.getElementById("mobile-menu-button").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// JavaScript for packs section interaction
document.addEventListener("DOMContentLoaded", function () {
  // Pack selection animation
  const packCards = document.querySelectorAll(".pack-card");

  packCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.borderColor = "#2563EB";
    });

    card.addEventListener("mouseleave", function () {
      if (!this.classList.contains("border-blue-500")) {
        this.style.borderColor = "#e2e8f0";
      }
    });
  });

  // Button click handlers for packs section
  const packButtons = document.querySelectorAll("button[data-target]");

  packButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector("i");

    answer.classList.toggle("hidden");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  });
});

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");
const errorMsg = document.getElementById("error-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Laisse le navigateur gérer les required
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  successMsg?.classList.add("hidden");
  errorMsg?.classList.add("hidden");

  try {
    const formData = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      successMsg?.classList.remove("hidden");
      successMsg?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      errorMsg?.classList.remove("hidden");
    }
  } catch (err) {
    errorMsg?.classList.remove("hidden");
  }
});

/* Formulaire 
        // Form validation and submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const projectType = document.getElementById('project-type').value;
            const message = document.getElementById('message').value.trim();
            const consent = document.getElementById('consent').checked;
            
            if (!name || !email || !projectType || !message || !consent) {
                alert('Veuillez remplir tous les champs obligatoires et accepter les conditions.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }
            
            // Simulate form submission
            const successMessage = document.getElementById('success-message');
            successMessage.classList.remove('hidden');
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }*/

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".animate-slide-up").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(el);
});
