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

   modalOverlay.classList.remove('visible');
   modalOverlay.classList.add('close');

   setTimeout(() => {
      dialog.close();
      modalOverlay.classList.remove('close');
   }, 300);
});



//Блюр всей страницы при dropdown в хедере + Анимация для submenu
/* Анимация работает только для классов header__menu-item--blur в сочетании с blur*/
// document.addEventListener('DOMContentLoaded', () => {
//    const overlayBlur = document.querySelector('.header__overlay--blur');
//    // Находим все элементы, за которыми нужно наблюдать
//    const itemsToObserve = document.querySelectorAll('.header__menu-item--blur');
//
//    // Функция для проверки видимости подменю
//    function checkVisibility(item) {
//       const submenu = item.querySelector('.header__menu__sublist'); // Подменю внутри текущего элемента
//       if (!submenu) return; // Если подменю не найдено, выходим
//
//       const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
//          getComputedStyle(submenu).opacity === '1';
//
//       if (isVisible) {
//          overlayBlur.classList.add('active');
//          submenu.classList.add('visible');
//       } else {
//          overlayBlur.classList.remove('active');
//          submenu.classList.remove('visible');
//       }
//    }
//
//    // Функция для отслеживания наведения на элемент
//    function handleHover(item) {
//       let lastVisibility = null; // Для отслеживания последнего состояния видимости
//
//       function check() {
//          const submenu = item.querySelector('.header__menu__sublist');
//          if (!submenu) return;
//
//          const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
//             getComputedStyle(submenu).opacity === '1';
//
//          if (isVisible !== lastVisibility) {
//             lastVisibility = isVisible;
//             checkVisibility(item);
//          }
//
//          // Повторяем проверку
//          requestAnimationFrame(check);
//       }
//
//       // Запускаем проверку
//       requestAnimationFrame(check);
//    }
//
//    // Назначаем обработчики наведения на каждый элемент
//    itemsToObserve.forEach(item => {
//       item.addEventListener('mouseenter', () => handleHover(item));
//       item.addEventListener('mouseleave', () => checkVisibility(item));
//    });
// });

// document.addEventListener('DOMContentLoaded', () => {
//    const overlayBlur = document.querySelector('.header__overlay--blur');
//    const itemsToObserve = document.querySelectorAll('.header__menu-item--blur');
//
//    // Функция для проверки видимости подменю
//    function checkVisibility(item) {
//       const submenu = item.querySelector('.header__menu__sublist');
//       if (!submenu) return;
//
//       const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
//          getComputedStyle(submenu).opacity === '1';
//
//       if (isVisible) {
//          overlayBlur.classList.add('active');
//          submenu.classList.add('visible');
//       } else {
//          overlayBlur.classList.remove('active');
//          submenu.classList.remove('visible');
//       }
//    }
//
//    // Функция для отслеживания наведения на элемент
//    function handleHover(item) {
//       let lastVisibility = null;
//
//       function check() {
//          const submenu = item.querySelector('.header__menu__sublist');
//          if (!submenu) return;
//
//          const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
//             getComputedStyle(submenu).opacity === '1';
//
//          if (isVisible !== lastVisibility) {
//             lastVisibility = isVisible;
//             checkVisibility(item);
//          }
//
//          requestAnimationFrame(check);
//       }
//
//       requestAnimationFrame(check);
//    }
//
//    // Функция для обработки тач-событий
//    function handleTouch(item) {
//       const submenu = item.querySelector('.header__menu__sublist');
//       if (!submenu) return;
//
//       const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
//          getComputedStyle(submenu).opacity === '1';
//
//       if (isVisible) {
//          // Добавляем небольшую задержку перед скрытием
//          setTimeout(() => {
//             overlayBlur.classList.remove('active');
//             submenu.classList.remove('visible');
//          }, 300); // Задержка в 300 мс
//       } else {
//          overlayBlur.classList.add('active');
//          submenu.classList.add('visible');
//       }
//    }
//
//    // Назначаем обработчики наведения и тач-событий на каждый элемент
//    itemsToObserve.forEach(item => {
//       item.addEventListener('mouseenter', () => handleHover(item));
//       item.addEventListener('mouseleave', () => checkVisibility(item));
//
//       // Добавляем обработчики для тач-событий
//       item.addEventListener('touchstart', () => handleTouch(item));
//       item.addEventListener('touchend', () => handleTouch(item));
//    });
// });


document.addEventListener('DOMContentLoaded', () => {
   const overlayBlur = document.querySelector('.header__overlay--blur');
   const itemsToObserve = document.querySelectorAll('.header__menu-item--blur');

   // Функция для проверки видимости подменю
   function checkVisibility(item) {
      const submenu = item.querySelector('.header__menu__sublist');
      if (!submenu) return;

      const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
         getComputedStyle(submenu).opacity === '1';

      if (isVisible) {
         overlayBlur.classList.add('active');
         submenu.classList.add('visible');
      } else {
         overlayBlur.classList.remove('active');
         submenu.classList.remove('visible');
      }
   }

   // Функция для отслеживания наведения на элемент
   function handleHover(item) {
      let lastVisibility = null;

      function check() {
         const submenu = item.querySelector('.header__menu__sublist');
         if (!submenu) return;

         const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
            getComputedStyle(submenu).opacity === '1';

         if (isVisible !== lastVisibility) {
            lastVisibility = isVisible;
            checkVisibility(item);
         }

         requestAnimationFrame(check);
      }

      requestAnimationFrame(check);
   }

   // Функция для обработки тач-событий
   function handleTouchStart(item) {
      const submenu = item.querySelector('.header__menu__sublist');
      if (!submenu) return;

      // Показываем подменю, но не активируем блюр-эффект
      submenu.classList.add('visible');
   }

   function handleTouchEnd(item) {
      const submenu = item.querySelector('.header__menu__sublist');
      if (!submenu) return;

      const isVisible = getComputedStyle(submenu).visibility === 'visible' &&
         getComputedStyle(submenu).opacity === '1';

      if (isVisible) {
         // Активируем блюр-эффект только после отпускания пальца
         overlayBlur.classList.add('active');
      }
   }

   // Назначаем обработчики наведения и тач-событий на каждый элемент
   itemsToObserve.forEach(item => {
      item.addEventListener('mouseenter', () => handleHover(item));
      item.addEventListener('mouseleave', () => checkVisibility(item));

      // Добавляем обработчики для тач-событий
      item.addEventListener('touchstart', () => handleTouchStart(item));
      item.addEventListener('touchend', () => handleTouchEnd(item));
   });
});