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
    
    console.log(combo('dog'));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabet_order(str){
    return str.split('').sort().join('');
    };
    
    console.log(alphabet_order("webmaster"));

//5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of
//each word of the string in upper case. 

function uppercase(str){
    let array1 = str.split(' ');
      let newarray1 = [];
    
    for(let i = 0; i < array1.length; i++){
        newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
     }
    return newarray1.join(' ');
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
}

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
}
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
}

console.log(test_prime(7));

//9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
