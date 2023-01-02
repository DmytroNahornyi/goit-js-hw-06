/* Напиши скрипт, який під час втрати фокусу на інпуті 
(подія blur), перевіряє його вміст щодо правильної 
кількості введених символів.
Яка кількість символів повинна бути в інпуті, 
зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, 
то border інпуту стає зеленим, якщо неправильна 
кількість - червоним.
Для додавання стилів використовуй  */

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event, onInputBlurRemove) {
    if (event.currentTarget.value.length ===Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}