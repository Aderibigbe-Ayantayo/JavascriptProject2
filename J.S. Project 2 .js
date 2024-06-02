// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string

function reverseString(inputStr) {
    return inputStr.split('').reverse().join('');
}
// Test the function
let inputString = "hello";
let reversedString = reverseString(inputString);
console.log("Original string:", inputString);
console.log("Reversed string:", reversedString);



// Count Characters: Create a function that counts the number of characters in a string
function countCharacters(num){
    return num.length;

}
let inputCharacter = "EXCELLENT";
let count = countCharacters(inputCharacter);
console.log("Number of characters :" , count);




// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
        return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Test the function
let sentence = "this, is a sample example request action";
let capitalizedSentence = capitalizeWords(sentence);
console.log("Original sentence:", sentence);
console.log("Capitalized sentence:", capitalizedSentence);



// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMaximum(numbers) {
    if (numbers.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    let max = numbers[0]; // Assume the first number is the maximum
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; // Update max if current number is greater
        }
    }
    return max;
}

function findMinimum(numbers) {
    if (numbers.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    let min = numbers[0]; // Assume the first number is the minimum
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; // Update min if current number is smaller
        }
    }
    return min;
}

// Test the functions
let numbers = [5, 453, 23, 3, 56, 49, 42, 1568,3425,564];
console.log("Array:", numbers);
console.log("Maximum value:", findMaximum(numbers));
console.log("Minimum value:", findMinimum(numbers));


// Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test the function
let arr = [20,20,20,20,3,6,15,28,90];
console.log("Array:", arr);
console.log("Sum of array elements:", sumArray(arr));

// Filter Array: Implement a function that filters out elements from an array based on a given condition

function filterArray(arrs, condition) {
    return arrs.filter(condition);
}

// Example usage:
let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
let result1 = filterArray(arrs, function(x) {
    return x % 2 !== 0;
});
console.log(result1); // Output: [1, 3, 5, 7, 9]

// Filter out numbers less than 5
let result2 = filterArray(arrs, function(x) {
    return x >= 5;
});
console.log(result2); // Output: [5, 6, 7, 8, 9, 10]


// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1; // Factorial of 0 and 1 is 1
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}
// Test the function
let num = 5;
console.log("Factorial of", num, "is", factorial(num));


// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by any number, not prime
        }
    }
    return true; // If not divisible by any number, prime
}

// Test the function
let nums = 29;
if (isPrime(num)) {
    console.log(nums, "is a prime number");
} else {
    console.log(nums, "is not a prime number");
}


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function generateFibonacci(numTerms) {
    let fibonacciSequence = [];
    if (numTerms >= 1) {
        fibonacciSequence.push(0);
    }
    if (numTerms >= 2) {
        fibonacciSequence.push(1);
    }
    for (let i = 2; i < numTerms; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    return fibonacciSequence;
}

// Test the function
let numTerms = 20;
console.log("Fibonacci sequence with", numTerms, "terms:", generateFibonacci(numTerms));
