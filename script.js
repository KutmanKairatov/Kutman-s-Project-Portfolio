// 1. Получаем кнопку меню и само меню со страницы.
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

// При нажатии на кнопку открываем или закрываем мобильное меню.
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
});

// Закрываем меню после выбора любого раздела.
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('open');
  });
});

// 2. Переключаем светлую и тёмную тему сайта.
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

// 3. Фильтруем карточки портфолио по выбранной категории.
const filterBtns = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filterBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    // Убираем выделение со всех кнопок и выделяем выбранную.
    filterBtns.forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active');

    // Показываем все проекты или только выбранную категорию.
    const type = button.getAttribute('data-type');
    projects.forEach(function (project) {
      if (type === 'all' || project.getAttribute('data-type') === type) {
        project.classList.remove('hide');
      } else {
        project.classList.add('hide');
      }
    });
  });
});

// 4. Проверяем форму перед отправкой и показываем понятный результат.
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Не перезагружаем страницу при отправке формы.

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Если хотя бы одно поле пустое, показываем ошибку.
  if (name === '' || email === '' || message === '') {
    result.textContent = 'Пожалуйста, заполните все поля.';
    result.style.color = 'red';
  } else {
    result.textContent = 'Спасибо, ' + name + '! Форма заполнена успешно.';
    result.style.color = 'green';
    form.reset(); // Очищаем поля после успешной проверки.
  }
});
