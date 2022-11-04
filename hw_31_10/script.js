// 1. Подсчёт количества свойств объекта.
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//    name: 'John',
//    age: 30
// };
// console.log( count(user) ); // 2
console.log("Задача 1");

let user = {
    name: 'John',
    age: 30
 };
 console.log(count(user)); // 2

 function count(obj) {
    let arr = [];
    for (let key in obj) {
        let iterArray = [];
        iterArray.push(key);
        iterArray.push(obj[key]);
        arr.push(iterArray)
    }
    return arr.length;
 }

// 2. Максимальная зарплата
//  У нас есть объект salaries с зарплатами:
// let salaries = {
//    "John": 100,
//    "Pete": 300,
//    "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
console.log("Задача 2")
let salaries = {
    "John": 1000,
    "Pete": 3000,
    "Mary": 2500
 };
let empty={};
 function topSalary(obj){
    let maxSalary=0;
        for (let key in obj){
            if (obj !=={}){
                for (let key in obj){
                    if ((typeof obj[key] === 'number')  && (maxSalary<obj[key])) {
                        maxSalary=obj[key];
                    }
                }
                for (let key in obj){
                    if (maxSalary===obj[key]){
                        return key;
                    }
                }
   
            }
        }
    return null;
}
 console.log(topSalary(salaries));  // Pete
 console.log(topSalary(empty));     // null