// js/protected.js
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Check current folder depth and redirect
    const path = window.location.pathname;
    if (path.includes("/blog/") || path.includes("/gallery/") || path.includes("/contact/") || path.includes("/chatbot/")) {
      window.location.replace("../auth/login.html");
    } else {
      window.location.replace("auth/login.html");
    }
  }
});
