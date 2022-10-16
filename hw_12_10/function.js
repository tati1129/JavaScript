/*Напишите функцию, которая будет проверять тип данных (typeof someValue) и если это будет строка, 
то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - 
число).
Количество символов в строке можно узнать применив к строке свойство length через точку. Например 
выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль, аналогично и для 
переменной, которая содержит строку. Например:
let someString = 'Hello';
console.log(someString.length) // 5
- если это значение присланное в функцию будет число, то его нужно переводить в строку 
(String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке;
- если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в 
строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из 
boolean значения строке;
- если тип данных не строка и не число и не boolean, то функция должена вернуть строку  
'неверный тип данных';
Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, как выражение 
и как стрелочную функцию.
Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее.



*/
console.log('Декларативная функция / Declaration function')
function getStringLength1(someValue)  {
    if (typeof someValue=='string') return someValue.length;
    if (typeof someValue=='number' || typeof someValue=='boolean') return String(someValue).length;
    return 'неверный тип данных'
}
console.log(getStringLength1('Hello')); // 5
console.log(getStringLength1(128945334)); // 9
console.log(getStringLength1(100==='100')); // 5 (false-5)
console.log(getStringLength1(null)); // неверный тип данных
console.log('----------------------------------------------')
console.log('Функциональное выражение / Function expression')
let getStringLength2=function(someValue) {
    if (typeof someValue=='string') return someValue.length;
    if (typeof someValue=='number' || typeof someValue=='boolean') return String(someValue).length;
    return 'неверный тип данных'
}
console.log(getStringLength2('Hello world!')); // 12
console.log(getStringLength2(1289453789334)); // 13
console.log(getStringLength2(100=='100')); // 4 (true-4)
console.log(getStringLength2(null)); // неверный тип данных
console.log('----------------------------------------------')
console.log('Стрелочная функция / Arrows function')
let getStringLength3=(someValue) => 
    typeof someValue=='string' ? someValue.length
    :typeof someValue=='number' || typeof someValue=='boolean' ? String(someValue).length
    : 'неверный тип данных';
    console.log(getStringLength3('Hello, world!')); // 13
    console.log(getStringLength3(1289456244767334)); // 16
    console.log(getStringLength3(100=='100')); // 4 (true-4)
    console.log(getStringLength3(null)); // неверный тип данных

    /*Стрелочная функция, на мой взгляд проще и удобнее. Это более короткий синтаксис, оссобенно 
    в компании с тернарным оператором *)). */