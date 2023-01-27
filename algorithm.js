// #1
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertCtoF(30);


// #2
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");



//todo word explaination
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