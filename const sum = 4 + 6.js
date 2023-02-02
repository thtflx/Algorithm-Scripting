const sum = 4 + 6
sum




function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr('Blabla'))




function confEnd(str,targ) {
    let ending = str.split("").splice(str.length - targ.length).join("");
    console.log(ending);

    return ending == targ;
}

confEnd('Aziz','xxx')


function findLargestNumbinArr(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        let highest = arr[i][0];
    }
}