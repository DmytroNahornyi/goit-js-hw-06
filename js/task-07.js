/* Напиши скрипт, який реагує на зміну значення input#font-size-control 
(подія input) і змінює інлайн-стиль span#text, оновлюючи властивість 
font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/



const fontSizeController = document.querySelector("#font-size-control");
const changingTextSize = document.querySelector("#text");
fontSizeController.addEventListener("input", onControllerInput);
function onControllerInput(event) {
  return (changingTextSize.style.fontSize = event.currentTarget.value + "px");
}