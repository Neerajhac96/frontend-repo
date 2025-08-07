const token = localStorage.getItem("token");

if (token) {
  // Hide login/signup links
  document.getElementById("authLinks").style.display = "none";
  // Show logout
  document.getElementById("logoutBtn").style.display = "inline-block";
} else {
  document.getElementById("logoutBtn").style.display = "none";
}

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("token");
  alert("Logged out successfully!");
  window.location.href = "index.html"; // reload to reset UI
});
