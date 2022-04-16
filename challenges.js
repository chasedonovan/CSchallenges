//return length of a string
function length(string) {
    return string.length;
}


function calculateDaysBetweenDates(begin, end) { 
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var days = Math.round((endDate - beginDate) / (1000 * 60 * 60 * 24));
    return days;
}

function productBetweenNumbers(start, end) {
    var product = 1;
    for (var i = start; i <= end; i++) {
        product *= i;
    }
    return product;
}

//compute the factorial of an integer n
function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

//scan array for certain elements and remove them
function removeElement(array, element) {
    var index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

//Given a number, return the number of digits.
function numberOfDigits(number) {
    var digits = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        digits++;
    }
    return digits;
}

//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
function addBorder(picture) {
    var border = "";
    for (var i = 0; i < picture[0].length + 2; i++) {
        border += "*";
    }
    picture.unshift(border);
    picture.push(border);
    for (var i = 1; i < picture.length - 1; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    return picture;
}

//Return the character at index n in a string s.
//If the index is out of range of the length of the string, return the string "none". Otherwise, return the character at that index.
function getCharacter(s, n) {
    if (n < 0 || n >= s.length) {
        return "none";
    }
    return s[n];
}

//count the number of occurrences of a substring in a string
function countSubstring(s, letter) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === letter) {
            count++;
        }
    }
    return count;
}

//Return the index of the last character in a string. If the string is empty, return -1.
function lastCharacter(s) {
    if (s.length === 0) {
        return -1;
    }
    return s.length - 1;
}

//Return true if the first and second characters in the string are equal.
function firstAndSecond(s) {
    if (s.length < 2) {
        return false;
    }
    return s[0] === s[1];
}

//Return true if the first and last characters in the string are equal.
function firstAndLast(s) {
    if (s.length < 2) {
        return false;
    }
    return s[0] === s[s.length - 1];
}

//Construct a string of p copies of n capital "A"s and m capital "B"s, without using string duplication function.
function stringOfAandB(p, n, m) {
    var string = "";
    for (var i = 0; i < p; i++) {
        string += "A".repeat(n) + "B".repeat(m);
    }
    return string;
}



//You have a string s. Split s into the minimum possible number of increasing substrings. A substring is considered to be increasing when the next symbol in the substring is also next in the English alphabet. This is case sensitive, i.e. 'b' is next for 'a' but 'C' is not next for 'b'. Return an array of these substrings.
function splitString(s) {
    var substrings = [];
    var start = 0;
    var end = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            end++;
        } else {
            substrings.push(s.substring(start, end + 1));
            start = end + 1;
            end = start;
        }
    }
    return substrings;
}

//Return the number of occurrences of v in array a.
function countOccurrences(a, v) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === v) {
            count++;
        }
    }
    return count;
}

//Return true if two arrays are equal.
//The arrays are equal if they are the same length and contain the same value at each particular index.
//Two empty arrays are equal.
function arraysEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

//Given an array and a value x, return an array with all the elements of the original except those with value x.
function removeElement(a, x) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== x) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

//Given an input array a and a second array, filter_array, produce a new array that contains only the elements of a that are not in filter_array.
function filterArray(a, filter_list) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (filter_list.indexOf(a[i]) === -1) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

//Produce an array of n strings.
//Each string will contain m uppercase "A"s.
function arrayOfStrings(n, m) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push("A".repeat(m));
    }
    return array;
}

//You are given an array of integers elements. Your task is to check whether elements is a cyclic shift of the sorted array [1, 2, ..., elements.length]. Return the number of elements you need to move to make elements equal to the sorted array. If elements is not a cyclic shift of the sorted array (it's not possible to make them equal), return -1.
function solution(elements) {
    var sorted = elements.sort(function (a, b) {
        return a - b;
    });
    var count = 0;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] !== sorted[i]) {
            count++;
        }
    }
    return count;
}

//perform a cyclic shift on given array of integers n times.
    function cyclicShift(n, a) {
        var newArray = [];
        for (var i = 0; i < n; i++) {
            newArray.push(a.shift());
            a.push(newArray[i]);
        }
        return newArray;
    }

//Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. 
//If there is no such character, return '_'.
function firstNonRepeating(s) {
    var char = "";
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            char = s[i];
            break;
        }
    }
    if (char === "") {
        return "_";
    }
    return char;

}

//Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. 
//If there are no occurrences of x in s, return -1.
function firstOccurrence(s, x) {
    var index = -1;
    for (var i = 0; i < s.length; i++) {
        if (s.substring(i, i + x.length) === x) {
            index = i;
            break;
        }
    }
    return index;
}


//You're given an array of integers a. Let's call (a[i - 1], a[i], a[i + 1]) a good tuple, if exactly 2 out of the 3 numbers in it are equal. For example, (2, 1, 2) is a good tuple, but (1, 1, 1) and (1, 2, 3) are not.
//Your task is to return the number of good tuples in the array a.
//note: the tuples may be overlapping
function countGoodTuples(a) {
    var count = 0;
    for (var i = 0; i < a.length - 2; i++) {
        if (a[i] === a[i + 1] || a[i] === a[i + 2] || a[i + 1] === a[i + 2]) {
            count++;
        }
    }
    return count;
}

