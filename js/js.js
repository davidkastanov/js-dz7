//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const number = [1, 2, 3];
number[1] = 10;

console.log(number);




//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const radok = ["a", "b", "c"];
radok[radok.length] = "d";
console.log(radok);




//Створити скрипт який поверне суму всіх чисел в масиві.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < num.length; i += 1) {
    const element = num[i];
    sum += element;
}
console.log(sum);




//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const numThree = [1, 2, 3, 4, 5];
for (const poradkovo of numThree) {
    console.log(poradkovo);
}





//Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const radokTwo = ["eifj",  "ttgr","fdgdfdfv", "ewrfsdaf", "igqau"];
for (let ii = 0; ii < radokTwo.length; ii++) {
    if (radokTwo[ii].length > 4) {
      console.log(radokTwo[ii]);
    }
}




//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const numFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumTwo = 0;
for (let indexe = 0; indexe < numFour.length; indexe++) {
    const element = numFour[indexe];
    sumTwo += element;
}


console.log(sumTwo);






//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumThree = 0;
for (let index = 0; index < numFive.length; index++) {
    const elemTwo = numFive[index];
    if (elemTwo % 2 === 0) {
        sumThree += elemTwo;
    }
}

console.log(sumThree);