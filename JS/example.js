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


function calculateVolumeAndArea(number) {
    if (typeof number != 'number' || number % 1 !==0  || number < 0 || number === 0) {
        return "При вычислении произошла ошибка";
    } else {
        volume = number * number * number;
        area = 6 * (number * number);

        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }

}

const result = calculateVolumeAndArea(8);
console.log('result', result)


function getCoupeNumber(number) {
    if (typeof number != 'number' || number % 1 !==0 || number < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (number === 0 || number > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(number/4);
    }
}

getCoupeNumber(11);
