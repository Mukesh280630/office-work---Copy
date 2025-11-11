function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '12345') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error').classList.remove('hidden');
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}

// Protect dashboard
if (window.location.pathname.endsWith('dashboard.html')) {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}
