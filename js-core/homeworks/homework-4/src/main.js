/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'

* */
function validateArgument(someDate) {
    if (typeof someDate === 'object' || typeof someDate === 'number') {
        return true;
    }
    if (typeof(someDate) === 'function'){
        return false;
    }
    if(typeof someDate === 'string' && someDate.length !== 10){
        return someDate.length;
    }
    if(typeof someDate === 'string' && someDate.length === 10){
        return 'you win';
    }
}

console.log(validateArgument(function(){}));
console.log(validateArgument({1:2, 3:4,}));
console.log(validateArgument(5));
console.log(validateArgument('test test test test'));
console.log(validateArgument('testtest'));

/*
*
*  Задача в классе !
*
* */

/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let myArray = [];
    let i;
    for( i = a; i <= b; i++ ){
        myArray.push(i)
    }
    console.log(myArray);
}

numbersBetween(3, 5);
// 3, 4, 5

numbersBetween(10, 12);
// 10, 11, 12

/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function fizzBuzz(num) {
    let result;
    if(num % 3  == 0 && num % 5 == 0){
        result = 'FizzBuzz';
    }
    else if(num % 3  == 0){
        result = 'fizz';
    }
    else if(num % 5  == 0){
        result = 'Buzz';
    }
    else{
        result = num;
    }
    console.log(result);
    return result;
}
function fizzBuzz100(numberMin , numberMax) {
    let i;
    for (i = numberMin; i <= numberMax; i++){
        fizzBuzz(i);
    }
}
fizzBuzz100(50,90);


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function typeDefinite(elementType) {
    let arr = [];
    for( let i = 0 ; i < elementType.length; i++ ){
        arr[i] = typeof elementType[i];
    }
    return arr;
}
console.log(typeDefinite(arr));











