// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// };

// firstTask();

// При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
//    for (let i = 20; i > 9; i--) {
//     if (i === 13) {
//         break;
//     }
// console.log(i)
//    }
// }

// secondTask();

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask() {
//    for (let i = 1; i < 11; i ++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } 
// }
// }

// thirdTask() 

//переписать цикл на while
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++; 
// }


// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers[i-5]=i; 
//     }
    
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;}

//     fifthTask()


// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
// }
// };
// firstTask();


// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
//     console.log(result);
//     return result;
// }

// firstTask();

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === "string") {
//             data[i] = data[i] +  " - done"; 
//         } else {
//             data[i] = data[i] * 2;
//         } 
//     }

//     console.log(data);
//     return data;
// }

// secondTask();


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     let j = 0;
//     for (i = data.length - 1; i >= 0; i--) {
//         result[j] = data[i];
//         j++;
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();


// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }

// const increment = createCounter()
// const c1 = increment() //1
// const c2 = increment() //2
// const c3 = increment() //3
// console.log('example increment', c1, c2, c3)



// Место для второй задачи
// function returnNeighboringNumbers(number) {
//     let arr = [];
//     arr[0] = number - 1;
//     arr[1] = number;
//     arr[2] = number + 1;
  
//    return arr;
// }

// returnNeighboringNumbers(5)


// Место для третьей задачи
// function getMathResult(baseNumber, numberInProgress) {
//     if (typeof numberInProgress != "number" || numberInProgress === 0 || numberInProgress < 0) {
//         return baseNumber;
//     } else {
//         let str = '';
//         for (let i = 1; i <= numberInProgress; i++) {
//             if (i != numberInProgress) {
//                 str += baseNumber * i + '---';
//             } else {
//                 str += baseNumber * i;
//             }
//         }
//         return str;
//     }    
// }


// function calculateVolumeAndArea(number) {
//     if (typeof number != 'number' || number % 1 !==0  || number < 0 || number === 0) {
//         return "При вычислении произошла ошибка";
//     } else {
//         volume = number * number * number;
//         area = 6 * (number * number);

//         return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//     }

// }

// const result = calculateVolumeAndArea(8);
// console.log('result', result)


// function getCoupeNumber(number) {
//     if (typeof number != 'number' || number % 1 !==0 || number < 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (number === 0 || number > 36) {
//         return 'Таких мест в вагоне не существует';
//     } else {
//         return Math.ceil(number/4);
//     }
// }

// getCoupeNumber(11);

// function getTimeFromMinutes(number) {
//     if (typeof number != 'number' || number % 1 != 0 || number < 0) {
//         return 'Ошибка, проверьте данные';
//     } else if (number < 60) {
//         return 'Это 0 часов и ' + number + ' минут';
//     } else {
//         let integer = Math.trunc(number / 60);
//         let tenths = number % 60;
//         if (integer = 1) {
//             return `Это ${integer} час и ${tenths} минут`;
//         } else { 
//             return `Это ${integer} часа и ${tenths} минут`;
//         }
//     }
// }

// console.log(getTimeFromMinutes(180));



// function findMaxNumber(a, b, c, d) {
//     if (typeof a != 'number' || 
//         typeof b != 'number' || 
//         typeof c != 'number' || 
//         typeof d != 'number') {
//         return '0';
//     }
//         return Math.max(a, b, c, d);
// }

// console.log(findMaxNumber(110, 80, 0, 678));


// function fib(number) {
//     if (typeof number != 'number' || number <= 0 || !Number.isInteger(number)) {
//         return "";
//     } else {
//         if (number === 1) return "0";
//         let a = 0;
//         let b = 1;
//         let arr = [a,b];
//             for (let i = 2; i < number; i++) {
//             let old_a = a; 
//             a = b;
//             b = old_a + b;
//             arr.push(b);
//         }
//     return arr.join(' ');
//     }
// }

// console.log(fib(2));



// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib(2));

//     return result;
// };


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%' 
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// };

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let result = '';
//     for (let key in plan.skills.programmingLangs) {
//         if (Object.keys(plan.skills.programmingLangs).length == 0) {
//             result += '';
//         } else {
//             result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//         }
//     return result;
// }
// };

// console.log(showProgrammingLangs(personalPlanPeter));


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%' 
//         },
//         exp: '1 month'
//     }
// };


// function showAgeAndLangs(plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;
//     let str = `Мне ${age} и я владею языками: ${languages.toString().toUpperCase()}`;
//     return str;
// }

// console.log(showAgeAndLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     } else {
//         const familyMembers = arr.join(' ');
//         return `Семья состоит из: ${familyMembers}`;
//     };
// }

// console.log(showFamily(family));

// const favoriteCities = [];

// function standardizeStrings(arr) {
//     const city = arr.join('\n').toLowerCase();
//     console.log(city);
//     };

// console.log(standardizeStrings(favoriteCities));


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof str === 'string') {
//         const numbers = Array.from(someString);
//         numbers.reverse();
//         return numbers.join('');
//         } else {
//             return 'Ошибка!'
//         };
// }

// console.log(reverse(someString));

