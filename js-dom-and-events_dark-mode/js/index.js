console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkOn = document.querySelector('[data-js="dark-mode-button"]');
const darkOff = document.querySelector('[data-js="light-mode-button"]');
const toggleDark = document.querySelector('[data-js="toggle-button"]');

darkOn.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});
darkOff.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});
toggleDark.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});
