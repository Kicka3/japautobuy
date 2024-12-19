//
// // Заполнение годов:
// const yearFrom = document.querySelector('select[name="year_from"]');
// const yearTo = document.querySelector('select[name="year_to"]');
//
// for (let year = 1985; year <= 2023; year++) {
//    yearFrom.insertAdjacentHTML('beforeend', `<option value="${year}">${year}</option>`);
//    yearTo.insertAdjacentHTML('beforeend', `<option value="${year}">${year}</option>`);
// }
//
// //Блокировка выбора «Кузова» при множественном выборе моделей:
// const modelSelect = document.querySelector('select[name="model"]');
// const bodyTypeSelect = document.querySelector('select[name="body_type"]');
//
// modelSelect.addEventListener('change', () => {
//    if ([...modelSelect.selectedOptions].length > 1) {
//       bodyTypeSelect.disabled = true;
//    } else {
//       bodyTypeSelect.disabled = false;
//    }
// });
//
// //Отключение цветов без доступных авто:
// function updateColorsAvailability(availableColors) {
//    const colorOptions = document.querySelectorAll('.form__color-option');
//    colorOptions.forEach((option) => {
//       if (availableColors.includes(option.value)) {
//          option.disabled = false;
//       } else {
//          option.disabled = true;
//       }
//    });
// }
//
// // Вызов с обновленным списком цветов:
// updateColorsAvailability(['white', 'black', 'blue']);
//
