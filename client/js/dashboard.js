const backendURL = "http://localhost:5000/api/dashboard";

async function loadDashboard() {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "../index.html";
        return;
    }

    try {
        const res = await fetch("http://localhost:5000/api/dashboard", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        console.log("Dashboard API status:", res.status);
        const data = await res.json();
        console.log("Dashboard API response:", data);

        if (!res.ok) {
            console.error("API error:", data);
            return;
        }

        // Greeting
        document.getElementById("welcomeMsg").innerText = data.msg || "Welcome!";

        // Stats
        document.getElementById("totalUsers").textContent = data.totalUsers || 0;
        document.getElementById("recentActivities").textContent = data.recentActivities || 0;

        // Table
        const table = document.getElementById("userTable");
        table.innerHTML = "";
        (data.users || []).forEach(user => {
            table.innerHTML += `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
        });

    } catch (err) {
        console.error("loadDashboard() exception:", err);
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "../index.html";
}

// Call once on page load
loadDashboard();

