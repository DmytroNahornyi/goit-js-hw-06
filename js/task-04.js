/*Лічильник складається зі спану і кнопок, які по кліку 
повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне 
значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй 
або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue. */


// let counterValue = 0;
// const counterValue = function ({
//     rootSelector, 
//     counterEl = 0, 
//     step = 1,
// } = {}) {
//     this._rootSelector = rootSelector;
//     this._value = counterEl;
//     this._step = step;
//     this._referals = this._getReferals(rootSelector);
//     this._bindEvents();
//     this._updateValueUI();
// }

// counterValue.prototype._getReferals = function (rootSelector) {
//     const referals = {};
//     referals.container = document.querySelector(rootSelector);
//     referals.decrementBtn = referals.container.querySelector('[data-action="decrement"]');
//     referals.incrementBtn = referals.container.querySelector('[data-action="increment"]'); 
//     referals.value = referals.container.querySelector('[id]');
//     return referals; 
// }

// counterValue.prototype._bindEvents = function() {
//     this._referals.incrementBtn.addEventListener('click', () => {
//         console.log(this)
//         this.increment();
//         this.updateValueUI();
//     });
//     this._referals.decrementBtn.addEventListener('click', () => {
//         console.log(this)
//         this.decrement();
//         this.updateValueUI();
//     });
// }

// counterValue.prototype.updateValueUI = function () {
//     this._referals.value.textContent = this._value;
// }

// counterValue.prototype.increment = function () {
//     this._value += this._step;
// }
// counterValue.prototype.decrement = function () {
//     this._value -= this._step;
// }

// new counterValue({rootSelector: "#counter", step: 1, inicialValue: 0 });



let counterValue = 0;
const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]');


const clickDecrementBtn = event => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log(counterValue)
}

const clickIncrementBtn = event => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log(counterValue)
}

decrementBtn.addEventListener('click', clickDecrementBtn);
incrementBtn.addEventListener('click', clickIncrementBtn);