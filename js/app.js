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