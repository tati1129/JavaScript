// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b 
// и возвращает результат в виде массива.
//Функция должна возвращать новый массив и не изменять исходный.
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)

let arr=[5,3,8,1];

function filterRange(array,a,b) {
    return array.filter(item => item>=a && item<b);
}

let filtered=filterRange(arr, 1, 4);


console.log(arr);
console.log(filtered);

