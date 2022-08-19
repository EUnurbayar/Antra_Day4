console.log("hello assignment");



//1.Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  };

  console.log(reversedNum(4321));

  //2. Write a JavaScript function that checks whether a passed string is palindrome or not?
 
  function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

  console.log(isPalindrome("mam"));

//3. Write a JavaScript function that generates all combinations of a string. 
//Example string: 'dog' 
//Expected Output: d, do, dog, o, og, g 

  function combo(s){
    var split = [];
    var res = [];
    for (let i = 0; i < s.length; i++){
        split = [s[i]];
        var index = 0;
        while(res[index]){
            split.push('' + res[index] + s[i]);
            index++;
        }
        res = res.concat(split);
    }
    return res;
    };
    
    console.log(combo("dog"));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabet_order(str){
    return str.split('').sort().join('');
    };
    
    console.log(alphabet_order("webmaster"));

//5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of
//each word of the string in upper case. 

function uppercase(str){
    let array1 = str.split(" ");
      let newarray1 = [];
    
    for(let i = 0; i < array1.length; i++){
        newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
     }
    return newarray1.join(" ");
};
    console.log(uppercase("the quick brown fox"));

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 



function longestWord(str){
    let arr1 = str.split(" ");
    let longest= 0;
    let word = " ";
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i].length > longest){
            longest = arr1[i].length;
            word = arr1[i];
        }
    }  
    return word; 
};

console.log(longestWord("Web Development Tutorial"))


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.

function countVowels(str){
    let list = "aeiouAEIOU";
    let vowelNum = 0;
    
    for(let i =0; i < str.length; i++){
        if(list.indexOf(str[i]) !== -1){
            vowelNum++;
        }
    }
    return vowelNum;
};
console.log(countVowels("The quick brown fox"));

//8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 

function test_prime(n){

    if (n === 1){
        return false;
    } else if(n === 2){
        return true;
    } else {
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;  
    }
};

console.log(test_prime(7));

//9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function check_data_type(value){
let dtypes = [Function, Number, String, Boolean, Object,RegExp], x, len;
    
if (typeof value === "object" || typeof value === "function"){
     for (let i = 0, len = dtypes.length; i < len; i++){
            if (value instanceof dtypes[i]){
                return dtypes[i];
            }
      }
    }
    
    return typeof value;
};

console.log(check_data_type(1));
console.log(check_data_type("String"));
console.log(check_data_type(false));


//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {
    let i;
    let j;

    for (i=0; i < n; i++){
      for (j=0; j < n; j++){
           if (i === j){
             console.log(" 1 ");
           } else {
             console.log(" 0 ");}
            }
         console.log("----------");
       }
   };

matrix(4);

//11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively


function second(num){
    num.sort(function (a, b) {
        return a - b;
    });

    let first = [num[0]];
    let result = [];

    for (let j = 1; j < num.length; j++) {
        if (num[j - 1] !== num[j]) {
            first.push(num[j]);
        }
    }
    result.push(first[1], first[first.length - 2]);
    return result.join(',');

};

console.log(second([7, 8, 9, 10, 11, 12]));

//12. Write a JavaScript function which says whether a number is perfect. 

function isPerfect(number){
    let num1 = 0;
    for (let i = 0; i < number; i++) {
        if (number % i == 0) {
            num1 += i;
        }
    }

    if (num1 == number) {
        return `${number} is a perfect number!`;
    }

    else {
        return `${number} is not a perfect number!`;
    }
};

console.log(isPerfect(28));

// 13. Write a JavaScript function to compute the factors of a positive integer

function getFactors(num){
    const result = []
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            result.push(i)
        }
    }
    return result;
};

console.log(getFactors(6));

// 14. Write a JavaScript function to convert an amount to coins. 

function amountToCoins(amount, coins){
    if(amount === 0) return []
    if(amount >= coins[0]){
        return [coins[0]].concat(amountToCoins(amount - coins[0], coins));
    }else{
        return amountToCoins(amount, coins.slice(1));
    }
};

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 

