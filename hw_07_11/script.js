

let showHideBtn = document.querySelector('.button-show-hide');
let test = document.querySelector('.test');
showHideBtn.addEventListener('click', showHideBlock);
test.addEventListener('click',showHideBlock)

function showHideBlock(event) {
    test.classList.toggle('hiden-block');
    test.classList.toggle('show-block');
    showHideBtn.classList.toggle('show-btn');
    showHideBtn.classList.toggle('hide-btn');
    console.log('Привет!');
}