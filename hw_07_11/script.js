// 1. Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

let showHideBtn = document.querySelector('.button-show-hide');
let test = document.querySelector('.test');
showHideBtn.addEventListener('click', showHideBlock);
test.addEventListener('click',showHideBlock);


function showHideBlock(event) {
    test.classList.toggle('hiden-block');
    test.classList.toggle('show-block');
    showHideBtn.classList.toggle('show-btn');
    showHideBtn.classList.toggle('hide-btn');
    console.log(test.textContent);
}

// 2. Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()

let image = document.querySelector('.image');
let actionButton = document.querySelector('.button-action');
actionButton.addEventListener('click', getStyle);

function getStyle(event) {
    image.classList.toggle('get-style');
}