function baseExpo(base, expo){
    let result = 1;
    for (let i = 0; i < expo; i++) {
        result *= base;
    }
    return result;
};

console.log(baseExpo(2, 4));


// 16. Write a JavaScript function to extract unique characters from a string

function uniqueCharacters(str) {

    let unique = "";

    for (let i = 0; i < str.length; i++) {

        if (unique.includes(str[i]) === false) {

            unique += str[i]
        }
    }
    return unique;
};

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function occurence(str){
    let string = str.split("").sort().join("");
    let count= 1;
    for (let i = 0; i < str.length; i++) {
        if (string[i] == string[i + 1]) {
            count++;
        } else {
            console.log(string[i] + " " + count);
            count = 1;
        }
    }
};

console.log(occurence("Hello World!"));

// 18. Write a function for searching JavaScript arrays with a binary search. 

function binarySearch(n, arr){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = parseInt((left + right) / 2);
        if(n === arr[mid]){
            return mid;
        }else if(n > arr[mid]){
            left = mid + 1;
        }else if(n < arr[mid]){
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(7, [1, 2, 5, 7, 9]));
console.log(binarySearch(6, [1, 2, 5, 7, 9]));


// 19. Write a JavaScript function that returns array elements larger than a number. 

function largerElements(n, numArr){
    return numArr.filter( num => num > n);
};

console.log(largerElements(7, [1, 4, 7, 3, 9, 13, 5, 52]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters

function generateId(length){
    const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for(let i = 0; i < length; i++){
        id += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return id;
};

console.log(generateId(8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 

function subSets(n, arr){
    const subsets = []
    for(let i = 0; i < arr.length; i++){
        subsets.push([arr[i]]);
        let length = subsets.length;
        for(j = 0; j < length - 1; j++){
            subsets.push([arr[i], ...subsets[j]]);
        }
    }
    return subsets.filter(subset =>
        subset.length === n);
};

console.log(subSets(3, [1, 2, 3, 4]));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.

function letterCount(str, letter){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return `${letter} occured ${count} times`;
};

console.log(letterCount('Hello world!', 'l'));


// 23. Write a JavaScript function to find the first not repeated character. 

function firstUnique(str){
    for(char of str){
        if (!str.replace(char, '').includes(char)){
            return char;
        }
    }
    return null;
};

console.log(firstUnique("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 

function longestCountryName(name){
    let initialValue = "";
    return name.reduce(function (previousValue, currentValue) {
        return previousValue.length > currentValue.length ? previousValue : currentValue; },
        initialValue);
};

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));



// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

function longestSubstr(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        const set = new Set();
        let temp = '';
        for(let j = i; j < str.length; j++){
            if(!set.has(str.charAt(j))){
                set.add(str.charAt(j));
                temp += str.charAt(j);
            }else{
                break;
            }
        }
        result = temp.length > result.length? temp : result;
    }
    return result;
};

console.log(longestSubstr("poiuytrewwertyui"));


//27. Write a JavaScript function that returns the longest palindrome in a given string.

function longestPalindrome(str){

    var len = str.length;
    let output = "";

    const centeredPalindrome = (left, right) => {
        while (left >= 0 && right < len && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.slice(left + 1, right);
    };

    for (let i = 0; i < len - 1; i++) {
        let oddPal = centeredPalindrome(i - 1, i + 1);
        let evenPal = centeredPalindrome(i, i + 1);

        if (oddPal.length > output.length)
            output = oddPal;
        if (evenPal.length > output.length)
            output = evenPal;
    }

    return output;
};

console.log(longestPalindrome("banana"));
console.log(longestPalindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

const smile = () => {
    console.log("Remember to smile every day!")
}
const callFunction = (smile) => {
    if(23 > 45){
        smile()
    }
}
callFunction(smile());

//29. Write a JavaScript function to get the function name.

function test(){  
    return arguments.callee.name;
 } ;
 
console.log(test());
