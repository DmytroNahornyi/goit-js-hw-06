/* Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, 
тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і 
виведе в консоль текст заголовку елемента (тегу <h2>) і кількість 
елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення. */

const NumberOfCategories = document.querySelectorAll("ul#categories");
// const test = NumberOfCategories.querySelectorAll(".item");
console.log(NumberOfCategories);