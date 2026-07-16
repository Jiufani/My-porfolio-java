
const themeBtn = document.getElementById('theme-toggle');


const body = document.body;


themeBtn.addEventListener('click', function () {


  body.classList.toggle('light-mode');


  if (body.classList.contains('light-mode')) {
    themeBtn.textContent = '🌙 Dark Mode';
    themeBtn.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    themeBtn.textContent = '☀️ Light Mode';
    themeBtn.setAttribute('aria-label', 'Switch to light mode');
  }
});
