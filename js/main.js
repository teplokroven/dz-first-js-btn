const btn = document.querySelector('.hero-btn');

if (btn.textContent.trim() == 'Скрыть') {
  btn.addEventListener('click', function () {
    btn.textContent = 'Показать все';
  })
} else {
  btn.addEventListener('click', function () {
    btn.textContent = 'Да';
  })
}