// Modal functionality
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-button");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Form validation
const form = document.getElementById("expertForm");
form.addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill out all fields.");
  }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menuToggle");
  const nav = document.querySelector("nav");
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});


