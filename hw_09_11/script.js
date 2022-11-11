// 1. Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать - 
// Какой-то текст! - input 

// Присваиваем элементы переменным
let block = document.querySelector('.btn-block');
let unblock = document.querySelector('.btn-unblock');
let reset = document.querySelector('.btn-reset')
let inputText = document.querySelector('.inputText');

// Вешаем события
block.addEventListener('click', disabledInput);
unblock.addEventListener('click', allowInput);
reset.addEventListener('click', resetInput);
//inputText.addEventListener('click', resetInputValue);

// Описываем функции для событий
function disabledInput(event){
    inputText.setAttribute('disabled', 'disabled')
}
function allowInput(event){
    inputText.removeAttribute('disabled')
}
function resetInput(event){
    inputText.value='';
}

