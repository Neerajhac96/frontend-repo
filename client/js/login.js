document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      document.getElementById('loginMsg').textContent = 'Login successful!';
      localStorage.setItem('token', data.token);       // ✅ Save token
      window.location.href = "../index.html";           // ✅ Redirect to home
    } else {
      document.getElementById('loginMsg').textContent = data.msg || 'Login failed';
    }
  } catch (err) {
    document.getElementById('loginMsg').textContent = 'Error during login';
  }
});
