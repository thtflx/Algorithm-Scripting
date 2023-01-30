// #1
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertCtoF(30);




//! ---------

// #2
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");




//todo word explaination.
// 1 - мы исп. метод .split(""), оно сплитирует строку в символы.
// 2 - мы методом .reverse(), делаем перевёрнутым массив.
// 3 - с помощью .join(""), все массивы переводим на строку.


// * code explanation.
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello"); // olleh


//! ---------
// #3
function factorialize(num) {
    let total = 1;

    for (let i = 0; i < num; i++) {
        // total *= i + 1;
        total = total * (i + 1);
    }
    return total;
}

console.log(factorialize(5));




//! ---------
// #4 
function findLongestWordLength(str) {
    let arr = str.split(" "); // 3
    let biggest = arr[0].length; // 5 *это самое первое слово из массива*

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > biggest) {
            biggest = arr[i].length;
        }
    }
    return biggest;
}

console.log(findLongestWordLength("Piece of sheet"));



//todo word explanation. 
// 1 - мы убираем пустые строки с помощью split, чтобы оно потом нам не мешало
// 2 - находим длину самого первого слова из списка
// 3 - пишем for loop




//! ---------
// #5
function largestOfFour(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {

        let highest = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > highest) {
                highest = arr[i][j];
            }
        }
        answer.push(highest);
    }
    return answer;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));




//! ---------
// #6
function confirmEnding(str, target) {
    let ending = str.split("").splice(str.length - target.length).join("");
    console.log(ending);

    return ending == target;
}

confirmEnding("Bastian", "axn");




//! ---------
// #7
function repeatStringNumTimes(str, num) {
    return str;
}

repeatStringNumTimes("abc", 3);





//! ---------
// #8







// --- --- --- --- --- --- --- --- --- --- --- --- FROM-REAL-INTERVIEWS-SECTION--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---  

//* Собеседование JUNIOR FRONTEND REACT разработчика 
//* link ( https://youtu.be/P2x_lmvVOfE )

//! Сортировка массива с числами.
// Ya'ni, massivni ichidagi sonlarni tartib bilan joylashtirish kerak.
const array = [-1, 553, 24, 5, 19];

console.log(array.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
}));