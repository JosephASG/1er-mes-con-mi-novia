let section_gift = document.querySelector('.section-gift');
let section_text = document.querySelector('.section-text');
let button_gift = document.getElementById('button-gift');

button_gift.addEventListener("click", () => {
    section_gift.style.display = "none";
    section_text.style.display = "block";
});