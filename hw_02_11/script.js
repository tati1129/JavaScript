// 1. Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true


const data1 = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

let isEqual = (obj1, obj2) => {
    const key1 = Object.keys(obj1);
    const value1= Object.values(obj1);
    const key2 = Object.keys(obj2);
    const value2= Object.values(obj2);
    
        if ((key1.length !== key2.length) && (value1.length !== value2.length )) {
           return false;
        }
       const arr1=key1.concat(value1);  // true
       const arr2=key2.concat(value2);  // false

       //console.log(arr1);
       //console.log(arr2);
        for (let i=0; i<arr1.length; i++ ) {
            if (arr1[i] !== arr2[i])
                return false;
            }
           return true; 
        }


console.log(isEqual(data1, data2));
console.log(isEqual(data1, data3)); 