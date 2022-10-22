// 1. Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры: camelize("background-color") == 'backgroundColor';
//          camelize("list-style-image") == 'listStyleImage';
//          camelize("-webkit-transition") == 'WebkitTransition';
let camelize=function(str) {
    let arr=str.split("-");
    let arrNew=[];
    arrNew[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        arrNew.push(element[0].toUpperCase().concat(element.slice(1)));
    } 
    return arrNew.join('');
}
console.log(camelize("my-short-string"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 2. Написать функцию, принимающую массив чисел и возвращающую сумму всех его положительных элементов 
// и отрицательных чисел отдельно в виде нового массива
// Например, функция принимает как аргумент следующий массив arr = [1, -2, 3, 4, -9, 6]
// и должна вернуть [14, -11]

let array=[1, -2, 3, 4, -9, 6];
let getSumArr=function (array) {
    let sumPositiv=0;
    let sumNegativ=0;
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        
        if (array[i]>0){
            sumPositiv+=element;
        } else {
            sumNegativ+=element
        }
    }
    newArray.push(sumPositiv,sumNegativ);
    return newArray;
}
console.log(getSumArr(array));