document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('https://startify-backend.onrender.com/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    document.getElementById('signupMsg').textContent = data.msg || 'Signup successful!';
  } catch (err) {
    document.getElementById('signupMsg').textContent = 'Error during signup';
  }
});
