// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
const onInputChange = (event) =>
    refs.inputEl.value != ''
        ? refs.spanEl.textContent = refs.inputEl.value
        : refs.spanEl.textContent = "Anonymous";
refs.inputEl.addEventListener('input', onInputChange);