//Given an array of integers numbers, construct a new array based on sorting numbers in the the following manner:
// The first element of the new array is the first element of numbers;
// The second element of the new array is the last element of numbers;
// The third element of the new array is the second element of numbers;
// The fourth element of the new array is the second-to-last element of numbers;
// ... and so on, until the new array contains all elements of numbers.
function sortArray(numbers) {
    var newArray = [];
    for (var i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i]);
        newArray.push(numbers[numbers.length - i - 1]);
    }
    return newArray;
}

//Given an array of integers numbers, construct a new array based on sorting numbers in the the following manner:
//Starting off with the beginning, place each value at the beginning and ende subsequesntially in new array.


//You're trying to solve a puzzle that involves arranging squares of numbers according to their missing values. Each square has dimensions 4 × 4, containing all the numbers between 1 and 16 inclusively, except for one missing number represented by "?". All of these 4 × 4 squares are stored side-by-side within a larger matrix mat with dimensions 4 × (4 * n) (where n represents the number of square matrices).
// Your task is to complete the following steps:
// For each 4 × 4 square, find the value of the missing element and replace the "?" with this value.
// Rearrange the squares inside the larger matrix by these missing values in ascending order. In the case of a tie (if two 4 × 4 matrices have the same missing value), place them in the relative order they were originally presented in the larger matrix mat.
// Return the updated matrix mat as a result.
function solvePuzzle(mat) {
    var newArray = [];
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === "?") {
                newArray.push(mat[i][j]);
            }
        }
    }
    newArray.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === "?") {
                mat[i][j] = newArray.shift();
            }
        }
    }
    return mat;
}

//Count the number of occurrences of certain letters in a string.
//We want to know the counts of each of a set of letters in the input string. For instance, we might want to know how many as, xs, and js there are.
//You'll return the list of requested counts as an array.
//If letters is an empty string, return an empty array.
function letterCount(letters, s) {
    var count = [];
    for (var i = 0; i < letters.length; i++) {
        count.push(s.split(letters[i]).length - 1);
    }
    return count;
}

//Count all the words in a string, then produce a new string when the count of each word in parentheses follows each word.
//If the string is empty, return an empty string.
function wordCount(s) {
    if (s.length === 0) return '';
    const words = {};
    const sArray = s.split(' ');
    for (let word of sArray) {
        if (word in words) words[word]++;
        else words[word] = 1;
    }
    for (let i = 0; i< sArray.length; i++) {
        const word = sArray[i];
        sArray[i] += `(${words[word]})`;
    }
    return sArray.join(' ');
}

//Given a string of lowercase words separated by single spaces, return a string with all duplicate words removed. 
//However, the first occurrence of a duplicate word should be left in place; only the subsequent duplicates should be removed.
//If the string is empty, return an empty string.
// function removeDuplicateWords(s) {
//     if (s.length === 0) return '';
//     const words = {};
//     const sArray = s.split(' ');
//     for (let word of sArray) {
//         if (word in words) words[word]++;
//         else words[word] = 1;
//     }
//     for (let i = 0; i< sArray.length; i++) {
//         const word = sArray[i];
//         if (words[word] > 1) {
//             sArray[i] = word;
//         }
//     }
// }

function removeDuplicateWords(s) {
    if (s.length === 0) return '';
    const words = {};
    const sArray = s.split(' ');
    for (let word of sArray) {
        if (word in words) words[word]++;
        else words[word] = 1;
    }
    for (let i = 0; i< sArray.length; i++) {
        const word = sArray[i];
        if (words[word] > 1) {
            sArray[i] = word;
        }
    }
    return sArray.join(' ');
}

//Construct a string made from every other character in the input string, excluding vowels and capital letters.
//The first character of the input string will be the first character in the output string.
//If the input string is empty, return an empty string.
function solution(s) {
    if (s.length === 0) return '';
var newString = '';
for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() || s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
        continue;
    } else if (i % 2){
        continue;
    } else {
        newString += s[i];
    }
}
return newString;
}

//Construct a string made from every other character in the input string.
//The first character of the input string will be the first character in the output string.
//If the input string is empty, return an empty string
function everyOther2(s) {
    if (s.length === 0) return '';
    var newString = '';
    for (var i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            newString += s[i];
        }
    }
    return newString;
}

//Given a number and a field width, return a string with that number padded with leading zeros.
//The field width is the total number of digits in the result string, not the number of zeros.
//If the width is smaller than the number of digits in the n, return a string containing only n.
function pad(n, width) {
    var string = n.toString();
    var pad = width - string.length;
    if (pad <= 0) {
        return string;
    } else {
        return '0'.repeat(pad) + string;
    }
}


//Given a string of lowercase words separated by single spaces, return a string with all duplicate words removed. However, the first occurrence of a duplicate word should be left in place; only the subsequent duplicates should be removed.
//If the string is empty, return an empty string.

function solution(s) {
    let output = [...new Set(s.split(' '))];
    // let output = [];    
    // for (let word of s.split(' ')) {
    //     if (!(output.includes(word))) {
    //         output.push(word);
    //     }
    // }
    return output.join(' ')
    }
