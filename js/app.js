//Липкий хедер
const fixedHeader = document.querySelector('.header-fixed');

// Функция для проверки скролла и изменения состояния хедера
function handleScroll() {
   const windowWidth = window.innerWidth;
   const scrollY = window.scrollY;

   if (windowWidth >= 768 && windowWidth < 1200) {
      // Для планшетов
      fixedHeader.classList.toggle('visible', scrollY > 200);
   } else if (windowWidth >= 1200) {
      // Для десктопов
      fixedHeader.classList.toggle('visible', scrollY > 0);
   } else {
      // Для мобильных устройств
      fixedHeader.classList.remove('visible');
   }
}

window.addEventListener('scroll', handleScroll);

handleScroll();

//Появление текста и Закрытие модального окна с задержкой для анимации
const closeModalButton = document.querySelector('.mobile-overlay__close-button');
const dialog = document.getElementById('mobileOverlay');
const modalOverlay = document.querySelector('.mobile-overlay');

closeModalButton.addEventListener('click', (event) => {
   event.preventDefault();

   modalOverlay.classList.remove('visible'); // Скрываем текст
   modalOverlay.classList.add('close'); // Анимация закрытия окна

   setTimeout(() => {
      dialog.close(); // Закрытие окна после завершения анимации
      modalOverlay.classList.remove('close'); // Убираем класс анимации
   }, 300); // Задержка соответствует анимации окна
});

document.addEventListener('DOMContentLoaded', () => {
   const overlayBlur = document.querySelector('.header__overlay--blur');

   // Находим все элементы, за которыми нужно наблюдать
   const itemsToObserve = document.querySelectorAll('.header__menu-item--blur');

   // Функция для проверки видимости подменю
   function checkVisibility(item) {
      const submenu = item.querySelector('.header__menu__sublist');
      if (!submenu) return;

      const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
         getComputedStyle(submenu).opacity === '1';

      if (isVisible) {
         overlayBlur.style.visibility = 'visible';
         overlayBlur.style.pointerEvents = 'auto';
      } else {
         overlayBlur.style.visibility = 'hidden';
         overlayBlur.style.pointerEvents = 'none';
      }
   }

   // Функция для отслеживания наведения на элемент
   function handleHover(item) {
      let lastVisibility = null; // Для отслеживания последнего состояния видимости

      function check() {
         const submenu = item.querySelector('.header__menu__sublist');
         if (!submenu) return;

         const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
            getComputedStyle(submenu).opacity === '1';

         // Если состояние видимости изменилось
         if (isVisible !== lastVisibility) {
            lastVisibility = isVisible;
            checkVisibility(item);
         }

         // Повторяем проверку
         requestAnimationFrame(check);
      }

      // Запускаем проверку
      requestAnimationFrame(check);
   }

   // Назначаем обработчики наведения на каждый элемент
   itemsToObserve.forEach(item => {
      item.addEventListener('mouseenter', () => handleHover(item));
      item.addEventListener('mouseleave', () => checkVisibility(item));
   });
});
