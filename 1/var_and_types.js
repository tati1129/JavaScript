let user="John";
let age = 25;
let hello= "Hello";
console.log(user, age, hello);

const myBirthay="18.04.1982"; //- константа, изменить нельзя
let myName="Olga";//изменить можно
//const age = 50; //изменить нельзя
console.log(myBirthay, myName)

let message;
console.log(message)
message = "Hello";
console.log(message)
message=123;
console.log(message)
message= "Привет";
console.log(message)

const messageConst = 'Hello!!!';
console.log(messageConst);

let message1 = 'hello, world';
let message2 = '';


let time=11;

if (time>10 && time<18) {
    console.log('Office is open');
} else {
    console.log('Office is close');
}


// У нас есть новый дом на 1000 квартир. 100 квартир купили в кредит. 100 квартир купили за наличные. 200 квартир арендовали. Оставшиеся квартиры стоят пустые.
// Cколько всего квартир уже занято? Сколько квартир еще нужно занять? Чего больше занятых квартир или свободных?(вывести значение в консоль). В зависимости от того  каких квартир больше, вывести в консоль сообщение об этом "У нас больше пустых квартир" или "У нас больше занятых квартир"

let house = 1000;
let credit = 100;
let cash = 100;
let rent = 200;
let empty = house - (credit + cash + rent);
let notEmpty = credit + cash + rent;
 
if (empty>notEmpty) {
   console.log('У нас больше пустых квартир');
} else {
    console.log('У нас больше занятых квартир');
}
