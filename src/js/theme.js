const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

checkboxRef.addEventListener('change', checkboxRefHandler);

function checkboxRefHandler() {
  if (checkboxRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

getCurrentTheme();

function getCurrentTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    checkboxRef.checked = true;
  }
}
