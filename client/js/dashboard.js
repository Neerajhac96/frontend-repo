// Check if user is logged in
const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first");
  window.location.href = "./auth/login.html";
}

// Logout button functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  alert("Logged out successfully");
  window.location.href = "./auth/login.html";
});
