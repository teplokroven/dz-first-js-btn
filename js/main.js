const btn = document.querySelector('.hero-btn');
const button = document.querySelector('.hero-button');

btn.addEventListener('click', function () {
  const isBtnTextI = btn.textContent.trim() == 'Я кнопка я кнопка я кнопка';

  if (isBtnTextI) {
    btn.textContent = 'А ты?';
  } else {
    btn.textContent = 'А я Денис!';
  }
});

button.addEventListener('click', function () {
  const isBtnTextShow = button.textContent.trim() == 'Показать';

  if (isBtnTextShow) {
    button.textContent = 'Скрыть';
  } else {
    button.textContent = 'Показать';
  }
});