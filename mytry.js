// // 1
// function celcToFar(celc) {
//     return celc * 9/5 + 32;
// }

// console.log(celcToFar(45));


// // 2
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString('Ready to fight, ready to kill.'));


// // 3
// function findFact(num) {
//     let total = 1;

//     for (let i = 0; i < num; i++) {
//         total = total*(i+1);
//     }

//     return total;
// }

// console.log(findFact(5));


// // 4
// function findLongestWordLength(str) {
//     let arr = str.split(" ");
//     let biggest = arr[0].length;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > biggest) {
//             biggest = arr[i].length;
//         }
//     }
//     return biggest;
// }

// console.log(findLongestWordLength('Tom and Jerry'));


// // 5
// function findLargestNumb(arr) {
//     let answer = [];

//     for (let i = 0; i < arr.length; i++) {
//         let highest = arr[i][0];

//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > highest) {
//                 highest = arr[i][j];
//             }
//         }
//         answer.push(highest)
//     }
//     return answer;
// }

// console.log(findLargestNumb([[45,15,34,454,656,6745,6565]]));




//! 3rd february.
// 1
function convertCtoF(celsius) {
    return celsius*9/5+32;
}

console.log(convertCtoF(-10));


// 2
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString('Some shit'));


// 3
function factorializeANumb(num) {
    let total = 1;

    for (let i = 0; i < num; i++) {
        total = total * (i+1);
    }
    return total;
}

console.log(factorializeANumb(45));


// 4
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let biggest = arr[0].length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > biggest) {
            biggest = arr[i].length;
        }
    }
    return biggest;
}

console.log(findLongestWordLength('For each of us'));


// 5
function returnLargestNumbArr(arr) {
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

console.log(returnLargestNumbArr([[3445,46,56,56,57,676,7,54454]]));





// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14